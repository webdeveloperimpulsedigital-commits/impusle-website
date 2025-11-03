import React from "react";

export const WhyJoinUsSection = (): JSX.Element => {
  const benefits = [
    {
      icon: "🚀",
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement in a fast-growing digital agency"
    },
    {
      icon: "🏆",
      title: "Exciting Projects",
      description: "Work with leading brands and innovative companies across diverse industries"
    },
    {
      icon: "🤝",
      title: "Collaborative Culture",
      description: "Join a supportive team that values creativity, innovation, and work-life balance"
    },
    {
      icon: "💡",
      title: "Creative Freedom",
      description: "Express your ideas and contribute to strategies that make a real impact"
    },
    {
      icon: "📈",
      title: "Competitive Benefits",
      description: "Attractive salary packages, health benefits, and performance bonuses"
    },
    {
      icon: "🌟",
      title: "Recognition",
      description: "Your contributions are valued and recognized through various reward programs"
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24" data-section="why-join-us">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            Why Choose Us
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
            Why Work at Impulse Digital?
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed max-w-3xl mx-auto">
            We're not just a workplace – we're a community of passionate digital marketers, creatives, and strategists 
            who believe in growing together and making a meaningful impact.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-4 group-hover:text-[#543d98] transition-colors">
                {benefit.title}
              </h3>
              
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gradient-to-r from-[#543d98] to-[#6b46c1] rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="[font-family:'DM_Sans',Helvetica] font-black text-4xl lg:text-5xl mb-2">
                25+
              </div>
              <div className="[font-family:'DM_Sans',Helvetica] font-normal text-white/80 text-sm">
                Team Members
              </div>
            </div>
            
            <div>
              <div className="[font-family:'DM_Sans',Helvetica] font-black text-4xl lg:text-5xl mb-2">
                7+
              </div>
              <div className="[font-family:'DM_Sans',Helvetica] font-normal text-white/80 text-sm">
                Years Experience
              </div>
            </div>
            
            <div>
              <div className="[font-family:'DM_Sans',Helvetica] font-black text-4xl lg:text-5xl mb-2">
                100+
              </div>
              <div className="[font-family:'DM_Sans',Helvetica] font-normal text-white/80 text-sm">
                Happy Clients
              </div>
            </div>
            
            <div>
              <div className="[font-family:'DM_Sans',Helvetica] font-black text-4xl lg:text-5xl mb-2">
                95%
              </div>
              <div className="[font-family:'DM_Sans',Helvetica] font-normal text-white/80 text-sm">
                Employee Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};