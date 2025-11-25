//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { ContentMarketingPPTHeroSection } from "./sections/ContentMarketingPPTHeroSection";
import { ContentMarketingPPT } from "../Resources/sections/ContentMarketingPPT";
import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
import { FAQSection } from "../Main/sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

export const ContentMarketingPPTS = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <ContentMarketingPPTHeroSection />
        <ContentMarketingPPT />
        <ContactSection />
        <FAQSection />
        <FooterSection />
      </div>
    </main>
  );
};