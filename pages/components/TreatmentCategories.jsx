import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Wrinkle Reducers in Tijuana",
    services: [
      {
        name: "Botox Wrinkle Reducers",
        slug: "botulinum-toxin",
        image: "/wrinkle-reducers.jpg",
        description:
          "Reduce frown lines, forehead creases, and crow’s feet with FDA‑approved Botox treatments for a smoother, youthful appearance."
      }
    ]
  },
  {
    title: "Dermal Fillers (Hyaluronic Acid)",
    services: [
      {
        name: "Hyaluronic Acid Lip Fillers",
        slug: "hyaluronic-filler",
        image: "/fillers.jpg",
        description:
          "Restore and add volume and contour lips using hyaluronic acid dermal fillers with immediate visible results."
      },
      {
        name: "Facial Balancing with Dermal Fillers",
        slug: "facial-balancing-fillers",
        image: "/fillers.jpg",
        description:
        "Strategic dermal filler placement to enhance facial harmony, symmetry, and balance. Ideal for correcting asymmetry, contouring the jawline, chin, cheeks, and temples while preserving a natural aesthetic."
      },
      {
        name: "Hyaluronidase Filler Reversal",
        slug: "hyaluronidase",
        image: "/fillers.jpg",
        description:
          "Safely dissolve misplaced hyaluronic acid filler using hyaluronidase enzyme to restore natural contours and prevent complications."
      }
    ]
  },
  {
    title: "Biostimulatory Fillers in Tijuana",
    services: [
      {
        name: "Sculptra PLLA Collagen Stimulator",
        slug: "sculptra",
        image: "/sculptra.jpg",
        description:
          "Stimulate natural collagen production with Sculptra injections for long‑term volume restoration and firmer, youthful skin."
      },
      {
        name: "Hyaluronic Acid + CaHa (HarmonyCA)",
        slug: "harmonyca",
        image: "/sculptra.jpg",
        description:
          "Combine HA and calcium hydroxylapatite to instantly lift and hydrate skin while promoting longer‑term collagen strengthening."
      }
    ]
  },
  {
    title: "Skin Tightening & Sculpting",
    services: [
      {
        name: "Ultraformer MPT Ultrasound Lift",
        slug: "ultraformer-mpt",
        image: "/hifu.jpg",
        description:
          "Non‑surgical high‑intensity focused ultrasound for face and body lifting, collagen stimulation, and contour refinement."
      },
      {
        name: "PDO Thread Lift Skin Tightening",
        slug: "pdo-threads",
        image: "/threads.jpg",
        description:
          "Subtle non‑surgical face and neck lift using dissolvable PDO threads for improved contour, collagen, and skin firmness."
      },
      {
        name: "Radio Frequency Body Sculpting",
        slug: "venus-freeze",
        image: "/radiofrequency.jpg",
        description:
          "Pain‑free radiofrequency therapy targeting localized fat, fibrosis, and laxity to tighten skin and smooth surfaces."
      },
      {
        name: "Enzymatic Remodeling Therapy",
        slug: "enzymatic-therapy",
        image: "/body.jpg",
        description:
          "Target fat pockets, fibrosis, and uneven texture using enzyme‑infused therapy for improved contour and skin tone."
      },
      {
        name: "RF + Enzymatic Body Treatment",
        slug: "rf-enzymatic",
        image: "/body.jpg",
        description:
          "Combined radiofrequency and enzymatic therapy for stronger skin tightening, fat reduction, and body contour enhancement."
      }
    ]
  },
  {
    title: "Laser Treatments & Skin Resurfacing",
    services: [
      {
        name: "CO₂ Laser Resurfacing (AcuPulse)",
        slug: "co2-laser",
        image: "/laser-co2.jpg",
        description:
          "Fractional CO₂ laser for treating sun damage, deep wrinkles, texture, pigmentation, and skin renewal."
      },
      {
        name: "IPL Photofacial (Harmony XL)",
        slug: "ipl",
        image: "/ipl.jpg",
        description:
          "Intense pulsed light treatment to correct pigmentation, rosacea, sun spots, and improve skin clarity."
      },
      {
        name: "Laser Hair Removal (Soprano Titanium ICE)",
        slug: "laser-hair-removal",
        image: "/hair-removal.jpg",
        description:
          "Pain‑free permanent hair reduction with Alma Soprano Titanium ICE laser, suitable for all skin types."
      }
    ]
  },
  {
    title: "Microneedling & RF Skin Rejuvenation",
    services: [
      {
        name: "Microneedling Skin Renewal",
        slug: "microneedling",
        image: "/microneedling.jpg",
        description:
          "Precision microneedling to rejuvenate skin, stimulate collagen, refine texture, shrink pores, and reduce scars."
      },
      {
        name: "Scarlet RF Microneedling",
        slug: "rf-microneedling",
        image: "/microneedling.jpg",
        description:
          "Radiofrequency‑enhanced Scarlet RF microneedling for enhanced tightening, scar reduction, and skin elasticity improvement."
      },
      {
        name: "Skin Booster Cocktails",
        slug: "skin-boosters",
        image: "/meso.jpg",
        description:
          "Customized vitamin and peptide injections for deep hydration, skin revitalization, and visible glow."
      }
    ]
  },
  {
    title: "Mesotherapy & Growth Factor Infusions",
    services: [
      {
        name: "Rejuran PN/PDRN Skin Rejuvenation",
        slug: "rejuran",
        image: "/rejuran.jpg",
        description:
          "Regenerate skin using polynucleotide (PN/PDRN) injections to improve elasticity, heal acne scars, and boost hydration."
      },
      {
        name: "Kiara Reju (PN + Hyaluronic Acid)",
        slug: "kiara-reju",
        image: "/kiara-reju.jpg",
        description:
          "Combination of polynucleotides and hyaluronic acid to restore skin radiance, plumpness, hydration, and texture."
      },
      {
        name: "SkinVive by Juvéderm",
        slug: "skinvive",
        image: "/skinvive.jpg",
        description:
          "FDA‑approved hyaluronic acid injection for deep hydration and smoothing—ideal for achieving a naturally radiant complexion."
      },
      {
        name: "TKN HA‑3 Mesotherapy",
        slug: "tkn-ha3",
        image: "/tkn-ha3.jpg",
        description:
          "Hyaluronic acid with antioxidants and amino acids to nourish, hydrate, and regenerate dull, dehydrated, or aging skin."
      },
      {
        name: "PRP Platelet‑Rich Plasma",
        slug: "prp",
        image: "/prp.jpg",
        description:
          "Regenerative PRP therapy using your own blood platelets to rejuvenate skin, reduce fine lines, dark circles, and acne scars."
      },
      {
        name: "PRFM (Platelet‑Rich Fibrin Matrix)",
        slug: "prfm",
        image: "/prp.jpg",
        description:
          "Advanced PRFM forms a fibrin matrix for longer-lasting growth factor release—ideal for under-eye rejuvenation and skin tightening."
      }
    ]
  },
  {
    title: "Medical Facials & Add‑Ons",
    services: [
      {
        name: "HydraFacial MD (Face & Back)",
        slug: "hydrafacial",
        image: "/hydrafacial.jpg",
        description:
          "Vortex‑powered deep cleansing, exfoliation, extraction, and hydration for radiant, smooth skin."
      },
      {
        name: "Casmara Purifying Algae Facial",
        slug: "casmara-purifying",
        image: "/facials.jpg",
        description:
          "Deep detox facial using Casmara algae mask to balance oil production, clear congestion, and calm breakouts."
      },
      {
        name: "Casmara Retinol Pro‑Age Facial",
        slug: "casmara-retinol-proage",
        image: "/facials.jpg",
        description:
          "Professional retinol peel with Casmara's 0.30% formula to improve texture, renew cells, and reduce fine lines."
      },
      {
        name: "Casmara Infinity Anti‑Aging Facial",
        slug: "casmara-infinity",
        image: "/facials.jpg",
        description:
          "Luxury anti-aging facial with Casmara Infinity serum to firm, hydrate, and lift mature or aging skin."
      },
      {
        name: "Janssen Ultra Renewal Facial",
        slug: "janssen-ultra-renewal",
        image: "/facials.jpg",
        description:
          "AHA acid and peptide peel to accelerate skin renewal, soften wrinkles, and improve texture."
      },
      {
        name: "Janssen Radiance Boost Facial",
        slug: "janssen-radiance-boost",
        image: "/facials.jpg",
        description:
          "Brightening facial using antioxidant-rich formulas to even tone, hydrate, and enhance skin luminosity."
      }
    ]
  },
  {
    title: "Body & Medical Treatments",
    services: [
      {
        name: "Sclerotherapy for Vein Removal",
        slug: "sclerotherapy",
        image: "/body.jpg",
        description:
          "Inject treatment to remove spider veins and small varicose veins for improved leg aesthetics and health."
      },
      {
        name: "Relaxing Swedish Massage",
        slug: "swedish-massage",
        image: "/body.jpg",
        description:
          "Gentle Swedish massage to improve circulation, promote detoxification, and relieve muscle tension."
      },
      {
        name: "Cupping Therapy Add‑On",
        slug: "cupping",
        image: "/body.jpg",
        description:
          "Therapeutic cupping combined with massage for enhanced circulation, tension relief, and detox benefits."
      },
      {
        name: "Wart & Skin Tag Removal",
        slug: "wart-removal",
        image: "/body.jpg",
        description:
          "Clinical removal of benign skin growths like warts and tags for cleaner, smoother skin."
      },
      {
        name: "Keloid Scar Injection",
        slug: "keloid-injection",
        image: "/podiatry.jpg",
        description:
          "Targeted injectable therapy to flatten and soften raised keloid scars for cosmetic and functional improvement."
      }
    ]
  },
  {
    title: "Medical Podiatry Services",
    services: [
      {
        name: "Laser Nail Fungus Treatment",
        slug: "nail-fungus-laser",
        image: "/podiatry.jpg",
        description:
          "Non-invasive laser treatment to eliminate fungal infections in toenails and improve nail appearance."
      },
      {
        name: "Toenail Extraction Procedure",
        slug: "toenail-extraction",
        image: "/podiatry.jpg",
        description:
          "Partial or full toenail removal to treat ingrown, infected, or painful nails in a clinical setting."
      },
      {
        name: "Heel Spur (Calcaneal Spur) Injection",
        slug: "calcaneal-spur",
        image: "/podiatry.jpg",
        description:
          "Injection-based therapy for heel spur discomfort and plantar fasciitis relief."
      },
      {
        name: "Matrixectomy for Ingrown Toenails",
        slug: "matrixectomy",
        image: "/podiatry.jpg",
        description:
          "Surgical removal of nail matrix tissue for permanent relief from recurrent ingrown toenails."
      }
    ]
  }
];

export default function TreatmentCategories() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        {categories.map((category, i) => (
          <div key={i} className="mb-16">
            <h2 className="text-2xl text-black md:text-3xl font-serif font-medium mb-6">
              {category.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {category.services.map((service, j) => (
                <div
                  key={j}
                  className="bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={service.image}
                      alt={`${service.name} in Tijuana – ${service.description}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between h-[260px]">
                    <div>
                      <h3 className="text-lg text-black font-serif font-medium mb-2">
                        {service.name}
                      </h3>
                      <p className="text-2lg text-gray-600 mb-4">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-auto flex gap-2">
                      <Link
                        href="https://wa.me/+526642077675"
                        className="bg-black text-white px-4 py-2 rounded-full text-xs hover:bg-[#731a2f] transition"
                        aria-label={`Book ${service.name} at Mave Medical Spa in Tijuana`}
                      >
                        Book Now
                      </Link>
                      <Link
                        href={`/services/${service.slug}`}
                        className="border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition"
                        aria-label={`Learn more about ${service.name}`}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}