import Image from "next/image";
import Link from "next/link";

export default function StaffDetails({ member }) {
  if (!member) return null;

  const hasFavorites = member.favorites?.length > 0;

  return (
    <div className="w-full bg-white">
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12">

        {/* Breadcrumb */}
        <div className="mb-4">
          <p className="text-sm text-gray-500">
            <Link href="/ourteam" className="hover:underline hover:text-black">
              Our Team
            </Link>{" "}
            /{" "}
            <Link
              href={`/ourteam/#${member.title?.replace(/\s+/g, "-").toLowerCase()}`}
              className="hover:underline hover:text-black"
            >
              {member.title}
            </Link>{" "}
            /{" "}
            <span className="text-gray-700 underline">{member.displayName}</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start mt-6">
          {/* Profile Image */}
          <div className="relative w-full md:w-1/2 h-[500px] rounded overflow-hidden shadow-md">
            <Image
              src={member.image}
              alt={member.displayName}
              fill
              className="object-cover"
            />
          </div>

          {/* Bio & Favorites */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-serif text-black font-medium mt-2 mb-2">
              {member.displayName}
            </h1>
            <p className="text-xl text-gray-700 mb-8">{member.title}</p>
            <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
              {member.bio}
            </p>

            {/* Favorite Treatments Section */}
            {hasFavorites && (
              <div className="space-y-4 mt-8">
                <h2 className="text-2xl text-black font-serif font-medium mb-4">
                  {member.displayName}'s Favorite Treatments
                </h2>
                <div className="space-y-4">
                  {member.favorites.map((treatment, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 flex justify-between items-center px-4 py-3 rounded-md"
                    >
                      <div>
                        <p className="font-medium text-black">
                          {treatment.serviceName}
                        </p>

                        {(treatment.price || treatment.memberPrice) && (
                          <p className="text-sm text-gray-600">
                            {treatment.price && <>Starting at ${treatment.price}</>}{" "}
                            {treatment.memberPrice && (
                              <span className="text-black font-semibold">
                                | Package Exclusive Pricing ${treatment.memberPrice}
                              </span>
                            )}
                          </p>
                        )}
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
    </div>
  );
}