import React from "react";

export const BrandVisionSection = (): JSX.Element => {
  const stats = [
    {
      percentage: "100%",
      description: "of the websites we design are mobile-responsive, ensuring optimal user experience across all devices."
    },
    {
      percentage: "1.5 Million+", 
      description: "users experienced enhanced website navigation and design that increased engagement and return visits."
    },
    {
      percentage: "200,000+",
      description: "leads generated from beautifully designed and optimized websites"
    }
  ];

  const services = [
    {
      title: "Discovery and Planning",
      description: "We define goals, structure, and platform suited to your brand and audience."
    },
    {
      title: "Design and Development",
      description: "Layouts, content, and features are crafted for usability and performance."
    },
    {
      title: "Testing and Launch",
      description: "We conduct device, browser, and speed checks before going live."
    },
    {
      title: "Maintenance and Updates",
      description: "Post-launch care ensures your site stays secure, optimized, and current."
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
                src="/impulse-website/web About service - 451 x 500.jpg"
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
                Web Development That
              </p>
              <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl leading-tight">
                Elevates Brand Presence and Performance 
              </h2>
            </div>

            {/* Supporting Text Box */}
            <div className="bg-[#f8f9fa] rounded-xl p-6 border-l-4 border-[#543d98]">
              <p className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base leading-relaxed">
                In an increasingly connected world where
more than 50% of individuals turn to the
internet for their queries, a website is a
direct gateway to your brand
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
            The challenge begins when this gateway takes minutes to load, crashes frequently, is incompatible with the browser, or worse, confuses your audience. This is why you need to partner up with a website development company—a team of experts who can build your website from scratch and revamp or optimize the one you already have for a digital-first experience for your brand. These website design and development services ensure that all aspects of your business’s website—aesthetics, communication, ease of use, and more—are optimized for your audience.
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
                <div className="w-6 h-6 bg-[#543d98] rounded-sm"></div>
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