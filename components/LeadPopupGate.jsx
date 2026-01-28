import { getActiveLeadForm, isPromoLeadForm } from "@/lib/data/leadForms";
import FreebiePopup from "./FreebiePopup";
import PromoLeadPopup from "./PromoLeadPopup";

export default function LeadPopupGate() {
  const activeForm = getActiveLeadForm();
  if (isPromoLeadForm(activeForm)) return <PromoLeadPopup />;
  return <FreebiePopup />;
}
