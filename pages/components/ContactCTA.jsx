// components/ContactSection.jsx

export default function ContactCTA() {
  return (
    <section
      id="contact"
      style={{ backgroundColor: '#731a2f' }}
      className="text-white text-center py-16 px-6"
    >
      <h2 className="text-3xl font-medium mb-4">
        Book Your Complimentary Consultation
      </h2>
      <p className="text-gray-200 text-lg mb-6">
        Let our doctors build your personalized, ideal rejuvenation treatment plan.
      </p>

      <a
        href="https://wa.me/+526642077675"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-8 py-3 rounded-full inline-block transition duration-300"
        style={{ backgroundColor: '#ffffff' }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#9c8e7b'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
      >
        Chat via WhatsApp
      </a>
    </section>
  );
}