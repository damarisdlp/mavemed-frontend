import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { allStaff } from "@/lib/data/allStaff";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";
import StaffDetails from "@/components/StaffDetails";
import ContactCTA from "@/components/ContactCTA";
import InstagramFeed from "@/components/InstagramFeed";
import ReviewsSection from "@/components/ReviewsSection";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";

export default function TeamMemberPage() {
  const router = useRouter();
  const { name } = router.query;
  const currentLocale = typeof router.locale === "string" ? router.locale : "en";

  const getLocalized = (field) => {
    if (typeof field === "object" && field !== null) {
      return field[currentLocale] || field.en || Object.values(field)[0] || "";
    }
    return field;
  };

  if (!router.isReady) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  const member = allStaff.find((s) => s.name === name);

  if (!member) {
    return (
      <>
        <PromoBanner />
        <Header />
        <div className="text-center mt-10 text-red-600">
          <p>Team member not found</p>
        </div>
        <Footer />
      </>
    );
  }

  const displayName = getLocalized(member.displayName);
  const title = getLocalized(member.title);
  const bio = getLocalized(member.bio);

  return (
    <>
      <Head>
        <title>{`${displayName} | ${title} at Mave Medical Spa in Tijuana`}</title>
        <meta
          name="description"
          content={`Learn more about ${displayName}, our ${title} at Mave Medical Spa in Tijuana. Specializing in ${bio?.slice?.(0, 120) || ""}...`}
        />
        <meta
          name="keywords"
          content={`Mave Medical Spa, ${displayName}, ${title}, Tijuana Med Spa, Aesthetic Experts, Medical Aesthetics Mexico`}
        />
        <meta
          property="og:title"
          content={`${displayName} | ${title} – Mave Medical Spa`}
        />
        <meta
          property="og:description"
          content={`Meet ${displayName}, a valued member of our expert team delivering advanced aesthetic care in Tijuana.`}
        />
        <meta
          property="og:image"
          content={`https://www.mavemedspa.com${member.image}`}
        />
        <meta
          property="og:url"
          content={`https://www.mavemedspa.com/ourteam/${member.name}`}
        />
        <meta property="og:type" content="profile" />
        <link
          rel="canonical"
          href={`https://www.mavemedspa.com/ourteam/${member.name}`}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: displayName,
              jobTitle: title,
              image: `https://www.mavemedspa.com${member.image}`,
              worksFor: {
                "@type": "MedicalBusiness",
                name: "Mave Medical Spa",
                url: "https://www.mavemedspa.com",
              },
              url: `https://www.mavemedspa.com/ourteam/${member.name}`,
              description: (bio || "").slice(0, 160),
            }),
          }}
        />
      </Head>

      <section className="bg-white">
        <PromoBanner />
        <Header />

        {/* Hero Banner for Team Member */}
        <div className="bg-white">
          <div className="relative w-full h-[380px] md:h-[460px]">
            <Image
              src={member.image || "/logo-mave.jpg"}
              alt={`${displayName} – ${title}`}
              fill
              priority
              className="object-cover object-[50%_18%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute inset-0 flex items-end px-6 md:px-20 pb-8 md:pb-12">
              <div className="text-white max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
                  {displayName}
                </h1>
                <p className="text-base md:text-lg text-white/90 mt-3">{title}</p>
              </div>
            </div>
          </div>
        </div>

        <StaffDetails
          member={{
            ...member,
            displayName,
            title,
            category: getLocalized(member.category),
            bio,
            favorites: member.favorites?.map((favorite) => ({
              ...favorite,
              serviceName: getLocalized(favorite.serviceName),
            })),
          }}
        />

        <ContactCTA />
        <InstagramFeed />
        <ReviewsSection />
        <Footer />
      </section>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? "en",
        ["layout", "team", "home"],
        nextI18NextConfig
      )),
    },
  };
}