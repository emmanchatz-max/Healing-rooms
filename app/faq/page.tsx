import type { Metadata } from "next";

import { FAQAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs, homeImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ | Healing Rooms",
  description:
    "Find answers about Healing Rooms, healing prayer sessions, retreat stays, guest expectations, and who the experience is designed for.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Clear answers for guests exploring whether Healing Rooms is the right fit."
        description="If you are considering a session or retreat, these questions cover the essentials and help set expectations with clarity."
        image={homeImages.water}
      />
      <section className="bg-ivory py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Your Questions"
            title="Helpful information before you reach out."
            description="If you still have questions after reading these answers, our team is happy to help personally."
          />
          <div className="mt-12">
            <FAQAccordion items={faqs} />
          </div>
          <ButtonLink href="/contact" className="mt-8">
            Ask a Question
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
