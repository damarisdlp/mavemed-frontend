import Image from "next/image";
import Link from "next/link";
import { allTreatments } from "@/data/allTreatments";

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

          {/* Bio */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-serif text-black font-medium mt-2 mb-2">
              {member.displayName}
            </h1>
            <p className="text-xl text-gray-700 mb-8">{member.title}</p>
            <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
              {member.bio}
            </p>
          </div>
        </div>

        {/* Favorite Treatments */}
        {hasFavorites && (
          <div className="mt-12">
            <h2 className="text-2xl text-black font-serif font-medium mb-4">
              {member.displayName}'s Favorite Treatments
            </h2>

            {member.favorites.map((favorite, idx) => {
              const match =
                allTreatments.find(
                  (t) =>
                    t.serviceDisplayName === favorite.serviceName ||
                    t.urlSlug === favorite.link?.split("/").pop()
                ) || {};

              const hasPromo =
                match?.isPromoEligible &&
                match?.pricing?.promoPrice &&
                match.pricing.promoPrice.trim() !== "";

              return (
                <div key={idx} className="mb-6 bg-gray-50 p-5 rounded-lg">
                  <p className="text-lg font-semibold text-black">
                    {favorite.serviceName}
                  </p>

                  {match?.description && (
                    <p className="text-sm text-gray-700 mt-1">
                      {match.description}
                    </p>
                  )}

                  {match?.pricing?.startingPrice && (
                    <p className="text-sm text-gray-700 mt-2">
                      <span className="font-semibold">Price:</span>{" "}
                      {match.pricing.startingPrice}{" "}
                      {match.pricing.startingPriceCurrency}
                      {hasPromo && (
                        <>
                          {" "}
                          |{" "}
                          <span className="font-semibold">
                            Exclusive Pricing:
                          </span>{" "}
                          {match.pricing.promoPrice}{" "}
                          {match.pricing.promoPriceCurrency}
                        </>
                      )}
                    </p>
                  )}

                  {favorite.link && (
                    <Link
                      href={favorite.link}
                      className="text-sm underline text-black mt-2 inline-block hover:text-[#731a2f]"
                    >
                      Learn more about {favorite.serviceName}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}