"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { valuationFormSchema, type ValuationFormValues } from "@/lib/schemas";
import { trackEvent } from "@/lib/analytics";
import { FormStatus, type FormState } from "./FormStatus";

const timelineOptions: { value: ValuationFormValues["sellingTimeline"]; label: string }[] = [
  { value: "immediately", label: "Immediately" },
  { value: "1-3-months", label: "1–3 Months" },
  { value: "3-6-months", label: "3–6 Months" },
  { value: "6-12-months", label: "6–12 Months" },
  { value: "just-researching", label: "Just Researching" },
];

const propertyTypeOptions: { value: ValuationFormValues["propertyType"]; label: string }[] = [
  { value: "single-family", label: "Single-Family Home" },
  { value: "manufactured", label: "Manufactured Home" },
  { value: "land", label: "Land or Acreage" },
  { value: "multi-family", label: "Multi-Family" },
  { value: "other", label: "Other" },
];

const inputClass =
  "tap-target w-full rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-sm text-charcoal focus-visible:outline-3 focus-visible:outline-gold";

export function ValuationForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ValuationFormValues>({
    resolver: zodResolver(valuationFormSchema),
    defaultValues: {
      preferredContactMethod: "phone",
      sellingTimeline: "just-researching",
      propertyType: "single-family",
      importantUpdates: "",
      additionalMessage: "",
      consent: false,
      companyWebsite: "",
    },
  });

  async function onSubmit(values: ValuationFormValues) {
    setFormState("submitting");
    trackEvent("valuation_start");
    try {
      const response = await fetch("/api/valuation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setFormState("success");
      trackEvent("valuation_submit");
      reset();
    } catch {
      setFormState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <div>
        <label htmlFor="propertyAddress" className="mb-1 block text-sm font-medium text-charcoal">
          Property Address
        </label>
        <input
          id="propertyAddress"
          className={inputClass}
          {...register("propertyAddress")}
          aria-invalid={!!errors.propertyAddress}
        />
        {errors.propertyAddress ? (
          <p className="mt-1 text-xs text-error">{errors.propertyAddress.message}</p>
        ) : null}
      </div>

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

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="sellingTimeline" className="mb-1 block text-sm font-medium text-charcoal">
            Selling Timeline
          </label>
          <select id="sellingTimeline" className={inputClass} {...register("sellingTimeline")}>
            {timelineOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="propertyType" className="mb-1 block text-sm font-medium text-charcoal">
            Property Type
          </label>
          <select id="propertyType" className={inputClass} {...register("propertyType")}>
            {propertyTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="importantUpdates" className="mb-1 block text-sm font-medium text-charcoal">
          Important Updates (roof, HVAC, renovations, etc.)
        </label>
        <textarea
          id="importantUpdates"
          rows={3}
          className={inputClass}
          {...register("importantUpdates")}
        />
      </div>

      <div>
        <label htmlFor="additionalMessage" className="mb-1 block text-sm font-medium text-charcoal">
          Additional Message
        </label>
        <textarea
          id="additionalMessage"
          rows={3}
          className={inputClass}
          {...register("additionalMessage")}
        />
      </div>

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
            I agree to be contacted by Erika Rosas by phone, text, or email about this property. See
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

      <p className="text-xs text-charcoal/60">
        This form starts a personal review by Erika — it is not an instant automated value estimate.
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="tap-target rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy hover:bg-[#a4823f] disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Request My Personal Home Value Review"}
      </button>

      <FormStatus state={formState} />
    </form>
  );
}
