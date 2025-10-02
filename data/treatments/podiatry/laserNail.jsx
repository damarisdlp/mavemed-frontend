export const nailFungusLaser = {
  urlSlug: "nail-fungus-laser",
  category: "podiatry",
  categoryDisplayName: "Medical Podiatry Services",
  serviceDisplayName: "Laser Nail Fungus Treatment",
  isPopular: false,
  isPromoEligible: true,
  images: {
    primary: "/podiatry.jpg",
    secondary: "/podiatry2.jpg",
  },
  description:
    "Non-invasive laser therapy to eliminate toenail fungus and restore nail clarity without pain or medication.",
  details:
    "Laser nail fungus treatment uses targeted light energy (K-Laser Blue Derma) to penetrate the nail and destroy fungal infections at the root without harming surrounding tissue. The treatment is safe, effective, and requires no downtime. A typical protocol includes 6–8 sessions spaced 2–3 weeks apart for optimal results.",
  notes: [
    "Ideal for mild to moderate onychomycosis",
    "Painless, non-invasive, and drug-free",
    "Full results may take months as healthy nail regrows",
  ],
  pricing: {
    startingPrice: "$95 USD per session",
    startingPriceCurrency: "USD",
    promoPrice: "$80 USD per session",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "Single Nail",
        isPromoEligible: true,
        optionPrice: "$25 USD",
        optionCurrency: "USD",
        optionPromoPrice: "$20 USD",
        optionPromoPriceCurrency: "USD",
        notes: null,
      },
      {
        optionName: "Full Foot (5 Nails)",
        isPromoEligible: true,
        optionPrice: "$95 USD",
        optionCurrency: "USD",
        optionPromoPrice: "$80 USD",
        optionPromoPriceCurrency: "USD",
        notes: null,
      }
    ]
  },
  goals: [
    "Eliminate fungal infection from nail bed",
    "Improve nail clarity and texture",
    "Prevent future recurrence of infection"
  ],
  treatableAreas: [
    "Toenails",
    "Fingernails (case-by-case)"
  ],
  addOns: [
  ],
  expectations: {
    preTreatment: [
      "Wash feet thoroughly before arrival. Remove any nail polish or artificial nails.",
      "Notify your provider if you’ve recently taken oral or topical antifungal medications."
    ],
    postTreatment: [
      "Keep nails dry and clean to prevent reinfection.",
      "Disinfect shoes and change socks daily. Avoid barefoot walking in public areas.",
      "Nail appearance improves gradually as the nail grows out over several months."
    ]
  },
  faq: [
    {
      question: "Does laser nail fungus treatment hurt?",
      answer: "No. Most patients describe a gentle warmth or tingling. There is no pain or downtime involved."
    },
    {
      question: "When will I start to see clear nails?",
      answer: "Visible improvement may start within weeks, but full nail clarity may take several months as healthy nail grows in."
    },
    {
      question: "How many sessions do I need?",
      answer: "A standard protocol involves 6–8 sessions spaced 2–3 weeks apart. Severe cases may require additional follow-up."
    },
    {
      question: "Can the fungus come back?",
      answer: "Yes, reinfection is possible if shoes, socks, or nail tools remain contaminated. Proper aftercare and hygiene are essential."
    }
  ]
};