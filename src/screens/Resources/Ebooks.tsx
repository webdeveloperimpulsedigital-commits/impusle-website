//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { EbookHeroSection } from "./sections/EbookHeroSection";
import { Ebook } from "./sections/EBooks";
//import { ContactSection } from "../Main/sections/ContactSection/ContactSection";
//import { FAQSection } from "../Main/sections/FAQSection/FAQSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

export const Ebooks = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <EbookHeroSection />
        <Ebook />
        {/* <ContactSection />
        <FAQSection /> */}
        <FooterSection />
      </div>
    </main>
  );
};