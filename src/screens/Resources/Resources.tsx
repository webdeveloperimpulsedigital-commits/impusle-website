//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { ResourcesHeroSection } from "./sections/ResourcesHeroSection/ResourcesHeroSection";
//import { ServicesOverviewSection } from "./sections/ServicesOverviewSection/ServicesOverviewSection";
import { ServicesCatalogSection } from "./sections/ServicesCatalogSection/ServicesCatalogSection";
//import { ProcessSection } from "./sections/ProcessSection/ProcessSection";
//import { WhyChooseUsSection } from "./sections/WhyChooseUsSection/WhyChooseUsSection";
//import { ServicesCTASection } from "./sections/ServicesCTASection/ServicesCTASection";
import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
import { FAQSection } from "../Main/sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

export const Resources = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <ResourcesHeroSection />
        {/* <ServicesOverviewSection /> */}
        <ServicesCatalogSection />
        {/* <ProcessSection />
        <WhyChooseUsSection />
        <ServicesCTASection /> */}
        <ContactSection />
        <FAQSection />
        <FooterSection />
      </div>
    </main>
  );
};