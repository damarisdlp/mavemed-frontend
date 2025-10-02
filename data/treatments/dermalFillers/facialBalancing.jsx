export const facialBalancing = {
  urlSlug: "facial-balancing-fillers",
  category: "dermal-fillers",
  categoryDisplayName: "Dermal Fillers (Hyaluronic Acid)",
  serviceDisplayName: "Facial Balancing with Dermal Fillers",
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/facialfillers.jpg",
    secondary: "/facialfillers2.jpg"
  },
  description:
    "Achieve natural facial harmony with strategic dermal filler placement targeting the cheeks, chin, jawline, and midface. Ideal for restoring symmetry, contour, and volume loss.",
  details:
    "Facial balancing is a non-surgical aesthetic treatment that uses hyaluronic acid-based dermal fillers to enhance symmetry, define features, and restore youthful proportions. Areas treated often include the jawline, chin, cheeks, temples, and midface. Each plan is tailored for your unique facial structure and aesthetic goals to ensure natural-looking, harmonious results.",
  notes: [
    "Pricing depends on treatment zones and number of syringes used",
    "Typical plans involve 2–5 syringes for full-face balancing",
    "Designed for subtle but transformative rejuvenation"
  ],
  pricing: {
    startingPrice: "$305",
    startingPriceCurrency: "USD",
    promoPrice: null,
    promoPriceCurrency: null,
    options: [
      {
        optionName: "Stylage M with Lidocaine",
        isPromoEligible: false,
        optionPrice: "$305",
        optionCurrency: "USD",
        optionPromoPrice: null,
        optionPromoPriceCurrency: null,
        notes: [
          "Price per 1ml syringe",
          "Duration approx 9 to 12 months"
        ]
      },
      {
        optionName: "Juvéderm Volift with Lidocaine",
        isPromoEligible: false,
        optionPrice: "$365",
        optionCurrency: "USD",
        optionPromoPrice: null,
        optionPromoPriceCurrency: null,
        notes: [
          "Price per 1ml syringe",
          "Duration approx 12 to 15 months"
        ]
      },
      {
        optionName: "Juvéderm Voluma with Lidocaine",
        isPromoEligible: false,
        optionPrice: "$370",
        optionCurrency: "USD",
        optionPromoPrice: null,
        optionPromoPriceCurrency: null,
        notes: [
          "Price per 1ml syringe",
          "Duration approx 12 to 15 months"
        ]
      },
      {
        optionName: "Juvéderm Volux with Lidocaine",
        isPromoEligible: false,
        optionPrice: "$385",
        optionCurrency: "USD",
        optionPromoPrice: null,
        optionPromoPriceCurrency: null,
        notes: [
          "Price per 1ml syringe",
          "Duration approx 18 to 24 months"
        ]
      }
    ]
  },
  goals: [
    "Enhance facial symmetry and definition",
    "Lift and volumize cheeks and midface",
    "Define jawline, chin, and facial profile"
  ],
  treatableAreas: [
    "Jawline",
    "Chin",
    "Cheeks",
    "Temples",
    "Nasolabial folds",
    "Marionette lines",
    "Midface"
  ],
  addOns: [
    {
      serviceParent: "Wrinkle Reducer - Botox",
      serviceChild: "Lip Flip (Gummy Smile)",
      displayName: "Wrinkle Reducer - Botox - Lip Flip (Gummy Smile)",
      link: "/treatments/wrinkleReducers"
    },
    {
      serviceParent: "Casmara Retinol Pro Age Facial",
      serviceChild: null,
      displayName: "Casmara Retinol Pro Age Facial",
      link: "/treatments/facials/casmara/retinol"
    }
  ],
  expectations: {
    preTreatment: [
      "Avoid alcohol, aspirin, ibuprofen, and fish oil 48 hours before your appointment to reduce bruising.",
      "Stay hydrated and eat a light meal before arriving."
    ],
    postTreatment: [
      "Mild swelling and tenderness are expected and typically subside within 2–3 days.",
      "Avoid strenuous activity, alcohol, and facial pressure for at least 24 hours.",
      "Final results are visible once swelling settles, usually within 5–7 days."
    ]
  },
  faq: [
    {
      question: "What is facial balancing?",
      answer: "Facial balancing is an advanced filler technique to restore proportion and harmony across the face, often enhancing areas like the jawline, cheeks, and chin for a more symmetrical, youthful appearance."
    },
    {
      question: "How many syringes will I need?",
      answer: "Most full-face balancing treatments require 2–5 syringes depending on the number of areas treated and the desired outcome."
    },
    {
      question: "Will it look natural?",
      answer: "Yes. Our team specializes in subtle enhancements that maintain your natural features while improving symmetry and volume."
    },
    {
      question: "Can this be combined with other treatments?",
      answer: "Yes. Facial balancing is often paired with collagen stimulators, Botox®, or skin-tightening treatments for optimal results."
    }
  ]
};