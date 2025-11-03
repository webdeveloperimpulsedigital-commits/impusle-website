import React from "react";

export const CultureSection = (): JSX.Element => {
  const culturePoints = [
    {
      title: "Work-Life Balance",
      description: "We believe in maintaining a healthy balance between work and personal life.",
      image: "/project-1-jpg.png"
    },
    {
      title: "Continuous Learning",
      description: "Regular training sessions and workshops to keep our team updated with latest trends.",
      image: "/project-2-jpg.png"
    },
    {
      title: "Collaborative Environment",
      description: "Open communication and teamwork are at the core of our culture.",
      image: "/project-3-jpg.png"
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24" data-section="culture">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            Our Culture
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
            Life at Impulse Digital
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed max-w-3xl mx-auto">
            We've built a culture that fosters creativity, encourages growth, and celebrates success together.
          </p>
        </div>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {culturePoints.map((point, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64">
                <img
                  src={point.image}
                  alt={point.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-xl mb-2">
                  {point.title}
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] font-normal text-sm leading-relaxed opacity-90">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Office Images */}
        <div className="mt-16">
          <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl text-center mb-8">
            Our Mumbai Office
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src="/project-4-jpg.png" alt="Office space" className="w-full h-48 object-cover rounded-xl" />
            <img src="/project-5-jpg.png" alt="Meeting room" className="w-full h-48 object-cover rounded-xl" />
            <img src="/project-6-jpg.png" alt="Team collaboration" className="w-full h-48 object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};