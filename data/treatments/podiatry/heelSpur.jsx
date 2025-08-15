export const calcanealSpur = {
  slug: "calcaneal-spur",
  category: "podiatry",
  categoryDisplayName: "Medical Podiatry Services",
  serviceDisplayName: "Heel Spur Injection (Calcaneal Spur)",
  isPopular: false,
  isPromoEligible: true,
  image: "/podiatry.jpg",
  image2: "/podiatry2.jpg",
  description: "Targeted injection therapy to reduce inflammation and pain caused by calcaneal spurs and plantar fasciitis.",
  standardPrice: "$95USD",
  promoPrice: "$80USD",
  notes: [
    "Ultrasound-guided if required",
    "Usually includes corticosteroids or regenerative compounds depending on severity"
  ],
  details: "A medical injection is applied to the inflamed tissue around the heel spur to reduce pain and swelling. Often combined with rest, footwear adjustments, or physical therapy.",
  goals: [
    "Reduce heel pain",
    "Minimize inflammation",
    "Support recovery from plantar fasciitis"
  ],
  treatableAreas: ["Heel", "Plantar fascia insertion"],
  pricing: [
    {
      serviceChild: "Single Injection",
      isPromoEligible: true,
      standardPrice: "$95USD",
      promoPrice: "$80USD",
      notes: null
    }
  ],
  addOns: [],
  expectations: {
    preTreatment: [
      "Avoid taking NSAIDs for 24 hours prior. Inform us of any blood thinners or allergies."
    ],
    postTreatment: [
      "Avoid strenuous impact activities for 48 hours. Ice the area if needed. Follow any post-injection care instructions."
    ]
  },
  faq: [
    {
      question: "How long does pain relief last?",
      answer: "It varies. Some patients feel relief in days, others require additional sessions or physical therapy to maintain results."
    },
    {
      question: "Is the injection safe?",
      answer: "Yes. It is a common outpatient procedure performed under medical supervision."
    }
  ]
};