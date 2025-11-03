import { Routes, Route } from "react-router-dom";
import { Main } from "./screens/Main/Main";
import { AboutUs } from "./screens/AboutUs/AboutUs";
import { ContentWritingServices } from "./screens/ContentWritingServices/ContentWritingServices";
import { PayperClickServices } from "./screens/PayperClickServices"
import { SocialMediaMarketingServices } from "./screens/SocialMediaMarketingServices";
import { SearchEngineOptimization } from "./screens/SearchEngineOptimization"
import { EnterpriseSEOServices } from "./screens/EnterpriseSEOServices";
import { ECommerceSEOServices } from "./screens/eCommerceSEOServices";
import { B2BSEOServices } from "./screens/B2BSEOServices";
import { LocalSEOServices } from "./screens/LocalSEOServices";
import { WebsiteDevelopmentServices } from "./screens/WebsiteDevelopmentServices";
import { BrandingCreativeServices } from "./screens/BrandingCreativeServices";
import { EmployerBrandingServices } from "./screens/EmployerBrandingServices/EmployerBrandingServices";
import { CorporateCommunicationServices } from "./screens/CorporateCommunicationServices";
import { SocialMediaVideoProductionServices } from "./screens/SocialMediaVideoProductionServices/SocialMediaVideoProductionServices";
import { AiSeoAgency } from "./screens/AiSeoAgency";
//import { AgenticAi } from "./screens/AgenticAi";
import { Careers } from "./screens/Careers/Careers";

import { Contact } from "./screens/Contact";

import { DigitalMarketingAgencyinIndia } from "./screens/DigitalMarketingAgencyinIndia/DigitalMarketingAgencyinIndia";
import { AgencyinThane } from "./screens/AgencyinThane/AgencyinThane";
import { AgencyinNaviMumbai } from "./screens/AgencyinNaviMumbai/AgencyinNaviMumbai";
import { AgencyinPune } from "./screens/AgencyinPune/AgencyinPune";




export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/content-writing-services" element={<ContentWritingServices />} />
      <Route path="/pay-per-click" element={<PayperClickServices />} />
      <Route path="/social-media-marketing" element={<SocialMediaMarketingServices />} />
      
      <Route path="/enterprise-seo-services" element={<EnterpriseSEOServices />}/>
      <Route path="/search-engine-optimization" element={<SearchEngineOptimization />}/>
      <Route path="/ecommerce-seo-services" element={<ECommerceSEOServices />}/>
      <Route path="/b2b-seo-services" element={<B2BSEOServices />}/>
      <Route path="/local-seo-services" element={<LocalSEOServices />}/>
      <Route path="/website-development-design" element={<WebsiteDevelopmentServices />}/>
      <Route path="/branding-creative-services" element={<BrandingCreativeServices />}/>
      <Route path="/employee-branding-services" element={<EmployerBrandingServices />}/>
      <Route path="/corporate-communication-services" element={<CorporateCommunicationServices />}/>
      <Route path="/social-media-video-production-services" element={<SocialMediaVideoProductionServices />}/>
      <Route path="/ai-seo-agency" element={<AiSeoAgency />} />
      {/* <Route path="/agentic-ai" element={<AgenticAi />} /> */}
      
    <Route path="/careers" element={<Careers />} />

      <Route path="/contact" element={<Contact />} />


      <Route path="/digital-marketing-agency-in-india" element={<DigitalMarketingAgencyinIndia />} />
      <Route path="/agency-in-thane" element={<AgencyinThane />} />
      <Route path="/agency-in-navi-mumbai" element={<AgencyinNaviMumbai />} />
      <Route path="/agency-in-pune" element={<AgencyinPune />} />


    </Routes>
  );
};