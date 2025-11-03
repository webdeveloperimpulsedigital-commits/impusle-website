import React from "react";
import { Button } from "../../../../../components/ui/button";

export const ApplicationProcessSection = (): JSX.Element => {
  const processSteps = [
    {
      number: "01",
      title: "Submit Application",
      description: "Send us your resume and cover letter through our online form or email",
      icon: "📝"
    },
    {
      number: "02",
      title: "Initial Review",
      description: "Our HR team reviews your application and assesses fit for the role",
      icon: "👀"
    },
    {
      number: "03",
      title: "Phone/Video Interview",
      description: "Initial conversation to discuss your experience and career goals",
      icon: "📞"
    },
    {
      number: "04",
      title: "Skills Assessment",
      description: "Practical test or portfolio review relevant to the position",
      icon: "🎯"
    },
    {
      number: "05",
      title: "Final Interview",
      description: "Meet with the team and discuss role expectations and company culture",
      icon: "🤝"
    },
    {
      number: "06",
      title: "Welcome Aboard!",
      description: "Onboarding process and integration into your new team",
      icon: "🎉"
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24" data-section="application-process">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            Application Process
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
            How to Join Our Team
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed max-w-3xl mx-auto">
            Our hiring process is designed to be transparent, efficient, and focused on finding the right fit for both you and our team.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#543d98]/20 via-[#543d98] to-[#543d98]/20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#543d98] to-[#6b46c1] rounded-2xl p-8 lg:p-12 text-white">
          <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-2xl lg:text-3xl mb-4">
            Don't See the Right Position?
          </h3>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white/90 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            We're always interested in connecting with talented individuals. Send us your resume and let us know 
            how you'd like to contribute to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#543d98] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-colors duration-300">
              Send Your Resume
              <img className="w-4 h-4 ml-2" alt="Arrow" src="/impulse-website/button-icon.svg" />
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#543d98] px-8 py-4 rounded-xl font-bold transition-all duration-300">
              Contact HR Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};