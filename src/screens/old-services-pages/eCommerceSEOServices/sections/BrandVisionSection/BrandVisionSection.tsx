export const BrandVisionSection = (): JSX.Element => {
  const stats = [
    {
      percentage: "90%",
      description: "of eCommerce clients saw a significant increase in organic traffic within 3 months."
    },
    {
      percentage: "150%", 
      description: "average increase in sales for clients with our eCommerce SEO strategies."
    },
    {
      percentage: "97%",
      description: "eCommerce SEO client achieving top 3 Google rankings, driving more organic sales."
    }
  ];

  const services = [
    {
      title: "Audit and Planning",
      description: "Comprehensive review of your digital assets to identify growth opportunities and build a structured SEO roadmap for scale."
    },
    {
      title: "Strategy and Alignment",
      description: "We define global keyword clusters, content frameworks, and governance models aligned with business goals and multiple markets."
    },
    {
      title: "Implementation and Optimization",
      description: "Our team integrates automation, technical upgrades, and on-page consistency to enhance performance across large websites."
    },
    {
      title: "Tracking and Collaboration",
      description: "Performance is continuously monitored with detailed reporting, while close coordination with in-house teams ensures seamless execution."
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
                src="/impulse-website/ecommerce About service -  451 x 500.jpg"
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
                Turn Clicks Into 
              </p>
              <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl leading-tight">
               Customers With Smarter eCommerce SEO
              </h2>
            </div>

            {/* Supporting Text Box */}
            <div className="bg-[#f8f9fa] rounded-xl p-6 border-l-4 border-[#543d98]">
              <p className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-base leading-relaxed">
                Imagine having an eCommerce store that serves no purpose. You think you’ve done everything right—the products are
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
            and you’ve spread the word, but still, there are little to no visitors, and those who somehow manage to find you don’t
             stay around for long. What are you missing? Maybe your store is not being found. Or it’s taking too long to load, Or 
             worse, it isn't very clear for the user. eCommerce SEO will fix all of this and do more. eCommerce SEO services aim 
             to make your store discoverable and improve your audience's shopping experience, which, in the long run, gives you 
             better sales.
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