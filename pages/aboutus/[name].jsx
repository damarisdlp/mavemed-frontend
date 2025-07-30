import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { staff } from "../../data/staff";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function TeamMemberPage() {
  const router = useRouter();
  const { name } = router.query;

  if (!router.isReady) return null;

  const member = staff.find((person) => person.name === name);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <p className="text-lg">Team member not found.</p>
      </div>
    );
  }

  return (
    <>
    <Head>
  <title>{`${member.displayName} | ${member.title} at Mave Medical Spa in Tijuana`}</title>
  <meta
    name="description"
    content={`Learn more about ${member.displayName}, our ${member.title} at Mave Medical Spa in Tijuana. Specializing in ${member.bio.slice(0, 120)}...`}
  />
  <meta
    name="keywords"
    content={`Mave Medical Spa, ${member.displayName}, ${member.title}, Tijuana Med Spa, Aesthetic Experts, Medical Aesthetics Mexico`}
  />
  <meta property="og:title" content={`${member.displayName} | ${member.title} – Mave Medical Spa`} />
  <meta property="og:description" content={`Meet ${member.displayName}, a valued member of our expert team delivering advanced aesthetic care in Tijuana.`} />
  <meta property="og:image" content={`https://www.mavemedspa.com${member.image}`} />
  <meta property="og:url" content={`https://www.mavemedspa.com/aboutus/${member.name}`} />
  <meta property="og:type" content="profile" />
  <link rel="canonical" href={`https://www.mavemedspa.com/aboutus/${member.name}`} />

  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": member.displayName,
      "jobTitle": member.title,
      "image": `https://www.mavemedspa.com${member.image}`,
      "worksFor": {
        "@type": "MedicalBusiness",
        "name": "Mave Medical Spa",
        "url": "https://www.mavemedspa.com"
      },
      "url": `https://www.mavemedspa.com/aboutus/${member.name}`,
      "description": member.bio.slice(0, 160)
    })
  }}
/>
</Head>
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Header />

      <main className="flex-grow max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left: Image */}
          <div className="relative w-full md:w-1/2 h-[500px] rounded overflow-hidden shadow-md">
            <Image
              src={member.image}
              alt={member.displayName}
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Bio Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-serif font-medium mb-2">
              {member.displayName}
            </h1>
            <p className="text-xl text-gray-700 mb-6">{member.title}</p>
            <p className="text-gray-800 text-base leading-relaxed whitespace-pre-line mb-8">
              {member.bio}
            </p>

            {/* Favorite Treatments */}
            {member.favorites?.length > 0 && (
              <div>
                <h2 className="text-2xl font-serif font-medium mb-4">
                  {member.displayName}'s Favorite Treatments
                </h2>
                <div className="space-y-4">
                  {member.favorites.map((treatment, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 flex justify-between items-center px-4 py-3 rounded-md"
                    >
                      <div>
                        <p className="font-medium text-black">{treatment.name}</p>
                        <p className="text-sm text-gray-600">
                          Starting at ${treatment.price}{" "}
                          <span className="text-black font-semibold">| Package Exclusive Pricing  ${treatment.memberPrice}</span>
                        </p>
                      </div>
                      <Link
                        href={treatment.link}
                        className="bg-[#374a44] text-white px-4 py-2 rounded-full text-sm hover:bg-black transition"
                      >
                        Book
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
}