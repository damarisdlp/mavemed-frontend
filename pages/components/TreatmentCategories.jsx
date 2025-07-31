import Image from "next/image";
import Link from "next/link";
import { treatments } from "@/data/treatments";

export default function TreatmentCategories() {
  // Group treatments by category
  const categoriesMap = {};
  treatments.forEach((t) => {
    const key = t.category;
    if (!categoriesMap[key]) {
      categoriesMap[key] = {
        title: t.categoryDisplayName,
        services: []
      };
    }
    categoriesMap[key].services.push({
      name: t.displayName,
      slug: t.slug,
      image: t.image,
      description: t.description
    });
  });

  const categories = Object.values(categoriesMap);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        {categories.map((category, i) => (
          <div key={i} className="mb-16">
            <h2 className="text-2xl text-black md:text-3xl font-serif font-medium mb-6">
              {category.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {category.services.map((service, j) => (
                <div
                  key={j}
                  className="bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={service.image}
                      alt={`${service.name} in Tijuana – ${service.description}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between h-[260px]">
                    <div>
                      <h3 className="text-lg text-black font-serif font-medium mb-2">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link
                        href="https://wa.me/+526642077675"
                        className="bg-black text-white px-4 py-2 rounded-full text-xs hover:bg-[#731a2f] transition"
                        aria-label={`Book ${service.name} at Mave Medical Spa in Tijuana`}
                      >
                        Book Now
                      </Link>
                      <Link
                        href={`/treatments/${service.slug}`}
                        className="border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition"
                        aria-label={`Learn more about ${service.name}`}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}