import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeImages, sessionHighlights } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Healing Sessions | Healing Rooms",
  description:
    "Explore healing prayer sessions designed to offer peace, hope, spiritual encouragement, and compassionate support.",
};

export default function HealingSessionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Healing Prayer Sessions"
        title="Prayerful support offered with gentleness, privacy, and hope."
        description="Our healing prayer sessions create unhurried space for listening, biblical encouragement, and compassionate prayer in a calm setting."
        image={homeImages.prayer}
      />
      <section className="bg-ivory py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="What To Expect"
              title="A calm and confidential experience designed to help you feel safe and supported."
              description="Sessions are conversational rather than formal. We begin by listening carefully, then pray with sensitivity and a posture of compassion."
            />
          </div>
          <div className="rounded-[2rem] border border-stone/70 bg-white/80 p-8 shadow-soft">
            <ul className="space-y-4">
              {sessionHighlights.map((item) => (
                <li key={item} className="flex gap-3 text-charcoal/75">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="bg-cream py-20 sm:py-24">
        <Container className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Welcome",
              text: "You are received with warmth and given space to share as much or as little as you feel comfortable sharing.",
            },
            {
              title: "Prayer",
              text: "Prayer is offered in a gentle, respectful way that reflects biblical hope without pressure or performance.",
            },
            {
              title: "Peace",
              text: "Guests often leave with a sense of clarity, comfort, and steadier peace that carries beyond the session.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-stone/70 bg-white/80 p-7 shadow-soft"
            >
              <h3 className="font-serif text-3xl text-charcoal">{item.title}</h3>
              <p className="mt-4 leading-7 text-charcoal/72">{item.text}</p>
            </article>
          ))}
        </Container>
      </section>
      <section className="bg-ivory py-20">
        <Container className="text-center">
          <ButtonLink href="/contact">Book a Healing Prayer Session</ButtonLink>
        </Container>
      </section>
    </>
  );
}
