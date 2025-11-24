// ServicesSection.jsx
import React, { useEffect, useState } from "react";

const ServicesSection = () => {
  const [impressions, setImpressions] = useState(0); // 0 -> 3500
  const [keywords, setKeywords] = useState(0);       // 0 -> 10
  const [markets, setMarkets] = useState(0);         // 0 -> 2

  useEffect(() => {
    const animateNumber = (target, setter, duration = 1200) => {
      const start = performance.now();

      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        const value = Math.floor(eased * target);
        setter(value);
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    animateNumber(3500, setImpressions, 1400);
    animateNumber(10, setKeywords, 1100);
    animateNumber(2, setMarkets, 900);
  }, []);

  return (
    <section
      className="w-full bg-[#F6F6FA] pt-24 pb-24"
      id="sec-border"
      data-section="services"
    >
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[32px] md:text-[40px]">
            Remarkable Results
          </h2>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 text-center">
          {/* 3500% Impression Growth */}
          <div>
            <div className="text-[#543d98] text-[48px] md:text-[56px] font-bold mb-3">
              {impressions}% 
            </div>
            <div className="text-[#1F2933] text-[18px] font-semibold mb-2">
              Impression Growth
            </div>
            <p className="text-[#5D5D6C] text-[16px]">
              Massive visibility increase in just 5 months
            </p>
          </div>

          {/* Top 10 Keyword Rankings */}
          <div>
            <div className="text-[#543d98] text-[40px] md:text-[48px] font-semibold mb-3">
              Top {keywords}
            </div>
            <div className="text-[#1F2933] text-[18px] font-semibold mb-2">
              Keyword Rankings
            </div>
            <p className="text-[#5D5D6C] text-[16px]">
              Major industry terms now ranking on page one
            </p>
          </div>

          {/* 2X Market Expansion */}
          <div>
            <div className="text-[#543d98] text-[40px] md:text-[48px] font-semibold mb-3">
              {markets}X
            </div>
            <div className="text-[#1F2933] text-[18px] font-semibold mb-2">
              Market Expansion
            </div>
            <p className="text-[#5D5D6C] text-[16px]">
              Quality leads from India and international markets
            </p>
          </div>
        </div>

        {/* Analytics / Graph Image */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-[980px] w-full border border-[#EAEAEA]">
            <img
              src="/impulse-website/SEO performance.png"
              alt="SEO performance and analytics dashboard"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
export { ServicesSection };
