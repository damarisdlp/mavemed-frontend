export const swedishMassage = {
  slug: "swedish-massage",
  category: "body-treatments",
  categoryDisplayName: "Body & Medical Treatments",
  serviceDisplayName: "Relaxing Swedish Massage",
  isPopular: false,
  isPromoEligible: true,
  image: "/body.jpg",
  image2: "/body2.jpg",
  description: "A gentle, full-body massage to relieve tension, improve circulation, and promote overall relaxation.",
  standardPrice: "$65USD",
  promoPrice: "$55USD",
  notes: [
    "Includes aromatherapy upon request",
    "Not a deep tissue massage",
    "Ideal for stress relief and general wellness"
  ],
  details: "This classic Swedish massage uses light to moderate pressure with long, flowing strokes. It helps improve lymphatic flow, reduce stress, and increase oxygen levels in the blood.",
  goals: [
    "Promote relaxation",
    "Relieve muscular tension",
    "Improve blood circulation"
  ],
  treatableAreas: ["Full Body"],
  pricing: [
    {
      serviceChild: "Full Body",
      isPromoEligible: true,
      standardPrice: "$65USD",
      promoPrice: "$55USD",
      notes: null
    }
  ],
  addOns: [],
  expectations: {
    preTreatment: [
      "Arrive well-hydrated. Avoid heavy meals beforehand."
    ],
    postTreatment: [
      "Drink plenty of water to support lymphatic drainage. Mild soreness may occur if it's your first massage."
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