"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { site } from "@/content/site";
import { mainNavigation } from "@/content/navigation";

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    focusable?.[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key === "Tab" && focusable && focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        className="tap-target flex items-center justify-center rounded-md text-navy"
        aria-expanded={open}
        aria-controls="mobile-navigation-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 bg-charcoal/40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      ) : null}

      <div
        id="mobile-navigation-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        hidden={!open}
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col gap-4 overflow-y-auto bg-white p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-bold text-navy">{site.name}</span>
          <button
            type="button"
            className="tap-target flex items-center justify-center rounded-md text-navy"
            aria-label="Close menu"
            onClick={() => {
              setOpen(false);
              triggerRef.current?.focus();
            }}
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <a
          href={site.telHref}
          className="tap-target flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call or Text {site.phoneDisplay}
        </a>

        <nav aria-label="Mobile primary" className="flex flex-col gap-1">
          {mainNavigation.map((link) =>
            link.children ? (
              <div key={link.href}>
                <button
                  type="button"
                  className="tap-target flex w-full items-center justify-between rounded-md px-2 py-3 text-left text-base font-medium text-charcoal"
                  aria-expanded={openSection === link.href}
                  onClick={() =>
                    setOpenSection((current) => (current === link.href ? null : link.href))
                  }
                >
                  {link.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openSection === link.href ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {openSection === link.href ? (
                  <div className="flex flex-col gap-1 pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="tap-target flex items-center rounded-md px-2 py-2 text-sm text-charcoal/80"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="tap-target flex items-center rounded-md px-2 py-3 text-base font-medium text-charcoal"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </div>
  );
}
