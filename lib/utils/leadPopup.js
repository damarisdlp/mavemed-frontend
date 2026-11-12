// Shared by every automatic lead popup, regardless of language or campaign.
const SEEN_KEY = "mave_lead_popup_seen";
const LEGACY_KEYS = [
  "mave_freebie_popup_seen_en",
  "mave_freebie_popup_seen_es",
  "mave_promo_popup_seen_en",
  "mave_promo_popup_seen_es",
];
let seenInMemory = false;

export function markLeadPopupSeen() {
  seenInMemory = true;
  try {
    window.localStorage.setItem(SEEN_KEY, "1");
  } catch {
    // Keep the current page usable when browser storage is unavailable.
  }
}

export function shouldShowLeadPopup() {
  if (typeof window === "undefined" || seenInMemory) return false;
  try {
    if (window.localStorage.getItem(SEEN_KEY)) {
      seenInMemory = true;
      return false;
    }
    // Preserve a dismissal from the old per-language, per-tab behavior.
    if (LEGACY_KEYS.some((key) => window.sessionStorage.getItem(key))) {
      markLeadPopupSeen();
      return false;
    }
  } catch {
    // Fall back to once per page when browser storage is unavailable.
  }
  markLeadPopupSeen();
  return true;
}
