import { Routes, Route } from "react-router-dom";
import { Main } from "./screens/Main/Main";
import { AboutUs } from "./screens/AboutUs/AboutUs";

import { Services } from "./screens/Services";
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
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element= {<Services/> } />
      <Route path="/services/content-writing-services" element={<ContentWritingServices />} />
      <Route path="/services/performance-marketing" element={<PayperClickServices />} />
      <Route path="/services/social-media-marketing" element={<SocialMediaMarketingServices />} />
      
      
      <Route path="/services/search-engine-optimization" element={<SearchEngineOptimization />}/>
      <Route path="/services/search-engine-optimization/enterprise-seo-services" element={<EnterpriseSEOServices />}/>
      <Route path="/services/search-engine-optimization/ecommerce-seo-services" element={<ECommerceSEOServices />}/>
      <Route path="/services/search-engine-optimization/b2b-seo-services" element={<B2BSEOServices />}/>
      <Route path="/services/search-engine-optimization/local-seo-services" element={<LocalSEOServices />}/>
      <Route path="/services/website-development" element={<WebsiteDevelopmentServices />}/>
      <Route path="/services/branding-creative-services" element={<BrandingCreativeServices />}/>
      <Route path="/services/employee-branding-agency" element={<EmployerBrandingServices />}/>
      <Route path="/services/corporate-communication-agency" element={<CorporateCommunicationServices />}/>
      <Route path="/services/social-media-video-production" element={<SocialMediaVideoProductionServices />}/>
      <Route path="/ai-seo-agency" element={<AiSeoAgency />} />
      {/* <Route path="/agentic-ai" element={<AgenticAi />} /> */}
      
    <Route path="/career" element={<Careers />} />

      <Route path="/contact-us" element={<Contact />} />


      <Route path="/digital-marketing-agency-in-india" element={<DigitalMarketingAgencyinIndia />} />
      <Route path="/agency-in-thane" element={<AgencyinThane />} />
      <Route path="/agency-in-navi-mumbai" element={<AgencyinNaviMumbai />} />
      <Route path="/agency-in-pune" element={<AgencyinPune />} />


    </Routes>
  );
};