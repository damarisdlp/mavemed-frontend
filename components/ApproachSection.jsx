import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function ApproachSection() {
  const { t } = useTranslation("home");

  return (
    <section className="relative w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] min-h-[85vh]">

        {/* Left: Image */}
        <div className="relative w-full h-[40vh] md:h-auto">
          <Image
            src="/approach-section.jpg"
            alt="Close-up of rejuvenated skin after aesthetic treatment"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md mx-auto text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-serif font-medium mb-7 leading-tight">
              {t("approach.title")}
            </h2>

            {/* Safety */}
            <div className="mb-6 text-left">
              <div className="flex items-center gap-3 mb-2">
                <Image src="/safety-icon.png" alt="Medical safety icon" width={35} height={35} />
                <h3 className="text-lg md:text-xl text-black font-semibold">{t("approach.safetyTitle")}</h3>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {t("approach.safetyCopy")}
              </p>
            </div>

            {/* Efficacy */}
            <div className="mb-6 text-left">
              <div className="flex items-center gap-3 mb-2">
                <Image src="/tech-icon.png" alt="Technology efficacy icon" width={35} height={35} />
                <h3 className="text-lg md:text-xl text-black font-semibold">{t("approach.efficacyTitle")}</h3>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {t("approach.efficacyCopy")}
              </p>
            </div>

            {/* Experience */}
            <div className="mb-8 text-left">
              <div className="flex items-center gap-3 mb-2">
                <Image src="/experience-icon.png" alt="Personalized skincare icon" width={35} height={35} />
                <h3 className="text-lg md:text-xl text-black font-semibold">{t("approach.experienceTitle")}</h3>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {t("approach.experienceCopy")}
              </p>
            </div>

            {/* Button: Centered inside text column */}
<div className="flex justify-center">
  <Link
    href="/treatments"
    className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-full hover:bg-[#731a2f] transition active:scale-95 text-center"
  >
    {t("approach.cta")}
  </Link>
</div>
          </div>
        </div>
      </div>

      {/* Optional small spacer */}
      <div className="h-2 md:h-0 bg-white w-full" />
    </section>
  );
}
