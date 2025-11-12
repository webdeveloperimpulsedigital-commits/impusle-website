import React from "react";

type Member = {
  name: string;
  position: string;
  image: string;
  bio?: string;
};

export const TeamSection = (): JSX.Element => {
  const teamMembers: Member[] = [
    {
      name: "Adwait Joshi",
      position: "Founder & Director",
      image: "/impulse-website/adwait-sir.jpg",
    },
    {
      name: "Abhishek Arekar",
      position: "Director",
      image: "/impulse-website/Abhishek Image.jpg",
    },
    {
      name: "Priya Sharma",
      position: "Creative Strategist",
      image: "/impulse-website/creative-priya.jpg",
    },
    {
      name: "Amit Patel",
      position: "Marketing Lead",
      image: "/impulse-website/amit-patel.jpg",
    },
    {
      name: "Sneha Gupta",
      position: "Client Success Manager",
      image: "/impulse-website/sneha-gupta.jpg",
    },
    {
      name: "Rohit Sharma",
      position: "Tech & Automation Lead",
      image: "/impulse-website/rohit-sharma.jpg",
    },
    {
      name: "Neha Verma",
      position: "Content Specialist",
      image: "/impulse-website/neha-verma.jpg",
    },
    {
      name: "Karan Singh",
      position: "Design Lead",
      image: "/impulse-website/karan-singh.jpg",
    },
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-16 lg:py-24" data-section="team">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12 lg:mb-16">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            Our People
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-4">
            Together, We Create the Difference
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base lg:text-lg leading-relaxed">
            At Impulse Digital, collaboration is our creative fuel. Every campaign, every story, and every success begins with the energy of our people — diverse thinkers, dreamers, and doers who believe that marketing is most powerful when it feels human. From strategy sessions that spark innovation to coffee-table ideas that turn into viral campaigns, our team thrives on curiosity, creativity, and connection.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[32rem] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-1 group-hover:text-[#543d98] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] font-medium text-[#543d98] text-base mb-3">
                  {member.position}
                </p>
                {member.bio && (
                  <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="block sm:hidden">
          <div className="flex overflow-x-auto space-x-4 px-2 pb-2 snap-x snap-mandatory -mx-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[90%] bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 snap-start hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[28rem] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="[font-family:'DM_Sans',Helvetica] font-medium text-[#543d98] text-sm mb-2">
                    {member.position}
                  </p>
                  {member.bio && (
                    <p className="[font-family:'DM_Sans',Helvetica] text-[#666] text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Team CTA */}
        {/* <div className="mt-20 text-left">
          <div className="bg-white rounded-2xl p-10 shadow-md border border-gray-100 max-w-4xl">
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl mb-4">
              Want to Join Our Team?
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base leading-relaxed mb-6">
              We’re always looking for curious minds and bold creators who love building ideas that matter.  
              If you think you can bring your spark to our story, come be part of our journey.
            </p>
            <button className="bg-[#543d98] hover:bg-[#543d98]/90 text-white px-10 py-3 rounded-xl font-bold transition-colors duration-300">
              View Open Positions
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};
