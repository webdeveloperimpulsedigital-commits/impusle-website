// src/pages/services/content-writing/sections/ContentWritingHeroSection.tsx
import { NavLink } from "react-router-dom";
import { Header } from "../../../../components/layout/Header";
import { Helmet } from "react-helmet-async";

export const ContentWritingHeroSection = (): JSX.Element => {
  return (

    <>
     <Helmet> 
        <meta name="description" content="The Impulse Digital is a leading PPC company in Mumbai, India. Our PPC & search engine marketing services give boost to your online marketing efforts. We help you channelize your spends wisely to generate leads and get the best ROI." />
        <meta name="keywords" content="ppc services in mumbai, ppc company in mumbai, search engine marketing services, pay per click services" />
        <title>PPC Services in Mumbai | Search Engine Marketing Services | Impulse Digital</title>

        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="English" />
        <meta name="generator" content="N/A" />

        <meta property="og:title" content="PPC Services in Mumbai | Search Engine Marketing Services | Impulse Digital" />
        <meta property="og:description" content="The Impulse Digital is a leading PPC company in Mumbai, India. Our PPC & search engine marketing services give boost to your online marketing efforts. We help you channelize your spends wisely to generate leads and get the best ROI." />
        <meta property="og:url" content="https://www.theimpulsedigital.com/online-paid-advertising" />
        <meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
        <meta property="og:site_name" content="Impulse Digital" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content= "summary_large_image"  />
        <meta name="twitter:site" content="@impulsedigi" />
        <meta name="twitter:creator" content="@impulsedigi" />
        <meta name="twitter:title" content="PPC Services in Mumbai | Search Engine Marketing Services | Impulse Digital" />
        <meta name="twitter:description" content="The Impulse Digital is a leading PPC company in Mumbai, India. Our PPC & search engine marketing services give boost to your online marketing efforts. We help you channelize your spends wisely to generate leads and get the best ROI." />
        <meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
        <meta name="twitter:url" content="https://www.theimpulsedigital.com/online-paid-advertising" />

    </Helmet>
    <section
      className="relative w-full lg:h-screen sm:h-screen lg:min-h-[700px] sm:min-h-[500px] rounded-t-[55px] overflow-hidden"
      data-section="content-writing-hero"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true">
          <source src="/impulse-website/bg-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay layer for dark tint */}
        <div className="absolute inset-0 bg-[#020018]/80 pointer-events-none"
          aria-hidden="true" />
        </div>

      {/* Global Header (overlayed on top of hero) */}
      <div className="absolute top-0 left-0 right-0 z-[999] border-bot">
        <Header />
      </div>

      {/* Hero Copy */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-24 px-4">
        <h1 className="uppercase [font-family:'DM_Sans',Helvetica] font-black text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[40px] tracking-tight mb-6">
         Performance Marketing (PPC)
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-white/80 text-sm">
          <NavLink to="/" className="hover:text-white transition-colors">
            Home
          </NavLink>
          <span className="select-none">{">"}</span>
          <span className="text-white">Performance Marketing</span>
        </nav>
      </div>
    </section>
    </>
  );
};
