import { describe, expect, it } from "vitest";
import { contactFormSchema, valuationFormSchema, propertyAlertFormSchema } from "@/lib/schemas";

const validContact = {
  fullName: "Jane Buyer",
  email: "jane@example.com",
  phone: "904-305-4448",
  interest: "buying" as const,
  preferredContactMethod: "phone" as const,
  message: "I'd like to schedule a showing this weekend.",
  consent: true,
  companyWebsite: "",
};

describe("contactFormSchema", () => {
  it("accepts a fully valid submission", () => {
    const result = contactFormSchema.safeParse(validContact);
    expect(result.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const result = contactFormSchema.safeParse({ ...validContact, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid phone number", () => {
    const result = contactFormSchema.safeParse({ ...validContact, phone: "123" });
    expect(result.success).toBe(false);
  });

  it("rejects a message that's too short", () => {
    const result = contactFormSchema.safeParse({ ...validContact, message: "hi" });
    expect(result.success).toBe(false);
  });

  it("rejects when consent is not given", () => {
    const result = contactFormSchema.safeParse({ ...validContact, consent: false });
    expect(result.success).toBe(false);
  });

  it("rejects an unknown interest value", () => {
    const result = contactFormSchema.safeParse({ ...validContact, interest: "not-a-real-option" });
    expect(result.success).toBe(false);
  });
});

const validValuation = {
  propertyAddress: "123 Main St, Lake City, FL",
  fullName: "John Seller",
  email: "john@example.com",
  phone: "9043054448",
  preferredContactMethod: "text" as const,
  sellingTimeline: "3-6-months" as const,
  propertyType: "single-family" as const,
  importantUpdates: "New roof in 2024",
  additionalMessage: "",
  consent: true,
  companyWebsite: "",
};

describe("valuationFormSchema", () => {
  it("accepts a fully valid submission", () => {
    const result = valuationFormSchema.safeParse(validValuation);
    expect(result.success).toBe(true);
  });

  it("rejects a missing property address", () => {
    const result = valuationFormSchema.safeParse({ ...validValuation, propertyAddress: "" });
    expect(result.success).toBe(false);
  });

  it("allows importantUpdates and additionalMessage to be omitted", () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- destructured out on purpose to build a payload without them
    const { importantUpdates, additionalMessage, ...rest } = validValuation;
    const result = valuationFormSchema.safeParse(rest);
    expect(result.success).toBe(true);
  });
});

describe("propertyAlertFormSchema", () => {
  it("accepts a valid submission", () => {
    const result = propertyAlertFormSchema.safeParse({
      fullName: "Alex Alert",
      email: "alex@example.com",
      phone: "904-305-4448",
      city: "Lake City",
      minPrice: null,
      maxPrice: null,
      propertyType: null,
      consent: true,
      companyWebsite: "",
    });
    expect(result.success).toBe(true);
  });

  it("flags a filled honeypot as a validation failure", () => {
    const result = propertyAlertFormSchema.safeParse({
      fullName: "Bot",
      email: "bot@example.com",
      phone: "904-305-4448",
      city: "Lake City",
      consent: true,
      companyWebsite: "http://spam.example.com",
    });
    expect(result.success).toBe(false);
  });
});
