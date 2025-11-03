import React from "react";
import { Link, NavLink } from "react-router-dom";
// ⬇️ Use the shared header
import { Header } from "../../../../components/layout/Header"
// ✅ Robust asset import (doesn’t break with Vite base)

export const SocialMediaMarketingHeroSection = (): JSX.Element => {
  return (
    <section
      className="relative w-full h-screen min-h-[600px] bg-[#020018]"
      data-section="content-writing-hero"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/impulse-website/bg-video.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: "#020018", opacity: 0.85 }}
          aria-hidden="true"
        />
      </div>

      {/* Global Header (shared) */}
      <div className="absolute top-0 left-0 right-0 z-[999]">
        <Header
          // Optional props you might expose on your shared Header:
          // theme="dark"
          // showContact
          // activePath="/content-writing-services"
        />
      </div>

      {/* Hero copy */}
      <div className="absolute inset-0 flex items-center justify-center pt-20">
        <div className="text-center flex flex-col items-center">
          <div className="mb-6">
            <h1 className="[font-family:'DM_Sans',Helvetica] font-black text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[0.9] tracking-tight">
              SEARCH ENGINE OPTIMIZATION
            </h1>
          </div>

          {/* Breadcrumbs */}
          <nav className="mt-6 flex items-center justify-center gap-2 text-white/80 text-sm">
            <NavLink to="/" className="hover:text-white transition-colors">
              Home
            </NavLink>
            <span className="select-none">{">"}</span>
            <span className="text-white">Search Engine Optimization</span>
          </nav>
        </div>
      </div>
    </section>
  );
};
