import Link from "next/link";

import { Container } from "@/components/ui/container";
import { navigation, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone/60 bg-charcoal text-ivory">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-md">
          <p className="font-serif text-3xl">{site.name}</p>
          <p className="mt-4 text-sm leading-7 text-ivory/72">
            Luxury Christian healing and restoration retreats shaped by peace,
            compassionate prayer, and warm hospitality.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Explore</p>
          <div className="mt-4 grid gap-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ivory/75 transition hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-gold">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-ivory/75">
            <p>{site.location}</p>
            <a href={`mailto:${site.email}`} className="block transition hover:text-gold">
              {site.email}
            </a>
            <a href={`tel:${site.phone}`} className="block transition hover:text-gold">
              {site.phone}
            </a>
          </div>
        </div>
      </Container>
      <Container className="border-t border-white/10 py-6 text-sm text-ivory/55">
        <p>© 2026 Healing Rooms. All rights reserved.</p>
      </Container>
    </footer>
  );
}
