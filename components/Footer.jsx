"use client";

import Link from "next/link";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import LeadForm from "./LeadForm";

const ChatLauncher = dynamic(() => import("./ChatLauncher"), { ssr: false });

export default function Footer() {
  const { t } = useTranslation("layout");

  return (
    <footer className="bg-[#efeee7] text-black py-7 px-6">
      <div className="max-w-7xl mx-auto space-y-10">
        <LeadForm />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-sm">
          <div>
            <h4 className="font-semibold mb-4">{t("footer.treatmentsTitle")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/treatments" className="hover:underline">
                  {t("footer.allTreatments")}
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
            <h4 className="font-semibold mb-4">{t("footer.locationTitle")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/location" className="hover:underline">
                  {t("footer.locationLink")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer.socialTitle", { defaultValue: "Social Media" })}</h4>
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
        </div>

        <div className="pt-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Mave Medical Spa. {t("footer.rights")}{" "}
          <Link href="/privacy" className="hover:underline mx-2">
            {t("footer.privacy")}
          </Link>{" "}
          |{" "}
          <Link href="/terms" className="hover:underline mx-2">
            {t("footer.terms")}
          </Link>{" "}
          |{" "}
          <Link href="/accessibility" className="hover:underline mx-2">
            {t("footer.accessibility")}
          </Link>
        </div>
      </div>
      <ChatLauncher />
    </footer>
  );
}
