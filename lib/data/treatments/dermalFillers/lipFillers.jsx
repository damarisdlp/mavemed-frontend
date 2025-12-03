export const lipFillers = {
  urlSlug: "hyaluronic-acid-lip-fillers",
  category: "dermal-fillers",
  categoryDisplayName: "Dermal Fillers (Hyaluronic Acid)",
  serviceDisplayName: "Hyaluronic Acid Lip Fillers",
  isPopular: true,
  isPromoEligible: false,
  images: {
    primary: "/fillers.jpg",
    secondary: "/fillers2.jpg"
  },
  description:
    "Achieve fuller, more defined lips instantly with hyaluronic acid-based lip fillers. This non-surgical treatment enhances lip volume, symmetry, and hydration with natural-looking results.",
  details:
    "Hyaluronic acid lip fillers are used to enhance the size, shape, and contour of the lips. Whether you’re looking to restore lost volume, balance asymmetry, or define the Cupid’s bow, this treatment offers subtle and customizable results. At Mave, every injection is guided by facial balancing principles for natural outcomes.",
  notes: [
    "Immediate results with minimal recovery time",
    "Treatment tailored for volume, definition, or symmetry",
    "Touch-ups recommended every 6–12 months depending on filler type"
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
          "Estimated duration: 9 to 12 months"
        ]
      },
      {
        optionName: "Juvéderm Volift with Lidocaine",
        isPromoEligible: false,
        optionPrice: "$360",
        optionCurrency: "USD",
        optionPromoPrice: null,
        optionPromoPriceCurrency: null,
        notes: [
          "Price per 1ml syringe",
          "Estimated duration: 12 to 15 months"
        ]
      }
    ]
  },
  goals: [
    "Enhance lip volume and projection",
    "Smooth and hydrate the lip surface",
    "Define borders and improve lip shape"
  ],
  treatableAreas: [
    "Upper lip",
    "Lower lip",
    "Cupid's bow",
    "Vermilion border"
  ],
  addOns: [
    {
      serviceParent: "Wrinkle Reducer - Botox",
      serviceChild: "Lip Flip (Gummy Smile)",
      displayName: "Botox - Lip Flip (Gummy Smile)",
      link: "/treatments/wrinkleReducers/botox"
    }
  ],
  expectations: {
    preTreatment: [
      "Avoid alcohol, blood-thinning medications, and supplements like fish oil or vitamin E 48 hours prior to treatment.",
      "Come with clean skin and no makeup on the lips or surrounding area."
    ],
    postTreatment: [
      "Mild swelling or bruising may occur and typically resolves within 24–48 hours.",
      "Avoid heat exposure, strenuous activity, and makeup on the treated area for 12 hours.",
      "Full results typically settle within one week."
    ]
  },
  faq: [
    {
      question: "How long do lip fillers last?",
      answer:
        "Lip filler results typically last 6 to 12 months, depending on the type of filler and individual metabolism."
    },
    {
      question: "Will my lips look natural?",
      answer:
        "Yes. At Mave, we focus on enhancing your natural beauty with subtle, balanced results that suit your facial features."
    },
    {
      question: "Does the treatment hurt?",
      answer:
        "Most clients feel only mild discomfort. We apply a numbing cream before treatment, and the fillers contain lidocaine for added comfort."
    },
    {
      question: "Can lip filler be reversed?",
      answer:
        "Yes. If needed, hyaluronic acid fillers can be safely dissolved with an enzyme called hyaluronidase."
    }
  ]
};