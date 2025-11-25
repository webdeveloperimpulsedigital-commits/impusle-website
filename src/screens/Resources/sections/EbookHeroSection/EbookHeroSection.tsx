// src/pages/services/content-writing/sections/ContentWritingHeroSection.tsx
import { NavLink } from "react-router-dom";
import { Header } from "../../../../components/layout/Header";
import { Helmet } from "react-helmet-async";
export const EbookHeroSection = (): JSX.Element => {
  return (

    <>
    <Helmet>
      <meta name="description" content="The industry was on the cusp of digital transformation when it got hit by the COVID19 lockdown. Although the transition has slowed down, COVID19 is not going to be the kryptonite for digital marketing. In this eBook, you will get to know how the lockdown affected the industry with regards to digital marketing, what the consumers think, and how the social media platforms fared during the pandemic lockdown." />
<meta name="keywords" content="" />
<title>Digital Transformation during Covid19 (Ebook)</title>

<meta name="robots" content="index, follow" />
<meta name="revisit-after" content="1 day" />
<meta name="language" content="English" />
<meta name="generator" content="N/A" />

<meta property="og:title" content="Digital Transformation during Covid19 (Ebook)" />
<meta property="og:description" content="The industry was on the cusp of digital transformation when it got hit by the COVID19 lockdown. Although the transition has slowed down, COVID19 is not going to be the kryptonite for digital marketing. In this eBook, you will get to know how the lockdown affected the industry with regards to digital marketing, what the consumers think, and how the social media platforms fared during the pandemic lockdown." />
<meta property="og:url" content="https://www.theimpulsedigital.com/EBooks" />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta property="og:site_name" content="Impulse Digital" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content= "summary_large_image"  />
<meta name="twitter:site" content="@impulsedigi" />
<meta name="twitter:creator" content="@impulsedigi" />
<meta name="twitter:title" content="Digital Transformation during Covid19 (Ebook)" />
<meta name="twitter:description" content="The industry was on the cusp of digital transformation when it got hit by the COVID19 lockdown. Although the transition has slowed down, COVID19 is not going to be the kryptonite for digital marketing. In this eBook, you will get to know how the lockdown affected the industry with regards to digital marketing, what the consumers think, and how the social media platforms fared during the pandemic lockdown." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta name="twitter:url" content="https://www.theimpulsedigital.com/EBooks" />

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
          Ebooks
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-white/80 text-sm">
          <NavLink to="/" className="hover:text-white transition-colors">
            Home
          </NavLink>
          <span className="select-none">{">"}</span>
          <span className="text-white">Ebooks</span>
        </nav>
      </div>
    </section>
     </>
  );
};
