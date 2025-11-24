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
import { AiAgenticServices } from "./screens/AiAgenticServices";

import { Casestudies } from "./screens/Casestudies";
import { ShreeRubberWorksCaseStudy } from "./screens/ShreeRubberWorksCaseStudy"


import { Ebooks, Resources } from "./screens/Resources";
import { SlideSharePPTS } from "./screens/Resources/SlideSharePPTS";
import { SearchEngineOptimizationSEOS } from "./screens/Resources/SearchEngineOptimizationSEOS";
import { SocialMediaPPTS } from "./screens/Resources/SocialMediaPPTS";
import { GoogleAdsPPTS } from "./screens/Resources/GoogleAdsPPTS";
import { ContentMarketingPPTS } from "./screens/Resources/ContentMarketingPPTS";
import { WebsiteDesignDevelopmentPPTS } from "./screens/Resources/WebsiteDesignDevelopmentPPTS";
import { EmployerBrandingPPTS } from "./screens/Resources/EmployerBrandingPPTS";
import { Careers } from "./screens/Careers/Careers";

import { Contact } from "./screens/Contact";

import { DigitalMarketingAgencyinIndia } from "./screens/DigitalMarketingAgencyinIndia/DigitalMarketingAgencyinIndia";
import { AgencyinThane } from "./screens/AgencyinThane/AgencyinThane";
import { AgencyinNaviMumbai } from "./screens/AgencyinNaviMumbai/AgencyinNaviMumbai";
import { AgencyinPune } from "./screens/AgencyinPune/AgencyinPune";
import { Videos } from "./screens/Resources/Videos";
import { AmazonEBCaseStudy } from "./screens/AmazonEBCaseStudy";
import { AtracEnginePartsCaseStudy } from "./screens/AtracEnginePartsCaseStudy";
import { CraftingAmazonIndiaCaseStudy } from "./screens/CraftingAmazonIndiaCaseStudy"
import { GrasimPulpandFibreCaseStudy } from "./screens/GrasimPulpandFibreCaseStudy";
import { AutomagIndiaCaseStudy } from "./screens/AutomagIndiaCaseStudy";




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
      <Route path="/services/search-engine-optimization/ai-seo-agency" element={<AiSeoAgency />} />
       <Route path="/services/agentic-ai" element={<AiAgenticServices />} /> 

      <Route path="/casestudies" element={<Casestudies/>}/>
      <Route path="/casestudies/shree-rubber-works" element={<ShreeRubberWorksCaseStudy />} />
      <Route path="/casestudies/automag-india" element={<AutomagIndiaCaseStudy />} />
      <Route path="/casestudies/grasim-pulp-and-fibre" element={<GrasimPulpandFibreCaseStudy />} />
      <Route path="/casestudies/crafting-the-employer-value-proposition-for-amazon-india" element={<CraftingAmazonIndiaCaseStudy />} />
      <Route path="/casestudies/atrac-engine-parts" element={<AtracEnginePartsCaseStudy />} />
      <Route path="/casestudies/amazon-eb" element={<AmazonEBCaseStudy />} />

      <Route path="/resources" element={<Resources/>}/>

      <Route path="/resources/EBooks" element={<Ebooks />} />
      <Route path="/resources/videos" element={<Videos />} />
<Route path="/resources/slideshare-ppt" element={<SlideSharePPTS />} />
<Route path="/resources/search-engine-optimization-PPT" element={<SearchEngineOptimizationSEOS />} />
<Route path="/resources/social-media-PPT" element={<SocialMediaPPTS />} />
<Route path="/resources/google-ads-PPT" element={<GoogleAdsPPTS />} />
<Route path="/resources/content-marketing-PPT" element={<ContentMarketingPPTS />} />
<Route path="/resources/website-design-development-PPT" element={<WebsiteDesignDevelopmentPPTS/>} />
<Route path="/resources/employer-branding-PPT" element={<EmployerBrandingPPTS />} />


    <Route path="/career" element={<Careers />} />

      <Route path="/contact-us" element={<Contact />} />


      <Route path="/digital-marketing-agency-in-india" element={<DigitalMarketingAgencyinIndia />} />
      <Route path="/digital-marketing-agency-in-thane" element={<AgencyinThane />} />
      <Route path="/digital-marketing-agency-in-navi-mumbai" element={<AgencyinNaviMumbai />} />
      <Route path="/digital-marketing-agency-in-pune" element={<AgencyinPune />} />


    </Routes>
  );
};