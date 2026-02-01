import Head from "next/head";
import { useMemo } from "react";
import { useRouter } from "next/router";
import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../next-i18next.config";

const content = {
  en: {
    title: "Sylfirm X RF Microneedling",
    subtitle: "A medical approach to skin remodeling, texture, and pigmentation",
    intro: [
      "RF microneedling has become widely discussed in aesthetic medicine, but not all RF microneedling systems interact with the skin in the same way.",
      "Sylfirm X is an advanced RF microneedling platform designed to address concerns such as acne scarring, uneven skin texture, enlarged pores, early skin laxity, and pigmentation disorders, including melasma, when clinically appropriate.",
      "**RF microneedling supports collagen remodeling by triggering a controlled wound and heat response at depth. The goal is higher quality collagen organization over time, not a quick surface change.**",
      "**Collagen change is gradual. Durability comes from consistency, recovery time, and conservative multi session planning, not from aggressive settings.**",
      "If you want to understand what collagen loss looks like with age and why results take time, visit our collagen timeline guide linked below.",
    ],

    collagenCardTitle: "Collagen education",
    collagenCardCopy:
      "Collagen remodeling is gradual. If you want to understand timelines and why results build over months, read our collagen timeline guide.",
    collagenLinkLabel: "Read the collagen timeline guide",

    treatmentLinkLabel: "View the Sylfirm X treatment page",
    multiSessionTitle: "Exclusive multisessional plans",
    multiSessionCopy:
      "Collagen remodeling responds best to consistency. If you are committed to long term skin quality, we offer **exclusively priced multisessional Sylfirm X plans** designed to support collagen quality, durability, and safer cumulative outcomes.",
    multiSessionCta: "Inquire about exclusive multisessional pricing",
    multiSessionPrefill:
      "Hi Mave, I’m interested in exclusively priced multisessional Sylfirm X plans. Can you share details and pricing?",
    videosTitle: "Video explainers",
    videosIntro:
      "If you prefer video learning, these two Sylfirm X discussions give a practical overview of device differences, treatment planning, and expectations.",
    videoItems: [
      {
        id: "TxOV50LS_Tc",
        title: "Sylfirm X: the Ultimate RF Microneedling Game-Changer | Alice Hart-Davis",
        summary: [
          "Covers how pulsed and continuous RF modes are used for different concerns, including texture and pigment-prone skin.",
          "Discusses comfort and downtime expectations in real-world clinic use (results and experience vary by patient and protocol).",
          "Highlights depth and parameter control as key factors for safer, more consistent outcomes.",
        ],
      },
      {
        id: "M3l5G-SmhoU",
        title: "Sylfirm X Official Device Overview | Dual Wave RF Microneedling",
        summary: [
          "Explains Sylfirm X dual-wave logic: PW mode for superficial vascular and pigment-related targets, and CW mode for broader dermal thermal coagulation and collagen remodeling.",
          "Describes non-insulated bipolar microneedle delivery, depth targeting (including 0.3 mm at the basement membrane), and face/body treatment versatility.",
          "Presents manufacturer-stated positioning around all skin types, multiple preset modes, and regulatory/publication support.",
        ],
      },
    ],

    sections: [
      {
        title: "What is RF microneedling?",
        body: [
          "RF microneedling combines two mechanisms:",
          "• Microneedles create controlled microchannels in the skin",
          "• Radiofrequency energy is delivered at specific depths within the dermis",
          "The goal is not surface exfoliation, but structural improvement through controlled thermal signaling that supports collagen remodeling and healthier tissue architecture.",
          "**Well planned RF microneedling supports better collagen organization, which can translate into firmer texture, refined pores, and more resilient skin quality over time.**",
          "Because RF energy produces heat within biologically sensitive structures, device design, energy delivery, and operator control play a critical role in safety and outcomes.",
        ],
      },
      {
        title: "The collagen Sylfirm X helps build, quality and durability",
        body: [
          "When we talk about “collagen building,” what matters is not just collagen quantity, but collagen quality.",
          "**High quality remodeling means better organized collagen fibers, improved dermal density, and a more stable skin framework.**",
          "This is why results can feel more durable with series based planning, because the skin has time to build, remodel, and mature the new collagen.",
          "In practical terms, patients often notice improvements in texture, pores, and firmness before they notice dramatic lifting, because remodeling starts as a tissue quality change.",
        ],
      },
      {
        title: "What makes Sylfirm X different from traditional RF microneedling systems?",
        body: [
          "Not all RF microneedling devices deliver energy in the same manner.",
          "Sylfirm X was developed to allow greater precision and flexibility in how RF energy is delivered, which is especially relevant for patients prone to pigmentation issues.",
          "**A more controlled energy strategy supports a more predictable remodeling pathway, which is often how we protect collagen quality and reduce unnecessary thermal stress.**",
        ],
      },
      {
        title: "Pulsed Wave and Continuous Wave RF",
        body: [
          "Sylfirm X offers multiple RF delivery modes, allowing providers to adjust how energy interacts with the skin based on the indication.",
          "This flexibility supports:",
          "• Customized treatment planning",
          "• Reduced thermal stress in pigmentation prone skin",
          "• More controlled collagen stimulation",
          "This level of adaptability is not universal across RF microneedling platforms.",
          "**Controlled stimulation matters because collagen remodeling is a long biological process. Too much heat can increase inflammation, which can compromise pigment stability and tissue recovery.**",
          "For a deeper explanation of collagen remodeling timelines, see our collagen timeline guide.",
        ],
      },
      {
        title: "Precision depth control",
        body: [
          "Sylfirm X allows precise adjustment of needle depth and energy delivery based on:",
          "• Skin thickness",
          "• Treatment area",
          "• Clinical goal, such as acne scarring versus pigmentation",
          "**Depth matters because the collagen response depends on where the signal is placed. Correct depth supports cleaner remodeling and better quality outcomes.**",
          "Accurate depth control is essential when treating different skin types and conditions.",
        ],
      },
      {
        title: "Focus on vascular and pigment related pathways",
        body: [
          "Sylfirm X was designed with conditions such as melasma and redness in mind, where vascular signaling and inflammation contribute to pigment dysregulation.",
          "This does not mean Sylfirm X is appropriate for all melasma cases, but it allows more conservative, risk aware treatment planning when indicated.",
          "**A conservative approach protects pigment stability, which is essential for long term collagen work in pigmentation prone patients.**",
        ],
      },
      {
        title: "What skin concerns can Sylfirm X help improve?",
        body: [
          "When used appropriately and with medical oversight, Sylfirm X may be considered for:",
          "• Acne scarring",
          "• Uneven skin texture",
          "• Enlarged pores",
          "• Early to moderate skin laxity",
          "• Certain types of melasma or pigmentation disorders",
          "Results vary depending on:",
          "• Skin type and tone",
          "• Treatment consistency",
          "• Combination with other therapies",
          "• Adherence to post treatment care",
          "No single device guarantees results, and RF microneedling is not always the best option for every concern.",
        ],
      },
      {
        title: "Collagen remodeling timeline, what most patients experience",
        body: [
          "Many patients expect instant collagen. That is not how biology works.",
          "**The early phase is recovery and signaling. True collagen change shows up later, and continues to mature after the last session.**",
          "This is a general framework, individual timelines vary.",
        ],
        timeline: [
          {
            label: "0 to 7 days",
            text: "Redness and swelling are common. Skin may feel tighter from inflammation, but **this is not collagen yet.**",
          },
          {
            label: "2 to 6 weeks",
            text: "**Early signaling phase.** Texture can start to look smoother, but collagen formation is still subtle.",
          },
          {
            label: "6 to 12 weeks",
            text: "**Early collagen formation becomes more noticeable.** Patients often see refined pores, improved texture, and healthier skin density.",
          },
          {
            label: "3 to 6 months",
            text: "**Remodeling phase.** Results often become more obvious, especially after completing a multi session plan.",
          },
          {
            label: "6 to 12 months",
            text: "**Maturation phase.** Collagen continues to organize and strengthen, which is where durability and quality becomes more apparent.",
          },
        ],
      },
      {
        title: "Why multi session plans create better, longer lasting outcomes",
        body: [
          "**One strong session is not the goal. A series is what supports collagen quality and durability.**",
          "Multi session plans allow the skin to cycle through: stimulation, recovery, collagen formation, and remodeling, repeatedly, without overwhelming the tissue.",
          "This often creates a more stable improvement in dermal density and texture because the collagen has time to mature between sessions.",
          "**Aggressive treatment without adequate recovery can increase inflammation, which can work against pigment stability and long term collagen quality.**",
        ],
        bullets: [
          "Series based planning supports **higher quality collagen organization**",
          "Recovery time helps collagen mature, not just form",
          "Consistency is often safer and more durable than high energy settings",
          "Multi session plans are especially important for scarring and laxity work",
        ],
      },
      {
        title: "How many sessions are typically needed, and how long results can last",
        body: [
          "**Most patients benefit from a series rather than a single treatment.**",
          "The number of sessions depends on your concern and baseline collagen status.",
          "A common framework is:",
          "• Texture, pores, early laxity: **3 sessions**",
          "• Acne scarring or more advanced concerns: **4 to 6 sessions**",
          "Sessions are often spaced about **4 to 6 weeks** apart, adjusted based on skin response and pigment risk.",
          "**Durability is typically best when a series is completed, then maintained conservatively.**",
        ],
        bullets: [
          "Typical series, **3 to 6 sessions** depending on goals",
          "Spacing often **4 to 6 weeks**",
          "More complex concerns may require staged plans",
          "Maintenance may be recommended to support long term stability",
        ],
      },
      {
        title: "Why results do not last forever",
        body: [
          "RF microneedling can improve collagen structure, but it does not stop aging.",
          "**Collagen naturally turns over, and breakdown continues due to sun exposure, inflammation, hormonal shifts, and time.**",
          "This is why we think in terms of collagen strategy, not one time treatment.",
          "**Maintenance is not a sign the device failed. It is a normal part of long term skin biology.**",
        ],
        bullets: [
          "Collagen turnover continues, even after improvement",
          "Photoaging and inflammation accelerate breakdown",
          "Metabolic and hormonal factors influence collagen quality",
          "Aging and structural change continue over time",
        ],
      },
      {
        title: "Is Sylfirm X safe for darker skin tones?",
        body: [
          "One reason Sylfirm X has gained attention is its potential use across a wider range of skin tones, when conservative protocols are followed.",
          "Safety depends on:",
          "• Proper patient selection",
          "• Individualized energy settings",
          "• Medical evaluation of pigmentation risk",
          "• Strict post treatment care",
          "**In pigmentation prone skin, collagen work must be conservative to protect pigment stability and recovery quality.**",
          "Patients with a history of post inflammatory hyperpigmentation, keloid scarring, or inflammatory skin conditions require individual assessment before treatment planning.",
        ],
      },
      {
        title: "Why medical evaluation matters before RF microneedling",
        body: [
          "RF microneedling is a medical procedure, not a cosmetic facial.",
          "Before treatment, it is important to evaluate:",
          "• Skin tone and pigmentation history",
          "• Previous procedures and skin responses",
          "• Active inflammation or infection",
          "• Realistic expectations regarding outcomes",
          "This is why treatment planning should begin with a candidacy assessment, rather than immediate booking.",
          "**Device choice alone does not determine collagen quality. Medical oversight and conservative planning do.**",
        ],
      },
      {
        title: "Who may not be a candidate for Sylfirm X?",
        body: [
          "RF microneedling may not be appropriate for patients who are:",
          "• Pregnant or breastfeeding",
          "• Prone to keloid scarring",
          "• Experiencing active skin infections or inflammation",
          "• Seeking immediate or dramatic results from a single session",
          "These factors should be reviewed before proceeding with treatment.",
        ],
      },
    ],
    nextTitle: "From education to next steps",
    nextCopy:
      "If you are exploring RF microneedling and want to understand whether Sylfirm X is appropriate for your skin, the next step is a candidacy assessment reviewed by a medical team. You can also review collagen timelines to understand why results build gradually, and why series based planning is often the safest path.",
    nextCta: "Begin RF microneedling candidacy assessment",

    serviceLinksTitle: "Related services",
    serviceLinks: [
      {
        label: "RF Microneedling (Sylfirm X)",
        href: "/treatments/sylfirm-rf-microneedling",
      },
    ],
    collagenLinkLabel: "Read the collagen timeline guide",

    closingTitle: "A note on expectations",
    closingCopy: [
      "Advanced technology can support better outcomes, but it does not replace:",
      "• Medical judgment",
      "• Conservative treatment planning",
      "• Long term skin health strategies",
      "**Our approach prioritizes collagen quality, safety, and realistic outcomes over aggressive settings or fast promises.**",
    ],
  },

  es: {
    title: "Sylfirm X RF Microneedling",
    subtitle: "Un enfoque médico para la remodelación de la piel, textura y pigmentación",
    intro: [
      "El RF microneedling se ha popularizado ampliamente en la medicina estética, sin embargo, no todos los dispositivos de RF microneedling actúan de la misma manera en la piel.",
      "Sylfirm X es una plataforma avanzada de RF microneedling diseñada para abordar preocupaciones como cicatrices de acné, textura irregular, poros dilatados, flacidez leve a moderada y trastornos de pigmentación, incluido el melasma, cuando está clínicamente indicado.",
      "**El RF microneedling apoya la remodelación del colágeno mediante una señal controlada de microlesión y calor a profundidad. El objetivo es colágeno mejor organizado con el tiempo, no un cambio superficial rápido.**",
      "**La durabilidad viene de constancia, recuperación y planes conservadores por sesiones, no de parámetros agresivos.**",
      "Si quieres entender cómo se pierde colágeno con la edad y por qué los resultados toman tiempo, visita nuestra guía de línea de tiempo del colágeno enlazada abajo.",
    ],

    collagenCardTitle: "Educación sobre colágeno",
    collagenCardCopy:
      "La remodelación del colágeno es gradual. Si quieres entender los tiempos y por qué los resultados se construyen en meses, revisa la guía de colágeno.",
    collagenLinkLabel: "Leer la guía de línea de tiempo del colágeno",

    treatmentLinkLabel: "Ver la página del tratamiento Sylfirm X",
    multiSessionTitle: "Planes multisessionales con precio exclusivo",
    multiSessionCopy:
      "La remodelación del colágeno responde mejor a la constancia. Si buscas mejorar la calidad de tu piel a largo plazo, ofrecemos **planes multisessionales de Sylfirm X con precios exclusivos**, enfocados en durabilidad, calidad de colágeno y resultados más seguros.",
    multiSessionCta: "Consultar precios exclusivos por plan multisesión",
    multiSessionPrefill:
      "Hola Mave, me interesan los planes multisessionales de Sylfirm X con precio exclusivo. ¿Me pueden compartir detalles y precios?",
    videosTitle: "Videos explicativos",
    videosIntro:
      "Si prefieres aprender en video, estos dos contenidos sobre Sylfirm X ofrecen una visión práctica sobre diferencias entre dispositivos, planificación y expectativas.",
    videoItems: [
      {
        id: "TxOV50LS_Tc",
        title: "Sylfirm X: the Ultimate RF Microneedling Game-Changer | Alice Hart-Davis",
        summary: [
          "Explica cómo se usan los modos pulsado y continuo según la indicación clínica, incluyendo textura y piel con riesgo pigmentario.",
          "Comenta expectativas de comodidad y tiempo de recuperación en práctica clínica (la experiencia varía según paciente y protocolo).",
          "Destaca que el control de profundidad y parámetros es clave para resultados más consistentes y seguros.",
        ],
      },
      {
        id: "M3l5G-SmhoU",
        title: "Resumen oficial del dispositivo Sylfirm X | RF Microneedling de onda dual",
        summary: [
          "Explica la lógica de onda dual: modo PW para objetivos vasculares y pigmentarios superficiales, y modo CW para coagulación térmica dérmica más amplia y remodelación de colágeno.",
          "Describe la entrega bipolar con microagujas no aisladas, el trabajo por profundidad (incluyendo 0.3 mm en membrana basal), y su uso en rostro y cuerpo.",
          "Presenta el posicionamiento del fabricante sobre uso en todos los fototipos, múltiples modos preestablecidos y respaldo regulatorio/publicaciones.",
        ],
      },
    ],

    sections: [
      {
        title: "¿Qué es el RF microneedling?",
        body: [
          "El RF microneedling combina dos mecanismos:",
          "• Micropunciones controladas mediante microagujas",
          "• Energía de radiofrecuencia aplicada a profundidades específicas",
          "El objetivo no es exfoliar la superficie, sino mejorar la estructura mediante señalización térmica controlada que apoya la remodelación del colágeno y una arquitectura tisular más saludable.",
          "**Un tratamiento bien planificado puede apoyar mejor organización de colágeno, mayor densidad dérmica y piel más resistente con el tiempo.**",
          "Dado que la radiofrecuencia genera calor en estructuras sensibles, el diseño del dispositivo y el control de parámetros influyen directamente en seguridad y resultados.",
        ],
      },
      {
        title: "El colágeno que ayuda a construir, calidad y durabilidad",
        body: [
          "Cuando hablamos de “estimular colágeno”, lo más importante no es solo la cantidad, sino la calidad.",
          "**La remodelación de calidad implica fibras mejor organizadas, mayor densidad dérmica y un soporte cutáneo más estable.**",
          "Por eso los resultados suelen sentirse más duraderos con planes por sesiones, porque la piel tiene tiempo de formar, remodelar y madurar colágeno nuevo.",
          "En la práctica, muchas personas notan mejoras en textura y poros antes que un “lifting” marcado, porque el cambio inicia como calidad de tejido.",
        ],
      },
      {
        title: "¿Qué diferencia a Sylfirm X de otros sistemas de RF microneedling?",
        body: [
          "No todos los dispositivos de RF microneedling entregan la energía de la misma forma.",
          "Sylfirm X fue desarrollado para ofrecer mayor control sobre cómo y dónde se libera la energía, lo cual es especialmente relevante en pacientes con riesgo de hiperpigmentación.",
          "**Una estrategia energética más controlada apoya una remodelación más predecible, y suele ser clave para proteger la calidad del colágeno y reducir estrés térmico innecesario.**",
        ],
      },
      {
        title: "RF de onda pulsada y continua",
        body: [
          "Sylfirm X permite diferentes modos de energía, lo que brinda flexibilidad clínica para:",
          "• Personalizar tratamientos",
          "• Reducir estrés térmico en pieles con tendencia a pigmentación",
          "• Estimular colágeno de manera más controlada",
          "Este nivel de precisión no está presente en todos los sistemas de RF microneedling.",
          "**El control importa porque la remodelación del colágeno es un proceso largo. Demasiado calor puede aumentar inflamación, lo que puede afectar pigmento y recuperación.**",
          "Para una explicación más clara de tiempos de remodelación, revisa nuestra guía de línea de tiempo del colágeno.",
        ],
      },
      {
        title: "Control preciso de profundidad",
        body: [
          "La profundidad de las agujas y la energía pueden ajustarse según:",
          "• Grosor de la piel",
          "• Zona a tratar",
          "• Indicación clínica, como cicatrices vs pigmentación",
          "**La profundidad importa porque la respuesta de colágeno depende de dónde se coloca la señal. La profundidad correcta apoya remodelación más limpia y resultados de mayor calidad.**",
        ],
      },
      {
        title: "Enfoque en vías vasculares y pigmentarias",
        body: [
          "Sylfirm X fue diseñado considerando condiciones como el melasma, donde la inflamación y la señalización vascular juegan un papel importante.",
          "Esto no significa que sea adecuado para todos los casos de melasma, sino que permite una planificación más conservadora cuando está indicado.",
          "**Un enfoque conservador protege la estabilidad del pigmento, lo cual es esencial para planes de colágeno a largo plazo.**",
        ],
      },
      {
        title: "Qué puede ayudar a mejorar Sylfirm X",
        body: [
          "Cuando se utiliza de forma adecuada y con supervisión médica, Sylfirm X puede considerarse para:",
          "• Cicatrices de acné",
          "• Textura irregular de la piel",
          "• Poros dilatados",
          "• Flacidez leve a moderada",
          "• Algunos tipos de melasma o alteraciones de pigmentación",
          "Los resultados dependen de múltiples factores, incluyendo el tipo de piel, la constancia del tratamiento y el cumplimiento del cuidado posterior.",
          "Ningún dispositivo garantiza resultados, y el RF microneedling no siempre es la mejor opción para todos los casos.",
        ],
      },
      {
        title: "Línea de tiempo de remodelación de colágeno",
        body: [
          "Muchas personas esperan colágeno inmediato. Eso no ocurre.",
          "**La fase temprana es recuperación y señalización. El colágeno verdadero se ve después, y sigue madurando tras la última sesión.**",
          "Esta es una referencia general, los tiempos varían por persona.",
        ],
        timeline: [
          {
            label: "0 a 7 días",
            text: "Enrojecimiento e inflamación son comunes. La piel puede sentirse más firme por inflamación, pero **todavía no es colágeno.**",
          },
          {
            label: "2 a 6 semanas",
            text: "**Fase de señalización temprana.** Puede mejorar la textura, pero la formación de colágeno aún es sutil.",
          },
          {
            label: "6 a 12 semanas",
            text: "**Formación temprana más evidente.** Suelen notarse poros más refinados, textura más uniforme y mejor densidad.",
          },
          {
            label: "3 a 6 meses",
            text: "**Fase de remodelación.** Los cambios suelen hacerse más notorios, especialmente tras completar una serie.",
          },
          {
            label: "6 a 12 meses",
            text: "**Fase de maduración.** El colágeno se organiza y fortalece, y ahí suele verse la durabilidad y “calidad”.",
          },
        ],
      },
      {
        title: "Por qué los planes por sesiones crean mejores resultados y más duraderos",
        body: [
          "**El objetivo no es una sesión fuerte. Es una serie, con recuperación, para proteger calidad y durabilidad.**",
          "Los planes por sesiones permiten repetir ciclos de: estímulo, recuperación, formación y remodelación, sin sobrecargar el tejido.",
          "Esto suele apoyar una mejora más estable en densidad dérmica y textura, porque el colágeno tiene tiempo de madurar entre sesiones.",
          "**Parámetros agresivos sin recuperación pueden aumentar inflamación y afectar pigmento y calidad de recuperación.**",
        ],
        bullets: [
          "Las series apoyan **colágeno mejor organizado**",
          "La recuperación ayuda a madurar colágeno, no solo formarlo",
          "Constancia suele ser más segura y duradera que alta energía",
          "Las series son clave para cicatrices y flacidez",
        ],
      },
      {
        title: "Cuántas sesiones suelen ser necesarias, y cuánto puede durar",
        body: [
          "**La mayoría de pacientes se benefician de una serie.**",
          "La cantidad depende del objetivo y del estado basal del colágeno.",
          "Un marco común:",
          "• Textura, poros, flacidez leve: **3 sesiones**",
          "• Cicatrices de acné o casos más complejos: **4 a 6 sesiones**",
          "Las sesiones suelen espaciarse cada **4 a 6 semanas**, ajustando según respuesta y riesgo pigmentario.",
          "**La durabilidad suele ser mejor cuando se completa la serie y se mantiene de forma conservadora.**",
        ],
        bullets: [
          "Serie típica, **3 a 6 sesiones**",
          "Espaciado común **4 a 6 semanas**",
          "Casos complejos pueden requerir etapas",
          "Mantenimiento puede apoyar estabilidad a largo plazo",
        ],
      },
      {
        title: "Por qué los resultados no duran para siempre",
        body: [
          "El RF microneedling puede mejorar la estructura del colágeno, pero no detiene el envejecimiento.",
          "**El colágeno se recambia, y se degrada por sol, inflamación, hormonas y tiempo.**",
          "Por eso pensamos en estrategia de colágeno, no en una sola visita.",
          "**El mantenimiento no significa que falló. Es parte normal de la biología de la piel.**",
        ],
        bullets: [
          "El recambio de colágeno continúa",
          "El sol y la inflamación aceleran degradación",
          "Factores metabólicos y hormonales influyen",
          "El envejecimiento estructural continúa",
        ],
      },
      {
        title: "¿Sylfirm X es seguro para tonos de piel más oscuros?",
        body: [
          "Uno de los aspectos que distingue a Sylfirm X es su potencial uso en una mayor variedad de fototipos, siempre que se utilicen protocolos adecuados.",
          "La seguridad depende de:",
          "• Selección correcta del paciente",
          "• Parámetros conservadores",
          "• Evaluación médica del riesgo pigmentario",
          "• Cuidado post tratamiento estricto",
          "**En piel con tendencia a pigmentación, el trabajo de colágeno debe ser conservador para proteger estabilidad del pigmento y calidad de recuperación.**",
          "Pacientes con antecedentes de hiperpigmentación, queloides o inflamación activa requieren evaluación individual.",
        ],
      },
      {
        title: "¿Por qué es importante la evaluación médica antes del RF microneedling?",
        body: [
          "El RF microneedling es un procedimiento médico, no un tratamiento cosmético superficial.",
          "Antes de tratar, es fundamental evaluar:",
          "• Tono de piel y antecedentes pigmentarios",
          "• Tratamientos previos",
          "• Estado inflamatorio actual",
          "• Expectativas realistas",
          "Por esta razón, el proceso debe iniciar con una evaluación de candidatura, no con una reservación automática.",
          "**La calidad del colágeno no depende solo del dispositivo. Depende de criterios médicos y planificación conservadora.**",
        ],
      },
      {
        title: "¿Quiénes pueden no ser candidatos?",
        body: [
          "Sylfirm X puede no ser adecuado para pacientes que:",
          "• Están embarazadas o lactando",
          "• Tienen tendencia a formar queloides",
          "• Presentan infecciones o inflamación activa",
          "• Buscan resultados inmediatos en una sola sesión",
        ],
      },
    ],
    nextTitle: "Siguiente paso",
    nextCopy:
      "Si estás considerando RF microneedling y deseas saber si Sylfirm X es adecuado para tu piel, el siguiente paso es una evaluación de candidatura revisada por un equipo médico. También puedes revisar los tiempos del colágeno para entender por qué los resultados se construyen gradualmente, y por qué una serie suele ser el camino más seguro.",
    nextCta: "Iniciar evaluación de candidatura para RF microneedling",

    serviceLinksTitle: "Servicios relacionados",
    serviceLinks: [
      {
        label: "Microneedling con RF (Sylfirm X)",
        href: "/treatments/sylfirm-rf-microneedling",
      },
    ],
    collagenLinkLabel: "Leer la guía de línea de tiempo del colágeno",

    closingTitle: "Nota sobre expectativas",
    closingCopy: [
      "La tecnología avanzada puede apoyar mejores resultados, pero no reemplaza:",
      "• Juicio médico",
      "• Planificación conservadora",
      "• Estrategias de salud cutánea a largo plazo",
      "**Nuestro enfoque prioriza calidad de colágeno, seguridad y resultados realistas por encima de parámetros agresivos o promesas rápidas.**",
    ],
  },
};

