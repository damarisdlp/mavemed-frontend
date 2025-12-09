import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";

export default function AccessibilityPage() {
  const { locale = "en" } = useRouter();

  const strings = {
    title: locale === "es" ? "Accesibilidad" : "Accessibility",
    desc:
      locale === "es"
        ? "Conoce el compromiso de Mave Medical Spa con la accesibilidad para todos los visitantes y pacientes."
        : "Learn about Mave Medical Spa's commitment to accessibility for all visitors and patients.",
    body1:
      locale === "es"
        ? "Nuestra clínica cuenta con acceso por elevador, entradas amplias y personal disponible para apoyar con necesidades de movilidad. La accesibilidad digital es un esfuerzo continuo; agradecemos tus comentarios."
        : "Our facility features elevator access, wide entryways, and staff available to assist with mobility needs. Digital accessibility is an ongoing effort; feedback is welcome.",
    body2:
      locale === "es"
        ? "Contáctanos por teléfono, WhatsApp o correo para solicitar asistencia o compartir comentarios sobre accesibilidad para seguir mejorando."
        : "Contact us through phone, WhatsApp, or email to request assistance or share accessibility feedback so we can continue to improve.",
  };

  return (
    <>
      <Head>
        <title>
          {locale === "es" ? "Accesibilidad | Mave Medical Spa" : "Accessibility | Mave Medical Spa"}
        </title>
        <meta name="description" content={strings.desc} />
      </Head>

      <PromoBanner />
      <Header />

      <main className="bg-white">
        <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-black font-serif font-medium mb-4 leading-tight text-[clamp(2rem,5vw,3rem)]">
            {strings.title}
          </h1>
          <p className="text-gray-700 mb-6">
            {strings.desc}
          </p>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>{strings.body1}</p>
            <p>{strings.body2}</p>
          </div>
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
      ...(await serverSideTranslations(locale ?? "en", ["layout", "home", "location"], nextI18NextConfig)),
    },
  };
}
