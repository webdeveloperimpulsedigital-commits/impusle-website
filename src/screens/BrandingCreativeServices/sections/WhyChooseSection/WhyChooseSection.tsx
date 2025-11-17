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
            Why Your Brand 
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
              Belongs With Impulse
          </h2>
        </div>
 
        {/* ===== MOBILE-ONLY: Image → Content pairs in required mapping ===== */}
        <div className="block lg:hidden space-y-10">
          {/* 1) Optimized Writing */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/impulse-website/branding creative why chooose us section 576 x 400 1.jpg"
                alt="Creative workspace content writing"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              End to end creative solutions across all touchpoints
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              We leave no stone unturned to ensure your brand stays unique at all touchpoints. From the first visiting card to your social media, website, brochures, and thank you cards.
            </p>
          </div>
 
          {/* 2) Versatile Writing Styles */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/impulse-website/Why CHoose - Tailored Brand Strategy.jpg"
                alt="Laptop with content writing screen"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Tailored brand strategies that resonate with your audience

            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
             Every brand has a unique audience that has distinct desires. Whether you cater to a niche audience or a global one, our strategies—crafted with market research


            </p>
          </div>
 
          {/* 3) Tailored Content Strategy */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] shadow-lg mb-4">
              <img
                src="/impulse-website/Why CHoose - Data Driven Creativity.jpg"
                alt="Content strategy workspace"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Data-driven creativity for measurable impact
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              Our creative strategies are grounded in analytics, meaning they are very well tried-and-tested ways to leave an impact. Be it social media campaigns or virtual assets, creativity keeps your audience hooked while analytics help us identify trends, monitor performance
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
                  src="/impulse-website/branding creative why chooose us section 576 x 400 1.jpg"
                  alt="Laptop with content writing screen"
                  className="w-full h-[630px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div><br></br>
              {/* Content 1 */}
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2 pt-16">
               Tailored brand strategies that resonate with your audience
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed mb-0">
                Every brand has a unique audience that has distinct desires. Whether you cater to a niche audience or a global one, our strategies—crafted with market research
              </p>
            </div>
 
            {/* Right Column */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="pr-2 mb-8 mt-12 pb-16">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
                  End to end creative solutions across all touchpoints
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed max-w-[620px]">
                  We leave no stone unturned to ensure your brand stays unique at all touchpoints. From the first visiting card to your social media, website, brochures, and thank you cards
                </p>
              </div>
 
              <div className="relative overflow-hidden rounded-[24px] shadow-lg">
                <img
                  src="/impulse-website/Why CHoose - Tailored Brand Strategy.jpg"
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
                src="/impulse-website/Why CHoose - Data Driven Creativity.jpg"
                alt="Content strategy workspace"
                className="w-full h-[510px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
 
            <div className="mt-6 max-w-12xl">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
               Data-driven creativity for measurable impact
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
                Our creative strategies are grounded in analytics, meaning they are very well tried-and-tested ways to leave an impact. Be it social media campaigns or virtual assets, creativity keeps your audience hooked while analytics help us identify trends, monitor performance


              </p>
            </div>
          </div>
        </div>
        {/* ===== /DESKTOP-ONLY ===== */}
      </div>
    </section>
  );
};
 
 