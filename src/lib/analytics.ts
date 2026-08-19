import { GA_MEASUREMENT_ID } from "@/content/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (GA_MEASUREMENT_ID && typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

export function trackWhatsappClick(source: "float_button" | "footer") {
  trackEvent("whatsapp_click", { source });
}
