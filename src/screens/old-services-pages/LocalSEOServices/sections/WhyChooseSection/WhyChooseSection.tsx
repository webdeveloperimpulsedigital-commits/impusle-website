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
            Impulse Digital’s local SEO Services?
          </h3>
        </div>

        {/* Card 1: Image Left → Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 items-center">
          {/* Left - Portrait Image */}
          <div className="order-1">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/impulse-website/local  why chooose us section 576 x 400 1.jpg"
                alt="Person working on laptop with CONTENT text visible on screen"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-2 space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              Increased Local Visibility
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              Our Local SEO services make it easier for nearby audiences to discover you. Our unmatched efforts to optimize your GMB profile, website, NAP citations and 
               </p>
          </div>
        </div>

        {/* Card 2: Content Left → Image Right (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1 space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
             Targeted Traffic with High Conversion Potential
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              The reason why our efforts translate to ROIs is that we map out your client’s intent and possible keywords they are typing in before we begin the process.
              </p>
          </div>

          {/* Right - Single Portrait Image */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/impulse-website/local  why chooose us section 576 x 400 2.jpg"
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
                src="/impulse-website/local  why choose us section 1202 x 400.jpg"
                alt="Laptop showing content strategy planning with charts and graphs"
                className="w-full h-[300px] lg:h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content Below Image */}
          <div className="max-w-7xl space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
            Optimized for Mobile & “Near Me” Searches
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              We are known to optimize your website for mobile and “near me” searches. With quicker load times, easy navigation, and responsive design, we make it easier for your audience, who are ready to visit or make a purchase, to contact you directly from their phones. 
               </p>
          </div>
        </div>

        {/* Card 1: Image Left → Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 pt-16 items-center">
          {/* Left - Portrait Image */}
          <div className="order-1">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/impulse-website/local  why chooose us section 576 x 400 3.jpg"
                alt="Person working on laptop with CONTENT text visible on screen"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-2 space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              Cost-Effective Marketing for Businesses
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
              A well-setup Google My Business profile and SEO efforts that focus on specific geographic areas ensure that your 
              </p>
          </div>
        </div>

        {/* Card 2: Content Left → Image Right (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20 items-center">
          {/* Left - Content */}
          <div className="order-2 lg:order-1 space-y-4">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl lg:text-2xl">
              Localized Content and Keyword Targeting
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
            Different geographies or neighbourhoods result in different content needs and keywords. Our local SEO services tailor your website for each 
             </p>
          </div>

          {/* Right - Single Portrait Image */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/impulse-website/local  why chooose us section 576 x 400 4.jpg"
                alt="Hands working on creative content with colorful sticky notes"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        

        
      </div>
    </section>
  );
};