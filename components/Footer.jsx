"use client";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";

export default function Footer() {
  const { t } = useTranslation("layout");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsapp: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxJU8lIqKC_9LGFQcFO7gMTNYNZb11GirR4AQ8i_VUoYtR2Mepny2nNre-J3XhDcFs/exec", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" }
      });

      if (response.ok) {
        await fetch("/api/send-whatsapp", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" }
        });
        alert("Thank you! We'll be in touch.");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", whatsapp: "" });
      } else {
        alert("There was an error. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your form.");
    }
  };

  return (
    <footer className="bg-[#efeee7] text-black py-7 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10">
        {/* Mobile: Lead Form on Top */}
        <div className="order-1 md:order-2">
          <h4 className="text-lg font-serif font-medium mb-3">{t("footer.leadTitle")}</h4>
          <p className="text-gray-700 text-sm mb-6">
            {t("footer.leadSubtitle")}
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md grid gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder={t("footer.firstName")}
              className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={t("footer.lastName")}
              className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("footer.email")}
              className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("footer.phone")}
              className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <select
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className={`bg-white border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black ${
                formData.whatsapp ? "text-black" : "text-gray-500"
              } appearance-none`}
              required
            >
              <option value="" disabled>{t("footer.whatsappPrompt")}</option>
              <option value="Yes">{t("footer.whatsappYes")}</option>
              <option value="No">{t("footer.whatsappNo")}</option>
            </select>

            <p className="text-xs text-gray-500 mt-2">
              {t("footer.disclaimer")}{" "}
              <Link href="/privacy-policy" className="underline">{t("footer.privacyPolicy")}</Link>.
            </p>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full hover:bg-[#731a2f] transition text-center"
            >
              {t("footer.subscribe")}
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="order-2 md:order-1 grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
          <div>
            <h4 className="font-semibold mb-4">{t("footer.treatmentsTitle")}</h4>
            <ul className="space-y-2">
              <li><Link href="/treatments" className="hover:underline">{t("footer.allTreatments")}</Link></li>
              {/*<li><Link href="/packages" className="hover:underline">Promo Packages</Link></li>*/}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer.aboutTitle")}</h4>
            <ul className="space-y-2">
              <li><Link href="/aboutus" className="hover:underline">{t("footer.aboutLink")}</Link></li>
              <li><Link href="/contact" className="hover:underline">{t("footer.contactLink")}</Link></li>
              <li><Link href="/faq" className="hover:underline">{t("footer.faqLink")}</Link></li>
              {/*<li><Link href="/mave101" className="hover:underline">Mave 101</Link></li>*/}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer.locationTitle")}</h4>
            <ul className="space-y-2">
              <li><Link href="/location" className="hover:underline">{t("footer.locationLink")}</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 pt-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Mave Medical Spa. {t("footer.rights")}{" "}
        <Link href="/privacy" className="hover:underline mx-2">{t("footer.privacy")}</Link> |{" "}
        <Link href="/terms" className="hover:underline mx-2">{t("footer.terms")}</Link> |{" "}
        <Link href="/accessibility" className="hover:underline mx-2">{t("footer.accessibility")}</Link>
      </div>
    </footer>
  );
}
