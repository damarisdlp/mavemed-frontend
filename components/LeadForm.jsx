// Lead capture section - Mobile responsive, styled with Tailwind
// Add this below your CTA section or wherever you'd like to prompt users for contact info

import { useState } from "react";
import { useTranslation } from "next-i18next";

export default function LeadForm() {
  const { t } = useTranslation("home");
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
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (response.ok) {
      // ✅ Also send WhatsApp alert to reception
      await fetch("/api/send-whatsapp", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
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
    <section className="bg-[#f3efec] px-6 py-6 justify-center items-center text-center relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5 items-center">
        {/* Text Section */}
        <div>
          <h2 className=" text-black text-3xl md:text-4xl font-serif font-medium mb-4">
            {t("leadForm.title")}
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            {t("leadForm.subtitle")}
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md grid gap-4"
        >
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder={t("leadForm.firstName")}
            className="border border-gray-300 text-gray-500 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder={t("leadForm.lastName")}
            className="border border-gray-300 text-gray-500 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("leadForm.email")}
            className="border border-gray-300 text-gray-500 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t("leadForm.phone")}
            className="border border-gray-300 text-gray-500 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          
          <select
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="border border-gray-300 text-gray-500 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black appearance-none"
            required
          >
            <option value="" disabled>
              {t("leadForm.whatsappPrompt")}
            </option>
            <option value="Yes">{t("leadForm.whatsappYes")}</option>
            <option value="No">{t("leadForm.whatsappNo")}</option>
          </select>

          <p className="text-xs text-gray-500 mt-2">
            {t("leadForm.disclaimer")} <a href="/privacy-policy" className="underline">{t("leadForm.privacyPolicy")}</a>.
          </p>

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-full hover:bg-[#731a2f] transition"
          >
            {t("leadForm.subscribe")}
            </button>
            </form>
            </div>
            </section>
            );
            }
