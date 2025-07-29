import Head from "next/head";
import Image from "next/image";

// Shared components
import Header from "./components/Header";
import PromoBanner from "./components/PromoBanner";
import TreatmentCategories from "./components/TreatmentCategories";

export default function TreatmentsPage() {
  return (
    <>
      <Head>
        <title>Our Treatments | Mave Medical Spa</title>
      </Head>

      {/* Promo + Header */}
      <PromoBanner />
      <Header />

      <div className="bg-white">
        {/* Hero Banner */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/logo-mave.jpg"
            alt="Our Treatments"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-start px-10 md:px-20">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-serif font-medium mb-4">
                Our Treatments
              </h1>
              <p className="text-base md:text-lg">
                Specializing in cosmetic injectable and medical-grade skincare
                treatments for people who want to look and feel their best.
              </p>
            </div>
          </div>
        </div>

        {/* Treatments Section */}
        <TreatmentCategories />
      </div>
    </>
  );
}