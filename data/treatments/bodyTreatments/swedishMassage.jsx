export const swedishMassage = {
  urlSlug: "swedish-massage",
  category: "body-medical-treatments",
  categoryDisplayName: "Body & Medical Treatments",
  serviceDisplayName: "Relaxing Swedish Massage",
  isPopular: false,
  isPromoEligible: false,
  images: {
    primary: "/swiss-msg.jpg",
    secondary: "/swiss-msg2.jpg",
  },
  description:
    "A gentle, full-body massage to relieve tension, improve circulation, and promote overall relaxation.",
  details:
    "This classic Swedish massage uses light to moderate pressure with long, flowing strokes. It helps improve lymphatic flow, reduce stress, and increase oxygen levels in the blood.",
  notes: [
    "Includes aromatherapy upon request",
    "Not a deep tissue massage",
    "Ideal for stress relief and general wellness"
  ],
  pricing: {
    startingPrice: "$65",
    startingPriceCurrency: "USD",
    promoPrice: "$55",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "Relaxing Swedish Massage - Full Body",
        isPromoEligible: false,
        optionPrice: "$65",
        optionCurrency: "USD",
        optionPromoPrice: "",
        optionPromoPriceCurrency: "USD",
        notes: null,
      }
    ],
  },
  goals: [
    "Promote relaxation",
    "Relieve muscular tension",
    "Improve blood circulation"
  ],
  treatableAreas: [
    "Full Body"
  ],
  addOns: [
    {
      serviceParent: "Wrinkle Reducer - Botox",
      serviceChild:  "Any Zone",
      displayName:   "Wrinkle Reducer - Botox",
      link:          "/treatments/wrinkle-reducers-botox"
    },
    {
      serviceParent: "HydraFacial MD",
      serviceChild:  "Hydrafacial MD - Face",
      displayName:   "HydraFacial MD - Face",
      link:          "/treatments/hydrafacial"
    },
    {
      serviceParent: "Casmara Purifying Algae Facial",
      serviceChild:  "Casmara Purifying Algae Facial",
      displayName:   "Casmara Purifying Algae Facial",
      link:          "/treatments/casmara-purifying"
    },
  ],
  expectations: {
    preTreatment: [
      "Arrive well-hydrated.",
      "Avoid heavy meals beforehand."
    ],
    postTreatment: [
      "Drink plenty of water to support lymphatic drainage.",
      "Mild soreness may occur if it's your first massage."
    ]
  },
  faq: [
    {
      question: "Is this massage good for chronic pain?",
      answer: "While it helps with tension, Swedish massage is better for relaxation. Chronic pain may require a deeper modality."
    },
    {
      question: "Can I combine this with other treatments?",
      answer: "Yes, many clients pair it with facials, RF therapy, or body sculpting for a holistic session."
    }
  ]
};