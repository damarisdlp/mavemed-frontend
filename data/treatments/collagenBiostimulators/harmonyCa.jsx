export const harmonyca = {
  urlSlug: "harmonyca",
  category: "biostimulatory-fillers",
  categoryDisplayName: "Collagen Biostimulators",
  serviceDisplayName: "HarmonyCA (HA + Calcium Hydroxyapatite)",
  isPopular: false,
  isPromoEligible: true,
  images: {
    primary: "/harmonyca.jpg",
    secondary: "/harmonyca2.jpg",
  },
  description:
    "HarmonyCA is a next-generation biostimulatory filler that combines hyaluronic acid (HA) for immediate facial volume with calcium hydroxyapatite (CaHA) for long-term collagen stimulation. This hybrid injectable enhances facial contour, skin quality, and structural lift in a single treatment.",
  details:
    "HarmonyCA is a dual-phase injectable combining hyaluronic acid for immediate hydration and volume, with CaHA microspheres to boost collagen production over time. This advanced formula is ideal for enhancing cheekbones, defining the jawline, and restoring firmness in the lower face. Its bioregenerative effect helps improve skin density and elasticity, making it a top choice for long-lasting, natural-looking rejuvenation without heaviness or puffiness.",
  notes: [
    "Treatment includes 2 syringes (1.25 mL each)",
    "Delivers both instant lift and progressive collagen support",
    "Clinically effective for rejuvenating midface, jawline, and lower face",
    "Recommended for patients seeking natural yet structural results"
  ],
  pricing: {
    startingPrice: "$875",
    startingPriceCurrency: "USD",
    promoPrice: "$745",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "Per Treatment",
        isPromoEligible: true,
        optionPrice: "$875",
        optionCurrency: "USD",
        optionPromoPrice: "745",
        optionPromoPriceCurrency: "USD",
        notes: ["Promo price based on treatment plan of 2 sessions"],
      }
    ],
  },
  goals: [
    "Lift and contour midface and lower face",
    "Stimulate collagen and improve skin architecture",
    "Restore volume while enhancing skin density and elasticity"
  ],
  treatableAreas: [
    "Cheeks",
    "Jawline",
    "Chin",
    "Lower Face",
    "Preauricular Hollow"
  ],
  addOns: [
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
    {
      serviceParent: "Microneedling Skin Renewal - Rejuran - Full Face",
      serviceChild: "Microneedling Skin Renewal - Rejuran - Full Face",
      displayName: "Microneedling Skin Renewal - Rejuran - Full Face",
      link: "/treatments/microneedling"
    },
    {
      serviceParent: "Scarlet S RF Microneedling",
      serviceChild:  "Scarlet S RF Microneedling - Face",
      displayName:   "Scarlet S RF Microneedling - Face",
      link:          "/treatments/rf-microneedling"
    }
  ],
  expectations: {
    preTreatment: [
      "Avoid alcohol, NSAIDs, and blood-thinning supplements (fish oil, garlic, ginkgo) for at least 24–48 hours.",
      "Inform your provider of recent dental procedures, vaccinations, or laser treatments."
    ],
    postTreatment: [
      "Expect mild swelling or redness for 1–2 days.",
      "Avoid facial massage, hot environments, or strenuous activity for 48 hours.",
      "Visible lift is immediate; collagen-stimulating effects continue developing over 6–8 weeks."
    ]
  },
  faq: [
    {
      question: "How is HarmonyCA different from traditional dermal fillers?",
      answer:
        "HarmonyCA combines the immediate volume of HA with the collagen-boosting power of CaHA, providing both instant lift and long-term skin regeneration."
    },
    {
      question: "Which areas respond best to HarmonyCA?",
      answer:
        "Cheeks, jawline, chin, and the lower face benefit most, especially for patients with mild-to-moderate volume loss or skin laxity."
    },
    {
      question: "How long do HarmonyCA results last?",
      answer:
        "Most patients enjoy results that last 12–18 months, depending on their age, skin type, and lifestyle habits."
    },
    {
      question: "Is HarmonyCA approved and safe?",
      answer:
        "Yes. HarmonyCA is CE-certified and used widely across Europe. At Mave, it's administered exclusively by licensed medical providers."
    },
    {
      question: "Can I combine HarmonyCA with other procedures?",
      answer:
        "Absolutely. It pairs well with treatments like Ultraformer, RF microneedling, and skin boosters like Rejuran for comprehensive facial rejuvenation."
    }
  ]
};