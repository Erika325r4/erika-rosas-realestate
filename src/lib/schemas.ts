import { z } from "zod";
import { isValidPhoneNumber } from "./formatting";

/** Shared across all three lead forms. Must stay empty — a filled value means a bot. */
const honeypot = z.string().max(0).optional().or(z.literal(""));

const phoneField = z
  .string()
  .trim()
  .min(1, "Phone number is required.")
  .refine(isValidPhoneNumber, "Enter a valid 10-digit phone number.");

const consentField = z
  .boolean()
  .refine((value) => value === true, "Please confirm you agree to be contacted.");

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  email: z.email("Enter a valid email address."),
  phone: phoneField,
  interest: z.enum([
    "buying",
    "selling",
    "home-valuation",
    "relocation",
    "va-military",
    "land-acreage",
    "manufactured-home",
    "new-construction",
    "investment-property",
    "divorce-property",
    "spanish-assistance",
    "other",
  ]),
  preferredContactMethod: z.enum(["phone", "text", "email"]),
  message: z.string().trim().min(10, "Please share a few details (10 characters minimum)."),
  consent: consentField,
  companyWebsite: honeypot,
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const valuationFormSchema = z.object({
  propertyAddress: z.string().trim().min(5, "Enter the property address."),
  fullName: z.string().trim().min(2, "Enter your full name."),
  email: z.email("Enter a valid email address."),
  phone: phoneField,
  preferredContactMethod: z.enum(["phone", "text", "email"]),
  sellingTimeline: z.enum([
    "immediately",
    "1-3-months",
    "3-6-months",
    "6-12-months",
    "just-researching",
  ]),
  propertyType: z.enum(["single-family", "manufactured", "land", "multi-family", "other"]),
  importantUpdates: z.string().trim().max(1000).optional(),
  additionalMessage: z.string().trim().max(1000).optional(),
  consent: consentField,
  companyWebsite: honeypot,
});

export type ValuationFormValues = z.infer<typeof valuationFormSchema>;

export const propertyAlertFormSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  email: z.email("Enter a valid email address."),
  phone: phoneField,
  city: z.string().trim().min(2, "Enter a city."),
  minPrice: z.number().nonnegative().nullable().optional(),
  maxPrice: z.number().nonnegative().nullable().optional(),
  propertyType: z.string().nullable().optional(),
  consent: consentField,
  companyWebsite: honeypot,
});

export type PropertyAlertFormValues = z.infer<typeof propertyAlertFormSchema>;
