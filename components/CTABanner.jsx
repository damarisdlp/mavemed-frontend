// components/CTABanner.jsx

import { dispatchChatOpen } from "@/lib/utils/chat";

export default function CTABanner() {
  return (
    <section id="contact" className="bg-black text-white text-center py-16 px-6">
      <h2 className="text-3xl font-medium mb-4">
        Book Your Complimentary Consultation
      </h2>
      <p className="text-gray-300 text-lg mb-6">
        Let our doctors build your personalized, ideal rejuvenation treatment plan.
      </p>
      <button
        type="button"
        onClick={dispatchChatOpen}
        className="bg-white text-black px-8 py-3 rounded-full inline-block hover:bg-gray-100 transition"
      >
        Chat via WhatsApp
      </button>
    </section>
  );
}
