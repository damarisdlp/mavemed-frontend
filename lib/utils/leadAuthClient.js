const getLeadAuthHeaders = () => {
  const leadKey = process.env.NEXT_PUBLIC_LEAD_FORM_KEY;
  if (!leadKey) return {};
  return { "x-mave-lead-key": leadKey };
};

export { getLeadAuthHeaders };
