// components/ApproachSection.jsx

export default function ApproachSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src="/public/logo-mave.png" // replace with your actual image path
            alt="Close-up of glowing skin"
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-10">
            A New Approach to Skincare
          </h2>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">🔒 Safety</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Safety is our top priority. All procedures at Mave are performed or overseen by licensed medical professionals specializing in aesthetic medicine. We follow strict COFEPRIS-compliant clinical protocols to ensure your health and wellbeing.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">✨ Efficacy</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              We believe in delivering real, visible results. Our services are built on medical-grade technologies and high-performing ingredients that are clinically proven to stimulate change in the skin.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-2">🤍 Experience</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              We provide a carefully curated experience. Every appointment is personalized to your skin goals, and our team works with you to build a treatment plan that feels right — and gets results.
            </p>
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-[#731a2f] transition">
            View Our Treatments
          </button>
        </div>
      </div>
    </section>
  );
}