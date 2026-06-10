import Image from "next/image";

import { FAQAccordion } from "@/components/faq-accordion";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  benefits,
  faqs,
  heroStats,
  homeImages,
  offers,
  testimonials,
} from "@/lib/site-data";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-ivory">
      <div className="absolute inset-0">
        <Image
          src={homeImages.hero}
          alt="A peaceful luxury retreat in nature with warm light"
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/50" />
      <Container className="relative grid min-h-[calc(100vh-84px)] items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
            Faith-Centered Healing and Restoration
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-tight sm:text-6xl xl:text-7xl">
            A luxury retreat experience shaped by peace, prayer, and renewed hope.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/78">
            Healing Rooms offers a beautiful place to rest, receive compassionate prayer,
            reconnect with what is steady, and begin again with clarity and peace.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Plan Your Visit</ButtonLink>
            <ButtonLink href="/retreat-experiences" variant="secondary">
              Explore Retreats
            </ButtonLink>
          </div>
        </div>
        <div className="grid gap-4 rounded-[2rem] border border-white/12 bg-white/10 p-5 backdrop-blur">
          {heroStats.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] border border-white/10 bg-white/8 p-6"
            >
              <p className="font-serif text-5xl text-gold">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-ivory/72">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Guests Come"
          title="A restorative environment designed for the whole person."
          description="Every part of the experience is crafted to help guests slow down, feel safe, and receive meaningful support."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item, index) => (
            <article
              key={item.title}
              className="animate-fade-up rounded-[2rem] border border-stone/70 bg-white/70 p-7 shadow-soft"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gold">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-serif text-3xl text-charcoal">{item.title}</h3>
              <p className="mt-4 leading-7 text-charcoal/72">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function WhatWeOfferSection() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Offer"
          title="Personal prayer support, deeper restoration pathways, and immersive retreat stays."
          description="Choose the level of support that fits your season, whether you are seeking a single prayer appointment or a multi-day retreat."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className="rounded-[2rem] border border-stone/75 bg-white/80 p-7 shadow-soft"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-forest/70">
                Signature Offering
              </p>
              <h3 className="mt-4 font-serif text-3xl text-charcoal">{offer.title}</h3>
              <p className="mt-4 leading-7 text-charcoal/72">{offer.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-charcoal/75">
                {offer.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gold" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink href={offer.href} variant="ghost" className="mt-6 px-0">
                Learn More
              </ButtonLink>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FeaturedExperienceSection() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] shadow-luxe">
          <Image
            src={homeImages.retreat}
            alt="Elegant healing retreat interior with warm natural light"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Retreat Experiences"
            title="Rest in beautiful surroundings that help peace feel possible again."
            description="From serene suites to garden walks and restorative conversations, our retreats are designed to feel gracious, calm, and deeply welcoming."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-stone/70 bg-white/70 p-5">
              <p className="font-serif text-2xl text-charcoal">Healing Prayer Sessions</p>
              <p className="mt-3 leading-7 text-charcoal/72">
                Quiet, private appointments offering peace, prayer, and attentive support.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-stone/70 bg-white/70 p-5">
              <p className="font-serif text-2xl text-charcoal">Inner Restoration</p>
              <p className="mt-3 leading-7 text-charcoal/72">
                Deeper support for guests navigating grief, stress, relational pain, or burnout.
              </p>
            </div>
          </div>
          <ButtonLink href="/healing-sessions" className="mt-8">
            Discover Support Options
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function TestimonialSection() {
  return (
    <section className="bg-charcoal py-20 text-ivory sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Guest Stories"
          title="Guests describe a sense of peace, dignity, and renewed hope."
          description="These reflections capture the atmosphere we work to create for every person who arrives needing rest and compassionate care."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
            >
              <p className="font-serif text-3xl text-gold">“</p>
              <p className="mt-3 leading-8 text-ivory/78">{item.quote}</p>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.26em] text-gold">
                {item.name}
              </p>
              <p className="mt-2 text-sm text-ivory/62">{item.title}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FaqPreviewSection() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Everything you may want to know before reaching out."
          description="If you are wondering whether Healing Rooms is the right fit for you, these answers offer a good starting point."
        />
        <div className="mt-12">
          <FAQAccordion items={faqs.slice(0, 4)} />
        </div>
        <ButtonLink href="/faq" variant="secondary" className="mt-8">
          View All Questions
        </ButtonLink>
      </Container>
    </section>
  );
}

export function CallToActionSection() {
  return (
    <section className="bg-ivory bg-soft-radial py-20 sm:py-24">
      <Container className="rounded-[2.5rem] border border-stone/70 bg-white/80 px-6 py-12 shadow-luxe sm:px-10 lg:px-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-forest/70">
              Begin Your Renewal
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
              You do not have to carry everything alone.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-charcoal/72">
              Reach out for a private conversation, a healing prayer session, or help choosing
              the retreat experience that fits your season best.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/contact">Contact Us</ButtonLink>
            <ButtonLink href="/about" variant="secondary">
              Our Story
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
