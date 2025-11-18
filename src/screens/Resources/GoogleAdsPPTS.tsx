//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { GoogleAdsPPTHeroSection } from "./sections/GoogleAdsPPTHeroSection";
import { GoogleAdsPPT } from "../Resources/sections/GoogleAdsPPT";
import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
import { FAQSection } from "../Main/sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

export const GoogleAdsPPTS = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <GoogleAdsPPTHeroSection />
        <GoogleAdsPPT />
        <ContactSection />
        <FAQSection />
        <FooterSection />
      </div>
    </main>
  );
};