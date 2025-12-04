import { useRouter } from "next/router";
import Head from "next/head";
import { allStaff } from "@/lib/data/allStaff"; 

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";
import StaffDetails from "@/components/StaffDetails";
import ContactCTA from "@/components/ContactCTA";
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

  return (
    <>
      <Head>
        <title>
          {`${member.displayName} | ${member.title} at Mave Medical Spa in Tijuana`}
          </title>
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
        <meta property="og:url" content={`https://www.mavemedspa.com/ourteam/${member.name}`} />
        <meta property="og:type" content="profile" />
        <link rel="canonical" href={`https://www.mavemedspa.com/ourteam/${member.name}`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": getLocalized(member.displayName),
              "jobTitle": getLocalized(member.title),
              "image": `https://www.mavemedspa.com${member.image}`,
              "worksFor": {
                "@type": "MedicalBusiness",
                "name": "Mave Medical Spa",
                "url": "https://www.mavemedspa.com"
              },
              "url": `https://www.mavemedspa.com/ourteam/${member.name}`,
              "description": getLocalized(member.bio).slice(0, 160)
            })
          }}
        />
      </Head>

      <section className="bg-white">
        <PromoBanner />
        <Header />
        <StaffDetails member={{ ...member, displayName: getLocalized(member.displayName), title: getLocalized(member.title), bio: getLocalized(member.bio) }} />
        <ContactCTA />
        <Footer />
      </section>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"], nextI18NextConfig)),
    },
  };
}
