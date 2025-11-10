import React from "react";

export const ServicesOverviewSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16 lg:py-24" data-section="services-overview">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            Complete Solutions
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
            360° Digital Marketing Services
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed max-w-4xl mx-auto">
            From strategy to execution, we provide end-to-end digital marketing solutions that drive growth, 
            increase brand visibility, and deliver measurable ROI. Our comprehensive approach ensures every 
            aspect of your digital presence works together seamlessly.
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#543d98]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-[#543d98] rounded-full"></div>
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-4">
              Data-Driven Strategy
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              Every campaign is backed by comprehensive research and analytics to ensure maximum impact and ROI.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#543d98]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-[#543d98] rounded-full"></div>
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-4">
              Creative Excellence
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              Award-winning creative team that brings your brand story to life with compelling visuals and messaging.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#543d98]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 bg-[#543d98] rounded-full"></div>
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-4">
              Measurable Results
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              Transparent reporting and clear KPIs so you can see exactly how your investment is performing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};