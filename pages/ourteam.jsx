import Head from "next/head";

// Shared components
import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import InstagramFeed from "@/components/InstagramFeed"
import ReviewsSection from "@/components/ReviewsSection"
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoLinks from "@/components/SeoLinks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { getLocalized } from "@/lib/i18n/getLocalized";


export default function TeamPage({ teamCategories = [] }) {
  const { t } = useTranslation("team");
  const { asPath, locale } = useRouter();

  return (
    <>
      <Head>
        <title>Meet Our Expert Team | Mave Medical Spa in Tijuana</title>
        <meta
          name="description"
          content="Get to know the team behind Mave Medical Spa — licensed doctors, cosmetologists, and aesthetic specialists delivering personalized care in Tijuana, Mexico."
        />
        <meta
          name="keywords"
          content="Tijuana Med Spa Team, Aesthetic Specialists, Cosmetic Doctors Mexico, Injectables Experts, Skin Rejuvenation Tijuana"
        />
        <meta property="og:title" content="Meet Our Expert Team | Mave Medical Spa in Tijuana" />
        <meta property="og:description" content="Discover the talented team of doctors and specialists behind Mave Medical Spa — Tijuana’s top destination for natural, ethical cosmetic results." />
        <meta property="og:image" content="https://www.mavemedspa.com/site_icon.png" />
        <meta property="og:type" content="website" />
        <SeoLinks asPath={asPath} locale={locale} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "@id": "https://www.mavemedspa.com/ourteam#webpage",
              name: "Meet Our Expert Team | Mave Medical Spa in Tijuana",
              url: "https://www.mavemedspa.com/ourteam",
              description:
                "Meet the expert team behind Mave Medical Spa — a physician-led medical spa in Tijuana, Mexico.",
              about: {
                "@id": "https://www.mavemedspa.com/#organization",
              },
              mainEntity: {
                "@type": "ItemList",
                itemListElement: [
                  {
                    "@type": "Person",
                    name: "Veronica",
                    jobTitle: "Founder",
                    url: "https://www.mavemedspa.com/ourteam/veronica",
                  },
                  {
                    "@type": "Person",
                    name: "Damaris",
                    jobTitle: "Chief Executive Director",
                    url: "https://www.mavemedspa.com/ourteam/damaris",
                  },
                  {
                    "@type": "Person",
                    name: "Dra. Nataly",
                    jobTitle: "MD",
                    url: "https://www.mavemedspa.com/ourteam/drnataly",
                  },
                  {
                    "@type": "Person",
                    name: "Dra. Jocelyn",
                    jobTitle: "MD",
                    url: "https://www.mavemedspa.com/ourteam/drjocelyn",
                  },
                  {
                    "@type": "Person",
                    name: "Vicky",
                    jobTitle: "Cosmetologist",
                    url: "https://www.mavemedspa.com/ourteam/vicky",
                  },
                  {
                    "@type": "Person",
                    name: "Manuel",
                    jobTitle: "Cosmetologist & Masseur",
                    url: "https://www.mavemedspa.com/ourteam/manuel",
                  },
                  {
                    "@type": "Person",
                    name: "Mayra",
                    jobTitle: "Cosmetologist",
                    url: "https://www.mavemedspa.com/ourteam/mayra",
                  },
                  {
                    "@type": "Person",
                    name: "Zury",
                    jobTitle: "Receptionist",
                    url: "https://www.mavemedspa.com/ourteam/zury",
                  },
                ],
              },
            }),
          }}
        />
      </Head>

      {/* Promo + Header */}
      <PromoBanner />
      <Header />

      {/* Hero Banner */}
      <div className="bg-white mt-15">
        <div className="relative w-full h-[250px] md:h-[300px]">
          <div className="absolute inset-0 bg-white flex items-center justify-start pt-20 px-10 md:px-20">
            <div className="text-white max-w-2xl">
              <Breadcrumbs
                className="mb-4"
                items={[
                  { label: "Home", href: "/" },
                  { label: "Our Team", href: "/ourteam" },
                ]}
              />
              <h1 className="text-4xl md:text-5xl text-black font-serif font-medium mb-4">
                {t("team.bannerTitle")}
              </h1>
              <p className="text-base md:text-lg text-black">
                {t("team.bannerSubtitle")}
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <Team categories={teamCategories} />
        <InstagramFeed />
        <ReviewsSection />
        <Footer />
        
      </div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  const { allStaff } = await import("@/lib/data/allStaff");
  const currentLocale = locale || "en";
  const localize = (field) => getLocalized(field, currentLocale);

  const categoriesMap = {};
  allStaff.forEach((s) => {
    const categoryLabel = localize(s.category || s.title || "Team");
    const title = localize(s.title);
    const displayName = localize(s.displayName);
    const bio = localize(s.bio);
    const key = categoryLabel || "Team";
    if (!categoriesMap[key]) {
      categoriesMap[key] = {
        category: key,
        staff: [],
      };
    }
    categoriesMap[key].staff.push({
      name: displayName,
      slug: s.name,
      image: s.image || "/placeholder.jpg",
      title,
      description: bio,
    });
  });

  const teamCategories = Object.values(categoriesMap);

  return {
    props: {
      teamCategories,
      ...(await serverSideTranslations(locale ?? "en", ["layout", "team", "home"], nextI18NextConfig)),
    },
  };
}
