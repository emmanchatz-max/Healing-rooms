"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        onClick={() => setOpen((value: boolean) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone/80 bg-white/80 text-charcoal backdrop-blur transition hover:border-gold"
      >
        <span className="sr-only">Open menu</span>
        <div className="space-y-1.5">
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
        </div>
      </button>
      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-4 top-[calc(100%+1rem)] rounded-[2rem] border border-stone/80 bg-ivory p-5 shadow-luxe"
        >
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium text-charcoal transition hover:bg-cream",
                  pathname === item.href && "bg-cream text-forest",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
