// components/LocationSection.jsx
import Image from "next/image";

export default function LocationSection() {
  return (
    <section id="location" className="bg-[#efeee7] py-14 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-serif text-black text-center font-medium mb-4">
          We Can't Wait to See You
        </h2>
        <p className="text-center text-gray-600 mb-5">
          Convenient cross-border access, just minutes from the San Diego–Tijuana border.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Right Side: Text Block (on mobile shows first) */}
          <div className="text-center text-left">
            <h3 className="text-xl text-black text-center font-semibold mb-2">Mave Medical Spa</h3>
            <p className="text-gray-700 mb-2">
            <strong>Address:</strong><br />
            <a
            href="https://www.google.com/maps/dir/?api=1&destination=Blvrd+Gral+Rodolfo+Sánchez+Taboada+10512-Interior+8a+-+Segundo+Piso,+Revolucion,+22010+Tijuana,+B.C.,+Mexico"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 mb-3 leading-relaxed underline hover:text-black transition block"
            >
              Blvrd Gral Rodolfo Sánchez Taboada 10512-Interior 8a – Segundo Piso,<br />
              Revolución, 22010 Tijuana, B.C., Mexico
              </a>
              </p>
            <p className="text-gray-700 mb-3">
              <strong>Hours:</strong><br />
              Monday–Friday: 9:00am – 6:00pm<br />
              Saturday: 9:00am - 4:00pm<br/>
              Sun: Closed
            </p>
            <p className="text-gray-700 mb-3">
              <strong className="whitespace-nowrap">Phone:</strong><br/>
              <a
              href="https://wa.me/+526642077675"
              className="underline hover:text-black transition flex items-center gap-2"
              >
                +52 664 207 7675
                </a>
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong><br />
                  <a href="mailto:info@mavemedspa.com" className="underline hover:text-black transition">
                    info@mavemedspa.com
                    </a>
                    </p>
                    </div>

          {/* Left Side: Map (on mobile shows second) */}
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