// components/LocationSection.jsx
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { dispatchChatOpen } from "@/lib/utils/chat";

export default function LocationSection() {
  const { t } = useTranslation("location");

  return (
    <section id="location" className="bg-[#efeee7] pt-25 pb-14 px-6 md:pt-14">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className="font-serif text-black text-center font-medium mb-4 leading-snug text-[clamp(1.8rem,4.5vw,2.5rem)] whitespace-normal"
          style={{ textWrap: "balance" }}
        >
          {t("location.heading")}
        </h2>
        <p className="text-center text-gray-600 mb-10">
          {t("location.subheading")}
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Side: Text Block */}
          <div className="w-full max-w-md mx-auto text-left space-y-6">
            {/* Clinic Name */}
            <h3 className="text-xl text-black font-semibold text-center md:text-left">
              {t("location.clinicName")}
            </h3>

            {/* Address */}
            <div className="flex gap-4 items-start">
              <Image src="/location.png" alt="Location icon" width={40} height={40} />
              <div>
                <h4 className="text-black font-semibold text-base">{t("location.addressLabel")}</h4>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Blvrd+Gral+Rodolfo+Sánchez+Taboada+10512-Interior+8a+-+Segundo+Piso,+Revolucion,+22010+Tijuana,+B.C.,+Mexico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black transition text-gray-700 block leading-relaxed"
                >
                  {t("location.addressLine1")}<br />
                  {t("location.addressLine2")}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 items-start">
              <Image src="/date-icon.png" alt="Clock icon" width={40} height={40} />
              <div>
                <h4 className="text-black font-semibold text-base">{t("location.hoursLabel")}</h4>
                <p className="text-gray-700">
                  {t("location.hoursWeekday")}<br />
                  {t("location.hoursSaturday")}<br />
                  {t("location.hoursSunday")}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <Image src="/WA.png" alt="WhatsApp icon" width={40} height={40} />
              <div>
                <h4 className="text-black font-semibold text-base">{t("location.phoneLabel")}</h4>
                <button
                  type="button"
                  onClick={dispatchChatOpen}
                  className="underline hover:text-black transition text-gray-700"
                >
                  {t("location.phoneNumber")}
                </button>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <Image src="/email.png" alt="Email icon" width={40} height={40} />
              <div>
                <h4 className="text-black font-semibold text-base">{t("location.emailLabel")}</h4>
                <a
                  href="mailto:info@mavemedspa.com"
                  className="underline hover:text-black transition text-gray-700"
                >
                  {t("location.email")}
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Map */}
          <div className="w-full h-72 md:h-80 rounded-xl overflow-hidden shadow-sm">
            <iframe
              title="Mave Medical Spa Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4196.432212373726!2d-117.01746820000001!3d32.5220197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94983afb96765%3A0xa2f9d1f20a159ad9!2sMave%20Medical%20Spa!5e1!3m2!1sen!2sus!4v1753712491357!5m2!1sen!2sus"
              className="w-full h-full"
              style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
