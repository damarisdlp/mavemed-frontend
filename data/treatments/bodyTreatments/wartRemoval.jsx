export const wartRemoval = {
  urlSlug: "wart-removal",
  category: "body-medical-treatments",
  categoryDisplayName: "Body & Medical Treatments",
  serviceDisplayName: "Wart & Skin Tag Removal",
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/wart-removal.jpg",
    secondary: "/wart-removal2.jpg",
  },
  description:
    "Safe clinical removal of warts, skin tags, and benign growths for a smoother, cleaner appearance.",
  details:
    "We use cryotherapy, cautery, or excision techniques to remove benign skin growths. Treatments are quick and performed by trained professionals to minimize scarring and ensure safety.",
  notes: [
    "Price varies based on size, quantity, and location",
    "Performed under medical supervision",
    "Post-care instructions will be provided"
  ],
  pricing: {
    startingPrice: "$45",
    startingPriceCurrency: "USD",
    promoPrice: "",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "Small (1–2 lesions)",
        isPromoEligible: false,
        optionPrice: "$45",
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null,
      },
      {
        optionName: "Medium (3–5 lesions)",
        isPromoEligible: false,
        optionPrice: "$70",
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null,
      },
      {
        optionName: "Large (6+ lesions)",
        isPromoEligible: false,
        optionPrice: "$95",
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null,
      },
    ],
  },
  goals: [
    "Remove unsightly growths",
    "Prevent irritation or catching",
    "Restore clear, smooth skin"
  ],
  treatableAreas: [
    "Face",
    "Neck",
    "Underarms",
    "Torso",
    "Groin",
    "Feet"
  ],
  addOns: [],
  expectations: {
    preTreatment: [
      "Avoid applying any creams or ointments on the treatment area before your appointment."
    ],
    postTreatment: [
      "Keep the area clean and dry. Avoid sun exposure until fully healed."
    ]
  },
  faq: [
    {
      question: "Is wart removal painful?",
      answer: "You may feel a brief sting or discomfort, but local anesthesia is available if needed."
    },
    {
      question: "Will the growths come back?",
      answer: "Most do not, but recurring lesions may require additional sessions depending on the root cause."
    }
  ]
};