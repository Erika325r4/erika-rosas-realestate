"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { trackEvent } from "@/lib/analytics";
import { FormStatus, type FormState } from "./FormStatus";

const interestOptions: { value: ContactFormValues["interest"]; label: string }[] = [
  { value: "buying", label: "Buying" },
  { value: "selling", label: "Selling" },
  { value: "home-valuation", label: "Home Valuation" },
  { value: "relocation", label: "Relocation" },
  { value: "va-military", label: "VA or Military Move" },
  { value: "land-acreage", label: "Land or Acreage" },
  { value: "manufactured-home", label: "Manufactured Home" },
  { value: "new-construction", label: "New Construction" },
  { value: "investment-property", label: "Investment Property" },
  { value: "divorce-property", label: "Divorce Property Support" },
  { value: "spanish-assistance", label: "Spanish Assistance" },
  { value: "other", label: "Other" },
];

const inputClass =
  "tap-target w-full rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-sm text-charcoal focus-visible:outline-3 focus-visible:outline-gold";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      interest: "buying",
      preferredContactMethod: "phone",
      consent: false,
      companyWebsite: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setFormState("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setFormState("success");
      trackEvent("contact_submit", { interest: values.interest });
      reset();
    } catch {
      setFormState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-charcoal">
            Full Name
          </label>
          <input
            id="fullName"
            className={inputClass}
            {...register("fullName")}
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName ? (
            <p className="mt-1 text-xs text-error">{errors.fullName.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-charcoal">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            {...register("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email ? <p className="mt-1 text-xs text-error">{errors.email.message}</p> : null}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-charcoal">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className={inputClass}
            {...register("phone")}
            aria-invalid={!!errors.phone}
          />
          {errors.phone ? <p className="mt-1 text-xs text-error">{errors.phone.message}</p> : null}
        </div>
        <div>
          <label
            htmlFor="preferredContactMethod"
            className="mb-1 block text-sm font-medium text-charcoal"
          >
            Preferred Contact Method
          </label>
          <select
            id="preferredContactMethod"
            className={inputClass}
            {...register("preferredContactMethod")}
          >
            <option value="phone">Phone</option>
            <option value="text">Text</option>
            <option value="email">Email</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="mb-1 block text-sm font-medium text-charcoal">
          I am interested in
        </label>
        <select id="interest" className={inputClass} {...register("interest")}>
          {interestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-charcoal">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className={inputClass}
          {...register("message")}
          aria-invalid={!!errors.message}
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-error">{errors.message.message}</p>
        ) : null}
      </div>

      {/* Honeypot — hidden from real visitors, left blank; bots that fill every field trip this. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">Leave this field blank</label>
        <input
          id="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          {...register("companyWebsite")}
        />
      </div>

      <div>
        <label className="flex items-start gap-2 text-sm text-charcoal">
          <input
            type="checkbox"
            className="mt-1"
            {...register("consent")}
            aria-invalid={!!errors.consent}
          />
          <span>
            I agree to be contacted by Erika Rosas by phone, text, or email about my request. See
            the{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>{" "}
            for details.
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-1 text-xs text-error">{errors.consent.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="tap-target rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-[#a4823f] disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      <FormStatus state={formState} />
    </form>
  );
}
