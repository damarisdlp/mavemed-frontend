import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import { allTreatments } from "@/lib/data/allTreatments";
import { getPromoSummary } from "@/lib/utils/promo";

import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import Breadcrumbs from "@/components/Breadcrumbs";

const getLocalized = (field, locale) => {
  if (field && typeof field === "object") {
    return field[locale] || field.en || Object.values(field)[0] || "";
  }
  return field ?? "";
};

export default function PromosPage() {
  const router = useRouter();
  const locale = router.locale || "en";

  const promoTreatments = allTreatments.filter((t) => getPromoSummary(t, locale).isPromoActive);

  const categoriesMap = {};
  promoTreatments.forEach((t) => {
    const promoSummary = getPromoSummary(t, locale);
    if (!promoSummary.priceText) return;
    const catKey = t.category || getLocalized(t.categoryDisplayName, locale) || "Other";
    if (!categoriesMap[catKey]) {
      categoriesMap[catKey] = {
        title: t.categoryDisplayName || catKey,
        cards: [],
      };
    }
    const optionName = getLocalized(t.serviceDisplayName, locale);
    const description = getLocalized(t.description, locale);
    const pricePrefix = promoSummary.showStartingFrom
      ? locale === "es"
        ? "Desde "
        : "Starting From "
      : "";
    const price = `${pricePrefix}${promoSummary.priceText}`;
    categoriesMap[catKey].cards.push({
      optionName,
      description,
      price,
      image: t.images?.primary || "/placeholder.jpg",
      slug: t.urlSlug,
    });
  });

  const categories = Object.values(categoriesMap);

  return (
    <>
      <Head>
        <title>
          {locale === "es" ? "Promociones | Mave Medical Spa" : "Promotions | Mave Medical Spa"}
        </title>
        <meta
          name="description"
          content={
            locale === "es"
              ? "Promociones y ofertas especiales vigentes en Mave Medical Spa."
              : "Current promotions and special offers at Mave Medical Spa."
          }
        />
        <meta
          property="og:title"
          content={locale === "es" ? "Promociones | Mave Medical Spa" : "Promotions | Mave Medical Spa"}
        />
        <meta
          property="og:description"
          content={
            locale === "es"
              ? "Promociones y ofertas especiales vigentes en Mave Medical Spa."
              : "Current promotions and special offers at Mave Medical Spa."
          }
        />
        <meta property="og:image" content="https://www.mavemedspa.com/site_icon.png" />
        <meta property="og:url" content="https://www.mavemedspa.com/promos" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.mavemedspa.com/promos" />
      </Head>

      <PromoBanner />
      <Header />

              {/* Hero Banner for Team Member */}
              <div className="bg-white">
                <div className="relative w-full h-[50px] md:h-[60px]">
                        </div>
                </div>

      <div className="bg-white">
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Promos", href: "/promos" },
            ]}
          />
        </div>
      </div>

      <main className="bg-white">
        <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-25 md:pt-24">
          <h1 className="text-black font-serif font-medium mb-4 leading-tight text-[clamp(2rem,5vw,3rem)]">
            {locale === "es" ? "Promociones Vigentes" : "Current Promotions"}
          </h1>
          <p className="text-gray-700 mb-8 max-w-3xl">
            {locale === "es"
              ? "Explora nuestros servicios con precio promocional. Reserva ahora o conoce más sobre cada tratamiento."
              : "Explore our current promo-eligible services. Reserve now or learn more about each treatment."}
          </p>

          {categories.length === 0 && (
            <div className="text-gray-600">No active promos available right now.</div>
          )}

          {categories.map((cat, idx) => (
            <div
              key={idx}
              id={getLocalized(cat.title, locale).replace(/\s+/g, "-").toLowerCase()}
              className="mb-12"
            >
              <h2 className="text-xl sm:text-2xl text-black font-serif font-medium mb-4">
                {getLocalized(cat.title, locale)}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.cards.map((card, j) => (
                  <div
                    key={`${card.optionName}-${j}`}
                    className="bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col"
                  >
                    <div className="relative h-52 w-full">
                      <Image
                        src={card.image}
                        alt={card.optionName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 flex flex-col gap-3 flex-1">
                      <div>
                        <h3 className="text-lg text-black font-serif font-medium">
                          {card.optionName}
                        </h3>
                        {card.price && (
                          <p className="text-[#731a2f] font-semibold text-sm mt-1">{card.price}</p>
                        )}
                        <p className="text-sm text-gray-600 mt-2">
                          {card.description}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 mt-auto">
                        <button
                          type="button"
                          onClick={() => router.push(`/treatments/${card.slug}?lead=open`)}
                          className="bg-black text-white px-4 py-2 rounded-full text-xs hover:bg-[#731a2f] transition text-center"
                        >
                          {locale === "es" ? "Reservar ahora" : "Book Now"}
                        </button>
                        <Link
                          href={`/treatments/${card.slug}`}
                          className="border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition text-center"
                        >
                          {locale === "es" ? "Más información" : "Learn More"}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <InstagramFeed />
        <ReviewsSection />
        <LocationSection />
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? "en",
        ["layout", "home", "location"],
        nextI18NextConfig
      )),
    },
  };
}
