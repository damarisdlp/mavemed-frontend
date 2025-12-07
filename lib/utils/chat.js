export const dispatchChatOpen = (event) => {
  if (typeof window === "undefined") return;

  const detail =
    event && typeof event.clientX === "number" && typeof event.clientY === "number"
      ? { x: event.clientX, y: event.clientY }
      : undefined;

  const customEvent = detail
    ? new CustomEvent("open-chat", { detail })
    : new CustomEvent("open-chat");

  window.dispatchEvent(customEvent);
};
