// components/ContactCTA.jsx

export default function ContactCTA() {
  return (
    <section
      id="contact"
      style={{ backgroundColor: '#731a2f' }}
      className="text-white text-center py-16 px-6"
    >
      <h2 className="text-3xl font-medium font-serif mb-2">
        Expert Aesthetic Care — Just Minutes from the Border
      </h2>
      <p className="text-gray-100 text-lg">
        Our Tijuana med spa serves clients from San Diego, LA, Tijuana and beyond — </p>
        <p className="text-gray-100 text-lg mb-6">
          Offering advanced treatments in rejuvenation from Sculptra, RF microneedling, PDO threads, and facial balancing. </p>
          <p className="text-gray-100 font-semibold text-lg mb-5">
          Book your consultation and get a personalized plan tailored to your goals.
      </p>

      <a
        href="https://wa.me/+526642077675"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black px-8 py-3 rounded-full inline-block transition duration-300"
        style={{ backgroundColor: '#ffffff' }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#efeee7'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
        aria-label="Chat with Mave Medical Spa via WhatsApp"
      >
        Schedule your Consult
      </a>
    </section>
  );
}