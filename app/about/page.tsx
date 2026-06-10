import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutStory, homeImages, values } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About | Healing Rooms",
  description:
    "Learn the mission, vision, story, and values behind Healing Rooms and the restorative atmosphere we offer every guest.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Healing Rooms"
        title="A place where compassionate care, beauty, and biblical hope come together."
        description="Healing Rooms exists to welcome guests into a gracious environment of peace, prayer, restoration, and quiet renewal."
        image={homeImages.nature}
      />
      <section className="bg-ivory py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Mission"
              title="To offer a restorative place where people can rest, receive prayer, and move toward wholeness."
              description="Our mission is to create a faith-centered retreat experience that feels peaceful, dignified, and deeply human."
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Vision"
              title="To become a trusted refuge for healing, emotional renewal, and hope-filled restoration."
              description="We envision a retreat environment where guests feel welcomed, supported, and strengthened to reenter life with greater peace."
            />
          </div>
        </Container>
      </section>
      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Story"
            title="Healing Rooms was shaped around the belief that restoration often begins in places of beauty, safety, and warm hospitality."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {aboutStory.map((paragraph) => (
              <article
                key={paragraph}
                className="rounded-[2rem] border border-stone/70 bg-white/80 p-7 shadow-soft"
              >
                <p className="leading-8 text-charcoal/74">{paragraph}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-ivory py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            title="The values that shape every guest experience."
            description="These commitments guide how we serve, communicate, and care."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-[2rem] border border-stone/70 bg-white/75 p-7 shadow-soft"
              >
                <h3 className="font-serif text-3xl text-charcoal">{value.title}</h3>
                <p className="mt-4 leading-7 text-charcoal/72">{value.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <ButtonLink href="/contact">Connect With Our Team</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
