import React from "react";
//import { ScrollRevealLogo } from "../../components/ScrollRevealLogo/ScrollRevealLogo";
import { ContactHeroSection } from "./Contact/sections/ContactHeroSection/ContactHeroSection";
import { ContactFormSection } from "./Contact/sections/ContactFormSection/ContactFormSection";
//import { ContactInfoSection } from "./Contact/sections/ContactInfoSection/ContactInfoSection"
import { ContactMapSection } from "./Contact/sections/ContactMapSection/ContactMapSection";
import { FooterSection } from "../Main/sections/FooterSection/FooterSection";

export const Contact = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <ContactHeroSection />
        <ContactFormSection />
        
        <ContactMapSection />
        <FooterSection />
      </div>
    </main>
  );
};