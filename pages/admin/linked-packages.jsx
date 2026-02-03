import Head from "next/head";
import { allTreatments } from "@/lib/data/allTreatments";

const FALLBACK_TOKEN = "Gettrippy1111";

const getLocalizedEn = (field) => {
  if (field == null) return "";
  if (typeof field === "object") return field.en || field.es || "";
  return field;
};

const normalizeName = (value) =>
  String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

const buildPackageReport = () => {
  const packageMap = new Map();

  allTreatments.forEach((treatment) => {
    const promoOptions = treatment?.promoDetails?.options || [];
    if (!promoOptions.length) return;

    promoOptions.forEach((opt) => {
      if (!opt?.packageId) return;
      const packageId = opt.packageId;
      if (!packageMap.has(packageId)) {
        packageMap.set(packageId, {
          packageId,
          sourceTreatments: new Map(),
          options: [],
          referencedBy: new Set(),
        });
      }
      const entry = packageMap.get(packageId);
      const sourceKey = treatment?.urlSlug || treatment?.serviceDisplayName?.en || packageId;
      if (!entry.sourceTreatments.has(sourceKey)) {
        entry.sourceTreatments.set(sourceKey, {
          slug: treatment?.urlSlug || "",
          name: getLocalizedEn(treatment?.serviceDisplayName),
        });
      }

      const optName = getLocalizedEn(opt?.optionName);
      const normalizedOptName = normalizeName(optName);
      const priceMatch = (treatment?.pricing?.options || []).find(
        (p) => normalizeName(getLocalizedEn(p.optionName)) === normalizedOptName
      );
      const price = priceMatch?.optionPromoPrice || priceMatch?.optionPrice || null;
      const currency = price?.currency || "";
      const validTill = getLocalizedEn(opt?.validTill) || getLocalizedEn(treatment?.promoDetails?.validTill);

      entry.options.push({
        name: optName,
        priceText: price
          ? typeof price === "object" && "amount" in price
            ? `${price.amount}${currency ? ` ${currency}` : ""}`
            : getLocalizedEn(price)
          : "",
        validTill,
      });
    });
  });

  allTreatments.forEach((treatment) => {
    const linkedIds = new Set(
      (treatment?.pricing?.options || [])
        .flatMap((opt) => (Array.isArray(opt.linkedPackageIds) ? opt.linkedPackageIds : []))
        .filter(Boolean)
    );
    if (!linkedIds.size) return;
    linkedIds.forEach((packageId) => {
      const entry = packageMap.get(packageId);
      if (!entry) return;
      entry.referencedBy.add(
        `${getLocalizedEn(treatment?.serviceDisplayName)} (${treatment?.urlSlug || "no-slug"})`
      );
    });
  });

  return Array.from(packageMap.values()).map((entry) => ({
    packageId: entry.packageId,
    sourceTreatments: Array.from(entry.sourceTreatments.values()),
    options: entry.options,
    referencedBy: Array.from(entry.referencedBy.values()),
  }));
};

export async function getServerSideProps({ query }) {
  const token = String(query?.token || "");
  const expectedToken = process.env.ADMIN_LINKED_PACKAGES_TOKEN || FALLBACK_TOKEN;
  if (token !== expectedToken) {
    return {
      props: {
        authorized: false,
      },
    };
  }

  const report = buildPackageReport();

  return {
    props: {
      authorized: true,
      report,
    },
  };
}

export default function LinkedPackagesAdmin({ authorized, report }) {
  if (!authorized) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <p className="text-sm">Unauthorized</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Linked Packages Admin</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <main className="min-h-screen bg-white text-black px-6 py-10">
        <h1 className="text-2xl font-semibold mb-6">Linked Packages</h1>
        {report?.length ? (
          <div className="space-y-6">
            {report.map((pkg) => (
              <div key={pkg.packageId} className="border border-gray-200 rounded-lg p-4">
                <h2 className="text-lg font-semibold">{pkg.packageId}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  Source:{" "}
                  {pkg.sourceTreatments.length
                    ? pkg.sourceTreatments.map((s) => s.name || s.slug).join(", ")
                    : "Unknown"}
                </p>
                {pkg.options.length ? (
                  <div className="mt-3">
                    <p className="text-sm font-medium">Package options</p>
                    <ul className="text-sm text-gray-700 list-disc list-outside pl-5 mt-1 space-y-1">
                      {pkg.options.map((opt, idx) => (
                        <li key={`${pkg.packageId}-${idx}`}>
                          {opt.name}
                          {opt.priceText ? ` — ${opt.priceText}` : ""}
                          {opt.validTill ? ` (valid until ${opt.validTill})` : ""}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {pkg.referencedBy.length ? (
                  <div className="mt-3">
                    <p className="text-sm font-medium">Referenced by</p>
                    <ul className="text-sm text-gray-700 list-disc list-outside pl-5 mt-1 space-y-1">
                      {pkg.referencedBy.map((ref) => (
                        <li key={ref}>{ref}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-sm text-gray-600 mt-3">No references yet.</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-600">No linked packages found.</p>
        )}
      </main>
    </>
  );
}
