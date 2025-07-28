// components/HeroSection.jsx

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white px-6 text-center relative">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium leading-tight max-w-4xl">
        Mave Medical Spa in Tijuana – Expert Aesthetic Care for U.S. Clients
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-lg">
        Natural aesthetic results, cross-border convenience. Specializing in Botox, Sculptra, Fillers, Threads, RF Microneedling, and Laser Treatments.
      </p>
      <div className="mt-8">
        <a
          href="https://wa.me/+526642077675"
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-[#731a2f] transition active:scale-95"
        >
          Book Now
        </a>
      </div>
    </section>
  );
}