export const nailFungusLaser = {
  slug: "nail-fungus-laser",
  category: "podiatry",
  categoryDisplayName: "Medical Podiatry Services",
  serviceDisplayName: "Laser Nail Fungus Treatment",
  isPopular: false,
  isPromoEligible: true,
  image: "/podiatry.jpg",
  image2: "/podiatry2.jpg",
  description: "Non-invasive laser therapy to eliminate toenail fungus and restore nail clarity.",
  standardPrice: "$95USD per session",
  promoPrice: "$80USD per session",
  notes: [
    "Recommended protocol: 1 session every 2–3 weeks, total 6–8 sessions",
    "Treatment is safe, painless, and requires no downtime"
  ],
  details: "Using focused laser light (K-Laser Blue Derma), this treatment targets fungal colonies beneath the toenail without damaging surrounding tissue. The procedure is safe, effective, and requires no medication.",
  goals: [
    "Kill fungal infection at the root",
    "Improve nail appearance and clarity",
    "Prevent recurrence of infection"
  ],
  treatableAreas: ["Toenails", "Fingernails (case-dependent)"],
  pricing: [
    {
      serviceChild: "Single Nail",
      isPromoEligible: true,
      standardPrice: "$25USD",
      promoPrice: "$20USD",
      notes: null
    },
    {
      serviceChild: "Full Foot (5 Nails)",
      isPromoEligible: true,
      standardPrice: "$95USD",
      promoPrice: "$80USD",
      notes: null
    }
  ],
  addOns: [],
  expectations: {
    preTreatment: [
      "Clean feet thoroughly and avoid polish. Let the staff know if you've taken antifungal medications."
    ],
    postTreatment: [
      "Avoid re-contamination by disinfecting shoes and socks. Keep nails clean and dry."
    ]
  },
  faq: [
    {
      question: "Does it hurt?",
      answer: "Not at all. Most patients describe it as a warm sensation. There is no downtime or pain afterward."
    },
    {
      question: "When will I see results?",
      answer: "Healthy nail regrowth can take months. However, the fungus dies quickly, and improvement is visible within weeks."
    }
  ]
};