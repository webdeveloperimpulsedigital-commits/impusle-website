//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { AutomagIndiaCaseStudyHeroSection } from "./sections/AutomagIndiaCaseStudyHeroSection/AutomagIndiaCaseStudyHeroSection";
import { BrandVisionSection } from "./sections/BrandVisionSection/BrandVisionSection";
// import { InteractiveGallerySection } from "./sections/InteractiveGallerySection/InteractiveGallerySection";
// import { InteractiveSliderSection } from "./sections/InteractiveSliderSection/InteractiveSliderSection";
// import { WhyChooseSection } from "./sections/WhyChooseSection/WhyChooseSection";
// import { ServicesSection } from "./sections/ServicesSection";
// import { ProcessSection } from "./sections/ProcessSection/ProcessSection";
// import { ClientsSection } from "./sections/ClientsSection";
// import { TestimonialsSection } from "../Main/sections/TestimonialsSection/TestimonialsSection";
import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
// import { FAQSection } from "./sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";
export const AutomagIndiaCaseStudy = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <AutomagIndiaCaseStudyHeroSection />
        <BrandVisionSection />
        {/* <InteractiveGallerySection /> */}
        {/* <InteractiveSliderSection /> */}
        {/* <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
        <ClientsSection/> 
        <TestimonialsSection /> */}
        <ContactSection />
        {/* <FAQSection /> */}
        <FooterSection />
      </div>
    </main>
  );
};