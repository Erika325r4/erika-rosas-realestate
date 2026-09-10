/** Formats a 10-digit US number as "904-305-4448". Returns the input unchanged if it isn't 10 digits. */
export function formatPhoneNumber(value: string): string {
  const digits = value.replace(/\D/g, "");
  const tenDigit = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  if (tenDigit.length !== 10) return value;
  return `${tenDigit.slice(0, 3)}-${tenDigit.slice(3, 6)}-${tenDigit.slice(6)}`;
}

/** True when a string contains exactly 10 US phone digits (with optional formatting/leading 1). */
export function isValidPhoneNumber(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  const tenDigit = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  return tenDigit.length === 10;
}

/** Formats a number as USD currency with no decimal places, e.g. "$299,900". */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

/** Formats a number with thousands separators, e.g. "1,485". */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

/** Formats acreage for display, e.g. 4.35 -> "4.35 acres", 1 -> "1 acre". */
export function formatAcreage(value: number): string {
  const label = value === 1 ? "acre" : "acres";
  return `${value} ${label}`;
}

/** Formats an ISO date string as "January 5, 2026". */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
