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
            Impulse Digital’s Ecommerce SEO Services ?
          </h3>
        </div>

        {/* Card 1: Image Left → Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 items-center">
          {/* Left - Portrait Image */}
          <div className="order-1">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/impulse-website/ecommerce why chooose us section 576 x 400 1.jpg"
                alt="Person working on laptop with CONTENT text visible on screen"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-2 space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              Data-driven, scalable strategy
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              When data-driven insights meets scalability magic happens. Our scalable enterprise SEO strategy ensures that you level up with every activity we do, meeting your target audience right where they are. The logic is simple: perform→ analyze→ repeat. We pick up what’s working the best for you and set it into a continuous cycle. 
              </p>
          </div>
        </div>

        {/* Card 2: Content Left → Image Right (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1 space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              Increased organic traffic & sales
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              Your audience finding you by themselves and choosing to try what you have to offer is one of the best things that can happen for your business. By optimizing your store for maximum visibility and ensuring your eCommerce platform ranks higher on the search engine, we drive quality organic traffic that converts to loyal customers. 
            </p>
          </div>

          {/* Right - Single Portrait Image */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/impulse-website/ecommerce why chooose us section 576 x 400 2.jpg"
                alt="Hands working on creative content with colorful sticky notes"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Card 3: Full Width Image → Content Below */}

        {/* Card 1: Image Left → Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 pt-16 items-center">
          {/* Left - Portrait Image */}
          <div className="order-1">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/impulse-website/ecommerce why chooose us section 576 x 400 4.jpg"
                alt="Person working on laptop with CONTENT text visible on screen"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-2 space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              Local and international SEO expertise
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              As a business, you’ve got to dominate locally as well as globally. Our team combines their deep understanding of local search behaviors with global patterns to reach the right audience, no matter where they are. Whether it’s optimizing your ‘near me’ searches or international trends, we’ve got it covered.
            </p>
          </div>
        </div>

        {/* Card 2: Content Left → Image Right (Reversed) */}
      
        {/* Card 3: Full Width Image → Content Below */}
        <div className="space-y-8">
          {/* Full Width Landscape Image */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/impulse-website/ecommerce why choose us section 1202 x 400 2.jpg"
                alt="Laptop showing content strategy planning with charts and graphs"
                className="w-full h-[300px] lg:h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content Below Image */}
          <div className="max-w-7xl space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
             Enhance user experience & site performance
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              Longer load times and confusing store navigation? That’s a sure shot way to bid goodbye to your visitors. We go beyond keywords, enhancing your store’s speed, responsiveness, and navigation to create a seamless journey for visitors. Result? Longer stay times and engaged visitors who end up taking action.
 
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};