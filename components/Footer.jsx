"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import PromoLeadForm from "./PromoLeadForm";

const ChatLauncher = dynamic(() => import("./ChatLauncher"), { ssr: false });

export default function Footer() {
  const { t } = useTranslation("layout");

  return (
    <footer className="text-black">
      <div className="bg-[#efeee7]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <PromoLeadForm />
        </div>
      </div>

      <div className="bg-white px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 text-sm items-start">
            <div className="space-y-4 lg:col-span-1">
              <Image
                src="/logo-mave.png"
                alt="Mave Medical Spa"
                width={140}
                height={34}
                className="h-auto w-auto"
              />
              <p className="text-gray-700 max-w-[220px]">
                {t("footer.brandTagline")}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t("footer.treatmentsTitle")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/treatments" className="hover:underline">
                    {t("footer.allTreatments")}
                  </Link>
                </li>
                <li>
                  <Link href="/promos" className="hover:underline">
                    {t("footer.promosLink")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t("footer.aboutTitle")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/aboutus" className="hover:underline">
                    {t("footer.aboutLink")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    {t("footer.contactLink")}
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline">
                    {t("footer.faqLink")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t("footer.socialTitle")}</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.instagram.com/mavemedicalspa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/mavemedicalspa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@mavemedicalspa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2 text-gray-700">
              <h4 className="font-semibold text-black mb-4">{t("footer.locationTitle")}</h4>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Blvrd+Gral+Rodolfo+S%C3%A1nchez+Taboada+10512-Interior+8a+-+Segundo+Piso,+Revolucion,+22010+Tijuana,+B.C.,+Mexico"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline block"
              >
                {t("footer.addressLine1")}, {t("footer.addressLine2")}
              </a>
              <a href={t("footer.phoneLink")} className="hover:underline block">
                {t("footer.phoneDisplay")}
              </a>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold mb-4">{t("footer.hoursTitle")}</h4>
              <p className="text-gray-700">{t("footer.hoursWeekdays")}</p>
              <p className="text-gray-700">{t("footer.hoursSaturday")}</p>
              <p className="text-gray-700">{t("footer.hoursSunday")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-6 px-6">
        <div className="max-w-7xl mx-auto text-center text-sm space-y-2">
          <div>
            © {new Date().getFullYear()} Mave Medical Spa. {t("footer.rights")}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy" className="hover:underline">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="hover:underline">
              {t("footer.terms")}
            </Link>
            <Link href="/accessibility" className="hover:underline">
              {t("footer.accessibility")}
            </Link>
          </div>
        </div>
      </div>

      <ChatLauncher />
    </footer>
  );
}
