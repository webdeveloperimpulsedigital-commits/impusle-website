import React from "react";

export const BrandVisionSection = (): JSX.Element => {
  const stats = [
    {
      percentage: "95%",
      description: "clients achieved top 1st page search rankings for their target keywords"
    },
    {
      percentage: "3.5X", 
      description: "business growth for our clients after leveraging our expert SEO services."
    },
    {
      percentage: "80%",
      description: "of our clients see improved results within the first 3 months."
    }
  ];

  const services = [
    {
      no: 1,
      title: "Discovery and Research",
      description: "We begin by understanding your goals, audience, and tone, supported by keyword and market research to build performance-driven content."
    },
    {
      no: 2,
      title: "Strategy and Structure",
      description: "We define messaging, map it to funnel stages, and create a clear structure and tone aligned with your objectives."
    },
    {
      no: 3,
      title: "Creation and Optimization",
      description: "Our writers craft original, SEO optimized content that blends brand context, clarity, and engagement for maximum visibility."
    },
    {
      no: 4,
      title: "Review and Performance",
      description: "Every piece goes through editorial checks and client review, followed by tracking visibility, engagement, and conversions to improve future content."
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-20" data-section="brand-vision">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Left Side - Image (40% width) */}
          <div className="lg:col-span-2">
            <div className="relative">
              <img
                src="/impulse-website/content-wrriting-service-about-us.jpg"
                alt="Brand vision workspace"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right Side - Content (60% width) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Header */}
            <div className="space-y-2">
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg">
                Turn Brand Vision
              </p>
              <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl leading-tight">
                Into Words That Convert
              </h2>
            </div>

            {/* Supporting Text Box */}
            <div className="bg-[#f8f9fa] rounded-xl p-6 border-l-4 border-[#543d98]">
              <p className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base leading-relaxed">
                As brands, there's so much you want to communicate to your audience—what do you stand for
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid-container">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="[font-family:'DM_Sans',Helvetica] font-black text-[#543d98] text-4xl lg:text-5xl mb-2">
                    {stat.percentage}
                  </div>
                  <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Body Paragraph */}
        <div className="text-center mb-12">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed max-w-4xl mx-auto">
            What do you have in store, where are you coming from, and why are you the best fit for your audience? Here's the 
            catch. Poorly written content can lead to lost leads, lower search engine rankings, and a diminishing brand image. A 
            reliable content writing agency or content writing company transforms your brand's vision into actionable words that 
            attract, engage, and retain your audience. From blogs that position you as thought leaders to marketing email copy 
            that makes your readers click the button, every piece is tailored for action.
          </p>
        </div>

        {/* Service Blocks Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-[#543d98]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon placeholder */}
              <div className="w-12 h-12 bg-[#543d98]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#543d98]/20 transition-colors duration-300">
                <div className="w-6 h-6 bg-[#543d98] rounded-sm"><center>{service.no}</center></div>
              </div>
              
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-lg mb-3 group-hover:text-[#543d98] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

       <style>{`
      .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 25px;
    height: 240px;
    border: 0px solid #ccc;
    align-content: center;
    align-items: center;
}
  .grid-container > .text-center:nth-child(2) {
  grid-column: 2;          /* Move to 2nd column */
  grid-row: 1 / span 2;    /* Span two rows */
  align-self: center;      /* Vertical alignment */
  justify-self: center;    /* Horizontal alignment */
}

    `}</style>
    </section>
   
  );

  
};