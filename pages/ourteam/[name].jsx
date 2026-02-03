import { useRouter } from "next/router";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";
import StaffDetails from "@/components/StaffDetails";
import ContactCTA from "@/components/ContactCTA";
import InstagramFeed from "@/components/InstagramFeed";
import ReviewsSection from "@/components/ReviewsSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SeoLinks from "@/components/SeoLinks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";
import { getLocalized } from "@/lib/i18n/getLocalized";

export default function TeamMemberPage({ member, favoriteCards = [] }) {
  const router = useRouter();
  const currentLocale = typeof router.locale === "string" ? router.locale : "en";
  const { asPath } = router;

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

  const displayName = member.displayName;
  const title = member.title;
  const bio = member.bio;

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
        <meta property="og:type" content="profile" />
        <SeoLinks asPath={asPath} locale={currentLocale} />

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
                "@id": "https://www.mavemedspa.com/#organization",
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
          <div className="relative w-full h-[50px] md:h-[60px]">
          </div>
        </div>

        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Team", href: "/ourteam" },
              { label: displayName },
            ]}
          />
        </div>

        <StaffDetails
          member={{
            ...member,
            displayName,
            title,
            category: member.category,
            bio,
          }}
          favoriteCards={favoriteCards}
        />

        <ContactCTA />
        <InstagramFeed />
        <ReviewsSection />
        <Footer />
      </section>
    </>
  );
}

export async function getStaticPaths({ locales = [] }) {
  const { allStaff } = await import("@/lib/data/allStaff");
  const paths = allStaff.flatMap((member) =>
    locales.map((loc) => ({
      params: { name: member.name },
      locale: loc,
    }))
  );
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ locale, params }) {
  const { allStaff } = await import("@/lib/data/allStaff");
  const { allTreatments } = await import("@/lib/data/allTreatments");
  const member = allStaff.find((s) => s.name === params?.name);
  if (!member) {
    return { notFound: true };
  }

  const currentLocale = locale || "en";
  const localize = (field) => getLocalized(field, currentLocale);

  const favoriteCards = (member.favorites || [])
    .map((fav) => {
      const treatment =
        allTreatments.find((t) => t.urlSlug === fav.treatmentSlug) ||
        allTreatments.find((t) => {
          const name = localize(t.displayName || t.serviceDisplayName);
          return (
            (name && name === localize(fav.serviceName)) ||
            t.urlSlug === fav.link?.split("/").pop()
          );
        }) ||
        {};
      const title = localize(
        treatment.displayName || treatment.serviceDisplayName || fav.serviceName || fav.optionName
      );
      const description = localize(treatment.description);
      const image = treatment.images?.primary || "/placeholder.jpg";
      const slug = treatment.urlSlug || fav.treatmentSlug || fav.link || "#";
      return title
        ? {
            serviceName: title,
            description,
            image,
            slug,
          }
        : null;
    })
    .filter(Boolean);

  const memberPayload = {
    name: member.name,
    displayName: localize(member.displayName),
    title: localize(member.title),
    category: localize(member.category),
    bio: localize(member.bio),
    image: member.image,
  };

  return {
    props: {
      member: memberPayload,
      favoriteCards,
      ...(await serverSideTranslations(
        locale ?? "en",
        ["layout", "team", "home"],
        nextI18NextConfig
      )),
    },
  };
}
