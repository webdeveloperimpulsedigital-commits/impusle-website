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
            Why Your
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
             Social Belongs With Impulse
          </h2>
        </div>
        {/* ===== MOBILE-ONLY: Image → Content pairs in required mapping ===== */}
        <div className="block lg:hidden space-y-10">
          {/* 1) Optimized Writing */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/impulse-website/social why chooose us section 576 x 400 1.jpg"
                alt="Creative workspace content writing"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Tailored strategy for every brand
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
             No two brands are the same. Even within the same industry, each brand has a unique proposition that sets it apart. We build on this proposition to highlight it time and again
            </p>
          </div>
 
          {/* 2) Versatile Writing Styles */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/impulse-website/social  why chooose us section 576 x 400 2.jpg"
                alt="Laptop with content writing screen"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Creative excellence across platforms
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
             LinkedIn is text-first while Instagram, Facebook, YouTube and pinterest are visual-first. Even within this, there are nuances. We have expert designers and writers to understand
            </p>
          </div>
 
          {/* 3) Tailored Content Strategy */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] shadow-lg mb-4">
              <img
                src="/impulse-website/social  why choose us section 1202 x 400 1.jpg"
                alt="Content strategy workspace"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Data-driven campaigns
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
             Numbers guide us to success. Our routine reports and analytics keep us on track for creating posts and campaigns that work in your favor. Not just that, we deep dive into the previous campaigns to replicate what worked and eliminate what didn’t.
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
                  src="/impulse-website/social why chooose us section 576 x 400 1.jpg"
                  alt="Laptop with content writing screen"
                  className="w-full h-[630px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div><br></br>
              {/* Content 1 */}
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2 pt-16">
                Creative excellence across platforms
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed mb-0">
                LinkedIn is text-first while Instagram, Facebook, YouTube and pinterest are visual-first. Even within this, there are nuances. We have expert designers and writers to understand
              </p>
            </div>
 
            {/* Right Column */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="pr-2 mb-8 mt-12 pb-16">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
                 Tailored strategy for every brand
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed max-w-[620px]">
                  No two brands are the same. Even within the same industry, each brand has a unique proposition that sets it apart. We build on this proposition to highlight it time and again
                </p>
              </div>
 
              <div className="relative overflow-hidden rounded-[24px] shadow-lg">
                <img
                  src="/impulse-website/social  why chooose us section 576 x 400 2.jpg"
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
                src="/impulse-website/social  why choose us section 1202 x 400 1.jpg"
                alt="Content strategy workspace"
                className="w-full h-[510px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
 
            <div className="mt-6 max-w-12xl">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
                Data-driven campaigns
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
                Numbers guide us to success. Our routine reports and analytics keep us on track for creating posts and campaigns that work in your favor. Not just that, we deep dive into the previous campaigns to replicate what worked and eliminate what didn’t.
              </p>
            </div>
          </div>
        </div>
        {/* ===== /DESKTOP-ONLY ===== */}
      </div>
    </section>
  );
};
 
 