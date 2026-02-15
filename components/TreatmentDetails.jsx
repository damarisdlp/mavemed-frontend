import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import TreatmentInfoTabs from "./TreatmentInfoTabs";
import { getPromoSummary } from "@/lib/utils/promo";
import { formatMoney, formatMoneyRange, getPriceMinValue } from "@/lib/utils/price";
import TreatmentLeadModal from "@/components/treatment/TreatmentLeadModal";
import useLeadTracking from "@/lib/hooks/useLeadTracking";
import { useTranslation } from "next-i18next";
import { getLocalized as getLocalizedValue } from "@/lib/i18n/getLocalized";

export default function TreatmentDetails({ treatment, packageGroups = [] }) {
  const router = useRouter();
  const { locale: routerLocale } = router;
  const locale = routerLocale || "en";
  const { t } = useTranslation("treatments");

  const [leadOpen, setLeadOpen] = useState(false);
  const [leadStep, setLeadStep] = useState("form1");
  const [leadService, setLeadService] = useState("");
  const [leadCategory, setLeadCategory] = useState("");
  const [leadOptions, setLeadOptions] = useState([]);
  const [leadSelectedOptions, setLeadSelectedOptions] = useState([]);

  const initialLeadForm = {
    firstName: "",
    email: "",
    countryCode: "+52",
    phone: "",
    visitTiming: "",
    preferredChannel: "",
    hadTreatmentBefore: "",
    bestDays: "",
    bestTimes: "",
    mainConcern: "",
  };

  const [leadForm, setLeadForm] = useState(initialLeadForm);
  const [leadSnapshot, setLeadSnapshot] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [duplicateMessage, setDuplicateMessage] = useState("");
  const [leadFormError, setLeadFormError] = useState("");
  const countryCodeTouchedRef = useRef(false);
  const geoDefaultCountryCodeRef = useRef("+52");

  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const { utmParams, initialReferrerRef, entryUrlRef, entryPathRef } = useLeadTracking({
    utmStorageKey: "mave_treatment_utm",
  });

  const countryOptions = [
    { code: "+1", label: t("treatmentLeadModal.countryOptions.usCanada") },
    { code: "+52", label: t("treatmentLeadModal.countryOptions.mexico") },
    { code: "+44", label: t("treatmentLeadModal.countryOptions.uk") },
    { code: "+34", label: t("treatmentLeadModal.countryOptions.spain") },
    { code: "+57", label: t("treatmentLeadModal.countryOptions.colombia") },
    { code: "+506", label: t("treatmentLeadModal.countryOptions.costaRica") },
    { code: "+51", label: t("treatmentLeadModal.countryOptions.peru") },
    { code: "+54", label: t("treatmentLeadModal.countryOptions.argentina") },
    { code: "+55", label: t("treatmentLeadModal.countryOptions.brazil") },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    let isCancelled = false;
    const mapCountryToDialCode = (country) => {
      const code = String(country || "").toUpperCase();
      if (code === "US" || code === "CA") return "+1";
      if (code === "MX") return "+52";
      if (code === "GB" || code === "UK") return "+44";
      if (code === "ES") return "+34";
      if (code === "CO") return "+57";
      if (code === "CR") return "+506";
      if (code === "PE") return "+51";
      if (code === "AR") return "+54";
      if (code === "BR") return "+55";
      return null;
    };

    const applyDetectedCode = (dialCode) => {
      if (!dialCode) return;
      geoDefaultCountryCodeRef.current = dialCode;
      if (countryCodeTouchedRef.current) return;
      setLeadForm((prev) => {
        if (prev.countryCode === dialCode) return prev;
        return { ...prev, countryCode: dialCode };
      });
    };

    const navLocale = navigator?.language || "";
    const localeFallback = locale === "es" ? "+52" : "+1";
    let fallbackCode = localeFallback;
    if (navLocale.startsWith("en-US") || navLocale.startsWith("en-CA")) fallbackCode = "+1";
    else if (navLocale.startsWith("es-MX")) fallbackCode = "+52";
    applyDetectedCode(fallbackCode);

    fetch("/api/geo")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (isCancelled || !data?.country) return;
        applyDetectedCode(mapCountryToDialCode(data.country));
      })
      .catch(() => {});

    return () => {
      isCancelled = true;
    };
  }, [locale]);


  const trackEvent = (name, params = {}) => {
    if (typeof window === "undefined") return;
    if (!window.gtag) return;
    const consent = window.localStorage.getItem("mave_cookie_consent");
    if (consent !== "accepted") return;
    window.gtag("event", name, params);
  };

  const getLocalized = (field) => getLocalizedValue(field, locale);

  const generateLeadId = () => {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return `lead_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  };

  const getLocalizedPrice = (field) => {
    if (field == null) return "";
    if (typeof field === "object") {
      if (field.text && typeof field.text === "object") {
        return field.text[locale] || field.text.en || "";
      }
      if ("minAmount" in field || "maxAmount" in field) {
        return formatMoneyRange(field.minAmount, field.maxAmount);
      }
      if ("amount" in field) return formatMoney(field.amount);
      return getLocalized(field);
    }
    return field;
  };

  const handleLeadChange = (e) => {
    const { name, value } = e.target;
    if (name === "countryCode") countryCodeTouchedRef.current = true;
    setLeadForm((prev) => ({ ...prev, [name]: value }));
    setLeadFormError("");
    if (name === "phone" && phoneRef.current) phoneRef.current.setCustomValidity("");
    if (name === "email" && emailRef.current) emailRef.current.setCustomValidity("");
  };

  const pricing = treatment?.pricing || {};
  const promoSummary = getPromoSummary(treatment, locale, {
    excludeLinkedPackageOptions: true,
  });
  const promoDetails = treatment?.promoDetails || null;
  const promoFilterConfig = promoDetails?.filterConfig || treatment?.filterConfig || null;
  const promoFilterOrder = ["prp", "pn", "pdrn"];
  const [activePromoFilter, setActivePromoFilter] = useState(
    promoFilterConfig?.defaultKey || "all"
  );
  const promoDescription = getLocalized(promoDetails?.description);
  const promoDescriptionLink = getLocalized(promoDetails?.descriptionLink);
  const fallbackPromo = promoSummary.lowestPromo || null;

  useEffect(() => {
    setActivePromoFilter(promoFilterConfig?.defaultKey || "all");
  }, [promoFilterConfig?.defaultKey, treatment?.urlSlug]);

  const orderFilters = (filters = []) => {
    const orderIndex = (key) => {
      const idx = promoFilterOrder.indexOf(String(key || "").toLowerCase());
      return idx === -1 ? Number.MAX_SAFE_INTEGER : idx;
    };
    return [...filters].sort((a, b) => {
      const aIdx = orderIndex(a?.key);
      const bIdx = orderIndex(b?.key);
      if (aIdx !== bIdx) return aIdx - bIdx;
      return String(a?.key || "").localeCompare(String(b?.key || ""));
    });
  };

  const normalizeName = (value) =>
    String(value || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

  const getOptionKey = (opt) => {
    const key = opt?.optionKey || getLocalized(opt?.optionName);
    return normalizeName(key);
  };

  const cleanNotes = (notes) => {
    if (!Array.isArray(notes)) return [];
    return notes.filter((note) => {
      const text = getLocalized(note);
      return typeof text === "string" && text.trim() !== "";
    });
  };

  const renderNoteWithLinks = (note) => {
    const text = getLocalized(note);
    if (typeof text !== "string" || !text.trim()) return text;
    const parts = text.split(
      /(microneedling|mesotherapy|mesoterapia|Casmara Infinity Antiaging facial|Casmara Infinity AntiAging facial|Casmara Purifying Algae facial|Casmara Retinol ProAge facial|Casmara Purifying Algae Facial|Casmara Retinol ProAge Facial|Facial Casmara Infinity Antienvejecimiento|Facial Casmara Purifying Algae|Facial Casmara Retinol ProAge)/gi
    );
    return parts.map((part, idx) => {
      const lower = part.toLowerCase();
      if (lower === "microneedling") {
        return (
          <Link
            key={`note-micro-${idx}`}
            href={`/${locale === "es" ? "es/" : ""}treatments/microneedling`}
            className="underline underline-offset-4"
          >
            {part}
          </Link>
        );
      }
      if (lower === "mesotherapy") {
        return (
          <Link
            key={`note-meso-${idx}`}
            href={`/${locale === "es" ? "es/" : ""}treatments/mesotherapy-infusions`}
            className="underline underline-offset-4"
          >
            {part}
          </Link>
        );
      }
      if (lower === "mesoterapia") {
        return (
          <Link
            key={`note-mesoterapia-${idx}`}
            href={`/${locale === "es" ? "es/" : ""}treatments/mesotherapy-infusions`}
            className="underline underline-offset-4"
          >
            {part}
          </Link>
        );
      }
      if (lower === "casmara infinity antiaging facial") {
        return (
          <Link
            key={`note-casmara-${idx}`}
            href={`/${locale === "es" ? "es/" : ""}treatments/casmara-infinity`}
            className="underline underline-offset-4"
          >
            {part}
          </Link>
        );
      }
      if (lower === "casmara purifying algae facial") {
        return (
          <Link
            key={`note-casmara-purifying-${idx}`}
            href={`/${locale === "es" ? "es/" : ""}treatments/casmara-purifying`}
            className="underline underline-offset-4"
          >
            {part}
          </Link>
        );
      }
      if (lower === "casmara retinol proage facial") {
        return (
          <Link
            key={`note-casmara-retinol-${idx}`}
            href={`/${locale === "es" ? "es/" : ""}treatments/casmara-retinol-proage`}
            className="underline underline-offset-4"
          >
            {part}
          </Link>
        );
      }
      if (lower === "facial casmara infinity antienvejecimiento") {
        return (
          <Link
            key={`note-casmara-es-${idx}`}
            href={`/${locale === "es" ? "es/" : ""}treatments/casmara-infinity`}
            className="underline underline-offset-4"
          >
            {part}
          </Link>
        );
      }
      if (lower === "facial casmara purifying algae") {
        return (
          <Link
            key={`note-casmara-purifying-es-${idx}`}
            href={`/${locale === "es" ? "es/" : ""}treatments/casmara-purifying`}
            className="underline underline-offset-4"
          >
            {part}
          </Link>
        );
      }
      if (lower === "facial casmara retinol proage") {
        return (
          <Link
            key={`note-casmara-retinol-es-${idx}`}
            href={`/${locale === "es" ? "es/" : ""}treatments/casmara-retinol-proage`}
            className="underline underline-offset-4"
          >
            {part}
          </Link>
        );
      }
      return <span key={`note-text-${idx}`}>{part}</span>;
    });
  };

  const buildPromoDisplayOptions = () => {
    const pricingOptions = pricing?.options || [];
    const pricingOptionByKey = new Map(
      pricingOptions
        .map((opt) => {
          const key = getOptionKey(opt);
          return key ? [key, opt] : null;
        })
        .filter(Boolean)
    );

    const promoOptionPriceByKey = new Map(
      promoSummary.promoOptions
        .map((promoOpt) => {
          const key = getOptionKey(promoOpt.option);
          return key
            ? [
                key,
                {
                  promoPrice: promoOpt.promoPrice,
                  currency: promoOpt.currency,
                },
              ]
            : null;
        })
        .filter(Boolean)
    );

    const promoOptionValidTillByKey = new Map(
      (promoDetails?.options || [])
        .map((opt) => {
          const key = getOptionKey(opt);
          const validTill = getLocalized(opt?.validTill);
          return key ? [key, validTill] : null;
        })
        .filter(Boolean)
    );

    if (Array.isArray(promoDetails?.options) && promoDetails.options.length > 0) {
      return promoDetails.options.map((opt) => {
        const key = getOptionKey(opt);
        const optNotes = cleanNotes(opt?.notes);
        const matchedPrice = key ? promoOptionPriceByKey.get(key) || null : null;
        const promoPrice = matchedPrice?.promoPrice ?? fallbackPromo?.promoPrice;
        const currency = matchedPrice?.currency ?? fallbackPromo?.currency;
        const optionValidTill =
          (key ? promoOptionValidTillByKey.get(key) : null) ||
          getLocalized(promoDetails?.validTill);
        const pricingMatch = key ? pricingOptionByKey.get(key) : null;
        const isPackage =
          opt?.isPackage === true ||
          opt?.optionType === "package" ||
          Boolean(opt?.packageId) ||
          pricingMatch?.optionType === "package";
        return {
          optionName: opt?.optionName,
          optionKey: opt?.optionKey || "",
          promoPrice,
          currency,
          validTill: optionValidTill,
          notes: optNotes,
          groupKey: opt?.groupKey || "",
          packageId: opt?.packageId || "",
          isPackage,
          linkedPackageIds: pricingMatch?.linkedPackageIds || [],
        };
      });
    }

    return promoSummary.promoOptions.map((promoOpt) => {
      const key = getOptionKey(promoOpt.option);
      const pricingMatch = key ? pricingOptionByKey.get(key) : null;
      return {
        optionName: promoOpt.option?.optionName,
        optionKey: promoOpt.option?.optionKey || "",
        promoPrice: promoOpt.promoPrice,
        currency: promoOpt.currency,
        validTill: getLocalized(promoDetails?.validTill),
        notes: cleanNotes(pricingMatch?.notes),
        groupKey: promoOpt.option?.filterGroupKey || "",
        isPackage: promoOpt.option?.optionType === "package",
        linkedPackageIds: promoOpt.option?.linkedPackageIds || [],
      };
    });
  };

  const getPackageTitle = (value) => {
    const label = String(value || "");
    const parts = label.split(" - ");
    return (parts[0] || label).trim() || label;
  };
  const getPackageEdition = (value) => {
    const label = String(value || "");
    const parts = label.split(" - ");
    const edition = parts.slice(1).join(" - ").trim();
    return edition || label;
  };

  const basePromoDisplayOptions = buildPromoDisplayOptions();
  const promoDisplayOptions = basePromoDisplayOptions;
  const localPackageOptions = promoDisplayOptions.filter((opt) => opt.isPackage);
  const servicePromoOptions = promoDisplayOptions.filter(
    (opt) => !opt.isPackage && !(opt?.linkedPackageIds?.length > 0)
  );
  const promoValidTillValues = servicePromoOptions
    .map((opt) => opt.validTill)
    .filter((value) => typeof value === "string" && value.trim() !== "");
  const showGlobalPromoValidTill =
    promoValidTillValues.length > 0 &&
    promoValidTillValues.every((value) => value === promoValidTillValues[0]);
  const globalPromoValidTill =
    (showGlobalPromoValidTill && promoValidTillValues[0]) || getLocalized(promoDetails?.validTill);
  const registryPackageGroups = promoSummary.isPromoActive
    ? Array.isArray(packageGroups)
      ? packageGroups
      : []
    : [];
  const localPackageGroups = (() => {
    if (!localPackageOptions.length) return [];
    const groups = new Map();
    localPackageOptions.forEach((opt) => {
      const name = getLocalized(opt.optionName);
      if (!name) return;
      const title = getPackageTitle(name);
      const edition = getPackageEdition(name);
      const groupId = opt.packageId || normalizeName(title) || normalizeName(name);
      const existing = groups.get(groupId) || {
        packageId: groupId,
        title,
        validTill: opt.validTill || getLocalized(promoDetails?.validTill),
        notes: [],
        options: [],
      };
      if (!existing.notes?.length && opt.notes?.length) {
        existing.notes = opt.notes;
      }
      existing.options.push({
        label:
          edition && edition !== title
            ? `${title} - ${edition}`.trim()
            : title || edition || "",
        promoPrice: opt.promoPrice,
        currency: opt.currency,
      });
      groups.set(groupId, existing);
    });
    return Array.from(groups.values());
  })();

  const mergedPackageGroups = (() => {
    const combined = [
      ...localPackageGroups,
      ...registryPackageGroups.map((group) => ({
        packageId: group.packageId,
        title: group.title,
        validTill: group.validTill,
        notes: group.notes || [],
        options: group.options || [],
      })),
    ];
    const deduped = new Map();
    combined.forEach((pkg) => {
      if (!pkg.packageId) return;
      if (!deduped.has(pkg.packageId)) deduped.set(pkg.packageId, pkg);
    });
    return Array.from(deduped.values());
  })();
  const getPackageGroupKey = (pkg) => {
    const raw = `${pkg?.packageId || ""} ${pkg?.title || ""}`.toLowerCase();
    if (raw.includes("prp")) return "prp";
    if (raw.includes("pdrn")) return "pdrn";
    if (raw.includes("pn")) return "pn";
    return "";
  };
  const packageGroupKeys = Array.from(
    new Set(mergedPackageGroups.map(getPackageGroupKey).filter(Boolean))
  );
  const packageFilters = (() => {
    if (promoFilterConfig?.filters?.length) {
      return orderFilters(
        promoFilterConfig.filters.filter((filter) => packageGroupKeys.includes(filter.key))
      );
    }
    const orderedKeys = [
      ...promoFilterOrder.filter((key) => packageGroupKeys.includes(key)),
      ...packageGroupKeys.filter((key) => !promoFilterOrder.includes(key)),
    ];
    return orderedKeys.map((key) => ({
      key,
      label: { en: key.toUpperCase(), es: key.toUpperCase() },
    }));
  })();
  const [activePackageFilter, setActivePackageFilter] = useState(
    packageFilters[0]?.key || "all"
  );

  useEffect(() => {
    setActivePackageFilter(packageFilters[0]?.key || "all");
  }, [packageFilters.map((filter) => filter.key).join("|"), treatment?.urlSlug]);
  const showServiceSummary = servicePromoOptions.length > 1;
  const filteredServicePromoOptions =
    promoFilterConfig && activePromoFilter !== "all"
      ? servicePromoOptions.filter((opt) => opt.groupKey === activePromoFilter)
      : servicePromoOptions;
  const orderedPromoFilters = orderFilters(promoFilterConfig?.filters || []);
  const filteredPackageGroups =
    activePackageFilter !== "all" && packageFilters.length > 0
      ? mergedPackageGroups.filter((pkg) => getPackageGroupKey(pkg) === activePackageFilter)
      : mergedPackageGroups;
  const showStartingFrom = showServiceSummary;

  const buildLeadOptions = () => {
    const options = [];
    const serviceName = getLocalized(treatment.serviceDisplayName);
    const categoryName = getLocalized(treatment.categoryDisplayName);
    const normalize = (value) =>
      String(value || "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
    const normalizedService = normalize(serviceName);
    const normalizedCategory = normalize(categoryName);
    const pricingOptions = pricing?.options || [];
    const servicePricingOptions = pricingOptions.filter((opt) => opt?.optionType !== "package");
    const packagePricingOptions = pricingOptions.filter((opt) => opt?.optionType === "package");
    const promoOptions = promoSummary.promoOptions || [];
    const promoServiceOptions = promoSummary.servicePromoOptions || [];
    const promoOptionByKey = new Map(
      promoOptions
        .map((opt) => {
          const key = normalize(opt?.option?.optionKey || opt?.optionKey || "");
          if (!key) return null;
          return [key, opt];
        })
        .filter(Boolean)
    );

    const formatLabel = (name, priceValue, currency) => {
      if (!priceValue) return name;
      const formattedPrice = `${priceValue}${currency ? ` ${currency}` : ""}`;
      return `${name} – ${formattedPrice}`;
    };

    const seenIds = new Set();
    const seenKeys = new Set();

    const addOption = (id, label, dedupeKey = "") => {
      if (!id || !label) return;
      const normalizedKey = normalize(dedupeKey);
      if (seenIds.has(id)) return;
      if (normalizedKey && seenKeys.has(normalizedKey)) return;
      seenIds.add(id);
      if (normalizedKey) seenKeys.add(normalizedKey);
      options.push({ id, label });
    };

    // Service options come from non-package pricing rows only.
    servicePricingOptions.forEach((opt) => {
      const name = getLocalized(opt.optionName);
      if (!name) return;

      const normalizedName = normalize(name);
      if (normalizedName === normalizedService || normalizedName === normalizedCategory) return;

      const optionKey = normalize(opt.optionKey || "");
      const promoMatch = promoOptionByKey.get(optionKey) || promoOptionByKey.get(normalizedName);
      const hasPromoPrice =
        promoSummary.isPromoActive &&
        typeof promoMatch?.promoPrice === "string" &&
        promoMatch.promoPrice.trim() !== "";

      const priceValue = hasPromoPrice
        ? promoMatch.promoPrice
        : opt.optionPrice != null
          ? getLocalizedPrice(opt.optionPrice)
          : "";
      const currency = hasPromoPrice
        ? promoMatch?.currency || opt.optionPrice?.currency || ""
        : opt.optionPrice?.currency || "";
      const label = formatLabel(name, priceValue, currency);
      const dedupeKey = optionKey || normalizedName;
      addOption(opt.id || `opt:${dedupeKey}`, label, dedupeKey);
    });

    // Keep promo-only service entries (if any) while still prioritizing complete pricing options above.
    promoServiceOptions.forEach((opt) => {
      const name = getLocalized(opt.option?.optionName || opt.optionName);
      if (!name) return;
      const normalizedName = normalize(name);
      if (normalizedName === normalizedService || normalizedName === normalizedCategory) return;
      const promoKey = normalize(opt.option?.optionKey || opt.optionKey || "");
      const dedupeKey = promoKey || normalizedName;
      const label = formatLabel(name, opt.promoPrice, opt.currency || "");
      addOption(`promo:${dedupeKey}`, label, dedupeKey);
    });

    // Package options should be sourced from package groups to avoid double-listing
    // package rows that also exist in pricing options.
    const leadPackageGroups =
      mergedPackageGroups.length > 0
        ? mergedPackageGroups
        : Array.isArray(packageGroups) && packageGroups.length > 0
          ? packageGroups
          : [];

    if (leadPackageGroups.length > 0) {
      leadPackageGroups.forEach((pkg, pkgIdx) => {
        const pkgTitle = getLocalized(pkg.title) || pkg.title || "";
        pkg.options.forEach((opt, optIdx) => {
          const editionLabel = opt.label ? getLocalized(opt.label) || opt.label : "";
          const name = editionLabel ? `${pkgTitle} — ${editionLabel}` : pkgTitle;
          if (!name) return;
          const priceValue =
            opt.promoPrice ||
            opt.priceText ||
            (opt.price ? getLocalizedPrice(opt.price) : "");
          const currency = opt.currency || opt.price?.currency || "";
          const label = formatLabel(name, priceValue, currency);
          const optionId = `pkg:${pkg.packageId || pkgIdx}:${optIdx}`;
          addOption(optionId, label, `${pkg.packageId || pkgIdx}:${name}`);
        });
      });
    }

    // Fallback: if no package groups are available, include package pricing rows once.
    if (leadPackageGroups.length === 0 && packagePricingOptions.length > 0) {
      packagePricingOptions.forEach((opt) => {
        const name = getLocalized(opt.optionName);
        if (!name) return;
        const normalizedName = normalize(name);
        const optionKey = normalize(opt.optionKey || "");
        const promoMatch = promoOptionByKey.get(optionKey) || promoOptionByKey.get(normalizedName);
        const hasPromoPrice =
          promoSummary.isPromoActive &&
          typeof promoMatch?.promoPrice === "string" &&
          promoMatch.promoPrice.trim() !== "";
        const priceValue = hasPromoPrice
          ? promoMatch.promoPrice
          : opt.optionPrice != null
            ? getLocalizedPrice(opt.optionPrice)
            : "";
        const currency = hasPromoPrice
          ? promoMatch?.currency || opt.optionPrice?.currency || ""
          : opt.optionPrice?.currency || "";
        const label = formatLabel(name, priceValue, currency);
        const dedupeKey = `pkg-fallback:${optionKey || normalizedName}`;
        addOption(opt.id || dedupeKey, label, dedupeKey);
      });
    }

    return options;
  };

  const openLeadForm = (preferPromo = false) => {
    const options = buildLeadOptions();
    setLeadOptions(options);

    const defaultSelection = (() => {
      if (preferPromo && options.length) return [options[0].id].filter(Boolean);
      return options.length ? [options[0].id] : [];
    })();

    setLeadSelectedOptions(defaultSelection);

    const serviceText = `${getLocalized(treatment.serviceDisplayName)}`;
    const categoryText = `${getLocalized(treatment.categoryDisplayName)}`;
    setLeadService(serviceText);
    setLeadCategory(categoryText);

    setDuplicateMessage("");
    setLeadFormError("");
    setLeadStep("form1");
    setLeadOpen(true);
  };

  const handleCloseLead = () => {
    const resetCountryCode =
      leadForm.countryCode || geoDefaultCountryCodeRef.current || initialLeadForm.countryCode;
    setLeadOpen(false);
    setLeadStep("form1");
    setLeadForm({ ...initialLeadForm, countryCode: resetCountryCode });
    setLeadSnapshot(null);
    setLeadSelectedOptions([]);
    setDuplicateMessage("");
    setLeadFormError("");
    setLeadCategory("");
  };

  useEffect(() => {
    if (router?.query?.lead === "open") {
      openLeadForm(false);
      const cleanPath = router.asPath.replace(/\?.*/, "");
      router.replace(cleanPath, undefined, { shallow: true }).catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router?.query?.lead]);

  useEffect(() => {
    if (leadOpen) document.body.classList.add("lead-open");
    else document.body.classList.remove("lead-open");

    const evt = new CustomEvent("lead-open-change", { detail: { open: leadOpen } });
    window.dispatchEvent(evt);

    return () => {
      document.body.classList.remove("lead-open");
    };
  }, [leadOpen]);

  const parsePriceValue = (priceString) => {
    if (priceString && typeof priceString === "object") {
      const value = getPriceMinValue(priceString);
      return Number.isFinite(value) ? value : Infinity;
    }
    const priceText = getLocalizedPrice(priceString);
    if (typeof priceText !== "string") return Infinity;
    const numeric = parseFloat(priceText.replace(/[^0-9.]/g, ""));
    return Number.isFinite(numeric) ? numeric : Infinity;
  };

  const priceCandidates = [];
  (pricing?.options || []).forEach((opt) => {
    if (opt?.optionPrice) {
      const currency = opt.optionPrice?.currency || "";
      priceCandidates.push({
        value: parsePriceValue(opt.optionPrice),
        display: `${getLocalizedPrice(opt.optionPrice)} ${currency}`.trim(),
      });
    }
  });

  const sortedPrices = priceCandidates
    .filter((p) => p.value !== Infinity)
    .sort((a, b) => a.value - b.value);

  const lowestPriceDisplay = sortedPrices[0]?.display || "";

  const showStartingLabel = sortedPrices.length > 1;
  const startingPriceText = showStartingLabel
    ? t("treatmentDetails.startingFrom", { price: lowestPriceDisplay })
    : lowestPriceDisplay;

  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] min-h-[50vh]">
        {/* Image */}
        <div className="relative w-full h-[50vh] md:h-[80vh] rounded-br-2xl overflow-hidden">
          <Image
            src={treatment.images?.primary || "/placeholder.jpg"}
            alt={`Treatment image for ${getLocalized(treatment.serviceDisplayName)}`}
            fill
            className="object-cover [object-position:center_55%] [object-position:0%_60%]"
            priority
          />
        </div>

        {/* Content */}
        <div className="w-full text-black px-6 md:px-12 py-[15px] flex flex-col justify-start">
          <div className="mb-4">
            <p className="text-sm text-gray-500">
              <Link href="/treatments" className="hover:underline hover:text-black">
                {t("treatmentDetails.breadcrumbTreatments")}
              </Link>{" "}
              /{" "}
              <Link
                href={`/treatments/#${getLocalized(treatment.categoryDisplayName)
                  ?.replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="hover:underline hover:text-black"
              >
                {getLocalized(treatment.categoryDisplayName)}
              </Link>{" "}
              /{" "}
              <Link href={`/treatments/${treatment.urlSlug}`} className="text-gray-700 underline">
                {getLocalized(treatment.serviceDisplayName)}
              </Link>{" "}
            </p>

            <h1 className="text-4xl font-serif text-black font-medium mt-2 mb-2">
              {getLocalized(treatment.serviceDisplayName)}
            </h1>
            <p className="text-gray-700 text-base leading-relaxed">
              {getLocalized(treatment.description)}
            </p>
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-1 gap-4 mb-6 items-start">
            <div className="border border-gray-200 bg-[#f9f9f9] p-5 rounded-lg shadow-sm flex flex-col text-left space-y-2">
              <h2 className="text-md font-semibold text-black">
                {t("treatmentDetails.priceHeading")}
              </h2>
              <p className="text-gray-700">{startingPriceText}</p>
              <button
                type="button"
                onClick={() => openLeadForm(false)}
                className="mt-2 inline-block w-full text-center bg-white text-black border border-black hover:bg-black hover:text-white font-medium py-2 rounded transition duration-200"
              >
                {t("treatmentDetails.bookNow")}
              </button>
            </div>

            {promoSummary.isPromoActive && (
              <div className="border border-[#731a2f] bg-[#731a2f] text-white p-5 rounded-lg shadow-md flex flex-col text-left space-y-2 max-h-[520px] overflow-y-auto show-scrollbar">
                <h2 className="text-md font-semibold">
                  {t("treatmentDetails.exclusivePricing")}
                </h2>

                {globalPromoValidTill && showGlobalPromoValidTill && (
                  <p className="text-xs text-white/80">
                    {t("treatmentDetails.validUntil")}{" "}
                    {globalPromoValidTill}
                  </p>
                )}

                {promoDescription && (
                  promoDescriptionLink ? (
                    <a
                      href={promoDescriptionLink}
                      className="text-white text-sm underline underline-offset-4"
                    >
                      {promoDescription}
                    </a>
                  ) : (
                    <p className="text-white text-sm">{promoDescription}</p>
                  )
                )}

                {servicePromoOptions.length > 0 && (
                  <div className="mt-1 space-y-2 w-full text-left">
                    {showStartingFrom && promoSummary.priceText ? (
                      <p className="text-xs text-white/80">
                        {t("treatmentDetails.startingFrom", {
                          price: promoSummary.priceText,
                        })}
                      </p>
                    ) : null}

                    {orderedPromoFilters.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {orderedPromoFilters.map((filter) => (
                          <button
                            key={filter.key}
                            type="button"
                            onClick={() => setActivePromoFilter(filter.key)}
                            className={`px-3 py-1 rounded-full border text-xs font-medium transition ${
                              activePromoFilter === filter.key
                                ? "bg-white text-black border-white"
                                : "bg-transparent text-white border-white/50 hover:border-white"
                            }`}
                          >
                            {getLocalized(filter.label)}
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={() => setActivePromoFilter("all")}
                          className="text-xs underline text-white/80 hover:text-white ml-1"
                        >
                          {getLocalized(promoFilterConfig.viewAllLabel) ||
                            t("treatmentDetails.viewAll")}
                        </button>
                      </div>
                    )}

                    <div
                      className={
                        promoFilterConfig
                          ? "max-h-[260px] overflow-y-auto show-scrollbar pr-1 space-y-2"
                          : "space-y-2"
                      }
                    >
                      {filteredServicePromoOptions.length > 0 ? (
                        filteredServicePromoOptions.map((opt, idx) => {
                          const optionLabel = getLocalized(opt.optionName);
                          return (
                            <div
                              key={idx}
                              className="text-sm text-white border border-white/30 rounded p-2 bg-white/10"
                            >
                              {!showGlobalPromoValidTill && opt.validTill ? (
                                <p className="text-xs text-white/80 mb-1">
                                  {t("treatmentDetails.validUntil")}{" "}
                                  {opt.validTill}
                                </p>
                              ) : null}
                              <div className="font-semibold">
                                {optionLabel || getLocalized(treatment?.serviceDisplayName)}
                              </div>
                              <div className="text-white">
                                {opt.promoPrice ? opt.promoPrice : ""}
                                {opt.currency ? ` ${opt.currency}` : ""}
                              </div>
                              {opt.notes?.length > 0 && (
                                <ul className="text-xs text-white/80 list-disc list-outside pl-4 mt-1 space-y-1">
                                  {opt.notes.map((note, nIdx) => (
                                    <li key={nIdx}>{getLocalized(note)}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          );
                        })
                      ) : (
                        <p className="text-xs text-white/80">
                          {t("treatmentDetails.noOptionsForFilter")}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {mergedPackageGroups.length > 0 && (
                  <div className="mt-3 space-y-2 w-full text-left">
                    {packageFilters.length > 1 && (
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {packageFilters.map((filter) => (
                          <button
                            key={`pkg-${filter.key}`}
                            type="button"
                            onClick={() => setActivePackageFilter(filter.key)}
                            className={`px-3 py-1 rounded-full border text-xs font-medium transition ${
                              activePackageFilter === filter.key
                                ? "bg-white text-black border-white"
                                : "bg-transparent text-white border-white/50 hover:border-white"
                            }`}
                          >
                            {getLocalized(filter.label)}
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={() => setActivePackageFilter("all")}
                          className="text-xs underline text-white/80 hover:text-white ml-1"
                        >
                          {getLocalized(promoFilterConfig?.viewAllLabel) ||
                            t("treatmentDetails.viewAll")}
                        </button>
                      </div>
                    )}

                    {filteredPackageGroups.map((pkg) => (
                      <div
                        key={pkg.packageId}
                        className="text-sm text-white border border-white/30 rounded p-3 bg-white/10"
                      >
                        <p className="text-[11px] uppercase tracking-[0.2em] text-white/70 mb-1">
                          {t("treatmentDetails.promoPackage")}
                        </p>
                        {pkg.validTill ? (
                          <p className="text-xs text-white/80 mb-2">
                            {t("treatmentDetails.validUntil")} {pkg.validTill}
                          </p>
                        ) : null}
                        <div className="flex items-start justify-between gap-3">
                          <div className="font-semibold">{pkg.title}</div>
                        </div>
                        {pkg.notes?.length > 0 && (
                          <ul className="text-xs text-white/80 list-disc list-outside pl-4 mt-2 space-y-1">
                            {pkg.notes.map((note, nIdx) => (
                              <li key={nIdx}>{renderNoteWithLinks(note)}</li>
                            ))}
                          </ul>
                        )}
                        <div className="space-y-1 mt-2">
                          {pkg.options.map((opt, optIdx) => (
                            <div key={`${pkg.packageId}-${optIdx}`} className="text-white">
                              {opt.label ? `${opt.label}: ` : ""}
                              {opt.promoPrice ? opt.promoPrice : ""}
                              {opt.currency ? ` ${opt.currency}` : ""}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => openLeadForm(true)}
                  className="mt-2 inline-block w-full text-center bg-white text-black border border-white hover:bg-transparent hover:text-white font-medium py-2 rounded transition duration-200"
                >
                  {t("treatmentDetails.inquire")}
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      <TreatmentInfoTabs treatment={treatment} locale={locale} />
      <TreatmentLeadModal
        open={leadOpen}
        locale={locale}
        leadStep={leadStep}
        leadForm={leadForm}
        leadFormError={leadFormError}
        leadOptions={leadOptions}
        leadSelectedOptions={leadSelectedOptions}
        duplicateMessage={duplicateMessage}
        leadSnapshot={leadSnapshot}
        leadService={leadService}
        leadCategory={leadCategory}
        countryOptions={countryOptions}
        phoneRef={phoneRef}
        emailRef={emailRef}
        submitting={submitting}
        setSubmitting={setSubmitting}
        setLeadStep={setLeadStep}
        setLeadFormError={setLeadFormError}
        setLeadSelectedOptions={setLeadSelectedOptions}
        setLeadForm={setLeadForm}
        setLeadSnapshot={setLeadSnapshot}
        setDuplicateMessage={setDuplicateMessage}
        handleLeadChange={handleLeadChange}
        handleCloseLead={handleCloseLead}
        initialLeadForm={initialLeadForm}
        utmParams={utmParams}
        initialReferrerRef={initialReferrerRef}
        entryUrlRef={entryUrlRef}
        entryPathRef={entryPathRef}
        trackEvent={trackEvent}
        router={router}
      />
    </div>
  );
}
