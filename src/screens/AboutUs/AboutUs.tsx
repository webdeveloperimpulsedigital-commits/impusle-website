//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { AboutHeroSection } from "./sections/AboutHeroSection/AboutHeroSection";
import { AgencyIntroSection } from "./sections/AgencyIntroSection/AgencyIntroSection";
import { AbtZoomGridSection } from "./sections/AbtZoomGridSection";
// import { StatisticsSection } from "./sections/StatisticsSection/StatisticsSection";
// import { BeyondDigitalMarketingSection } from "./sections/BeyondDigitalMarketingSection/BeyondDigitalMarketingSection";
// import { BlogSection } from "../Main/sections/BlogSection/BlogSection";
// import { ContactSection } from "./sections/ContactSection/ContactSection";
// import { FAQSection } from "./sections/FAQSection/FAQSection";
import { TeamSection } from "./sections/TeamSection/TeamSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

export const AboutUs = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <AboutHeroSection />
        <AgencyIntroSection />
        <AbtZoomGridSection />
        {/* <StatisticsSection />
        <BeyondDigitalMarketingSection />
        <BlogSection />
        <ContactSection />
        <FAQSection /> */}
        <TeamSection />
        <FooterSection />
      </div>
    </main>
  );
};