const slug = "/learn/sylfirm-x-rf-microneedling";
const BASE_URL = "https://www.mavemedspa.com";
const BUSINESS_PHONE = "+52-664-207-7675";
const WHATSAPP_LINK = "https://wa.me/526642077675";
const BUSINESS_ADDRESS = {
  streetAddress:
    "Blvd Gral Rodolfo Sánchez Taboada 10512-Interior 8a, Segundo Piso, Revolución",
  addressLocality: "Tijuana",
  addressRegion: "BC",
  postalCode: "22010",
  addressCountry: "MX",
};

const COLLAGEN_TIMELINE_SLUG = "/learn/collagen-loss-and-rebuilding-timeline";
const SYLFIRM_TREATMENT_SLUG = "/treatments/sylfirm-rf-microneedling";

function BoldText({ text }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((part, idx) =>
        idx % 2 === 1 ? (
          <strong key={idx} className="font-semibold text-black">
            {part}
          </strong>
        ) : (
          <span key={idx}>{part}</span>
        )
      )}
    </>
  );
}

export default function SylfirmXEducationPage() {
  const { locale = "en" } = useRouter();
  const copy = useMemo(() => content[locale] || content.en, [locale]);

  const canonicalPath = locale === "es" ? `/es${slug}` : slug;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const ogImage = `${BASE_URL}/sylfirmx2.jpg`;
  const whatsappInquiryLink = `${WHATSAPP_LINK}?text=${encodeURIComponent(
    copy.multiSessionPrefill
  )}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": `${BASE_URL}/#medicalbusiness`,
        name: "Mave Medical Spa",
        url: BASE_URL,
        image: `${BASE_URL}/logo-mave.png`,
        telephone: BUSINESS_PHONE,
        address: {
          "@type": "PostalAddress",
          ...BUSINESS_ADDRESS,
        },
        sameAs: [WHATSAPP_LINK],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        name: "Mave Medical Spa",
        url: BASE_URL,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${BASE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Learn",
            item: `${BASE_URL}/learn`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: copy.title,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: `${copy.title} | Mave Medical Spa`,
        description: copy.subtitle,
        inLanguage: locale === "es" ? "es" : "en",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        publisher: { "@id": `${BASE_URL}/#medicalbusiness` },
        about: { "@id": `${canonicalUrl}#medicalprocedure` },
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${canonicalUrl}#medicalprocedure`,
        name: "Sylfirm X RF Microneedling",
        alternateName: [
          "Sylfirm X melasma education",
          "Sylfirm X vs Morpheus8 education",
          "RF microneedling for acne scars",
        ],
        description:
          "Sylfirm X is an RF microneedling procedure used in aesthetic medicine to support collagen remodeling and improve concerns such as acne scars, texture, pores, early laxity, and certain pigmentation conditions including melasma when clinically appropriate.",
        procedureType: "Therapeutic",
        howPerformed:
          "A provider delivers radiofrequency energy through microneedles at controlled depths and settings based on skin type, skin condition, and treatment goal.",
        bodyLocation: ["Face", "Neck"],
        relevantSpecialty: ["Dermatology", "PlasticSurgery"],
        preparation:
          "Clinical assessment is performed to evaluate skin type, pigmentation risk, medical history, and treatment suitability.",
        followup:
          "Post treatment care and follow up recommendations vary by skin type and indication. Multiple sessions are commonly recommended.",
        riskFactor: [
          "Post inflammatory hyperpigmentation risk in pigmentation prone skin",
          "Not suitable for pregnancy or breastfeeding",
          "Not suitable for patients prone to keloid scarring",
          "Not suitable with active skin infection or active inflammation",
        ],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{copy.title} | Mave Medical Spa</title>
        <meta name="description" content={copy.subtitle} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${copy.title} | Mave Medical Spa`} />
        <meta property="og:description" content={copy.subtitle} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Mave Medical Spa" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${copy.title} | Mave Medical Spa`} />
        <meta name="twitter:description" content={copy.subtitle} />
        <meta name="twitter:image" content={ogImage} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <PromoBanner />
      <Header />

      <main className="bg-white pt-36 md:pt-40">
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="text-left max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Learn</p>
            <h1 className="text-3xl md:text-4xl font-serif text-black mt-3">
              {copy.title}
            </h1>
            <p className="text-base text-gray-700 mt-3">{copy.subtitle}</p>
          </div>

          <div className="mt-6 space-y-4 text-sm text-gray-700 leading-relaxed">
            {copy.intro.map((line) => (
              <p key={line}>
                <BoldText text={line} />
              </p>
            ))}
          </div>

          <div className="mt-8 max-w-3xl">
            <div className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-5 space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                {copy.collagenCardTitle}
              </p>
              <p className="text-sm text-gray-700">
                <BoldText text={copy.collagenCardCopy} />
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={`/${locale === "es" ? "es/" : ""}${COLLAGEN_TIMELINE_SLUG.replace(
                    /^\//,
                    ""
                  )}`}
                  className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
                >
                  {copy.collagenLinkLabel}
                </a>

                <a
                  href={`/${locale === "es" ? "es/" : ""}${SYLFIRM_TREATMENT_SLUG.replace(
                    /^\//,
                    ""
                  )}`}
                  className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
                >
                  {copy.treatmentLinkLabel}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-12 space-y-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-serif text-black">{copy.videosTitle}</h2>
            <p className="text-sm text-gray-700 mt-2">{copy.videosIntro}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {(copy.videoItems || []).map((video) => (
              <article
                key={video.id}
                className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-4 space-y-3"
              >
                <div className="aspect-video overflow-hidden rounded-xl bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <h3 className="text-base font-semibold text-black leading-snug">{video.title}</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                  {(video.summary || []).map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-12 space-y-12">
          {copy.sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-xl font-serif text-black">{section.title}</h2>

              <div className="space-y-3 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {section.body?.map((line) => (
                  <p key={line}>
                    <BoldText text={line} />
                  </p>
                ))}
              </div>

              {section.timeline?.length ? (
                <div className="mt-4 border border-gray-200 rounded-2xl overflow-hidden">
                  {section.timeline.map((row, idx) => (
                    <div
                      key={row.label}
                      className={`px-5 py-4 text-sm ${
                        idx !== 0 ? "border-t border-gray-200" : ""
                      }`}
                    >
                      <p className="font-semibold text-black">{row.label}</p>
                      <p className="text-gray-700 mt-1">
                        <BoldText text={row.text} />
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              {section.bullets?.length ? (
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  {section.bullets.map((item) => (
                    <li key={item}>
                      <BoldText text={item} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-12">
          <div className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-black">{copy.multiSessionTitle}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              <BoldText text={copy.multiSessionCopy} />
            </p>
            <a
              href={whatsappInquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
            >
              {copy.multiSessionCta}
            </a>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-12">
          <div className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-black">{copy.nextTitle}</h3>
            <p className="text-sm text-gray-700">
              <BoldText text={copy.nextCopy} />
            </p>

            <div className="flex flex-col gap-2">
              <a
                href={`/${locale === "es" ? "es/" : ""}rf-microneedling-candidacy`}
                className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
              >
                {copy.nextCta}
              </a>

              <a
                href={`/${locale === "es" ? "es/" : ""}${SYLFIRM_TREATMENT_SLUG.replace(
                  /^\//,
                  ""
                )}`}
                className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
              >
                {copy.treatmentLinkLabel}
              </a>

              <a
                href={`/${locale === "es" ? "es/" : ""}${COLLAGEN_TIMELINE_SLUG.replace(
                  /^\//,
                  ""
                )}`}
                className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
              >
                {copy.collagenLinkLabel}
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-12">
          <div className="border border-gray-200 bg-[#f9f9f9] rounded-2xl p-6 space-y-3">
            <h3 className="text-lg font-semibold text-black">{copy.serviceLinksTitle}</h3>
            <div className="flex flex-col gap-2">
              {(copy.serviceLinks || []).map((link) => (
                <a
                  key={link.href}
                  href={`/${locale === "es" ? "es/" : ""}${link.href.replace(/^\//, "")}`}
                  className="inline-flex text-sm text-[#731a2f] underline underline-offset-4"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className="border-t border-gray-200 pt-8 space-y-3">
            <h3 className="text-lg font-semibold text-black">{copy.closingTitle}</h3>
            <div className="space-y-3 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {copy.closingCopy.map((line) => (
                <p key={line}>
                  <BoldText text={line} />
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export { slug };

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? "en",
        ["layout", "home", "treatments"],
        nextI18NextConfig
      )),
    },
  };
}
