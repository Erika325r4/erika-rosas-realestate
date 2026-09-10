"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { propertyAlertFormSchema, type PropertyAlertFormValues } from "@/lib/schemas";
import { FormStatus, type FormState } from "./FormStatus";

const inputClass =
  "tap-target w-full rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-sm text-charcoal focus-visible:outline-3 focus-visible:outline-gold";

export function PropertyAlertForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PropertyAlertFormValues>({
    resolver: zodResolver(propertyAlertFormSchema),
    defaultValues: { consent: false, companyWebsite: "" },
  });

  async function onSubmit(values: PropertyAlertFormValues) {
    setFormState("submitting");
    try {
      const response = await fetch("/api/property-alerts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error("Request failed");
      setFormState("success");
      reset();
    } catch {
      setFormState("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-3 rounded-2xl border border-navy/10 bg-white p-5"
    >
      <h3 className="text-base font-semibold text-navy">Get New Listing Alerts</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="alertFullName" className="sr-only">
            Full Name
          </label>
          <input
            id="alertFullName"
            placeholder="Full name"
            className={inputClass}
            {...register("fullName")}
          />
          {errors.fullName ? (
            <p className="mt-1 text-xs text-error">{errors.fullName.message}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="alertEmail" className="sr-only">
            Email
          </label>
          <input
            id="alertEmail"
            type="email"
            placeholder="Email"
            className={inputClass}
            {...register("email")}
          />
          {errors.email ? <p className="mt-1 text-xs text-error">{errors.email.message}</p> : null}
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="alertPhone" className="sr-only">
            Phone
          </label>
          <input
            id="alertPhone"
            type="tel"
            placeholder="Phone"
            className={inputClass}
            {...register("phone")}
          />
          {errors.phone ? <p className="mt-1 text-xs text-error">{errors.phone.message}</p> : null}
        </div>
        <div>
          <label htmlFor="alertCity" className="sr-only">
            City
          </label>
          <input
            id="alertCity"
            placeholder="City you're watching"
            className={inputClass}
            {...register("city")}
          />
          {errors.city ? <p className="mt-1 text-xs text-error">{errors.city.message}</p> : null}
        </div>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="alertCompanyWebsite">Leave this field blank</label>
        <input
          id="alertCompanyWebsite"
          tabIndex={-1}
          autoComplete="off"
          {...register("companyWebsite")}
        />
      </div>

      <label className="flex items-start gap-2 text-xs text-charcoal">
        <input type="checkbox" className="mt-1" {...register("consent")} />I agree to be contacted
        about matching listings.
      </label>
      {errors.consent ? <p className="text-xs text-error">{errors.consent.message}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="tap-target rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0f2233] disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Notify Me"}
      </button>

      <FormStatus state={formState} />
    </form>
  );
}
