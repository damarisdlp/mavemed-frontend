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
        <p className="text-center text-gray-600 mb-10">
          Convenient cross-border access, just minutes from the San Diego–Tijuana border.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Side: Text Block */}
          <div className="w-full max-w-md mx-auto text-left space-y-6">
            {/* Clinic Name */}
            <h3 className="text-xl text-black font-semibold text-center md:text-left">Mave Medical Spa</h3>

            {/* Address */}
            <div className="flex gap-4 items-start">
              <Image src="/location.png" alt="Location icon" width={40} height={40} />
              <div>
                <h4 className="text-black font-semibold text-base">Address:</h4>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Blvrd+Gral+Rodolfo+Sánchez+Taboada+10512-Interior+8a+-+Segundo+Piso,+Revolucion,+22010+Tijuana,+B.C.,+Mexico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-black transition text-gray-700 block leading-relaxed"
                >
                  Blvrd Gral Rodolfo Sánchez Taboada 10512-Interior 8a – Segundo Piso,<br />
                  Revolución, 22010 Tijuana, B.C., Mexico
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 items-start">
              <Image src="/date-icon.png" alt="Clock icon" width={40} height={40} />
              <div>
                <h4 className="text-black font-semibold text-base">Hours:</h4>
                <p className="text-gray-700">
                  Monday–Friday: 9:00am – 6:00pm<br />
                  Saturday: 9:00am – 4:00pm<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <Image src="/WA.png" alt="WhatsApp icon" width={40} height={40} />
              <div>
                <h4 className="text-black font-semibold text-base">Phone:</h4>
                <a
                  href="https://wa.me/+526642077675"
                  className="underline hover:text-black transition text-gray-700"
                >
                  +52 664 207 7675
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <Image src="/email.png" alt="Email icon" width={40} height={40} />
              <div>
                <h4 className="text-black font-semibold text-base">Email:</h4>
                <a
                  href="mailto:info@mavemedspa.com"
                  className="underline hover:text-black transition text-gray-700"
                >
                  info@mavemedspa.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Map */}
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