import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import StaffFavorites from "./StaffFavorites";

export default function StaffDetails({ member }) {
  if (!member) return null;
  const { locale = "en" } = useRouter();

  const getLocalized = (field) => {
    if (typeof field === "object" && field !== null) {
      return field[locale] || field.en || Object.values(field)[0] || "";
    }
    return field ?? "";
  };

  const category = getLocalized(member.category);
  const displayName = getLocalized(member.displayName);
  const title = getLocalized(member.title);
  const bio = getLocalized(member.bio);

  return (
    <div className="w-full bg-white mt-10">
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-4">
          <p className="text-sm text-gray-500">
            <Link href="/ourteam" className="hover:underline hover:text-black">
              {locale === "es" ? "Nuestro Equipo" : "Our Team"}
            </Link>{" "}
            /{" "}
            <Link
              href={`/ourteam/#${category.replace(/\s+/g, "-").toLowerCase()}`}
              className="hover:underline hover:text-black"
            >
              {category}
            </Link>{" "}
            /{" "}
            <span className="text-gray-700 underline">{displayName}</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start mt-6">
          {/* Profile Image */}
          <div className="relative w-full md:w-2/5 h-80 md:h-125 rounded overflow-hidden shadow-md">
            <Image
              src={member.image}
              alt={displayName}
              fill
              className="object-[50%_20%] object-cover"
            />
          </div>
          
          {/* Bio */}
          <div className="w-full md:w-3/5">
            <h1 className="text-4xl font-serif text-black font-medium mt-2 mb-2">
              {displayName}
            </h1>
            <p className="text-xl text-gray-700 mb-8">{title}</p>
            <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
              {bio}
            </p>
          </div>
        </div>

        <StaffFavorites favorites={member.favorites || []} locale={locale} displayName={displayName} />
      </main>
    </div>
  );
}
