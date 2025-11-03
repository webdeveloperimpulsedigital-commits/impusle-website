import React from "react";

export const CompanyCultureSection = (): JSX.Element => {
  const cultureHighlights = [
    {
      title: "Flexible Work Environment",
      description: "Hybrid work options and flexible hours to maintain work-life balance",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Learning & Development",
      description: "Regular training sessions, workshops, and conference attendance opportunities",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Team Building",
      description: "Regular team outings, celebrations, and collaborative projects",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24" data-section="company-culture">
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
            Here's what makes working at Impulse Digital special.
          </p>
        </div>

        {/* Culture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {cultureHighlights.map((highlight, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-xl mb-2">
                  {highlight.title}
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] font-normal text-sm leading-relaxed opacity-90">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Employee Testimonials */}
        <div className="bg-[#f8f9fa] rounded-2xl p-8 lg:p-12">
          <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl text-center mb-8">
            What Our Team Says
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/rectangle-41.png"
                  alt="Team member"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-base">
                    Priya Sharma
                  </div>
                  <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm">
                    Senior Content Writer
                  </div>
                </div>
              </div>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm leading-relaxed">
                "Working at Impulse Digital has been an incredible journey. The team is supportive, the projects are challenging, 
                and there's always room to grow and learn new skills."
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/rectangle-42.png"
                  alt="Team member"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-base">
                    Amit Patel
                  </div>
                  <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm">
                    Digital Marketing Manager
                  </div>
                </div>
              </div>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm leading-relaxed">
                "The collaborative environment here is amazing. Everyone's ideas are valued, and we work together to create 
                campaigns that truly make a difference for our clients."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};