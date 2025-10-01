export const botox = {
  urlSlug: "wrinkle-reducers-botox",
  category: "wrinkle-reducers",
  categoryDisplayName: "Wrinkle Reducers",
  serviceDisplayName: "Wrinkle Reducer - Botox",
  isPopular: true,
  isPromoEligible: true,
 images: {
    primary: "/botox.jpg",
    secondary: "/botox2.jpg",
  },
  description:
    "Reduce the appearance of fine lines and wrinkles for a smoother, more refreshed look.",
  details:
  "Neuromodulator injections temporarily relax facial muscles to smooth fine lines and dynamic wrinkles, enhancing skin texture and creating a more youthful, natural-looking appearance.",
  pricing: {
    displayStandard: "$6.25 tUSD / unit",
    displayPromo: "$250 USD / 45 units",
    zones: [
      {
        name: "Application on Any Zone",
        isPromoEligible: true,
        standardPrice: "$6.25 USD / unit",
        promoPrice: "$250 USD / 45 units",
        notes: [
          "Purchasing under the promo price grants patient access to a touch-up within 1-2 weeks after initial application at the respective promo per unit rate"
        ],
      },
    ],
  },
  goals: [
    "Smooth dynamic lines",
    "Lift eyebrows or corners of mouth",
    "Prevent future wrinkle formation"
  ],
  treatableAreas: [
    "Forehead",
    "Frown Lines (Glabella)",
    "Crow’s Feet",
    "Bunny Lines (Nasalis)",
    "Chin Dimples",
    "Perioral Package (Gummy Smile + Lip Elevators + Chin)",
    "Lip Flip (Gummy Smile)",
    "Eyebrow Lift",
    "Downturned Corners (Sad Smile)",
    "Perioral Lines",
    "Masseters (Jaw Slimming)",
    "Neck Bands (Platysma)",
    "Axillary Hyperhidrosis (Underarms)",
    "Palmar Hyperhidrosis (Hands)"
  ],
  addOns: [
    {
      serviceParent: "HydraFacial MD – Face",
      serviceChild:  "Face",
      displayName:   "HydraFacial MD - Face",
      link:          "/treatments/facials/hydrafacial/hydrafacialFace"
    },
    {
      serviceParent: "Casmara Purifying Algae Facial",
      serviceChild:  null,
      displayName:   "Casmara Purifying Algae Facial",
      link:          "/treatments/facials/casmara/purifying"
    }
  ],
  expectations: {
    preTreatment: [
      "Avoid alcohol, ibuprofen, aspirin, or any blood thinners for 24 hours prior to treatment to reduce the risk of bruising.",
      "Refrain from intense physical activity on the day of your appointment.",
      "Inform your provider of any recent vaccinations, medications, or medical conditions."
    ],
    postTreatment: [
      "Avoid touching, rubbing, or applying pressure to the treated areas for at least 4 hours.",
      "Remain upright and avoid lying down flat for 4 hours following treatment.",
      "Skip intense physical activity, alcohol, and saunas for 24 hours post-treatment to reduce the risk of swelling and migration.",
      "Mild swelling or bruising may occur and typically resolves within a few days. Ice can be applied gently if needed.",
      "Results begin to appear within 3–5 days, with full effect visible at 10–14 days."
    ]
  },
  faq: [
  {
    question: "How long does Botox take to work?",
    answer:   "You may begin to see softening of lines within 3 to 5 days, but full results usually appear between 10 to 14 days after treatment."
  },
  {
    question: "How long do Botox results last?",
    answer:   "Botox typically lasts 3 to 4 months. Longevity may vary depending on your metabolism, lifestyle, and treatment area."
  },
  {
    question: "Will I look frozen or unnatural?",
    answer:   "Not at all. Our providers specialize in natural-looking results. We focus on softening movement, not eliminating expression."
  },
  {
    question: "Can I wear makeup or skincare after Botox?",
    answer:   "Yes, but wait at least 4 hours before applying makeup and avoid rubbing the treated areas to prevent product migration."
  },
  {
    question: "Is there any downtime?",
    answer:   "There is no official downtime, though you should avoid lying down, heavy exercise, and alcohol for 24 hours post-treatment."
  },
  {
    question: "Is Botox safe?",
    answer:   "Botox is FDA-approved and considered very safe when administered by trained medical professionals. At Mave, treatments are performed under medical supervision using only certified products."
  },
  {
    question: "Can I combine Botox with other treatments?",
    answer:   "Absolutely. Botox can be safely combined with treatments like HydraFacial, Sculptra, or laser resurfacing for enhanced results. Your provider will guide you on the ideal timing between procedures."
  }
]
};