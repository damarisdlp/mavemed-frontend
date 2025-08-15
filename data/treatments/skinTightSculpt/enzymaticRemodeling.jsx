export const enzymaticTherapy = {
  slug: "enzymatic-therapy",
  category: "skin-tightening",
  categoryDisplayName: "Skin Tightening & Sculpting",
  serviceDisplayName: "Enzymatic Remodeling Therapy",
  isPopular: false,
  isPromoEligible: true,
  image: "/body.jpg",
  image2: "/enzymatic2.jpg",
  description:
    "Localized fat reduction and fibrosis breakdown using targeted enzyme therapy for smoother contour and skin texture.",
  standardPrice: "$130USD per session",
  promoPrice: "$110USD per session with package",
  notes: [
    "Non-surgical injectable treatment with visible skin smoothing effects",
    "Multiple sessions typically required",
    "Ideal for post-liposuction fibrosis, localized fat, and skin tone improvement"
  ],
  details:
    "Enzymatic therapy uses lipolytic and anti-fibrotic enzymes injected into specific areas to break down dense connective tissue, improve circulation, and promote fat metabolism. Commonly used for patients post-lipo or with stubborn pockets of fat or fibrosis.",
  goals: [
    "Break down post-lipo fibrosis",
    "Improve localized fat reduction",
    "Even out texture and skin tone"
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
      serviceChild:    "Localized Area (any small zone)",
      isPromoEligible: true,
      standardPrice:   "$130USD",
      promoPrice:      "$110USD",
      notes:           null
    },
    {
      serviceChild:    "Larger Zones (abdomen, thighs, flanks)",
      isPromoEligible: true,
      standardPrice:   "$160USD",
      promoPrice:      "$140USD",
      notes:           null
    }
  ],
  addOns: [
    {
      serviceParent: "RF Body Sculpting",
      serviceChild:  null,
      displayName:   "RF Body Sculpting",
      link:          "/treatments/enzymaticRemodeling"
    }
  ],
  expectations: {
    preTreatment: [
      "Avoid anti-inflammatories and alcohol 24 hours prior to reduce bruising risk.",
      "Hydrate well to support lymphatic drainage post-treatment."
    ],
    postTreatment: [
      "Bruising and tenderness are common for 2–5 days in treated areas.",
      "Wear compression garments if recommended by provider for enhanced results.",
      "Lymphatic massage or movement is encouraged to assist enzyme clearance."
    ]
  },
  faq: [
    {
      question: "Is this the same as mesotherapy?",
      answer:
        "While similar in concept, enzymatic remodeling uses specific enzymes rather than lipolytic cocktails, and is more effective for fibrosis and post-lipo recovery."
    },
    {
      question: "How many sessions will I need?",
      answer:
        "Typically 4–6 sessions are recommended, spaced 1–2 weeks apart, depending on severity and area."
    },
    {
      question: "Can I combine this with RF or massage?",
      answer:
        "Yes, combination therapy enhances drainage and skin tightening. RF or lymphatic massage is often recommended after enzyme sessions."
    },
    {
      question: "Does it hurt?",
      answer:
        "Mild discomfort or stinging during injection is normal, followed by soreness or light bruising."
    },
    {
      question: "How soon will I see results?",
      answer:
        "Initial smoothing may be visible within 1–2 weeks. More dramatic improvements occur gradually over several sessions."
    }
  ]
};