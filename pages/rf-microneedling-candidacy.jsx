import TreatmentCandidacyForm from "@/components/leads/TreatmentCandidacyForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

const content = {
  en: {
    title: "RF Microneedling Candidacy Assessment",
    deviceLine: "Using Sylfirm X",
    subtitle: "Reviewed by a medical team before treatment planning.",
    support:
      "This short assessment helps determine whether RF microneedling is appropriate for your skin and goals before scheduling treatment.",
    supportDevice:
      "We use the Sylfirm X device to target texture, pores, pigmentation, and early signs of aging with controlled, medical-grade RF energy.",
    cta: "Start My Assessment",
    sectionFor: "Who this is for",
    forList: [
      "Acne scars or uneven texture",
      "Enlarged pores",
      "Melasma or pigmentation",
      "Fine lines and early wrinkles",
      "Overall rejuvenation and skin quality improvement",
      "Early to moderate skin laxity",
      "Skin that hasn’t responded to topicals",
    ],
    forNote: "If you’re unsure, this assessment clarifies next steps.",
    sectionHow: "What happens next",
    howSteps: [
      "You complete a short candidacy assessment",
      "Our clinical team reviews your answers",
      "We contact you via WhatsApp with recommendations",
    ],
    howNote: "This is not a booking form. Every case is reviewed individually.",
    sectionDeviceTitle: "Why device choice matters",
    sectionDeviceCopy:
      "Not all RF microneedling devices interact with the skin in the same way. Sylfirm X allows greater control over energy delivery and treatment depth, which is especially important for pigmentation-prone skin and conditions such as melasma, when clinically appropriate.",
    sectionDeviceLink: "Learn more about Sylfirm X RF microneedling and treatment planning.",
    sectionMedical: "Medical context",
    medicalCopy:
      "RF microneedling is a medical procedure and must be tailored to skin type, condition, and treatment history.",
    medicalBullets: [
      "Please wait or ask before proceeding if you are pregnant or breastfeeding",
      "Active skin infections",
      "Certain autoimmune conditions (ask your provider first)",
    ],
    formIntro:
      "Please answer as accurately as possible. Your responses help our medical team determine candidacy.",
    fields: {
      concern: "Primary skin concern",
      concernOptions: [
        "Acne scars",
        "Texture / roughness",
        "Enlarged pores",
        "Melasma / pigmentation",
        "Fine lines and early wrinkles",
        "Overall rejuvenation and skin quality improvement",
        "Early to moderate skin laxity",
        "Skin that hasn’t responded to topicals",
      ],
      duration: "How long has this been an issue?",
      durationOptions: ["< 6 months", "6–12 months", "1–3 years", "3+ years"],
      prior: "Have you had professional treatments before?",
      priorOptions: [
        "No",
        "Yes – Microneedling",
        "Yes – Lasers",
        "Yes – Injectables or other procedures",
      ],
      priorDetails: "If yes, briefly describe (optional)",
      tone: "Skin tone",
      toneOptions: ["Very fair", "Light", "Medium", "Tan", "Deep"],
      openPlan: "Are you open to a treatment plan if recommended?",
      openPlanOptions: ["Yes", "I want more information first"],
      travel: "Can you travel to Tijuana?",
      travelOptions: ["Yes", "Not at this time"],
      name: "Full name",
      email: "Email",
      phone: "Phone number",
      notes: "Anything else you want us to know? (optional)",
      packageTiming: "Package timing",
      packageTimingOptions: ["1 visit", "2 visits", "Not sure"],
    },
    submit: "Submit for Clinical Review",
    errorRequired: "Please complete all required fields.",
    errorPhone: "Please enter a valid phone number.",
    errorSubmit: "Submission failed. Please try again.",
  },
  es: {
    title: "Evaluación de Candidatura para RF Microneedling",
    deviceLine: "Con Sylfirm X",
    subtitle: "Revisado por un equipo médico antes de planear tratamiento.",
    support:
      "Esta evaluación breve ayuda a determinar si el RF microneedling es adecuado para tu piel y objetivos antes de agendar cualquier tratamiento.",
    supportDevice:
      "Utilizamos el dispositivo Sylfirm X para tratar textura, poros, pigmentación y signos tempranos de envejecimiento con energía RF médica controlada.",
    cta: "Iniciar evaluación",
    sectionFor: "Para quién es",
    forList: [
      "Cicatrices de acné o textura irregular",
      "Poros dilatados",
      "Melasma o pigmentación",
      "Líneas finas y arrugas tempranas",
      "Rejuvenecimiento general y mejora de la calidad de la piel",
      "Flacidez leve a moderada",
      "Piel que no responde a tópicos",
    ],
    forNote: "Si no estás seguro, esta evaluación ayuda a definir los pasos.",
    sectionHow: "Qué sucede después",
    howSteps: [
      "Completas una breve evaluación",
      "Nuestro equipo clínico revisa tus respuestas",
      "Te contactamos por WhatsApp con recomendaciones",
    ],
    howNote: "Esto no es una reserva automática. Cada caso se revisa individualmente.",
    sectionDeviceTitle: "Por qué importa el dispositivo",
    sectionDeviceCopy:
      "No todos los dispositivos de RF microneedling actúan igual en la piel. Sylfirm X permite un mayor control en la entrega de energía y profundidad, lo cual es especialmente relevante en pieles con riesgo de pigmentación y condiciones como el melasma, cuando está indicado clínicamente.",
    sectionDeviceLink: "Conoce más sobre Sylfirm X RF microneedling y la planificación del tratamiento.",
    sectionMedical: "Contexto médico",
    medicalCopy:
      "El RF microneedling es un procedimiento médico que debe personalizarse según tu tipo de piel, condición e historial.",
    medicalBullets: [
      "Espera o consulta si estás embarazada o lactando",
      "Infecciones activas en la piel",
      "Ciertas condiciones autoinmunes (consulta primero)",
    ],
    formIntro:
      "Responde con la mayor precisión posible. Tus respuestas ayudan a evaluar tu candidatura.",
    fields: {
      concern: "Principal preocupación de la piel",
      concernOptions: [
        "Cicatrices de acné o textura irregular",
        "Poros dilatados",
        "Melasma / pigmentación",
        "Líneas finas y arrugas tempranas",
        "Rejuvenecimiento general y mejora de la calidad de la piel",
        "Flacidez leve a moderada",
        "Piel que no responde a tópicos",
      ],
      duration: "¿Desde hace cuánto tiempo?",
      durationOptions: ["< 6 meses", "6–12 meses", "1–3 años", "3+ años"],
      prior: "¿Has tenido tratamientos profesionales?",
      priorOptions: [
        "No",
        "Sí – Microneedling",
        "Sí – Láser",
        "Sí – Inyectables u otros procedimientos",
      ],
      priorDetails: "Si respondiste sí, describe brevemente (opcional)",
      tone: "Tono de piel",
      toneOptions: ["Muy claro", "Claro", "Medio", "Moreno", "Oscuro"],
      openPlan: "¿Estás abierto a un plan si se recomienda?",
      openPlanOptions: ["Sí", "Quiero más información primero"],
      travel: "¿Puedes viajar a Tijuana?",
      travelOptions: ["Sí", "No por el momento"],
      name: "Nombre completo",
      email: "Correo",
      phone: "Número de teléfono",
      notes: "¿Algo más que debamos saber? (opcional)",
      packageTiming: "Tiempo para el paquete",
      packageTimingOptions: ["1 visita", "2 visitas", "No estoy seguro"],
    },
    submit: "Enviar para revisión clínica",
    errorRequired: "Completa todos los campos requeridos.",
    errorPhone: "Ingresa un número de teléfono válido.",
    errorSubmit: "No se pudo enviar. Intenta de nuevo.",
  },
};

export default function RfMicroneedlingCandidacy() {
  return (
    <TreatmentCandidacyForm
      content={content}
      ogImagePath="/sylfirmx.jpg"
      funnelType="rf_microneedling"
      defaultTreatmentInterest="RF Microneedling Candidacy Assessment"
      sourceLabelEn="RF Microneedling Candidacy (EN)"
      sourceLabelEs="RF Microneedling Candidacy (ES)"
      thankYouPathEn="/thank-you-rf-microneedling"
      thankYouPathEs="/es/thank-you-rf-microneedling"
      showDeviceSection
      deviceLinkHref="/learn/sylfirm-x-rf-microneedling"
      heroVideoSrc="/sylfirmx.mp4"
      heroVideoLabel="Sylfirm X RF microneedling video"
      heroVideoPoster="/sylfirmx.jpg"
    />
  );
}

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
