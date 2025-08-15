export const rfEnzymatic = {
  slug: "rf-enzymatic",
  category: "skin-tightening",
  categoryDisplayName: "Skin Tightening & Sculpting",
  serviceDisplayName: "RF + Enzymatic Body Treatment",
  isPopular: false,
  isPromoEligible: true,
  image: "/body.jpg",
  image2: "/rf-enzymatic2.jpg",
  description:
    "Synergistic treatment combining radiofrequency and enzyme therapy to sculpt the body, reduce fibrosis, and tighten skin.",
  standardPrice: "$190USD per session",
  promoPrice: "$165USD per session with package",
  notes: [
    "Ideal for post-liposuction fibrosis, uneven skin, and localized fat",
    "Combines RF-induced tightening with enzyme-based contouring",
    "Visible improvement in tone and smoothness with repeated sessions"
  ],
  details:
    "This treatment merges two powerful technologies: radiofrequency for dermal heating and collagen stimulation, and enzymatic injections for fat breakdown and fibrosis reduction. Recommended for post-lipo patients or individuals seeking body refinement without surgery.",
  goals: [
    "Enhance skin tightening",
    "Reduce subcutaneous fibrosis",
    "Refine body contour"
  ],
  treatableAreas: [
    "Abdomen",
    "Arms",
    "Thighs",
    "Back",
    "Flanks",
    "Under Chin (Submental)"
  ],
  pricing: [
    {
      serviceChild:    "Localized Combo Area",
      isPromoEligible: true,
      standardPrice:   "$190USD",
      promoPrice:      "$165USD",
      notes:           null
    }
  ],
  addOns: [
    {
      serviceParent: "Swedish Massage - Lymphatic Drainage",
      serviceChild:  null,
      displayName:   "Lymphatic Drainage Massage",
      link:          "/treatments/swedish-massage"
    }
  ],
  expectations: {
    preTreatment: [
      "Avoid anti-inflammatory meds and alcohol for 24 hours before your session.",
      "Drink plenty of water to support the body’s elimination process."
    ],
    postTreatment: [
      "Bruising, soreness, or heat in the treated area is normal and temporary.",
      "Wear compression if advised and avoid strenuous workouts for 24 hours.",
      "Visible changes typically occur within 1–2 weeks with optimal results after 4+ sessions."
    ]
  },
  faq: [
    {
      question: "Why combine RF and enzymes?",
      answer:
        "RF improves skin tightening and circulation, while enzymes reduce fat and fibrosis. The combo creates a stronger reshaping effect."
    },
    {
      question: "How often can I do this treatment?",
      answer:
        "Sessions can be done every 1–2 weeks depending on your provider’s recommendation."
    },
    {
      question: "Is it painful?",
      answer:
        "The RF portion feels like a warm massage. Enzymatic injections may cause brief stinging or tenderness afterward."
    },
    {
      question: "Do I need compression wear?",
      answer:
        "In many cases, yes. Your provider will guide you depending on the area treated and your response."
    }
  ]
};