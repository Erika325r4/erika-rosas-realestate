"use client";

import { Phone, MessageSquareText } from "lucide-react";
import { site } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import { Button } from "./Button";

export function CallTextButtons({
  size = "md",
  className = "",
}: {
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Button
        href={site.telHref}
        variant="secondary"
        size={size}
        icon={<Phone className="h-4 w-4" aria-hidden="true" />}
        onClick={() => trackEvent("phone_click")}
      >
        Call Erika
      </Button>
      <Button
        href={site.smsHref}
        variant="outline"
        size={size}
        icon={<MessageSquareText className="h-4 w-4" aria-hidden="true" />}
        onClick={() => trackEvent("text_click")}
      >
        Text Erika
      </Button>
    </div>
  );
}
