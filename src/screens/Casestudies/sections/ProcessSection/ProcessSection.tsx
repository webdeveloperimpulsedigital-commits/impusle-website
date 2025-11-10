import React from "react";

export const ProcessSection = (): JSX.Element => {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and competitive landscape to create a comprehensive digital strategy.",
      icon: "🔍"
    },
    {
      number: "02", 
      title: "Planning & Design",
      description: "Our team develops detailed campaign plans, creative concepts, and technical specifications tailored to your objectives.",
      icon: "📋"
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute your campaigns across all chosen channels with precision, ensuring every detail aligns with your brand standards.",
      icon: "🚀"
    },
    {
      number: "04",
      title: "Optimization",
      description: "Continuous monitoring and data-driven optimization to improve performance and maximize your return on investment.",
      icon: "📈"
    },
    {
      number: "05",
      title: "Reporting & Growth",
      description: "Regular performance reports and strategic recommendations to scale your success and achieve long-term growth.",
      icon: "📊"
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24" data-section="process">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            Our Process
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
            How We Deliver Results
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed max-w-3xl mx-auto">
            Our proven 5-step process ensures every project is executed flawlessly, from initial strategy to ongoing optimization and growth.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#543d98]/20 via-[#543d98] to-[#543d98]/20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 bg-[#543d98] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-lg">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-lg mb-3 group-hover:text-[#543d98] transition-colors">
                  {step.title}
                </h3>
                
                <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-2 text-[#543d98]/40">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-[#f8f9fa] rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-4">
              Ready to Get Started?
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed mb-6">
              Let's discuss your project and create a customized strategy that drives real results for your business.
            </p>
            <button className="bg-[#543d98] hover:bg-[#543d98]/90 text-white px-8 py-3 rounded-xl font-bold transition-colors duration-300">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};