// src/pages/services/content-writing/sections/ContentWritingHeroSection.tsx
import { NavLink } from "react-router-dom";
import { Header } from "../../../../components/layout/Header";
import { Helmet } from "react-helmet-async";

export const AiSeoAgencyHeroSection = (): JSX.Element => {
  return (
    <>
  <Helmet> 
    <title>Best Digital Marketing Agency in Mumbai | Impulse</title>
    <meta name="description" content="Impulse Digital is a top digital marketing agency in Mumbai that has the expertise to expand your business reach in the digital space. Our creative, innovative, and energetic"/>
    <meta name="keywords" content="digital marketing agency in mumbai, digital marketing company, impulse digital"/>
    <meta property="og:title" content="Best Digital Marketing Agency in Mumbai | Impulse Digital" />
    <meta property="og:description" content="Impulse Digital is a top digital marketing agency in Mumbai that has the expertise to expand your business reach in the digital space. Our creative, innovative, and energetic team helps us stand out from a cluster of digital marketing agencies in Mumbai. We are handling a plethora of clients which includes Amazon, HUL, OLA, Dmart, HDFC, and more big market giants." />
    <meta property="og:url" content="https://www.theimpulsedigital.com" />
    <meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
    <meta property="og:site_name" content="Impulse Digital" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@impulsedigi" />
    <meta name="twitter:creator" content="@impulsedigi" />
    <meta name="twitter:title" content="Best Digital Marketing Agency in Mumbai | Impulse Digital" />
    <meta name="twitter:description" content="Impulse Digital is a top digital marketing agency in Mumbai that has the expertise to expand your business reach in the digital space. Our creative, innovative, and energetic team helps us stand out from a cluster of digital marketing agencies in Mumbai. We are handling a plethora of clients which includes Amazon, HUL, OLA, Dmart, HDFC, and more big market giants." />
    <meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
    <meta name="twitter:url" content="https://www.theimpulsedigital.com" />
    <link rel="canonical" href="https://www.theimpulsedigital.com" />
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
        <h1 className="[font-family:'DM_Sans',Helvetica] font-black text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[40px] tracking-tight mb-6">
          AI SEO
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-white/80 text-sm">
          <NavLink to="/" className="hover:text-white transition-colors">
            Home
          </NavLink>
          <span className="select-none">{">"}</span>
          <span className="text-white">AI SEO</span>
        </nav>
      </div>
    </section>
    </>

  );
};
