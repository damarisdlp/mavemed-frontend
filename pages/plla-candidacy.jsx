import TreatmentCandidacyForm from "@/components/leads/TreatmentCandidacyForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";

const content = {
  en: {
    title: "PLLA Candidacy Assessment",
    deviceLine: "",
    subtitle: "Reviewed by a medical team before treatment planning.",
    support:
      "This short assessment helps determine whether PLLA is appropriate for your goals before scheduling treatment.",
    supportDevice: "",
    cta: "Start My Assessment",
    sectionFor: "Who this is for",
    forList: [
      "Loss of volume or facial structure",
      "Skin that looks thinner or less firm over time",
      "Desire for gradual, collagen-based improvement",
      "Patients seeking natural-looking facial restoration",
    ],
    forNote: "If you’re unsure, this assessment clarifies next steps.",
    sectionHow: "What happens next",
    howSteps: [
      "You complete a short candidacy assessment",
      "Our clinical team reviews your answers",
      "We contact you via WhatsApp with recommendations",
    ],
    howNote: "This is not a booking form. Every case is reviewed individually.",
    sectionDeviceTitle: "",
    sectionDeviceCopy: "",
    sectionDeviceLink: "",
    sectionMedical: "Medical context",
    medicalCopy:
      "PLLA is a biostimulator and should be tailored to your anatomy, goals, and treatment history.",
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
        "Loss of volume",
        "Facial structure or contour",
        "Overall facial rejuvenation",
        "Skin laxity",
        "Combination of the above",
      ],
      duration: "How long has this been an issue?",
      durationOptions: ["< 6 months", "6–12 months", "1–3 years", "3+ years"],
      prior: "Have you had professional treatments before?",
      priorOptions: [
        "No",
        "Yes – Injectables",
        "Yes – Lasers or devices",
        "Yes – Other treatments",
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
    title: "Evaluación de Candidatura para PLLA",
    deviceLine: "",
    subtitle: "Revisado por un equipo médico antes de planear tratamiento.",
    support:
      "Esta evaluación breve ayuda a determinar si PLLA es adecuado para tus objetivos antes de agendar cualquier tratamiento.",
    supportDevice: "",
    cta: "Iniciar evaluación",
    sectionFor: "Para quién es",
    forList: [
      "Pérdida de volumen o estructura facial",
      "Piel más delgada o con menor firmeza",
      "Búsqueda de mejora gradual basada en colágeno",
      "Pacientes que buscan restauración facial natural",
    ],
    forNote: "Si no estás seguro, esta evaluación ayuda a definir los pasos.",
    sectionHow: "Qué sucede después",
    howSteps: [
      "Completas una breve evaluación",
      "Nuestro equipo clínico revisa tus respuestas",
      "Te contactamos por WhatsApp con recomendaciones",
    ],
    howNote: "Esto no es una reserva automática. Cada caso se revisa individualmente.",
    sectionDeviceTitle: "",
    sectionDeviceCopy: "",
    sectionDeviceLink: "",
    sectionMedical: "Contexto médico",
    medicalCopy:
      "PLLA es un bioestimulador y debe personalizarse según tu anatomía, objetivos e historial.",
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
        "Pérdida de volumen",
        "Estructura o contorno facial",
        "Rejuvenecimiento facial general",
        "Flacidez",
        "Combinación de las anteriores",
      ],
      duration: "¿Desde hace cuánto tiempo?",
      durationOptions: ["< 6 meses", "6–12 meses", "1–3 años", "3+ años"],
      prior: "¿Has tenido tratamientos profesionales?",
      priorOptions: [
        "No",
        "Sí – Inyectables",
        "Sí – Láser o dispositivos",
        "Sí – Otros tratamientos",
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

export default function PLLACandidacy() {
  return (
    <TreatmentCandidacyForm
      content={content}
      ogImagePath="/sylfirmx.jpg"
      funnelType="sculptra-candidacy"
      defaultTreatmentInterest="PLLA"
      sourceLabelEn="PLLA Funnel (EN)"
      sourceLabelEs="PLLA Funnel (ES)"
      thankYouPathEn="/thank-you-plla"
      thankYouPathEs="/es/thank-you-plla"
      showDeviceSection={false}
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
