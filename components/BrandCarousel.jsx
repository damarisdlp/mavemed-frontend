import { useTranslation } from "next-i18next";

const brands = [
  { src: "/allergan.svg", alt: "Allergan Aesthetics", width: 148, mobileWidth: 118 },
  { src: "/hydrafacial.svg", alt: "HydraFacial®", width: 190, mobileWidth: 150 },
  { src: "/galderma.svg", alt: "Galderma", width: 140, mobileWidth: 112 },
  { src: "/sylfirmx.svg", alt: "Sylfirm X®", width: 132, mobileWidth: 106 },
  { src: "/ultraformermpt.svg", alt: "Ultraformer MPT®", width: 142, mobileWidth: 114 },
  { src: "/pbserum.svg", alt: "PB Serum®", width: 128, mobileWidth: 102 },
  { src: "/casmara.svg", alt: "Casmara®", width: 134, mobileWidth: 108 },
  { src: "/rejuran.svg", alt: "Rejuran®", width: 122, mobileWidth: 98 },
  { src: "/toskani.svg", alt: "Toskani®", width: 130, mobileWidth: 104 },
  { src: "/alma.svg", alt: "Alma Lasers", width: 130, mobileWidth: 104 },
];

export default function BrandCarousel() {
  const { t } = useTranslation("layout");
  const trackItems = [...brands, ...brands];

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex items-center justify-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-serif text-black">
            {t("brandsWeWorkWith")}
          </h2>
        </div>
        <div className="brand-marquee" aria-label="Our Brands">
          <div className="brand-track">
            {trackItems.map((brand, idx) => (
              <div
                className="brand-item"
                key={`${brand.src}-${idx}`}
                style={{
                  "--logo-width": `${brand.width}px`,
                  "--logo-width-mobile": `${brand.mobileWidth}px`,
                }}
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  loading="lazy"
                  className={`brand-logo ${brand.className || ""}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .brand-marquee {
          position: relative;
          overflow: hidden;
          width: 100%;
          padding: 4px 0;
        }

        .brand-track {
          display: flex;
          align-items: center;
          gap: clamp(16px, 2.4vw, 32px);
          width: max-content;
          animation: scroll 39.6s linear infinite;
        }

        .brand-item {
          width: auto;
          height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 8px;
          filter: grayscale(100%);
          opacity: 0.9;
          transition: opacity 0.3s ease, filter 0.3s ease;
        }

        .brand-logo {
          height: 38px;
          width: auto;
          max-width: var(--logo-width);
          display: block;
          object-fit: contain;
        }

        @media (hover: hover) {
          .brand-item:hover {
            filter: none;
            opacity: 1;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .brand-track {
            gap: clamp(12px, 3.6vw, 20px);
            animation-duration: 25s;
          }

          .brand-item {
            width: auto;
            height: 54px;
            padding: 8px 6px;
          }

          .brand-logo {
            height: 30px;
            width: auto;
            max-width: var(--logo-width-mobile);
          }

        }

        @media (prefers-reduced-motion: reduce) {
          .brand-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
