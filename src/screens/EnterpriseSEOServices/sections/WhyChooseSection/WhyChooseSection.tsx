import React from "react";
 
export const WhyChooseSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-[#F6F6FB] py-16 lg:py-20"
      id="why-sec-border"
      data-section="why-choose"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
    
        <div className="mb-6 lg:mb-8 pt-0">
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px] ">
            Enterprise SEO
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
             Elevated by Impulse 
          </h2>
        </div>
 
        {/* ===== MOBILE-ONLY: Image → Content pairs in required mapping ===== */}
        <div className="block lg:hidden space-y-10">
          {/* 1) Optimized Writing */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/impulse-website/why-choose-1.jpg"
                alt="Creative workspace content writing"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Data-driven, scalable strategy
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              When data-driven insights meets scalability magic happens. Our scalable enterprise SEO strategy ensures that you level up with every activity we do, meeting your target audience right where they are. The logic is simple: perform→ analyze→ repeat. We pick up what’s working the best for you and set it into a continuous cycle.
            </p>
          </div>
 
          {/* 2) Versatile Writing Styles */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/impulse-website/Why Choose Enterprise-Increased Traffic.jpg"
                alt="Laptop with content writing screen"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
             Increased organic traffic & sales
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              Your audience finding you by themselves and choosing to try what you have to offer is one of the best things that can happen for your business. By optimizing your website for maximum visibility and ensuring your site ranks higher on the search engine, we drive quality organic traffic that converts to loyal customers.
            </p>
          </div>
 
          {/* 3) Tailored Content Strategy */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] shadow-lg mb-4">
              <img
                src="/impulse-website/Why Choose Enterprise-Local and international.jpg"
                alt="Content strategy workspace"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Local and international SEO expertise
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              As an enterprise, you’ve got to dominate locally as well as globally. Our team combines their deep understanding of local search behaviors with global patterns to reach the right audience, no matter where they are. Whether it’s optimizing your ‘near me’ searches or international trends, we’ve got it covered.
            </p>
          </div>
        </div>
 
        {/* ===== DESKTOP-ONLY: Original layout preserved exactly ===== */}
        <div className="hidden lg:block">
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8 lg:mb-10 items-start">
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col">
              {/* Image 1 */}
              <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
                <img
                  src="/impulse-website/why-choose-1.jpg"
                  alt="Laptop with content writing screen"
                  className="w-full h-[630px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div><br></br>
              {/* Content 1 */}
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2 pt-16">
                Increased organic traffic & sales
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed mb-0">
                Your audience finding you by themselves and choosing to try what you have to offer is one of the best things that can happen for your business. By optimizing your website for maximum visibility and ensuring your site ranks higher on the search engine, we drive quality organic traffic that converts to loyal customers.
               
              </p>
            </div>
 
            {/* Right Column */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="pr-2 mb-8 mt-12 pb-16">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
                 Data-driven, scalable strategy
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed max-w-[620px]">
                  When data-driven insights meets scalability magic happens. Our scalable enterprise SEO strategy ensures that you level up with every activity we do, meeting your target audience right where they are. The logic is simple: perform→ analyze→ repeat. We pick up what’s working the best for you and set it into a continuous cycle.
                </p>
              </div>
 
              <div className="relative overflow-hidden rounded-[24px] shadow-lg">
                <img
                  src="/impulse-website/Why Choose Enterprise-Increased Traffic.jpg"
                  alt="Creative workspace content writing"
                  className="w-full h-[630px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
 
          {/* Full-width banner + copy below */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] shadow-lg">
              <img
                src="/impulse-website/Why Choose Enterprise-Local and international.jpg"
                alt="Content strategy workspace"
                className="w-full h-[510px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
 
            <div className="mt-6 max-w-12xl">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
                Local and international SEO expertise
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
                As an enterprise, you’ve got to dominate locally as well as globally. Our team combines their deep understanding of local search behaviors with global patterns to reach the right audience, no matter where they are. Whether it’s optimizing your ‘near me’ searches or international trends, we’ve got it covered.
              </p>
            </div>
          </div>
        </div>
        {/* ===== /DESKTOP-ONLY ===== */}
      </div>
    </section>
  );
};
 
 