import React, { useState } from "react";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  expandedContent: string;
}

export const ProcessSection = (): JSX.Element => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "Comprehensive SEO Audits",
      description: "It begins with understanding your website’s structure and what’s working and what’s not. Our analysis analyzes key factors like site structure",
      expandedContent: "Our research phase includes comprehensive competitor analysis, keyword research, audience behavior studies, and industry trend analysis to create a solid foundation for your content strategy."
    },
    {
      id: 2,
      title: "Keyword Research and Targeting",
      description: "You don’t want to be found for just anything. It needs to be precise, relevant, and traffic-driven. We uncover high-value, low-competition",
      expandedContent: "We analyze current market trends, social media conversations, and search patterns to develop content ideas that resonate with your audience while staying ahead of the curve."
    },
    {
      id: 3,
      title: "Optimize Google My Business Profile",
      description: "If you want to target a larger audience, setting up a Google My Business (GMB) is a non-negotiable. We ensure that your GMB is well-set with",
      expandedContent: "Our content categorization ensures a balanced mix of educational, promotional, and engaging content that aligns with your brand voice and business objectives."
    },
    {
      id: 4,
      title: "Technical SEO Optimization",
      description: "Next, our goal is to make your website search engine’s best friend. Here, we focus on essentials like crawlability and site architecture, as well",
      expandedContent: "Our writers craft compelling content that balances SEO optimization with engaging storytelling, ensuring each piece serves both search engines and human readers effectively."
    },
    {
      id: 5,
      title: "Content Creation and Optimization",
      description: "High-quality, relevant content is your way to speak to your audience. We take a dual approach by creating new pieces and updating information",
      expandedContent: "We create detailed audience personas, analyze their pain points, preferences, and content consumption habits to ensure every piece resonates with your ideal customers."
    },
    {
      id: 6,
      title: "Analytics and Reporting",
      description: "We are all about measuring how far we have to see how far we still have to go. Our detailed analytics and reporting tracks metrics like organic traffic",
      expandedContent: "Through strategic narrative development, we weave your brand values, mission, and unique selling propositions into compelling stories that create emotional connections with your audience."
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-20" data-section="content-process">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
                SEO
              </p>
              <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl">
                Process That Works
              </h2>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="space-y-4">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out cursor-pointer ${
                hoveredStep === step.id
                  ? 'bg-[#543d98] border-[#543d98] shadow-lg'
                  : 'bg-white border-gray-200 hover:border-[#543d98]/30'
              }`}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="p-6 lg:p-8">
                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-colors duration-300 ${
                    hoveredStep === step.id
                      ? 'bg-white text-[#543d98]'
                      : 'bg-[#543d98]/10 text-[#543d98]'
                  }`}>
                    {step.id}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`[font-family:'DM_Sans',Helvetica] font-bold text-xl lg:text-2xl mb-3 transition-colors duration-300 ${
                      hoveredStep === step.id ? 'text-white' : 'text-[#030019]'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className={`[font-family:'DM_Sans',Helvetica] font-normal text-base leading-relaxed transition-colors duration-300 ${
                      hoveredStep === step.id ? 'text-white/90' : 'text-[#666]'
                    }`}>
                      {step.description}
                    </p>

                    {/* Expanded Content - Shows on hover */}
                    <div className={`overflow-hidden transition-all duration-500 ease-out ${
                      hoveredStep === step.id 
                        ? 'max-h-32 opacity-100 mt-4' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pt-4 border-t border-white/20">
                        <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white/80 text-sm leading-relaxed">
                          {step.expandedContent}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className={`flex-shrink-0 transition-all duration-300 ${
                    hoveredStep === step.id 
                      ? 'text-white rotate-90' 
                      : 'text-[#543d98] rotate-0'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};