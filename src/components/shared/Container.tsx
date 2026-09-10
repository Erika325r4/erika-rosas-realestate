import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  /** Constrains to the long-form reading width (720px) instead of the full content width. */
  narrow?: boolean;
}) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${
        narrow ? "max-w-(--container-prose)" : "max-w-(--container-content)"
      } ${className}`}
    >
      {children}
    </div>
  );
}
