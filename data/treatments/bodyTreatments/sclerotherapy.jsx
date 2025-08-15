export const sclerotherapy = {
  slug: "sclerotherapy",
  category: "body-treatments",
  categoryDisplayName: "Body & Medical Treatments",
  serviceDisplayName: "Sclerotherapy for Vein Removal",
  isPopular: false,
  isPromoEligible: true,
  image: "/body.jpg",
  image2: "/body2.jpg",
  description: "Minimally invasive injection treatment to eliminate spider veins and improve leg appearance.",
  standardPrice: "$135USD",
  promoPrice: "$115USD",
  notes: [
    "Multiple sessions may be needed for optimal results",
    "Compression stockings required post-treatment",
    "Ideal for non-varicose surface veins"
  ],
  details: "Sclerotherapy involves injecting a sclerosing agent into small superficial veins, causing them to collapse and fade from view. It is commonly used to treat spider veins and small varicose veins on the legs.",
  goals: [
    "Reduce visibility of spider veins",
    "Improve leg aesthetics",
    "Prevent worsening of vascular issues"
  ],
  treatableAreas: ["Thighs", "Calves", "Ankles"],
  pricing: [
    {
      serviceChild: "One Leg (Up to 3 zones)",
      isPromoEligible: true,
      standardPrice: "$135USD",
      promoPrice: "$115USD",
      notes: null
    }
  ],
  addOns: [],
  expectations: {
    preTreatment: [
      "Avoid aspirin, ibuprofen, or alcohol 24 hours prior. Wear loose clothing."
    ],
    postTreatment: [
      "Wear compression stockings for 5–7 days. Avoid sun exposure and high-impact activity."
    ]
  },
  faq: [
    {
      question: "How long before I see results?",
      answer: "Veins typically fade over 3–6 weeks. Larger veins may take longer or require more sessions."
    },
    {
      question: "Is the procedure painful?",
      answer: "There may be a slight stinging or cramping sensation, but most patients tolerate it well."
    }
  ]
};