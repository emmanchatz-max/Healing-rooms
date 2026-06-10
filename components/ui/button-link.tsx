import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium tracking-[0.16em] transition duration-300",
        variant === "primary" &&
          "bg-forest text-ivory shadow-soft hover:-translate-y-0.5 hover:bg-charcoal",
        variant === "secondary" &&
          "border border-stone/70 bg-white/70 text-charcoal hover:border-gold hover:text-forest",
        variant === "ghost" && "text-charcoal hover:text-forest",
        className,
      )}
    >
      {children}
    </Link>
  );
}
