import React from "react";

export const TeamSection = (): JSX.Element => {
  const teamMembers = [
    {
      name: "Mahendra Prajapati",
      position: "SEO Managaer",
      image: "/impulse-website/adwait-sir.jpg",
      // bio: "Leads Impulse with vision, curiosity, and an eye for timeless creativity."
    },
    {
      name: "Abhishek Arekar",
      position: "Director",
      image: "/impulse-website/Abhishek Image.jpg",
      // bio: "Brings ideas to life through strategy, structure, and an endless love for design."
    },
    {
      name: "Priya Sharma",
      position: "Creative Strategist",
      image: "/impulse-website/creative-priya.jpg",
      // bio: "Turns brand challenges into bold creative opportunities that drive real impact."
    },
    {
      name: "Amit Patel",
      position: "Marketing Lead",
      image: "/impulse-website/amit-patel.jpg",
      // bio: "Blends data and intuition to create campaigns that truly connect with audiences."
    },
    {
      name: "Sneha Gupta",
      position: "Client Success Manager",
      image: "/impulse-website/sneha-gupta.jpg",
      // bio: "Ensures every project exceeds expectations and keeps client happiness at the core."
    },
    {
      name: "Rohit Sharma",
      position: "Tech & Automation Lead",
      image: "/impulse-website/rohit-sharma.jpg",
      // bio: "Transforms ideas into scalable digital systems that make creativity effortless."
    },
    {
      name: "Neha Verma",
      position: "Content Specialist",
      image: "/impulse-website/neha-verma.jpg",
      // bio: "Crafts stories that capture hearts and deliver the brand’s message with impact."
    },
    {
      name: "Karan Singh",
      position: "Design Lead",
      image: "/impulse-website/karan-singh.jpg",
      // bio: "Makes pixels speak. Blends design thinking with emotional storytelling."
    }
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-16 lg:py-24" data-section="team">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            Our People
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
            Together, We Create the Difference
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed max-w-3xl mx-auto">
            At Impulse Digital, collaboration is our creative fuel.  
            Every campaign, every story, and every success begins with the energy 
            of our people — diverse thinkers, dreamers, and doers who believe 
            that marketing is most powerful when it feels human.
          </p>
        </div>

        {/* Desktop Grid (unchanged) */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

        {/* Mobile Slider */}
        <div className="block sm:hidden">
          <div className="flex overflow-x-auto space-x-4 px-2 pb-2 snap-x snap-mandatory -mx-2">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[80%] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 snap-start hover:shadow-lg transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5">
                  <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="[font-family:'DM_Sans',Helvetica] font-medium text-[#543d98] text-sm mb-2">
                    {member.position}
                  </p>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#666] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-4">
              Want to Join Our Team?
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed mb-6">
              We’re always looking for curious minds and bold creators who love 
              building ideas that matter. If that sounds like you — let’s talk.
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
