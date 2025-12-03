export const keloidInjection = {
  urlSlug: "keloid-injection",
  category: "body-medical-treatments",
  categoryDisplayName: "Body & Medical Treatments",
  serviceDisplayName: "Keloid Scar Injection",
  isPopular: false,
  isPromoEligible: false,

  images: {
    primary: "/keloid.jpg",
    secondary: "/keloid2.jpg",
  },

  description:
    "Targeted corticosteroid or anti-fibrotic injections to flatten and soften raised keloid scars.",
  details:
    "This medical treatment involves injecting corticosteroids or specialized anti-fibrotic agents directly into keloid tissue. It helps reduce inflammation, pain, and scar thickness while improving cosmetic appearance over time.",

  notes: [
    "Multiple sessions may be required depending on size and response",
    "Performed only under medical supervision",
    "Available for cosmetic or symptomatic relief"
  ],

  pricing: {
    startingPrice: "NEED PRICE",
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "Single Injection Area",
        isPromoEligible: false,
        optionPrice: "NEED PRICE",
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null,
      },
    ],
  },

  goals: [
    "Reduce raised scar thickness",
    "Improve scar appearance",
    "Relieve itching or discomfort"
  ],

  treatableAreas: [
    "Ears",
    "Chest",
    "Shoulders",
    "Back",
    "Jawline",
    "Any area with a keloid scar"
  ],

  addOns: [],

  expectations: {
    preTreatment: [
      "No special preparation needed unless otherwise directed by the doctor."
    ],
    postTreatment: [
      "Expect mild tenderness or redness. Avoid sun exposure and picking the area. Results may take several sessions."
    ]
  },

  faq: [
    {
      question: "How many sessions are needed?",
      answer: "It depends on the scar. Some keloids flatten in 2–3 sessions, while others may need 4 or more spaced over several weeks."
    },
    {
      question: "Are results permanent?",
      answer: "Improvement is usually long-lasting, though recurrence can happen. We monitor each case and adjust treatment as needed."
    }
  ]
};