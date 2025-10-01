export const rejuran = {
  slug: "rejuran",
  category: "mesotherapy",
  categoryDisplayName: "Mesotherapy & Growth Factor Infusions",
  serviceParentName: "Rejuran Healer (PN/PDRN Skin Rejuvenation)",
  currency: "USD",
  isPopular: true,
  isPromoEligible: true,
  image: "/rejuran.jpg",
  image2: "/rejuran2.jpg",
  description:
    "Rejuran Healer uses polynucleotides (PN/PDRN) derived from salmon DNA to stimulate cellular repair, boost collagen, and restore skin integrity. Ideal for acne scars, dull or aging skin, and post-procedure recovery.",
  protocol: {
    recommendedSessions: 3,
    intervalWeeks: [3,4],
  },
  promoInfo: {
    numberOfSessions: 2,
  },
  notes: [
    "A full protocol includes 2 sessions spaced 3–4 weeks apart",
    "May be injected or applied topically post-RF or microneedling",
    "Clinically proven to enhance elasticity, hydration, and skin healing"
  ],
  details:
    "Rejuran is an advanced regenerative treatment featuring PDRN (polydeoxyribonucleotide), a biologically active compound derived from salmon DNA. It promotes tissue regeneration, calms inflammation, and activates fibroblasts, leading to improved skin texture, firmness, and clarity. Safe for all skin types, it’s especially effective for sensitive, scarred, or photoaged skin.",
  goals: [
    "Repair and regenerate damaged skin cells",
    "Boost elasticity and skin firmness",
    "Reduce fine lines, acne scars, and inflammation"
  ],
  treatableAreas: [
    "Full Face",
    "Neck",
    "Décolleté",
  ],
  prices: [
    { serviceChildName: "Full Face",applicationMethod: "Microneedling", priceType: "standard", price: 300},
    { serviceChildName: "Full Face",applicationMethod: "Mesotherapy", priceType: "standard", price: 300},
    { serviceChildName: "Full Face",applicationMethod: "Microneedling", priceType: "standard", price: 300},
    { serviceChildName: "Full Face",applicationMethod: "Mesotherapy", priceType: "standard", price: 300},

    { serviceChildName: "Neck",applicationMethod: "Microneedling", priceType: "standard", price: 300},
    { serviceChildName: "Neck",applicationMethod: "Mesotherapy", priceType: "standard", price: 300},
    { serviceChildName: "Neck",applicationMethod: "Microneedling", priceType: "standard", price: 300},
    { serviceChildName: "Neck",applicationMethod: "Mesotherapy", priceType: "standard", price: 300},

    { serviceChildName: "Décolleté",applicationMethod: "Microneedling", priceType: "standard", price: 300},

  ],
  addOns: [
    {
      serviceParent: "Sculptra PLLA Collagen Stimulator",
      serviceChild: "Per Vial",
      displayName: "Sculptra PLLA Collagen Stimulator",
      link: "/treatments/collagenBiostimulator/sculptra"
    },
    {
      serviceParent: "PDO Thread Lift Facial Rejuvenation",
      serviceChild: "PDO Thread Lift Facial Rejuvenation",
      displayName: "PDO Thread Lift Facial Rejuvenation",
      link: "/treatments/skinTightSculpt/pdoThreads"
    }
  ],
  expectations: {
    preTreatment: [
      "Avoid alcohol, anti-inflammatory medications, and blood thinners for 24 hours prior.",
      "Arrive with clean, makeup-free skin."
    ],
    postTreatment: [
      "Expect mild redness, swelling, or small bumps for 48–72 hours post-injection.",
      "Avoid direct sun, heat exposure, or exfoliation for 72 hours.",
      "Do not apply makeup or actives (retinoids, acids) for at least 24 hours."
    ]
  },
  faq: [
    {
      question: "What is Rejuran and how does it work?",
      answer:
        "Rejuran contains PDRN, a DNA fragment from salmon that promotes tissue regeneration and anti-inflammatory effects. It activates fibroblasts and enhances collagen and elastin production over time."
    },
    {
      question: "How is Rejuran different from PRP or dermal fillers?",
      answer:
        "Rejuran regenerates tissue at the cellular level, PRP uses your own blood-derived growth factors, and fillers add volume. Rejuran is best for improving skin quality and healing."
    },
    {
      question: "Who is Rejuran best suited for?",
      answer:
        "Patients with acne scars, fine lines, redness, dull skin, or signs of aging who want gentle but effective regeneration without added volume."
    },
    {
      question: "When will I see results from Rejuran?",
      answer:
        "You may notice initial hydration and glow within days. Collagen regeneration builds over 6–8 weeks, especially after 2–3 sessions."
    },
    {
      question: "Is Rejuran safe for all skin types?",
      answer:
        "Yes, it’s safe and highly effective on sensitive, dry, or compromised skin. It’s often used post-laser or microneedling to accelerate recovery."
    }
  ]
};