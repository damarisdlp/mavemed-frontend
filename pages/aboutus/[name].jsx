import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { staff } from "../../data/staff";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
  );
}