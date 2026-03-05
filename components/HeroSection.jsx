// components/HeroSection.jsx
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { dispatchChatOpen } from "@/lib/utils/chat";

const WHATSAPP_PHONE = "+526642077675";

function WhatsAppIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.4 11.4a8.7 8.7 0 0 1-12.8 7.6l-4.1 1.6 1.6-4a8.7 8.7 0 1 1 15.3-5.2Z" />
      <path d="M9.3 8.7c.2-.4.4-.5.6-.5h.5c.2 0 .4 0 .6.4.2.5.7 1.6.7 1.7.1.2.1.3 0 .5-.1.2-.2.3-.4.5-.1.1-.2.3-.4.4-.1.1-.2.2-.1.4.1.2.6 1 1.3 1.6.9.8 1.6 1.1 1.8 1.2.2.1.3.1.5-.1.1-.1.6-.6.7-.8.2-.2.3-.2.5-.1.2.1 1.3.6 1.5.8.2.1.4.2.4.3 0 .1 0 .8-.3 1.1-.3.4-1 .8-2 .8s-2.2-.4-3.8-1.8c-1.7-1.4-2.7-3-3-3.6-.3-.6-.3-1.2 0-1.6.3-.4.7-.8.9-1.2Z" className="text-white" />
    </svg>
  );
}

export default function HeroSection() {
  const { t, i18n } = useTranslation(["home", "layout"]);
  const whatsappMessage = t("layout:chat.whatsappMessage", {
    defaultValue: i18n.language?.startsWith("es")
      ? "Hola, me gustaria saber mas sobre sus tratamientos."
      : "Hi! I'd like to learn more about your treatments.",
  });
  const whatsappHref = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="w-full bg-[#efeee7]">
      <div className="sm:hidden">
        <div className="relative h-[46vh] min-h-[320px] max-h-[440px] overflow-hidden">
          <img
            src="/equipo.jpg"
            alt="Hero background"
            className="h-full w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-black/60
              via-black/30
              to-black/20
            "
          />
        </div>

        <div className="px-6 pb-12 pt-8">
          <div className="max-w-full">
            <h1
              className="text-[#1f1f1d] font-medium leading-[1.04]"
              style={{ textWrap: "balance" }}
            >
              <span className="block whitespace-nowrap font-serif text-[clamp(1.45rem,5.8vw,2.05rem)]">
                {t("heroSection.heading1")}
              </span>
              <span className="mt-3 block font-serif text-[clamp(1.05rem,4.5vw,1.35rem)] leading-snug text-black/80">
                {t("heroSection.heading2")}
              </span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-black/75">
              {t("heroSection.p1")}
            </p>
            <p className="mt-3 text-base leading-relaxed text-black/75">
              {t("heroSection.p2")}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              {t("heroSection.p3")}
            </p>

            <div className="mt-8 flex flex-col items-start gap-3">
              <button
                type="button"
                onClick={dispatchChatOpen}
                className="
                  inline-flex items-center justify-center
                  rounded-full bg-white px-8 py-3
                  text-black transition hover:bg-gray-100
                  active:scale-95
                "
              >
                {t("heroSection.cta")}
              </button>
              <Link
                href="/treatments"
                className="
                  inline-flex items-center justify-center
                  rounded-full bg-[#731a2f] px-8 py-3
                  text-white transition hover:bg-[#5d1526]
                "
              >
                {t("heroSection.viewAllTreatments", { defaultValue: "View All Treatments" })}
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full bg-[#25D366] px-8 py-3
                  text-white transition hover:bg-[#1fb95a]
                  shadow-[0_6px_14px_rgba(37,211,102,0.35)]
                "
                aria-label={t("heroSection.messageUs", { defaultValue: "Message Us" })}
              >
                <WhatsAppIcon className="h-4 w-4 text-white" />
                <span>{t("heroSection.messageUs", { defaultValue: "Message Us" })}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative hidden min-h-screen overflow-hidden rounded-b-[56px] md:rounded-b-[72px] sm:block">
        {/* Background Image */}
        <img
          src="/equipo3.jpg"
          alt="Hero background"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />

        {/* Semi-transparent overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-black/80
            via-black/50
            to-black/0
          "
        />

        {/* Content */}
        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-end items-start px-6 pb-16 pt-10 text-left sm:px-8 sm:pb-20 lg:px-16 lg:pb-24 xl:px-20">
          <div className="w-full max-w-[92vw] sm:max-w-3xl lg:max-w-2xl lg:-translate-x-[30%] lg:-translate-y-[30%]">
            <h1
              className="mt-2 mb-5 max-w-full break-words text-white font-medium leading-tight"
              style={{ textWrap: "balance" }}
            >
              <span className="block font-serif text-[clamp(1.84rem,5.2vw,3.45rem)] sm:whitespace-nowrap">
                {t("heroSection.heading1")}
              </span>
              <span className="mt-[0.2625rem] block font-serif text-[clamp(1.0625rem,2.89vw,2rem)] tracking-[0.01em]">
                {t("heroSection.heading2")}
              </span>
            </h1>

            <p className="mt-4 mb-2 max-w-full text-base text-white/90 sm:text-lg">
              {t("heroSection.p1")}
            </p>
            <p className="mt-2 mb-2 max-w-full text-base text-white/90 sm:text-lg">
              {t("heroSection.p2")}
            </p>
            <p className="mt-2 mb-5 max-w-full text-base text-white/90 sm:text-lg">
              {t("heroSection.p3")}
            </p>

            <div className="mt-8 flex flex-col items-start gap-3">
              <button
                type="button"
                onClick={dispatchChatOpen}
                className="
                  bg-white text-black
                  px-8 py-3 rounded-full
                  hover:bg-gray-100
                  transition
                  active:scale-95
                "
              >
                {t("heroSection.cta")}
              </button>
              <Link
                href="/treatments"
                className="
                  inline-flex items-center justify-center
                  rounded-full bg-[#731a2f] px-8 py-3
                  text-white transition hover:bg-[#5d1526]
                "
              >
                {t("heroSection.viewAllTreatments", { defaultValue: "View All Treatments" })}
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center gap-2
                  rounded-full bg-[#25D366] px-8 py-3
                  text-white transition hover:bg-[#1fb95a]
                  shadow-[0_6px_14px_rgba(37,211,102,0.35)]
                "
                aria-label={t("heroSection.messageUs", { defaultValue: "Message Us" })}
              >
                <WhatsAppIcon className="h-4 w-4 text-white" />
                <span>{t("heroSection.messageUs", { defaultValue: "Message Us" })}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Subtle bottom edge for curve definition */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-black/10" />
      </div>
    </section>
  );
}
