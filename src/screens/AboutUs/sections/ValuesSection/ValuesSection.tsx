import React from "react";

export const ValuesSection = (): JSX.Element => {
  const values = [
    {
      icon: "🎯",
      title: "Client-Centric Approach",
      description: "We put our clients at the heart of everything we do. Your success is our success, and we work as an extension of your team."
    },
    {
      icon: "🚀",
      title: "Innovation & Creativity",
      description: "We stay ahead of digital trends and bring fresh, creative solutions to every challenge. Innovation drives our strategies."
    },
    {
      icon: "📊",
      title: "Data-Driven Results",
      description: "Every decision we make is backed by data. We believe in measurable results that you can see and trust."
    },
    {
      icon: "🤝",
      title: "Transparency & Trust",
      description: "We build relationships based on honesty and transparency. You'll always know what we're doing and why."
    },
    {
      icon: "⚡",
      title: "Agility & Speed",
      description: "In the fast-paced digital world, we move quickly while maintaining quality. We adapt and evolve with changing needs."
    },
    {
      icon: "🎓",
      title: "Continuous Learning",
      description: "We never stop learning. Our team constantly updates their skills to bring you the latest digital marketing strategies."
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24" data-section="values">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            Our Values
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
            What Drives Us
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed max-w-3xl mx-auto">
            Our values shape our culture, guide our decisions, and define how we work with our clients and each other.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#543d98]/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-4 group-hover:text-[#543d98] transition-colors duration-300">
                {value.title}
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};