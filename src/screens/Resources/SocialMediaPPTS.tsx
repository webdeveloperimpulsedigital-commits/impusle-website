//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { SocialMediaPPTHeroSection } from "./sections/SocialMediaPPTHeroSection";
import { SocialMediaPPT } from "../Resources/sections/SocialMediaPPT";
import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
import { FAQSection } from "../Main/sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

export const SocialMediaPPTS = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <SocialMediaPPTHeroSection />
        <SocialMediaPPT />
        <ContactSection />
        <FAQSection />
        <FooterSection />
      </div>
    </main>
  );
};