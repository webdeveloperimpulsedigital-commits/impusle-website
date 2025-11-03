import React from "react";
import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { ServicesHeroSection } from "./sections/ServicesHeroSection/ServicesHeroSection";
import { ServicesOverviewSection } from "./sections/ServicesOverviewSection/ServicesOverviewSection";
import { ServicesCatalogSection } from "./sections/ServicesCatalogSection/ServicesCatalogSection";
import { ProcessSection } from "./sections/ProcessSection/ProcessSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection/WhyChooseUsSection";
import { ServicesCTASection } from "./sections/ServicesCTASection/ServicesCTASection";
import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
import { FAQSection } from "../Main/sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

export const Services = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      <ScrollRevealLogo />
      <div className="relative w-full space-y-0">
        <ServicesHeroSection />
        <ServicesOverviewSection />
        <ServicesCatalogSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <ServicesCTASection />
        <ContactSection />
        <FAQSection />
        <FooterSection />
      </div>
    </main>
  );
};