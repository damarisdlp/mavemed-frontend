// Lead capture section - Mobile responsive, styled with Tailwind
// Add this below your CTA section or wherever you'd like to prompt users for contact info

import { useState } from "react";

export default function LeadForm() {
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
    <section className="bg-[#f3efec] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Stay Up to Date with Mave
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Sign up for our newsletter and SMS promos to get exclusive offers, medical insights, and aesthetic trends. Be the first to know.
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
            placeholder="Your First Name"
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Your Full Last Name"
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Address"
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Mobile Number"
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <select
  name="whatsapp"
  value={formData.whatsapp}
  onChange={handleChange}
  className={`border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black ${
    formData.whatsapp ? "text-black" : "text-gray-500"
  } appearance-none`}
  required
>
  <option value="" disabled>
    Are you on WhatsApp?
  </option>
  <option value="Yes">Yes</option>
  <option value="No">No</option>
</select>

          <p className="text-xs text-gray-500 mt-2">
            Mave Medical Spa needs this contact info to keep you informed about treatments and services. You can unsubscribe at anytime. To learn more, please review our <a href="/privacy-policy" className="underline">Privacy Policy</a>.
          </p>

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-full hover:bg-[#731a2f] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}