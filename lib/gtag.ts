declare function gtag(...args: unknown[]): void;

export function trackGenerateLead() {
  if (typeof gtag !== "undefined") {
    gtag("event", "generate_lead");
  }
}
