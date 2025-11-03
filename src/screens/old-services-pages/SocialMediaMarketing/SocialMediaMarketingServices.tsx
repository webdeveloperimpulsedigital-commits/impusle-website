import React from "react";
//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { SocialMediaMarketingHeroSection } from "./sections/SocialMediaMarketingServices";
import { BrandVisionSection } from "./sections/BrandVisionSection/BrandVisionSection";
import { InteractiveGallerySection } from "./sections/InteractiveGallerySection/InteractiveGallerySection";
import { InteractiveSliderSection } from "./sections/InteractiveSliderSection/InteractiveSliderSection";
import { ServicesSection } from "./sections/ServicesSection";
import { WhyChooseSection } from "./sections/WhyChooseSection/WhyChooseSection";
import { ProcessSection } from "./sections/ProcessSection/ProcessSection";
import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";
export const SocialMediaMarketing = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <SocialMediaMarketingHeroSection />
        <BrandVisionSection />
        <InteractiveGallerySection />
        <InteractiveSliderSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
        <ContactSection />
        <FAQSection />
        <FooterSection />
      </div>
    </main>
  );
};