import React from "react";

export const TeamSection = (): JSX.Element => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: "/rectangle-41.png",
      bio: "With 10+ years in digital marketing, Rajesh leads our vision and strategy."
    },
    {
      name: "Priya Sharma",
      position: "Creative Director",
      image: "/rectangle-42.png",
      bio: "Priya brings creative excellence to every campaign and brand story we tell."
    },
    {
      name: "Amit Patel",
      position: "Head of Strategy",
      image: "/rectangle-43.png",
      bio: "Amit ensures every campaign is backed by solid strategy and data insights."
    },
    {
      name: "Sneha Gupta",
      position: "Client Success Manager",
      image: "/rectangle-44.png",
      bio: "Sneha ensures our clients achieve their goals and exceed expectations."
    }
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-16 lg:py-24" data-section="team">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            Our Team
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
            Meet the Minds Behind the Magic
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed max-w-3xl mx-auto">
            Our diverse team of digital marketing experts, creatives, and strategists work together to bring your brand's story to life.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-lg mb-1 group-hover:text-[#543d98] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] font-medium text-[#543d98] text-sm mb-3">
                  {member.position}
                </p>
                <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-4">
              Want to Join Our Team?
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed mb-6">
              We're always looking for talented individuals who share our passion for digital marketing and client success.
            </p>
            <button className="bg-[#543d98] hover:bg-[#543d98]/90 text-white px-8 py-3 rounded-xl font-bold transition-colors duration-300">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};