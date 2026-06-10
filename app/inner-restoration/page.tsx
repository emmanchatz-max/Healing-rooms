import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeImages, innerRestorationSteps } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Inner Restoration | Healing Rooms",
  description:
    "A deeper pathway of emotional and spiritual renewal for guests seeking steady support, prayer, and restorative rhythms.",
};

export default function InnerRestorationPage() {
  return (
    <>
      <PageHero
        eyebrow="Inner Restoration"
        title="A thoughtful pathway for guests carrying grief, exhaustion, or inner heaviness."
        description="Inner Restoration offers a slower, deeper rhythm of prayer, conversation, and practical renewal for those who need more than a single session."
        image={homeImages.water}
      />
      <section className="bg-ivory py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="A Gentle Process"
            title="Move through pause, process, and renewal with compassionate support."
            description="This pathway is designed for guests who need space to breathe, reflect honestly, and receive care that honors both faith and emotional reality."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {innerRestorationSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[2rem] border border-stone/70 bg-white/80 p-7 shadow-soft"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-4 font-serif text-3xl text-charcoal">{step.title}</h3>
                <p className="mt-4 leading-7 text-charcoal/72">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-cream py-20 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="Who It Helps"
              title="Especially meaningful for seasons of grief, burnout, transition, and emotional fatigue."
              description="Guests often choose Inner Restoration when they are longing for sustained support rather than a one-time appointment."
            />
          </div>
          <div className="rounded-[2rem] border border-stone/70 bg-white/80 p-8 shadow-soft">
            <p className="leading-8 text-charcoal/74">
              The experience may include multiple prayer sessions, guided reflection, gentle
              rhythms for rest, and practical encouragement for carrying peace into everyday
              life. It is not rushed. It is intentionally designed to create room for meaningful
              change.
            </p>
            <ButtonLink href="/contact" className="mt-8">
              Ask About Inner Restoration
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
