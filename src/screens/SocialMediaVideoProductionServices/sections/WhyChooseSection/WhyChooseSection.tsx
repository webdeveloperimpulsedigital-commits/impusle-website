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
            Why We’re Built for 
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
             Social-First Video
          </h2>
        </div>
 
        {/* ===== MOBILE-ONLY: Image → Content pairs in required mapping ===== */}
        <div className="block lg:hidden space-y-10">
          {/* 1) Optimized Writing */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/impulse-website/focus-on-digital-camera-near-talented-asian-stylis-2024-11-11-11-37-59-utc.jpg"
                alt="Creative workspace content writing"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Video content for maximum engagement
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              We are a niche social media video production agency with experienced strategists, designers, and executors. Our high-tech tools and teams ensure your social media videos
            </p>
          </div>
 
          {/* 2) Versatile Writing Styles */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/impulse-website/business-technology-and-people-concept-close-up-2025-10-03-15-53-55-utc.jpg"
                alt="Laptop with content writing screen"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Knowledge of social media algorithms and trends
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              We are on the top of what’s happening in the social world with a knack for instantly hopping onto trends that align with your brand. Be it updates in platform.
            </p>
          </div>
 
          {/* 3) Tailored Content Strategy */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] shadow-lg mb-4">
              <img
                src="/impulse-website/video  why chooose us section 576 x 400 3.jpg"
                alt="Content strategy workspace"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              End-to-end video production
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              We handle everything for you—from concept to final cut—to bring your vision to life. Our creative video agency boasts expert individuals, each specialized in scripting, shooting, editing, and post-production, ensuring professional execution at every stage.
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
                  src="/impulse-website/focus-on-digital-camera-near-talented-asian-stylis-2024-11-11-11-37-59-utc.jpg"
                  alt="Laptop with content writing screen"
                  className="w-full h-[630px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div><br></br>
              {/* Content 1 */}
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2 pt-16">
                Knowledge of social media algorithms and trends
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed mb-0">
                We are on the top of what’s happening in the social world with a knack for instantly hopping onto trends that align with your brand. Be it updates in platform.
              </p>
            </div>
 
            {/* Right Column */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="pr-2 mb-8 mt-12 pb-16">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
                  Video content for maximum engagement
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed max-w-[620px]">
                  We are a niche social media video production agency with experienced strategists, designers, and executors. Our high-tech tools and teams ensure your social media videos.
                </p>
              </div>
 
              <div className="relative overflow-hidden rounded-[24px] shadow-lg">
                <img
                  src="/impulse-website/business-technology-and-people-concept-close-up-2025-10-03-15-53-55-utc.jpg"
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
                src="/impulse-website/video  why chooose us section 576 x 400 3.jpg"
                alt="Content strategy workspace"
                className="w-full h-[510px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
 
            <div className="mt-6 max-w-12xl">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
                Knowledge of social media algorithms and trends
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
                We are on the top of what’s happening in the social world with a knack for instantly hopping onto trends that align with your brand. Be it updates in platform.
              </p>
            </div>
          </div>
        </div>
        {/* ===== /DESKTOP-ONLY ===== */}
      </div>
    </section>
  );
};
 
 