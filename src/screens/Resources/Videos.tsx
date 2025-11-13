//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { VideosHeroSection } from "./sections/VideosHeroSection";
import { Video } from "./sections/Videos";
//import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
//import { FAQSection } from "../Main/sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

export const Videos = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <VideosHeroSection />
        <Video />
        {/* <ContactSection />
        <FAQSection /> */}
        <FooterSection />
      </div>
    </main>
  );
};