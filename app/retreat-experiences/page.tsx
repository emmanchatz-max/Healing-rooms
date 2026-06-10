import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeImages, retreatMoments } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Retreat Experiences | Healing Rooms",
  description:
    "Explore luxury retreat experiences with peaceful accommodations, healing prayer, beautiful natural surroundings, and restorative hospitality.",
};

export default function RetreatExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Retreat Experiences"
        title="Luxury retreat stays designed for deep rest, emotional renewal, and hope."
        description="Our retreat experiences pair beautiful hospitality with healing prayer, unhurried conversation, and peaceful natural surroundings."
        image={homeImages.retreat}
      />
      <section className="bg-ivory py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="The Experience"
              title="A premium atmosphere that feels serene, warm, and quietly restorative."
              description="Guests are welcomed into an environment shaped by elegant interiors, natural light, calming textures, and attentive hospitality."
            />
            <ButtonLink href="/contact" className="mt-8">
              Inquire About Retreat Stays
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {retreatMoments.map((item) => (
              <div
                key={item}
                className="rounded-[1.75rem] border border-stone/70 bg-white/80 p-5 shadow-soft"
              >
                <p className="leading-7 text-charcoal/75">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-cream py-20 sm:py-24">
        <Container className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Weekend Retreats",
              text: "A restorative short stay with quiet space, prayer support, and room to breathe deeply again.",
            },
            {
              title: "Midweek Escapes",
              text: "A peaceful retreat for guests needing focused renewal away from the pace and noise of normal routines.",
            },
            {
              title: "Custom Stays",
              text: "Tailored experiences for guests who need a particular rhythm of privacy, support, and care.",
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
    </>
  );
}
