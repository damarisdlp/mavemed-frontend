// components/AboutSection.jsx
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1">
          <Image
            src="/group.jpg"
            alt="About Mave Group Picture"
            className="w-full rounded-lg object-cover" 
            width={600} height={400} 
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4">
            Why SoCal Patients Trust Mave
          </h2>
          <p className="text-gray-600 text-lg">
            We specialize in blending clinical results with aesthetic balance. Our border-based location makes world-class skincare accessible, whether you’re coming from San Diego, Los Angeles, or right here in Tijuana.
          </p>
        </div>
      </div>
    </section>
  );
}