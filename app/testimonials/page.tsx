import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeImages, testimonials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Testimonials | Healing Rooms",
  description:
    "Read guest reflections on the peace, prayerful support, and restorative hospitality they experienced at Healing Rooms.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Stories of peace, renewed hope, and compassionate support."
        description="Guest experiences often speak most clearly to the atmosphere of warmth and restoration we aim to create."
        image={homeImages.nature}
      />
      <section className="bg-ivory py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Guest Reflections"
            title="A few words from guests who found rest and renewal here."
            description="These testimonials are realistic placeholders for the full launch version of the site."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-[2rem] border border-stone/70 bg-white/80 p-7 shadow-soft"
              >
                <p className="font-serif text-4xl text-gold">“</p>
                <p className="mt-4 leading-8 text-charcoal/74">{item.quote}</p>
                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.26em] text-forest/75">
                  {item.name}
                </p>
                <p className="mt-2 text-sm text-charcoal/58">{item.title}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <ButtonLink href="/contact">Plan Your Visit</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
