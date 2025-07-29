import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Wrinkle Reducers",
    services: [
      {
        name: "Wrinkle Reducers",
        slug: "botulinum-toxin",
        image: "/wrinkle-reducers.jpg",
        description:
          "Smooth expression lines and reduce wrinkles for a youthful appearance using neuromodulators."
      }
    ]
  },
  {
    title: "Dermal Fillers",
    services: [
      {
        name: "Dermal Filler (Hyaluronic Acid)",
        slug: "hyaluronic-filler",
        image: "/fillers.jpg",
        description:
          "Add volume and contour to lips, cheeks, under-eyes, and jawline with immediate results."
      },
      {
        name: "Hyaluronidase (PB Serum)",
        slug: "hyaluronidase",
        image: "/fillers.jpg",
        description:
          "Safely dissolve previous hyaluronic acid filler using an enzyme-based solution."
      }
    ]
  },
  {
    title: "Biostimulatory Fillers",
    services: [
      {
        name: "Poly-L-Lactic Acid - PLLA (Sculptra)",
        slug: "sculptra",
        image: "/sculptra.jpg",
        description:
          "Stimulate natural collagen production to improve skin firmness, texture, and elasticity."
      },
      {
        name: "Hyaluronic Acid + CaHa (HarmonyCA)",
        slug: "harmonyca",
        image: "/sculptra.jpg",
        description:
          "Boost hydration and volume instantly while stimulating long-term collagen growth."
      }
    ]
  },
  {
    title: "Skin Tightening & Body Contouring",
    services: [
      {
        name: "High Intensity Frequency Ultrasound (Ultraformer MPT)",
        slug: "ultraformer",
        image: "/hifu.jpg",
        description:
          "High-intensity focused ultrasound for non-surgical face and body lifting."
      },
      {
        name: "PDO Threads",
        slug: "pdo-threads",
        image: "/threads.jpg",
        description:
          "Immediate skin lifting using absorbable threads. Common areas: face, neck, and jawline."
      },
         {
        name: "Radio Frequency (Venus Freeze)",
        slug: "enzymatic-therapy",
        image: "/body.jpg",
        description:
          "Non-surgical treatment for localized fat, fibrosis, and skin laxity."
      },
         {
        name: "Enzymatic Remodeling Therapy",
        slug: "enzymatic-therapy",
        image: "/body.jpg",
        description:
          "Non-surgical treatment for localized fat, fibrosis, and skin laxity."
      },
         {
        name: "Radio Frequency + Enzymatic Remodeling Therapy",
        slug: "enzymatic-therapy",
        image: "/body.jpg",
        description:
          "Non-surgical treatment for localized fat, fibrosis, and skin laxity."
      }
    ]
  },
  {
    title: "Skin Resurfacing & Light Treatments",
    services: [
      {
        name: "CO2 Laser Resurfacing (AcuPulse-Light & Deep)",
        slug: "co2-laser",
        image: "/laser-co2.jpg",
        description:
          "Fractional laser for treating sun damage, texture, deep wrinkles, and skin renewal."
      },
      {
        name: "Intense Pulsed Light (Harmony XL)",
        slug: "ipl",
        image: "/ipl.jpg",
        description:
          "Targets uneven skin tone, inflammation, rosacea, melasma, and sun spots."
      },
      {
        name: "Laser Hair Removal (Soprano Titanium Ice)",
        slug: "laser-hair-removal",
        image: "/hair-removal.jpg",
        description:
          "Pain-free permanent hair reduction with triple-wavelength technology for all skin types."
      }
    ]
  },
  {
    title: "Microneedling",
    services: [
      {
        name: "Microneedling",
        slug: "microneedling",
        image: "/microneedling.jpg",
        description:
          "Microneedling for natural skin rejuvenation and collagen stimulation."
      },
      {
        name: "Microneedling with Radio Frequency",
        slug: "microneedling",
        image: "/microneedling.jpg",
        description:
          "Microneedling for natural skin rejuvenation and collagen stimulation."
      },
      {
        name: "Skin Booster Cocktails",
        slug: "skin-boosters",
        image: "/meso.jpg",
        description:
          "Vitamin and peptide cocktails to deeply hydrate, revitalize, and improve skin texture."
      }
    ]
  },
  {
    title: "Mesotherapy & Skin Rejuvenation",
    services: [
      {
  name: "Rejuran (PN / PDRN)",
  slug: "rejuran",
  image: "/rejuran.jpg",
  description:
    "Rejuvenate your skin from within using Polynucleotide (PN) and PDRN technology to repair damaged skin, improve elasticity, and boost hydration. Ideal for treating acne scars, fine lines, and dull skin tone with regenerative results.",
},
{
  name: "Kiara Reju (PN + Hyaluronic Acid)",
  slug: "kiara-reju",
  image: "/kiara-reju.jpg",
  description:
    "Restore radiant, hydrated skin with Kiara Reju, a skin booster that combines polynucleotides and hyaluronic acid to visibly improve skin texture, plumpness, and glow. Perfect for dull, dry, or tired-looking skin.",
},
{
  name: "SkinVive by Juvéderm",
  slug: "skinvive",
  image: "/skinvive.jpg",
  description:
    "SkinVive is an FDA-approved hyaluronic acid injectable designed to deeply hydrate and smooth the skin from within, giving you a glowing, refreshed, and naturally radiant complexion. Ideal for improving skin texture, luminosity, and hydration in the cheeks.",
},
{
  name: "TKN HA 3",
  slug: "tkn-ha3",
  image: "/tkn-ha3.jpg",
  description:
    "TKN HA 3 is a polirevitalizing mesotherapy treatment that combines medium molecular weight hyaluronic acid with antioxidants and amino acids to deeply nourish, hydrate, and regenerate the skin. Great for dull, dehydrated, or aging skin.",
},
{
  name: "PRP (Platelet-Rich Plasma)",
  slug: "prp",
  image: "/prp.jpg",
  description:
    "PRP is a regenerative treatment that uses your own blood-derived growth factors to naturally stimulate collagen, reduce wrinkles, and improve skin texture. Ideal for facial rejuvenation, dark circles, and acne scars."
},
{
  name: "PRFM (Platelet-Rich Fibrin Matrix)",
  slug: "prfm",
  image: "/prp.jpg",
  description:
    "PRFM is an advanced form of PRP that forms a fibrin matrix for extended growth factor release. Ideal for under-eye hollows, skin tightening, and collagen regeneration with longer-lasting results."
}
    ]
  },
  {
    title: "Facial Treatments",
    services: [
      {
        name: "HydraFacial MD (Available for Face & Back)",
        slug: "hydrafacial",
        image: "/facials.jpg",
        description:
          "Deep vortex cleaning, exfoliation, extraction, and hydration for glowing, smooth skin."
      },
      {
        name: "Casmara Purifying Treatment",
        slug: "casmara-purifying",
        image: "/facials.jpg",
        description: "Deep cleansing facial with Casmara’s purifying algae mask to detoxify, balance oil production, and reduce acne breakouts. Ideal for oily or congested skin types."
    },
{
  name: "Casmara Retinol Proage 0.30%",
  slug: "casmara-retinol-proage",
  image: "/facials.jpg",
  description:
    "Professional-grade retinol peel with Casmara’s 0.30% formula to reduce fine lines, improve texture, and stimulate cell renewal. Ideal for aging, dull, or uneven skin."
},
{
  name: "Casmara Infinity Treatment",
  slug: "casmara-infinity",
  image: "/facials.jpg",
  description:
    "Luxurious anti-aging facial using Casmara’s Infinity line to firm, hydrate, and lift the skin while boosting collagen production. Suitable for mature skin or those seeking deep rejuvenation."
},
{
  name: "Janssen Ultra Renewal Facial",
  slug: "janssen-ultra-renewal",
  image: "/facials.jpg",
  description:
    "Anti-aging facial with AHA fruit acids and peptides to accelerate skin renewal, smooth texture, and reduce the appearance of wrinkles. Perfect for tired, aging, or sun-damaged skin."
},
{
  name: "Janssen Radiance Boost Facial",
  slug: "janssen-radiance-boost",
  image: "/facials.jpg",
  description:
    "Brightening facial designed to enhance glow, even out skin tone, and boost hydration using antioxidant-rich Janssen formulas. Ideal for dull or uneven skin."
}
    ]
  },
  {
  title: "Facial Add-Ons",
  services: [
    {
      name: "Brightening & Tone Correction Booster",
      slug: "brightening-booster",
      image: "/facials.jpg",
      description:
        "Evens out skin tone and visibly reduces dark spots caused by sun damage or pigmentation. Leaves the skin brighter, more radiant, and refreshed."
    },
    {
      name: "Firming & Contour Booster",
      slug: "firming-booster",
      image: "/facials.jpg",
      description:
        "Lifts and defines facial contours while enhancing elasticity. Ideal for sagging or aging skin needing added firmness and youthful tone."
    },
    {
      name: "Premium Anti-Aging Nutrition Booster",
      slug: "antiaging-nutrition-booster",
      image: "/facials.jpg",
      description:
        "Luxurious caviar-based treatment rich in proteins, vitamins, and antioxidants. Deeply nourishes, smooths fine lines, and boosts skin luminosity without invasive techniques."
    }
  ]
},
  {
    title: "Body Treatments",
    services: [
          {
      name: "Sclerotherapy",
      slug: "sclerotherapy",
      image: "/body.jpg",
      description:
        "Minimally invasive treatment for spider veins and small varicose veins. Injected solution causes gradual collapse and fading of visible veins."
    },
      {
        name: "Swedish Massage",
        slug: "swedish-massage",
        image: "/body.jpg",
        description:
          "Relaxing massage that improves circulation, detoxification, and muscle relief."
      },
          {
      name: "Cupping Therapy Add On with Swedish Massage",
      slug: "cupping",
      image: "/body.jpg",
      description:
        "Complementary massage therapy that uses suction cups to stimulate circulation and relieve deep muscle tension."
    },
      {
        name: "Wart & Skin Tag Removal",
        slug: "wart-removal",
        image: "/body.jpg",
        description:
          "Quick clinical procedure to remove benign skin growths like warts and tags."
      },
      {
        name: "Keloid Injection",
        slug: "keloid-injection",
        image: "/podiatry.jpg",
        description:
          "Reduce raised scars and keloids through targeted injectable therapy."
      },
    ]
  },
  {
    title: "Medical Podiatry",
    services: [
      {
        name: "Laser Nail Fungus Treatment",
        slug: "nail-fungus-laser",
        image: "/podiatry.jpg",
        description:
          "Non-invasive laser treatment to eliminate fungal nail infections."
      },
      {
        name: "Toenail Extraction",
        slug: "toenail-extraction",
        image: "/podiatry.jpg",
        description:
          "Medical procedure to partially or fully remove infected or ingrown toenails."
      },
      {
      name: "Calcaneal Spur Treatment",
      slug: "calcaneal-spur",
      image: "/podiatry.jpg",
      description:
        "Treatment for heel spurs that includes guided injection, evaluation, and supportive therapy. Helps relieve pain and inflammation from chronic plantar fasciitis."
    },{
      name: "Matrixectomy",
      slug: "matrixectomy",
      image: "/podiatry.jpg",
      description:
        "Surgical procedure to treat severe ingrown toenails by removing part or all of the nail matrix. Recommended for recurring infections and long-term relief."
    }
    ]
  }
];

export default function TreatmentsPage() {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16 ">
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
                        alt={service.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between h-[260px]">
                      <div>
                        <h3 className="text-lg text-black font-serif font-medium mb-2">{service.name}</h3>
                        <p className="text-2lg text-gray-600 mb-4">{service.description}</p>
                      </div>
                      <div className="mt-auto flex gap-2">
                        <Link
                          href="https://wa.me/+526642077675"
                          className="bg-black text-white px-4 py-2 rounded-full text-xs hover:bg-[#731a2f] transition"
                        >
                          Book Now
                        </Link>
                        <Link
                          href={`/services/${service.slug}`}
                          className="border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition"
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
    </>
  );
}