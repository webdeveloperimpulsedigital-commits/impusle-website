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
    title: "Defining goals",
    description:
      "Want more followers? Wish to build a community? Or do you want more sales? The first step is to set a clear goal and more importantly get it right.",
    expandedContent:
      "Want more followers? Wish to build a community? Or do you want more sales? The first step is to set a clear goal and more importantly get it right. This means the goal has to be SMART - Specific, measurable, achievable, reasonable, and time-bound.",
  },
  {
    id: 2,
    title: "Strategy Development",
    description:
      "Research, research, and some more research about everything-your brand, its offering, USP, your competitors and their brands, target audience and suitable practices.",
    expandedContent:
      "Research, research, and some more research about everything-your brand, its offering, USP, your competitors and their brands, target audience and suitable practices. We learn everything and put the pieces together to create a brand strategy that’s uniquely yours.",
  },
  {
    id: 3,
    title: "Content Creation",
    description:
      "Strategy’s in? Content next. This means shooting, editing, and refining pictures and videos as well as drafting and reviewing copies as per the calendar set in place.",
    expandedContent:
      "Strategy’s in? Content next. This means shooting, editing, and refining pictures and videos as well as drafting and reviewing copies as per the calendar set in place. We align the content topics with content formats and platform suitability to make sure we are platform-specific for best results.",
  },
  {
    id: 4,
    title: "Implementation & management",
    description:
      "Once everything is run by you, it is our job to take it live and take care of engagement activities.",
    expandedContent:
      "Once everything is run by you, it is our job to take it live and take care of engagement activities. Whether it is commenting, replying to DMs, or engaging with potential brand partners, leave it to us.",
  },
  {
    id: 5,
    title: "Advertising and optimizing",
    description:
      "Paid ads complement our growth strategy; they don’t replace it.",
    expandedContent:
      "Paid ads complement our growth strategy; they don’t replace it. We skillfully identify the best ad copies & visuals to run them at optimized costs. This means we won't spend too much unnecessarily and get you the desired results. Plus, we are constantly learning from what we have done to make it more effective.",
  },
  {
    id: 6,
    title: "Reporting and analytics",
    description:
      "We are ‘K’razy about KPIs to learn how far we have to see how far we still have to go.",
    expandedContent:
      "We are ‘K’razy about KPIs to learn how far we have to see how far we still have to go. Our detailed analytics and reporting tracks metrics like organic traffic, views, interactions, new followers, accounts reached and more to make sure that every action is in line with the SMM goals. This is what makes us the best social media marketing agency.",
  },
];


  return (
    <section className="w-full bg-white py-8 lg:py-20" data-section="content-process">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-5 lg:mb-16">
          

          <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">

              Our Blueprint 
             </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
            for Winning on Social
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
