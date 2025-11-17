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
            Why Your Next Website
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
             Should Be Built by Impulse
          </h2>
        </div>
 
        {/* ===== MOBILE-ONLY: Image → Content pairs in required mapping ===== */}
        <div className="block lg:hidden space-y-10">
          {/* 1) Optimized Writing */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/impulse-website/web  why chooose us section 576 x 400 1.jpg"
                alt="Creative workspace content writing"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Custom Web development
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
              Our web designers bring together the insights from design principles and user experience to create a visually appealing website design that tells your unique story. They take care of every little detail that puts your brand in the spotlight and blows away your audience’s mind.
            </p>
          </div>
 
          {/* 2) Versatile Writing Styles */}
          <div>
            <div className="relative overflow-hidden rounded-[24px] shadow-lg mb-4">
              <img
                src="/impulse-website/web  why chooose us section 576 x 400 2.jpg"
                alt="Laptop with content writing screen"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
             Mobile-first & responsive design
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
             Creating a mobile-first and responsive design is our forte. We create websites that seamlessly adapt to all screen sizes and browsers without glitches. So, regardless of the device your audience is searching for you on, your website appears the same.


            </p>
          </div>
 
          {/* 3) Tailored Content Strategy */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] shadow-lg mb-4">
              <img
                src="/impulse-website/web  why choose us section 1202 x 400.jpg"
                alt="Content strategy workspace"
                className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-2">
              Comprehensive web maintenance and support
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
             Your website’s performance matters and we are here to support it. Our team conducts regular audits to update your website, ensure security, and resolve bugs. Count on us for 24/7 support and peace of mind, knowing that your website is in expert hands.


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
                  src="/impulse-website/web  why chooose us section 576 x 400 1.jpg"
                  alt="Laptop with content writing screen"
                  className="w-full h-[630px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div><br></br>
              {/* Content 1 */}
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2 pt-16">
               Mobile-first & responsive design

              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed mb-0">
                Creating a mobile-first and responsive design is our forte. We create websites that seamlessly adapt to all screen sizes and browsers without glitches. So, regardless of the device your audience is searching for you on, your website appears the same.


              </p>
            </div>
 
            {/* Right Column */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="pr-2 mb-8 mt-12 pb-16">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
                  Custom Web development
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed max-w-[620px]">
                  Our web designers bring together the insights from design principles and user experience to create a visually appealing website design that tells your unique story. They take care of every little detail that puts your brand in the spotlight and blows away your audience’s mind.
                </p>
              </div>
 
              <div className="relative overflow-hidden rounded-[24px] shadow-lg">
                <img
                  src="/impulse-website/web  why chooose us section 576 x 400 2.jpg"
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
                src="/impulse-website/web  why choose us section 1202 x 400.jpg"
                alt="Content strategy workspace"
                className="w-full h-[510px] object-cover transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
 
            <div className="mt-6 max-w-12xl">
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-2">
               Comprehensive web maintenance and support

              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#000000] text-base leading-relaxed">
                Your website’s performance matters and we are here to support it. Our team conducts regular audits to update your website, ensure security, and resolve bugs. Count on us for 24/7 support and peace of mind, knowing that your website is in expert hands.


              </p>
            </div>
          </div>
        </div>
        {/* ===== /DESKTOP-ONLY ===== */}
      </div>
    </section>
  );
};
 
 