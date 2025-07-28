// components/LocationSection.jsx

export default function LocationSection() {
  return (
    <section id="location" className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Visit Us in Tijuana
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Convenient cross-border access, just minutes from the San Diego–Tijuana border.
        </p>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            title="Mave Medical Spa Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4196.432212373726!2d-117.01746820000001!3d32.5220197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94983afb96765%3A0xa2f9d1f20a159ad9!2sMave%20Medical%20Spa!5e1!3m2!1sen!2sus!4v1753712491357!5m2!1sen!2sus"
            className="w-full h-72 rounded-xl border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}