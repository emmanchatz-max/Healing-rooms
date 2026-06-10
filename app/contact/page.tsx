import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactDetails, homeImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | Healing Rooms",
  description:
    "Contact Healing Rooms to inquire about healing prayer sessions, private prayer, inner restoration, and luxury retreat experiences.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Begin with a quiet conversation about the support you need."
        description="Whether you are considering a retreat stay, healing prayer, or a private session, we are here to help you find the right next step."
        image={homeImages.gatherings}
      />
      <section className="bg-ivory py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Reach Out"
              title="Our team responds personally and thoughtfully."
              description="Use the form or contact details below and we will guide you with clarity, warmth, and discretion."
            />
            <div className="mt-8 space-y-4">
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-[1.5rem] border border-stone/70 bg-white/80 p-5 shadow-soft"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-forest/70">
                    {detail.label}
                  </p>
                  <p className="mt-3 text-lg text-charcoal/78">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
