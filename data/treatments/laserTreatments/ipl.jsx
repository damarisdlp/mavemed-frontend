export const ipl = {
  slug: "ipl",
  category: "laser-resurfacing",
  categoryDisplayName: "Laser Treatments & Skin Resurfacing",
  serviceDisplayName: "IPL Photofacial (Harmony XL)",
  isPopular: false,
  isPromoEligible: true,
  image: "/ipl.jpg",
  image2: "/ipl2.jpg",
  description:
    "Light-based therapy to reduce sun damage, pigmentation, redness, and boost overall skin clarity.",
  standardPrice: "$170USD per session",
  promoPrice: "$145USD",
  notes: [
    "Package pricing available for multiple sessions",
    "Requires photo evaluation for clearance",
    "No active tan or self-tanner before session"
  ],
  details:
    "IPL (Intense Pulsed Light) delivers broad-spectrum light to target pigment, sun spots, redness, and broken capillaries. It gently resurfaces and revitalizes without damaging the top layer of skin.",
  goals: [
    "Reduce pigmentation and age spots",
    "Minimize redness and rosacea",
    "Brighten dull skin and improve tone"
  ],
  treatableAreas: [
    "Face",
    "Neck",
    "Chest",
    "Hands",
    "Shoulders",
    "Arms"
  ],
  pricing: [
    {
      serviceChild: "Full Face",
      isPromoEligible: true,
      standardPrice: "$170USD",
      promoPrice: "$145USD",
      notes: null
    },
    {
      serviceChild: "Chest",
      isPromoEligible: true,
      standardPrice: "$185USD",
      promoPrice: "$160USD",
      notes: null
    },
    {
      serviceChild: "Face + Neck + Chest",
      isPromoEligible: true,
      standardPrice: "$395USD",
      promoPrice: "$350USD",
      notes: null
    }
  ],
  addOns: [
    {
      serviceParent: "Platelet-Rich Plasma (PRP)",
      serviceChild: null,
      displayName: "PRP Add-On",
      link: "/treatments/prp"
    }
  ],
  expectations: {
    preTreatment: [
      "Avoid sun exposure, tanning beds, and self-tanners for 2 weeks before treatment.",
      "Discontinue retinoids or acids 3–5 days prior to your session."
    ],
    postTreatment: [
      "Pigmented areas may darken temporarily before flaking off over 5–7 days.",
      "Use SPF daily to maintain results and prevent new pigmentation."
    ]
  },
  faq: [
    {
      question: "How many sessions will I need?",
      answer: "Most patients need 3–5 sessions spaced 3–4 weeks apart for best results."
    },
    {
      question: "Is there downtime?",
      answer: "There is no official downtime. However, pigmented areas may darken or flake for a few days post-treatment."
    },
    {
      question: "Can I wear makeup after IPL?",
      answer: "Yes, makeup can be worn immediately unless otherwise advised by your provider."
    },
    {
      question: "Does IPL hurt?",
      answer: "Patients describe it as a warm snap—similar to a rubber band. It’s tolerable and quick."
    }
  ]
};