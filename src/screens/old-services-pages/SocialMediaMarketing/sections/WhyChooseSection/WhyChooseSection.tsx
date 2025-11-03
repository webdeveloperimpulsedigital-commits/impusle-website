import React from "react";

export const WhyChooseSection = (): JSX.Element => {
  return (
    <section className="w-full bg-gray py-20 lg:py-24" data-section="why-choose">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-2xl md:text-3xl mb-4">
            Why Choose
          </h2>
          <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-2xl md:text-3xl lg:text-4xl">
            Impulse Digital’s Social Media Services?
          </h3>
        </div>

        {/* Card 1: Image Left → Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 items-center">
          {/* Left - Portrait Image */}
          <div className="order-1">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/impulse-website/social why chooose us section 576 x 400 1.jpg"
                alt="Person working on laptop with CONTENT text visible on screen"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-2 space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              Tailored strategy for every brand
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              No two brands are the same. Even within the same industry, each brand has a unique proposition that sets it apart. We build on this proposition to highlight it time and again
            </p>
          </div>
        </div>

        {/* Card 2: Content Left → Image Right (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1 space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              Creative excellence across platforms
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              LinkedIn is text-first while Instagram, Facebook, YouTube and pinterest are visual-first. Even within this, there are nuances. We have expert designers and writers to understand
            </p>
          </div>

          {/* Right - Single Portrait Image */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/impulse-website/social  why chooose us section 576 x 400 2.jpg"
                alt="Hands working on creative content with colorful sticky notes"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Card 3: Full Width Image → Content Below */}
        <div className="space-y-8">
          {/* Full Width Landscape Image */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/impulse-website/social  why choose us section 1202 x 400 1.jpg"
                alt="Laptop showing content strategy planning with charts and graphs"
                className="w-full h-[300px] lg:h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content Below Image */}
          <div className="max-w-7xl space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              Data-driven campaigns
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              Numbers guide us to success. Our routine reports and analytics keep us on track for creating posts and campaigns that work in your favor. Not just that, we deep dive into the previous campaigns to replicate what worked and eliminate what didn’t. 
              </p>
          </div>
        </div>


        {/* Card 1: Image Left → Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 pt-16 items-center">
          {/* Left - Portrait Image */}
          <div className="order-1">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/impulse-website/social  why chooose us section 576 x 400 3.jpg"
                alt="Person working on laptop with CONTENT text visible on screen"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-2 space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
             Data-driven decision making
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
             Data-first, actions next. Our enterprise seo process is a cycle of continuous implementation and optimizing. We backup everything with data so as to take
            </p>
          </div>
        </div>

        {/* Card 2: Content Left → Image Right (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1 space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              Comprehensive multi-channel optimization
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              Everything works in a loop—SEO, content marketing, social media, paid advertising, and more. We map out the potential multi-channels 
            </p>
          </div>

          {/* Right - Single Portrait Image */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/impulse-website/social  why chooose us section 576 x 400 4.jpg"
                alt="Hands working on creative content with colorful sticky notes"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Card 3: Full Width Image → Content Below */}
        <div className="space-y-8">
          {/* Full Width Landscape Image */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/impulse-website/social  why choose us section 1202 x 400 2.jpg"
                alt="Laptop showing content strategy planning with charts and graphs"
                className="w-full h-[300px] lg:h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content Below Image */}
          <div className="max-w-7xl space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              Improved ROI with long-term growth
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              Enterprise SEO is a marathon. You must build it slowly and strategically for long-term gains. With thousands and millions of pages to optimize and manage, our goal is to create a secure, scalable website that yields consistent results over time. 
              </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};