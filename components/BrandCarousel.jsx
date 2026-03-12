import { useEffect, useRef, useState } from "react";
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
  { src: "/fillmed.svg", alt: "Fillmed Laboratories", width: 130, mobileWidth: 104 },
];

const AUTO_SPEED_PX_PER_SEC = 34;
const RESUME_DELAY_MS = 1200;

export default function BrandCarousel() {
  const { t } = useTranslation("layout");

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const groupRef = useRef(null);

  const rafRef = useRef(0);
  const resumeTimeoutRef = useRef(0);
  const lastTsRef = useRef(0);
  const offsetRef = useRef(0);
  const groupWidthRef = useRef(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);

  const [, forceRender] = useState(0);

  const applyTransform = () => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  };

  const normalizeOffset = () => {
    const width = groupWidthRef.current;
    if (!width) return;
    while (offsetRef.current <= -width) offsetRef.current += width;
    while (offsetRef.current > 0) offsetRef.current -= width;
  };

  const pause = () => {
    pausedRef.current = true;
  };

  const scheduleResume = (delay = 0) => {
    window.clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = window.setTimeout(() => {
      pausedRef.current = false;
    }, delay);
  };

  useEffect(() => {
    const updateWidth = () => {
      groupWidthRef.current = groupRef.current?.offsetWidth || 0;
      normalizeOffset();
      applyTransform();
      forceRender((n) => n + 1);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useEffect(() => {
    const step = (ts) => {
      if (!lastTsRef.current) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      if (!pausedRef.current && !draggingRef.current && groupWidthRef.current > 0) {
        offsetRef.current -= AUTO_SPEED_PX_PER_SEC * dt;
        normalizeOffset();
        applyTransform();
      }

      rafRef.current = window.requestAnimationFrame(step);
    };

    rafRef.current = window.requestAnimationFrame(step);
    return () => {
      window.cancelAnimationFrame(rafRef.current);
      window.clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const onPointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    draggingRef.current = true;
    pause();
    window.clearTimeout(resumeTimeoutRef.current);
    dragStartXRef.current = event.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    viewportRef.current?.setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!draggingRef.current) return;
    const deltaX = event.clientX - dragStartXRef.current;
    offsetRef.current = dragStartOffsetRef.current + deltaX;
    normalizeOffset();
    applyTransform();
  };

  const onPointerUp = (event) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    viewportRef.current?.releasePointerCapture?.(event.pointerId);
    scheduleResume(RESUME_DELAY_MS);
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex items-center justify-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl text-black font-serif font-medium">
            {t("brandsWeWorkWith")}
          </h2>
        </div>

        <div
          ref={viewportRef}
          className="brand-marquee"
          aria-label="Our Brands"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onMouseEnter={pause}
          onMouseLeave={() => scheduleResume(0)}
          onFocus={() => pause()}
          onBlur={() => scheduleResume(0)}
        >
          <div ref={trackRef} className="brand-track">
            <div ref={groupRef} className="brand-group">
              {brands.map((brand) => (
                <div
                  className="brand-item"
                  key={`group-a-${brand.src}`}
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
                    draggable="false"
                  />
                </div>
              ))}
            </div>
            <div className="brand-group" aria-hidden="true">
              {brands.map((brand) => (
                <div
                  className="brand-item"
                  key={`group-b-${brand.src}`}
                  style={{
                    "--logo-width": `${brand.width}px`,
                    "--logo-width-mobile": `${brand.mobileWidth}px`,
                  }}
                >
                  <img
                    src={brand.src}
                    alt=""
                    loading="lazy"
                    className={`brand-logo ${brand.className || ""}`}
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .brand-marquee {
          position: relative;
          overflow: hidden;
          width: 100%;
          padding: 4px 0;
          touch-action: pan-y;
          user-select: none;
          cursor: grab;
        }

        .brand-marquee:active {
          cursor: grabbing;
        }

        .brand-track {
          display: flex;
          align-items: center;
          will-change: transform;
        }

        .brand-group {
          display: flex;
          align-items: center;
          gap: clamp(16px, 2.4vw, 32px);
          padding-right: clamp(16px, 2.4vw, 32px);
          flex-shrink: 0;
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
          pointer-events: none;
        }

        @media (hover: hover) {
          .brand-item:hover {
            filter: none;
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .brand-group {
            gap: clamp(12px, 3.6vw, 20px);
            padding-right: clamp(12px, 3.6vw, 20px);
          }

          .brand-item {
            height: 54px;
            padding: 8px 6px;
          }

          .brand-logo {
            height: 30px;
            max-width: var(--logo-width-mobile);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-track {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
