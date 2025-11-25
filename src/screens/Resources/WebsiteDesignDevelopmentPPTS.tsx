//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { WebsiteDesignDevelopmentPPTHeroSection } from "./sections/WebsiteDesignDevelopmentPPTHeroSection";
import { WebsiteDesignDevelopmentPPT } from "../Resources/sections/WebsiteDesign&DevelopmentPPT";
import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
import { FAQSection } from "../Main/sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

export const WebsiteDesignDevelopmentPPTS = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <WebsiteDesignDevelopmentPPTHeroSection />
        <WebsiteDesignDevelopmentPPT />
        <ContactSection />
        <FAQSection />
        <FooterSection />
      </div>
    </main>
  );
};