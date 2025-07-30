import Link from "next/link";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="relative w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] min-h-[85vh]">
        
        {/* Left: Text Content */}
        <div className="flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-serif font-medium mb-10 leading-tight text-center md:text-left">
              Chat with Us
            </h2>

            {/* Phone */}
            <div className="flex items-start gap-4 mb-8">
              <Image src="/WA.png" alt="Phone icon" width={35} height={35} className="mt-1" />
              <div>
                <h3 className="text-lg md:text-xl text-black font-semibold">Text or Call Us</h3>
                <p className="text-gray-700">
                  <a
                    href="https://wa.me/+526642077675"
                    className="underline hover:text-black transition"
                  >
                    +52 664 207 7675
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-8">
              <Image src="/email.png" alt="Email icon" width={35} height={35} className="mt-1" />
              <div>
                <h3 className="text-lg md:text-xl text-black font-semibold">Email Us</h3>
                <p className="text-gray-700">
                  <a
                    href="mailto:info@mavemedspa.com"
                    className="underline hover:text-black transition"
                  >
                    info@mavemedspa.com
                  </a>
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 mb-8">
              <Image src="/location.png" alt="Location icon" width={35} height={35} className="mt-1" />
              <div>
                <h3 className="text-lg md:text-xl text-black font-semibold">Location</h3>
                <p className="text-gray-700 mb-2">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Blvrd+Gral+Rodolfo+Sánchez+Taboada+10512-Interior+8a+-+Segundo+Piso,+Revolucion,+22010+Tijuana,+B.C.,+Mexico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-black transition block"
                  >
                    Blvrd Gral Rodolfo Sánchez Taboada 10512-Interior 8a – Segundo Piso,<br />
                    Revolución, 22010 Tijuana, B.C., Mexico
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>How to find us:</strong><br />
                  Stairs facing Avenida Río Yaqui<br />
                  Stairs facing Calle Río Nazas
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Link
                href="/treatments"
                className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-full hover:bg-[#731a2f] transition active:scale-95 text-center"
              >
                Explore Our Med Spa Treatments
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative w-full h-[40vh] md:h-auto">
          <Image
            src="/group.jpg"
            alt="Group picture of the team at Mave Medical Spa in Tijuana"
            fill
            className="object-cover object-[30%_40%]"
            priority
          />
        </div>
      </div>
    </section>
  );
}