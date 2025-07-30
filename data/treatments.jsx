// ✅ Cleaned and Structured Botox Treatment Object
export const treatments = [
  {
    slug: "botulinum-toxin",
    category: "Wrinkle Reducers",
    displayName: "Botox Wrinkle Reducer",
    image: "/botox.jpg",
    image2: "/botox2.jpg",
    description:
      "Reduce the appearance of fine lines and wrinkles for a smoother, more refreshed look.",
    standardPrice: "$305+ per area",
    memberPrice: "$285+ per area",
    notes: [
      "Only new patients receive exclusive welcome-prices",
      "Established patients receive exclusive maintenance tier pricing",
      "Maintenance zone pricing is only applicable within 3–4 months after the initial application"
    ],
    details:
      "Neuromodulators are injected into the muscle to temporarily relax fine lines and wrinkles, resulting in improved and more youthful skin quality.",
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
      "Lip Flip",
      "Eyebrow Lift",
      "Downturned Corners (Sad Smile)",
      "Perioral Lines",
      "Masseters (Jaw Slimming)",
      "Neck Bands (Platysma)",
      "Axillary Hyperhidrosis (Underarms)",
      "Palmar Hyperhidrosis (Hands)"
    ],
    pricing: [
      { zone: "Forehead", standardPrice: "$86USD", promoPrice: "$78USD" },
      { zone: "Frown Lines (Glabella)", standardPrice: "$145USD", promoPrice: "$130USD" },
      { zone: "Crow’s Feet", standardPrice: "$139USD", promoPrice: "$126USD" },
      { zone: "Bunny Lines", standardPrice: "$48USD", promoPrice: "$45USD" },
      { zone: "Chin Dimples", standardPrice: "$45USD", promoPrice: "$40USD" },
      { zone: "Perioral Lines", standardPrice: "$48USD", promoPrice: null, promoNote: "Not eligible for exclusive pricing" },
      { zone: "Gummy Smile", standardPrice: "$48USD", promoPrice: null, promoNote: "Only available as part of Perioral Package" },
      { zone: "Downturned Corners", standardPrice: "$48USD", promoPrice: null, promoNote: "Only available as part of Perioral Package" },
      { zone: "Eyebrow Lift", standardPrice: "$35USD", promoPrice: null, promoNote: "Promo pricing not available" },
      { zone: "Masseters", standardPrice: "$225USD", promoPrice: null, promoNote: "Promo pricing not available" },
      { zone: "Neck Bands", standardPrice: "$340USD", promoPrice: null, promoNote: "Promo pricing not available" },
      { zone: "Axillary Hyperhidrosis", standardPrice: "$570USD", promoPrice: null, promoNote: "Promo pricing not available" },
      { zone: "Palmar Hyperhidrosis", standardPrice: "$570USD", promoPrice: null, promoNote: "Promo pricing not available" },
      {
        zone: "Perioral Package",
        standardPrice: "$135USD",
        promoPrice: "$120USD",
        notes: ["Includes gummy smile, mouth elevators, and chin dimples"]
      }
    ],
    addOns: [
      {
        name: "HydraFacial",
        description: "A hydrating facial that cleanses, exfoliates, and infuses serums into the skin for a fresh glow.",
        standardPrice: "$95",
        promoPrice: null,
        promoNote: "Add-on only available at standard rate",
        link: "/treatments/hydrafacial"
      },
      {
        name: "Casmara Purifying Facial Treatment",
        description: "A clarifying treatment that deeply detoxifies and calms the skin before or after injectables.",
        standardPrice: "$80",
        promoPrice: null,
        promoNote: "Add-on only available at standard rate",
        link: "/treatments/casmara-purifying-treatment"
      }
    ],
    expectations: [
  {
    label: "Pre-Treatment",
    note: "Avoid alcohol, ibuprofen, aspirin, or any blood thinners for 24 hours prior to treatment to reduce the risk of bruising."
  },
  {
    label: "Pre-Treatment",
    note: "Refrain from intense physical activity on the day of your appointment."
  },
  {
    label: "Pre-Treatment",
    note: "Inform your provider of any recent vaccinations, medications, or medical conditions."
  },
  {
    label: "Post-Treatment",
    note: "Avoid touching, rubbing, or applying pressure to the treated areas for at least 4 hours."
  },
  {
    label: "Post-Treatment",
    note: "Remain upright and avoid lying down flat for 4 hours following treatment."
  },
  {
    label: "Post-Treatment",
    note: "Skip intense physical activity, alcohol, and saunas for 24 hours post-treatment to reduce the risk of swelling and migration."
  },
  {
    label: "Post-Treatment",
    note: "Mild swelling or bruising may occur and typically resolves within a few days. Ice can be applied gently if needed."
  },
  {
    label: "Post-Treatment",
    note: "Results begin to appear within 3–5 days, with full effect visible at 10–14 days."
  }
],
faq: [
  {
    question: "How long does Botox take to work?",
    answer:
      "You may begin to see softening of lines within 3 to 5 days, but full results usually appear between 10 to 14 days after treatment."
  },
  {
    question: "How long do Botox results last?",
    answer:
      "Botox typically lasts 3 to 4 months. Longevity may vary depending on your metabolism, lifestyle, and treatment area."
  },
  {
    question: "Will I look frozen or unnatural?",
    answer:
      "Not at all. Our providers specialize in natural-looking results. We focus on softening movement, not eliminating expression."
  },
  {
    question: "Can I wear makeup or skincare after Botox?",
    answer:
      "Yes, but wait at least 4 hours before applying makeup and avoid rubbing the treated areas to prevent product migration."
  },
  {
    question: "Is there any downtime?",
    answer:
      "There is no official downtime, though you should avoid lying down, heavy exercise, and alcohol for 24 hours post-treatment."
  },
  {
    question: "Is Botox safe?",
    answer:
      "Botox is FDA-approved and considered very safe when administered by trained medical professionals. At Mave, treatments are performed under medical supervision using only certified products."
  },
  {
    question: "Can I combine Botox with other treatments?",
    answer:
      "Absolutely. Botox can be safely combined with treatments like HydraFacial, Sculptra, or laser resurfacing for enhanced results. Your provider will guide you on the ideal timing between procedures."
  }
]
  }
];