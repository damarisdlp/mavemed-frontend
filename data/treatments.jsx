// data/treatments.js
export const treatments = [
  {
    slug: "botulinum-toxin",
    category: "Wrinkle Reducers",
    displayName: "Botox Wrinkle Reducer",
    image: "/botox.jpg",
    description: "Reduce the appearance of fine lines and wrinkles for a smoother, more refreshed look.",
    standardPrice: "$305+ per area",
    memberPrice: "$285+ per area",
    notes: ["New patients only receive exclusive welcome-prices","Established patients receive exclusive maintenance tier pricing"],
    details: "Neuromodulators are injected into the muscle to temporarily relax fine lines and wrinkles, resulting in improved and more youthful skin quality.",
    goals: [
      "Smooth dynamic lines",
      "Lift eyebrows or corners of mouth",
      "Prevent future wrinkle formation"
    ],
    treatableAreas: [
      "Forehead",
      "Frown Lines (Glabella)",
      "Crow's Feet",
      "Bunny Lines",
      "Eyebrow Lift",
      "Lip Flip",
      "Masseters (Jaw Slimming)",
      "Platysma (Neck Bands)"
    ],
    pricing: [
      { zone: "Frown Lines", standardPrice: "$305", promoPrice: "$285" },
      { zone: "Forehead", standardPrice: "$305", promoPrice: "$285" },
      { zone: "Crow’s Feet", standardPrice: "$305", promoPrice: "$285" },
      { zone: "Lip Flip", standardPrice: "$150", promoPrice: "$120" },
      { zone: "Masseters", standardPrice: "$500", promoPrice: "$400" }
    ],
    addOns: [
      {
        name: "VI Peel",
        description: "A gentle, medical-grade chemical peel for pigmentation, acne, and anti-aging.",
        standardPrice: "$525",
        promoPrice: "$470",
        link: "/treatments/vi-peel"
      }
    ]
  }
];