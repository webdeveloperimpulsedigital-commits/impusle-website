import React, { useState } from "react";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  expandedContent: string;
}

export const PpcProcessSection = (): JSX.Element => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "Keyword research and targeting",
      description: "Once we understand your business and its audience, our team starts to research what your audience is looking for. What phrases are they",
      expandedContent: "Our research phase includes comprehensive competitor analysis, keyword research, audience behavior studies, and industry trend analysis to create a solid foundation for your content strategy."
    },
    {
      id: 2,
      title: "Ad creation and optimization",
      description: "With all this information, we start drafting your ad copies and visuals. The copies are persuasive to get the audience to visit and click on the",
      expandedContent: "We analyze current market trends, social media conversations, and search patterns to develop content ideas that resonate with your audience while staying ahead of the curve."
    },
    {
      id: 3,
      title: "Campaign management",
      description: "Our PPC management services include end-to-end campaign management for you, right from strategizing the campaign idea, defining",
      expandedContent: "Our content categorization ensures a balanced mix of educational, promotional, and engaging content that aligns with your brand voice and business objectives."
    },
    {
      id: 4,
      title: "Landing page optimization",
      description: "When your audience clicks on the ad, they are directed to a landing page, which must be optimized for conversion. Our team ensures that your",
      expandedContent: "Our writers craft compelling content that balances SEO optimization with engaging storytelling, ensuring each piece serves both search engines and human readers effectively."
    },
    {
      id: 5,
      title: "Performance tracking & reporting",
      description: "Once the ad goes live, we continuously work on the backend, monitoring its performance. We compare different ads on various factors to decide the",
      expandedContent: "We create detailed audience personas, analyze their pain points, preferences, and content consumption habits to ensure every piece resonates with your ideal customers."
    },
    {
      id: 6,
      title: "Remarketing campaigns",
      description: "We remind your customers why they chose you in the first place. We retarget them via personalized emails and ad campaigns on their preferred",
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
                Pay Per Click (PPC)
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