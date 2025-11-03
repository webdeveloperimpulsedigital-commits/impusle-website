export const WhyChooseSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-20 lg:py-24" data-section="why-choose">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-2xl md:text-3xl mb-4">
            Why Choose
          </h2>
          <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-2xl md:text-3xl lg:text-4xl">
            Why Choose Impulse Digital’s Pay-Per-Click?
          </h3>
        </div>

        {/* Card 1: Image Left → Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 items-center">
          {/* Left - Portrait Image */}
          <div className="order-1">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/impulse-website/why chooose us section 576 x 400 2.jpg"
                alt="Person working on laptop with CONTENT text visible on screen"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-2 space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              Bring more quality leads/conversions
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              We are known for getting as specific and picky as we can—be it audience demographics, intent, keywords, or search phrases—to craft ads that are 100% optimized for leads and conversions.
            </p>
          </div>
        </div>

        {/* Card 2: Content Left → Image Right (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1 space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              Helps to target a specific audience
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              We know who your audience is, what they are looking for, and what may attract them. Our ad copies and visuals are tailored to ensure that your ad is placed exactly
            </p>
          </div>

          {/* Right - Single Portrait Image */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/impulse-website/why chooose us section 576 x 400 1.jpg"
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
                src="/impulse-website/why choose us section 1202 x 400.jpg"
                alt="Laptop showing content strategy planning with charts and graphs"
                className="w-full h-[300px] lg:h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content Below Image */}
          <div className="max-w-2xl space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              Helps in achieving immediate results
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              We work smarter and we work faster. Our expert team puts together the entire ad campaign in record time to get it up and going without compromising on quality by leveraging advanced tools. Once the ads go live, you start to see their impact in no time.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};