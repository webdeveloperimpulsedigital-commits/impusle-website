//import React from "react";
//import { ScrollRevealLogo } from "../../../components/ScrollRevealLogo/ScrollRevealLogo";
import { CareersHeroSection } from "./sections/CareersHeroSection/CareersHeroSection";
import { CompanyCultureSection } from "./sections/CompanyCultureSection";
import { OpenPositionsSection } from "./sections/OpenPositionsSection/OpenPositionsSection";
import { ApplicationFormSection } from "./sections/ApplicationFormSection/ApplicationFormSection";
import { FooterSection } from "../../Main/sections/FooterSection/FooterSection";


export const Careers = (): JSX.Element => {
  return (
    <main className="relative w-full min-h-screen">
      {/* <ScrollRevealLogo /> */}
      <div className="relative w-full space-y-0">
        <CareersHeroSection />
        <CompanyCultureSection/>
        <OpenPositionsSection />
        <ApplicationFormSection />
        <FooterSection />
      </div>
    </main>
  );
};