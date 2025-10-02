export const pdoThreads = {
  urlSlug: "pdo-threads",
  category: "skin-tightening",
  categoryDisplayName: "Skin Tightening & Sculpting",
  serviceDisplayName: "PDO Thread Lift – Non-Surgical Facial Rejuvenation",
  isPopular: true,
  isPromoEligible: false,
  images: {
    primary: "/threads.jpg",
    secondary: "/threads2.jpg",
  },
  description:
    "Achieve a lifted, more defined look without surgery. PDO threads offer a non-invasive way to tighten skin, contour the face, and boost collagen over time.",
  details:
    "PDO (polydioxanone) thread lifts are a minimally invasive procedure that uses absorbable sutures to reposition tissue and stimulate collagen production. The treatment provides both immediate lifting and long-term skin rejuvenation. Common areas include the jawline, cheeks, neck, and brow. No general anesthesia or downtime required.",
  notes: [
    "Sterile, absorbable polydioxanone (PDO) threads are used",
    "Stimulates natural collagen production for long-term firmness",
    "Best for mild to moderate facial sagging and skin laxity"
  ],
  pricing: {
    startingPrice: "Price varies by area and thread count",
    startingPriceCurrency: "USD",
    promoPrice: "Discounted packages available for multiple zones",
    promoPriceCurrency: "USD",
    options: [
      {
        optionName: "Signature Lower Face Lift",
        isPromoEligible: false,
        optionPrice: "$TBD USD",
        optionCurrency: "USD",
        optionPromoPrice: null,
        optionPromoPriceCurrency: null,
        notes: [
          "Includes Jawline, Jowls, Nasolabial",
          "Most popular package – delivers visible contouring"
        ]
      },
      {
        optionName: "Full Face Thread Lift",
        isPromoEligible: false,
        optionPrice: "$TBD USD",
        optionCurrency: "USD",
        optionPromoPrice: null,
        optionPromoPriceCurrency: null,
        notes: [
          "Includes Midface, Jawline, Brows",
          "Includes sculpting and lifting for top-to-bottom facial balance"
        ]
      },
      {
        optionName: "Eyebrow Lift",
        isPromoEligible: false,
        optionPrice: "$TBD USD",
        optionCurrency: "USD",
        optionPromoPrice: null,
        optionPromoPriceCurrency: null,
        notes: [
          "Creates a subtle lateral brow lift and opens the eye area"
        ]
      },
      {
        optionName: "Full Face & Neck Combo",
        isPromoEligible: false,
        optionPrice: "$TBD USD",
        optionCurrency: "USD",
        optionPromoPrice: null,
        optionPromoPriceCurrency: null,
        notes: [
          "Includes Midface, Jawline, Brows, and Neck"
        ]
      }
    ]
  },
  goals: [
    "Lift sagging jowls, cheeks, and midface",
    "Improve skin laxity and smooth wrinkles",
    "Enhance definition along the jawline and neck"
  ],
  treatableAreas: [
    "Jawline",
    "Cheeks",
    "Neck",
    "Eyebrows",
    "Nasolabial Folds",
    "Marionette Lines",
    "Under Eyes"
  ],
  addOns: [
    {
      serviceParent: "PN + Hyaluronic Acid Booster + Niacinamide",
      serviceChild: "Kiara Reju",
      displayName: "Kiara Reju – PN + Hyaluronic Acid + Niacinamide",
      link: "/treatments/mesotherapy/kiaraReju"
    }
  ],
  expectations: {
    preTreatment: [
      "Avoid alcohol, NSAIDs, and blood-thinning supplements 24–48 hours before your appointment to reduce bruising.",
      "Let your provider know about any recent Botox or filler procedures to plan your treatment accordingly."
    ],
    postTreatment: [
      "Expect mild soreness, swelling, or bruising around thread entry points.",
      "Avoid dental work, strenuous activity, or facial massage for 7 days.",
      "Sleep on your back and minimize exaggerated facial movements for 5–7 days to ensure threads settle properly."
    ]
  },
  faq: [
    {
      question: "What is a PDO thread lift?",
      answer: "A PDO thread lift is a non-surgical treatment that uses dissolvable threads to lift, contour, and stimulate collagen in the face or neck. It offers natural-looking results with minimal downtime."
    },
    {
      question: "How long do the results last?",
      answer: "The threads dissolve within 6 months, but collagen stimulation continues, and results can last 12–18 months depending on lifestyle and skin condition."
    },
    {
      question: "Is the procedure painful?",
      answer: "The area is numbed with lidocaine, so discomfort is minimal. Some tenderness or tightness may occur for a few days post-procedure."
    },
    {
      question: "Can threads be combined with other treatments?",
      answer: "Yes. Thread lifts are often paired with biostimulators, dermal fillers, or RF microneedling for a full facial rejuvenation plan."
    },
    {
      question: "When will I see results?",
      answer: "Some lifting is visible immediately, while full collagen remodeling takes 6–12 weeks for optimal improvement."
    }
  ]
};