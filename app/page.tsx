import {
  BenefitsSection,
  CallToActionSection,
  FaqPreviewSection,
  FeaturedExperienceSection,
  HomeHero,
  TestimonialSection,
  WhatWeOfferSection,
} from "@/components/sections/home-sections";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BenefitsSection />
      <WhatWeOfferSection />
      <FeaturedExperienceSection />
      <TestimonialSection />
      <FaqPreviewSection />
      <CallToActionSection />
    </>
  );
}
