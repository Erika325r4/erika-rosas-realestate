/**
 * Analytics abstraction. No tracking script is installed yet — calling
 * trackEvent() is a safe no-op (console-only in development) until a real
 * provider (GA4, Plausible, etc.) and a cookie-consent plan are in place.
 * Wire a provider here, not at each call site, so every call site stays
 * unchanged when analytics goes live. See docs/DEPLOYMENT.md.
 */
export type AnalyticsEvent =
  | "phone_click"
  | "text_click"
  | "email_click"
  | "property_search"
  | "property_view"
  | "valuation_start"
  | "valuation_submit"
  | "contact_submit"
  | "guide_download"
  | "area_view";

export function trackEvent(event: AnalyticsEvent, payload: Record<string, unknown> = {}): void {
  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", event, payload);
  }
  // TODO(analytics): forward to the chosen provider once NEXT_PUBLIC_ANALYTICS_ID
  // and a consent mechanism are configured.
}
