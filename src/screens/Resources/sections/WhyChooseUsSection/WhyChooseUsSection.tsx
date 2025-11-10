import React from "react";

export const WhyChooseUsSection = (): JSX.Element => {
  const benefits = [
    {
      title: "Proven Track Record",
      description: "Over 100+ successful campaigns with measurable ROI improvements for clients across industries.",
      stat: "300%",
      statLabel: "Average Traffic Increase"
    },
    {
      title: "Expert Team",
      description: "Certified specialists in Google Ads, Facebook Marketing, SEO, and all major digital platforms.",
      stat: "15+",
      statLabel: "Years Combined Experience"
    },
    {
      title: "Data-Driven Approach",
      description: "Every decision backed by comprehensive analytics and performance data for optimal results.",
      stat: "24/7",
      statLabel: "Performance Monitoring"
    },
    {
      title: "Transparent Reporting",
      description: "Clear, detailed reports showing exactly how your investment is performing and growing.",
      stat: "100%",
      statLabel: "Transparency Guarantee"
    }
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-16 lg:py-24" data-section="why-choose-us">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            Why Choose Us
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
            Your Success is Our Priority
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed max-w-3xl mx-auto">
            We don't just provide services – we become your strategic partner, dedicated to achieving your business goals 
            and driving sustainable growth through innovative digital marketing solutions.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              {/* Stat */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-right">
                  <div className="[font-family:'DM_Sans',Helvetica] font-black text-[#543d98] text-4xl lg:text-5xl leading-none group-hover:scale-110 transition-transform duration-300">
                    {benefit.stat}
                  </div>
                  <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#666] text-sm mt-1">
                    {benefit.statLabel}
                  </div>
                </div>
                <div className="w-16 h-16 bg-[#543d98]/10 rounded-full flex items-center justify-center group-hover:bg-[#543d98]/20 transition-colors duration-300">
                  <div className="w-8 h-8 bg-[#543d98] rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </div>

              {/* Content */}
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-4 group-hover:text-[#543d98] transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client Testimonial */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#543d98]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#543d98]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>
            
            <blockquote className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              "Working with Impulse Digital has been transformational for our business. Their strategic approach and 
              attention to detail helped us achieve a 300% increase in qualified leads within just 6 months."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <img
                src="/rectangle-41.png"
                alt="Client"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-base">
                  Rahul Shah
                </div>
                <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm">
                  Director, IBM Income Mumbai
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};