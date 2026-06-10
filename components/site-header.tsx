import Link from "next/link";

import { MobileNav } from "@/components/mobile-nav";
import { Container } from "@/components/ui/container";
import { navigation, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone/50 bg-ivory/90 backdrop-blur">
      <Container className="relative flex min-h-[84px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-sm font-semibold tracking-[0.2em] text-ivory">
            HR
          </div>
          <div>
            <p className="font-serif text-2xl leading-none text-charcoal">{site.name}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-charcoal/50">
              Healing and Restoration Retreats
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm text-charcoal/78 transition hover:bg-white hover:text-forest",
                item.href === "/contact" && "ml-2 bg-forest px-5 text-ivory hover:bg-charcoal hover:text-ivory",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </Container>
    </header>
  );
}
