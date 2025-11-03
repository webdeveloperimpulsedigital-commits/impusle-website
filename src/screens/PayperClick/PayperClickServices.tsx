import { PayPerClickHeroSection } from "./sections/PayPerClickHeroSection";
import { BrandVisionSection } from "./sections/BrandVisionSection/BrandVisionSection";
import { InteractiveGallerySection } from "./sections/InteractiveGallerySection/InteractiveGallerySection";
import { InteractiveSliderSection } from "./sections/InteractiveSliderSection/InteractiveSliderSection";
import { ServicesSection } from "./sections/ServicesSection";
import { WhyChooseSection } from "./sections/WhyChooseSection/WhyChooseSection";
import { PpcProcessSection } from "./sections/ProcessSection";
import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";
export const PayperClick = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <PayPerClickHeroSection />
        <BrandVisionSection />
        <InteractiveGallerySection />
        <InteractiveSliderSection />
        <ServicesSection />
        <WhyChooseSection />
        <PpcProcessSection />
        <ContactSection />
        <FAQSection />
        <FooterSection />
      </div>
    </main>
  );
};