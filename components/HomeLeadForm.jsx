import { getActiveLeadForm, isPromoLeadForm } from "@/lib/data/leadForms";
import LeadForm from "./LeadForm";
import PromoLeadForm from "./PromoLeadForm";

export default function HomeLeadForm() {
  const activeForm = getActiveLeadForm();
  if (isPromoLeadForm(activeForm)) return <PromoLeadForm />;
  return <LeadForm />;
}
