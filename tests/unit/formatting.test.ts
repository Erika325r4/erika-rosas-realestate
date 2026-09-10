import { describe, expect, it } from "vitest";
import {
  formatPhoneNumber,
  isValidPhoneNumber,
  formatCurrency,
  formatNumber,
  formatAcreage,
} from "@/lib/formatting";

describe("formatPhoneNumber", () => {
  it("formats a plain 10-digit number", () => {
    expect(formatPhoneNumber("9043054448")).toBe("904-305-4448");
  });

  it("formats a number with existing punctuation", () => {
    expect(formatPhoneNumber("(904) 305-4448")).toBe("904-305-4448");
  });

  it("strips a leading country code 1", () => {
    expect(formatPhoneNumber("19043054448")).toBe("904-305-4448");
  });

  it("returns the input unchanged when it isn't 10 digits", () => {
    expect(formatPhoneNumber("12345")).toBe("12345");
  });
});

describe("isValidPhoneNumber", () => {
  it("accepts a valid 10-digit number", () => {
    expect(isValidPhoneNumber("904-305-4448")).toBe(true);
  });

  it("rejects a short number", () => {
    expect(isValidPhoneNumber("12345")).toBe(false);
  });

  it("rejects an empty string", () => {
    expect(isValidPhoneNumber("")).toBe(false);
  });
});

describe("formatCurrency", () => {
  it("formats whole dollar amounts with no decimals", () => {
    expect(formatCurrency(299900)).toBe("$299,900");
  });

  it("rounds to the nearest dollar", () => {
    expect(formatCurrency(100.6)).toBe("$101");
  });
});

describe("formatNumber", () => {
  it("adds thousands separators", () => {
    expect(formatNumber(1607)).toBe("1,607");
  });
});

describe("formatAcreage", () => {
  it("pluralizes acres by default", () => {
    expect(formatAcreage(4.35)).toBe("4.35 acres");
  });

  it("uses the singular for exactly 1", () => {
    expect(formatAcreage(1)).toBe("1 acre");
  });
});
