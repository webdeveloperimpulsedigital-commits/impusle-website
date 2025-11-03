import { ScrollRevealLogoHome } from "../../components/ScrollRevealLogo/ScrollRevealLogoHome";
import { FeaturedItemsSection } from "./sections/FeaturedItemsSection/FeaturedItemsSection";
import { AboutSection } from "./sections/AboutSection/AboutSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { ScrollingStripsSection } from "./sections/ScrollingStripsSection/ScrollingStripsSection";
import { ZoomGridSection } from "./sections/ZoomGridSection/ZoomGridSection";
import { CaseStudiesGrid } from "./sections/CaseStudiesGrid/CaseStudiesGrid";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { BlogSection } from "../Main/sections/BlogSection";
import { ContactResourcesSection } from "../Main/sections/ContactResourcesSection";
import { ResourcesTeaserSection } from "./sections/ResourcesSection/ResourcesSection";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

export const AgencyinThane = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      <ScrollRevealLogoHome />
      <div className="relative w-full space-y-0">
        <FeaturedItemsSection />
        <AboutSection />
        <ServicesSection />
        <ScrollingStripsSection />
        <ZoomGridSection />
        <CaseStudiesGrid />
        <TestimonialsSection />
        <BlogSection />
        <ContactResourcesSection />
        <ResourcesTeaserSection />
        <FAQSection />
        <FooterSection />
      </div>
    </main>
  );
};
