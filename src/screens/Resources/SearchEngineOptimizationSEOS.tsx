//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { SearchEngineOptimizationSEOPPTHeroSection } from "./sections/SearchEngineOptimizationSEOPPTHeroSection";
import { SlideShareSsoPPT } from "../Resources/sections/SearchEngineOptimizationSEOPPT";
import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
import { FAQSection } from "../Main/sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

export const SearchEngineOptimizationSEOS = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <SearchEngineOptimizationSEOPPTHeroSection />
        <SlideShareSsoPPT />
        <ContactSection />
        <FAQSection />
        <FooterSection />
      </div>
    </main>
  );
};