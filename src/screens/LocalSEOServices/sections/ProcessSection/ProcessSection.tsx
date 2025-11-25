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
    description:
      "It begins with understanding your website’s structure and what’s working and what’s not.",
    expandedContent:
      "It begins with understanding your website’s structure and what’s working and what’s not. Our audit examines key factors like site structure, page loading speed, backlinking quality, and content audits. The goal is to identify loopholes, technical issues, missed opportunities, and areas for improvement, setting the perfect stage for the next steps.",
  },
  {
    id: 2,
    title: "Optimize Google My Business",
    description:
      "Your GMB is like your company’s online visiting card-it needs to be accurate and consistent.",
    expandedContent:
      "Your GMB is like your company’s online visiting card. It needs to be accurate and consistent across all key business details-think name, phone, address, visiting hours, category, and services. We also design it with high-quality photos and keyword-infused descriptions so that your business stands out.",
  },
  {
    id: 3,
    title: "Perform Local Keyword Research",
    description:
      "Local search is specific to the T-we focus on location-based keywords that bring real traffic.",
    expandedContent:
      "Local search is specific to the T. Our focus is on location-specific keywords like “best [service] near me,” “top [product] in [city],” and more. Once we have them, we strategically integrate them into your website, GMB, and listings to improve your local rankings.",
  },
  {
    id: 4,
    title: "Ensure NAP Consistency Across All Listings",
    description:
      "NAP consistency (Number, Address, Phone) is crucial for building trust and improving ranking.",
    expandedContent:
      "NAP—Number, Address, Phone—consistency is crucial for building trust. Our team ensures all your business details are consistent across online directories, business listings, social media profiles, and websites because any inconsistency will confuse the search engine and the audience — and that’ll hurt your ranking.",
  },
  {
    id: 5,
    title: "Create and Optimize Local Content",
    description:
      "We create geo-targeted blogs, service pages, and landing pages tailored for your audience.",
    expandedContent:
      "Think of content that does not align with your audience-that’s a way NOT to serve your audience and waste their time, too. Our content writing services ensure your blogs, service pages, and landing pages are incorporated with geo-targeted keywords so that your audience (and search engine) recognize your relevance.",
  },
  {
    id: 6,
    title: "Monitor and Track Local SEO Performance",
    description:
      "Local SEO is an ongoing process of tracking rankings, traffic, and GMB performance.",
    expandedContent:
      "The audience needs to keep altering. Local SEO is an ongoing process of tracking metrics like local search rankings, traffic, GMB performance, and user behavior to keep your business up to date with search algorithms and local search. That means consistent visibility, enquiries, and growth.",
  },
];


  return (
    <section className="w-full bg-white py-8 lg:py-20" data-section="content-process">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-5 lg:mb-16">
          

          <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">

             Our Proven Local SEO

             </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
            Framework for Sustainable Growth 
          </h2>


        </div>

        {/* Process Steps */}
        <div className="space-y-4">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out cursor-pointer ${
                hoveredStep === step.id
                  ? "bg-[#543d98] border-[#543d98] shadow-lg"
                  : "bg-white border-gray-200 hover:border-[#543d98]/30"
              }`}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="p-6 lg:p-8">
                {/* Main Row: title left | desc right */}
                <div className="grid grid-cols-12 gap-6 items-start">
                  {/* Step Number + Title (Left) */}
                  <div className="col-span-12 md:col-span-5 flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-colors duration-300 ${
                        hoveredStep === step.id ? "bg-white text-[#543d98]" : "bg-[#543d98]/10 text-[#543d98]"
                      }`}
                    >
                      {step.id}
                    </div>
                    <h3
                      className={`[font-family:'DM_Sans',Helvetica] font-bold text-xl lg:text-2xl transition-colors duration-300 ${
                        hoveredStep === step.id ? "text-white" : "text-[#030019]"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  {/* Description + Arrow (Right) */}
                  <div className="col-span-12 md:col-span-7 flex justify-between items-start">
                    <p
                      className={`[font-family:'DM_Sans',Helvetica] font-normal text-base leading-relaxed transition-colors duration-300 ${
                        hoveredStep === step.id ? "text-white/90" : "text-[#666]"
                      }`}
                    >
                      {step.description}
                    </p>

                    <div
                      className={`flex-shrink-0 ml-4 transition-all duration-300 ${
                        hoveredStep === step.id ? "text-white rotate-90" : "text-[#543d98] rotate-0"
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    hoveredStep === step.id ? "max-h-32 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`pt-4 border-t ${
                      hoveredStep === step.id ? "border-white/20" : "border-transparent"
                    }`}
                  >
                    <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white/80 text-sm leading-relaxed">
                      {step.expandedContent}
                    </p>
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
