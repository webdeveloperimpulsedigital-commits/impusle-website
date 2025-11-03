//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { EnterpriseSEOServicesHeroSection } from "./sections/eCommerceSEOServices/eCommerceSEOServicesHeroSection";
import { BrandVisionSection } from "./sections/BrandVisionSection/BrandVisionSection";
import { InteractiveGallerySection } from "./sections/InteractiveGallerySection/InteractiveGallerySection";
import { InteractiveSliderSection } from "./sections/InteractiveSliderSection/InteractiveSliderSection";
import { ServicesSection } from "./sections/ServicesSection";
import { WhyChooseSection } from "./sections/WhyChooseSection/WhyChooseSection";
import { ProcessSection } from "./sections/ProcessSection/ProcessSection";
import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";
export const EcommerceSEOServices = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <EnterpriseSEOServicesHeroSection />
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