export const wartRemoval = {
  slug: "wart-removal",
  category: "body-treatments",
  categoryDisplayName: "Body & Medical Treatments",
  serviceDisplayName: "Wart & Skin Tag Removal",
  isPopular: false,
  isPromoEligible: true,
  image: "/body.jpg",
  image2: "/body2.jpg",
  description: "Safe clinical removal of warts, skin tags, and benign growths for a smoother, cleaner appearance.",
  standardPrice: "Starting at $45USD",
  promoPrice: "Starting at $40USD",
  notes: [
    "Price varies based on size, quantity, and location",
    "Performed under medical supervision",
    "Post-care instructions will be provided"
  ],
  details: "We use cryotherapy, cautery, or excision techniques to remove benign skin growths. Treatments are quick and performed by trained professionals to minimize scarring and ensure safety.",
  goals: [
    "Remove unsightly growths",
    "Prevent irritation or catching",
    "Restore clear, smooth skin"
  ],
  treatableAreas: ["Face", "Neck", "Underarms", "Torso", "Groin", "Feet"],
  pricing: [
    {
      serviceChild: "Small (1–2 lesions)",
      isPromoEligible: true,
      standardPrice: "$45USD",
      promoPrice: "$40USD",
      notes: null
    },
    {
      serviceChild: "Medium (3–5 lesions)",
      isPromoEligible: true,
      standardPrice: "$70USD",
      promoPrice: "$65USD",
      notes: null
    },
    {
      serviceChild: "Large (6+ lesions)",
      isPromoEligible: true,
      standardPrice: "$95USD",
      promoPrice: "$85USD",
      notes: null
    }
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