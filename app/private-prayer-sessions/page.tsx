import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Private Prayer Sessions | Healing Rooms",
  description:
    "Discover one-to-one private prayer sessions offering peace, attentive listening, and thoughtful support in a luxury retreat setting.",
};

export default function PrivatePrayerSessionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Private Prayer Sessions"
        title="Dedicated one-to-one support for guests seeking a quiet place to be heard."
        description="Private prayer sessions are ideal for those who need personal spiritual support, a gentle conversation, and space to bring heavy things before God."
        image={homeImages.gatherings}
      />
      <section className="bg-ivory py-20 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-stone/70 bg-white/80 p-8 shadow-soft">
            <SectionHeading
              eyebrow="Session Format"
              title="Fifty minutes of attentive care in a calm, private setting."
              description="Each session gives guests time to slow down, share what matters, receive prayer, and leave with a greater sense of peace and clarity."
            />
          </div>
          <div className="rounded-[2rem] border border-stone/70 bg-charcoal p-8 text-ivory shadow-luxe">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Best suited for
            </p>
            <ul className="mt-6 space-y-4 text-ivory/78">
              {[
                "Personal grief or loss",
                "Burnout, overwhelm, or emotional fatigue",
                "Relational burdens or difficult decisions",
                "Spiritual dryness and a longing for renewed hope",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="bg-cream py-20">
        <Container className="text-center">
          <SectionHeading
            eyebrow="Ready To Begin"
            title="Reach out and we will help you choose the right next step."
            description="Some guests begin with a single private session and later decide to book a longer retreat experience."
            align="center"
          />
          <ButtonLink href="/contact" className="mt-8">
            Request a Private Session
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
