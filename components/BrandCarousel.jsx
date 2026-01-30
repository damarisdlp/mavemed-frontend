import { useTranslation } from "next-i18next";

const brands = [
  { src: "/botox.svg", alt: "Botox®" },
  { src: "/hydrafacial.svg", alt: "HydraFacial®", className: "logo-hydrafacial" },
  { src: "/sculptra.svg", alt: "Sculptra®" },
  { src: "/sylfirmx.svg", alt: "Sylfirm X®", className: "logo-sylfirmx" },
  { src: "/ultraformermpt.svg", alt: "Ultraformer MPT®", className: "logo-ultraformer" },
  { src: "/pbserum.svg", alt: "PB Serum®" },
  { src: "/casmara.svg", alt: "Casmara®", className: "logo-casmara" },
  { src: "/harmonyca.svg", alt: "HarmonyCa®", className: "logo-harmonyca" },
  { src: "/juvederm.svg", alt: "Juvéderm®", className: "logo-juvederm" },
  { src: "/rejuran.svg", alt: "Rejuran®", className: "logo-rejuran" },
  { src: "/toskani.svg", alt: "Toskani®", className: "logo-toskani" },
];

export default function BrandCarousel() {
  const { t } = useTranslation("layout");
  const trackItems = [...brands, ...brands];

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-8">
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-xl md:text-2xl font-serif text-black">
            {t("brandsWeWorkWith")}
          </h2>
        </div>
        <div className="brand-marquee" aria-label="Our Brands">
          <div className="brand-track">
            {trackItems.map((brand, idx) => (
              <div className="brand-item" key={`${brand.src}-${idx}`}>
                <img
                  src={brand.src}
                  alt={brand.alt}
                  loading="lazy"
                  className={brand.className || ""}
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
        }

        .brand-track {
          display: flex;
          align-items: center;
          gap: 36px;
          width: max-content;
          animation: scroll 39.6s linear infinite;
        }

        .brand-item {
          width: 162px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 6px;
          filter: grayscale(100%);
          opacity: 0.9;
          transition: opacity 0.3s ease, filter 0.3s ease;
        }

        .brand-item img {
          height: 37px;
          width: 100%;
          display: block;
          object-fit: contain;
        }

        .logo-hydrafacial {
          transform: scale(1.95);
        }

        .logo-sylfirmx {
          transform: scale(1.73);
        }

        .logo-ultraformer {
          transform: scale(1.73);
        }

        .logo-casmara {
          transform: scale(1.87);
        }

        .logo-harmonyca {
          transform: scale(1.54);
        }

        .logo-juvederm {
          transform: scale(1.54);
        }

        .logo-rejuran {
          transform: scale(1.31);
        }

        .logo-toskani {
          transform: scale(1.6);
        }

        .brand-item:hover {
          filter: none;
          opacity: 1;
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
            gap: 24px;
            animation-duration: 30.8s;
          }

          .brand-item {
            width: 139px;
            height: 48px;
          }

          .brand-item img {
            height: 33px;
          }
        }
      `}</style>
    </section>
  );
}
