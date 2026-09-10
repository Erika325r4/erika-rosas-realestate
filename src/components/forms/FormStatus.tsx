import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export type FormState = "idle" | "submitting" | "success" | "error";

export function FormStatus({ state, errorMessage }: { state: FormState; errorMessage?: string }) {
  if (state === "submitting") {
    return (
      <p role="status" className="flex items-center gap-2 text-sm text-charcoal/70">
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        Sending your message...
      </p>
    );
  }

  if (state === "success") {
    return (
      <p
        role="status"
        className="flex items-center gap-2 rounded-lg bg-success/10 p-3 text-sm font-medium text-success"
      >
        <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
        Thanks — your request was received. Erika will follow up soon.
      </p>
    );
  }

  if (state === "error") {
    return (
      <p
        role="alert"
        className="flex items-center gap-2 rounded-lg bg-error/10 p-3 text-sm font-medium text-error"
      >
        <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
        {errorMessage ?? "Something went wrong. Please try again, or call/text Erika directly."}
      </p>
    );
  }

  return null;
}
