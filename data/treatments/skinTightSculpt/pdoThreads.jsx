export const pdoThreads = {
  slug: "pdo-threads",
  category: "skin-tightening",
  categoryDisplayName: "Skin Tightening & Sculpting",
  serviceDisplayName: "PDO Thread Lift – Non-Surgical Facial Rejuvenation",
  isPopular: true,
  isPromoEligible: false,
  image: "/threads.jpg",
  image2: "/threads2.jpg",
  description:
    "Achieve a lifted, more defined look without surgery. PDO threads offer a non-invasive way to tighten skin, contour the face, and boost collagen over time.",
  standardPrice: "Price varies by area and number of threads used",
  promoPrice: "Discounted packages available for multiple treatment zones",
  notes: [
    "Sterile, absorbable polydioxanone (PDO) threads are used",
    "Stimulates natural collagen production for long-term firmness",
    "Best for mild to moderate facial sagging and skin laxity"
  ],
  details:
    "PDO (polydioxanone) thread lifts are a minimally invasive procedure that places absorbable sutures beneath the skin to reposition tissue and stimulate collagen production. This dual action provides both instant lifting and gradual skin rejuvenation. Common areas treated include the jawline, cheeks, neck, and brow. No general anesthesia or downtime required.",
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
  pricing: [
    {
      serviceChild: "Signature Lower Face Lift",
      isPromoEligible: false,
      standardPrice: "$TBD USD",
      promoPrice: null,
      notes: [
        "Includes Jawline, Jowls, Nasolabial",
        "Most popular package – delivers visible contouring"
      ]
    },
    {
      serviceChild: "Full Face Thread Lift",
      isPromoEligible: false,
      standardPrice: "$TBD USD",
      promoPrice: null,
      notes: [
        "Includes Midface, Jawline, Brows",
        "Includes sculpting and lifting for top-to-bottom facial balance"
      ]
    },
    {
      serviceChild: "Eyebrow Lift",
      isPromoEligible: false,
      standardPrice: "$TBD USD",
      promoPrice: null,
      notes: [
        "Creates a subtle lateral brow lift and opens the eye area"
      ]
    },
    {
      serviceChild: "Full Face & Neck Combo",
      isPromoEligible: false,
      standardPrice: "$TBD USD",
      promoPrice: null,
      notes: [
        "Includes Midface, Jawline, Brows, and Neck"
      ]
    }
  ],
  addOns: [
    {
      serviceParent: "PN + Hyaluronic Acid Booster + Niacinamide",
      serviceChild: "Kiara Reju",
      displayName: "PN + Hyaluronic Acid Booster + Niacinamide - Kiara Reju",
      link: "/treatments/mesotherapy/kiaraReju"
    }
  ],
  expectations: {
    preTreatment: [
      "Avoid alcohol, NSAIDs, and blood-thinning supplements 24–48 hours prior to reduce bruising risk.",
      "Inform your provider of recent Botox or filler treatments to ensure optimal treatment planning."
    ],
    postTreatment: [
      "Expect temporary swelling, soreness, or mild bruising at insertion sites.",
      "Avoid dental visits, facial massage, or strenuous activity for 7 days.",
      "Sleep on your back and limit facial movements for 5–7 days to allow threads to settle."
    ]
  },
  faq: [
    {
      question: "What is a PDO thread lift?",
      answer:
        "A PDO thread lift is a non-surgical treatment that uses dissolvable threads to lift, contour, and stimulate collagen in the face or neck. It offers natural-looking results with minimal downtime."
    },
    {
      question: "How long do the results last?",
      answer:
        "The threads dissolve within 6 months, but the skin tightening and collagen production can last up to 12–18 months."
    },
    {
      question: "Is the procedure painful?",
      answer:
        "Mild discomfort is expected, but the area is numbed with lidocaine to ensure the procedure is well tolerated."
    },
    {
      question: "Can threads be combined with other treatments?",
      answer:
        "Yes. They’re often paired with fillers, biostimulators, or microneedling for comprehensive facial rejuvenation."
    },
    {
      question: "When will I see results?",
      answer:
        "Some lifting is seen immediately, but full results develop gradually as collagen forms over 6–12 weeks."
    }
  ]
};