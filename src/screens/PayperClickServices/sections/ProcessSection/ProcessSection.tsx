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
    title: "Keyword research and targeting",
    description:
      "Once we understand your business and its audience, our team starts to research what your audience is looking for.",
    expandedContent:
      "Once we understand your business and its audience, our team starts to research what your audience is looking for. What phrases are they exactly searching for, which products or services are they most interested in and more. Based on this, we decide the keywords we want to integrate and the audience segment to aim for.",
  },
  {
    id: 2,
    title: "Ad creation and optimization",
    description:
      "With all this information, we start drafting your ad copies and visuals.",
    expandedContent:
      "With all this information, we start drafting your ad copies and visuals. The copies are persuasive to get the audience to visit and click on the checkout buttons. At the same time, the visuals are designed to be eye-catching and attention-seeking. All of them are optimized as per the required standards.",
  },
  {
    id: 3,
    title: "Campaign management",
    description:
      "Our PPC management services include end-to-end campaign management for you.",
    expandedContent:
      "Our PPC management services include end-to-end campaign management for you, right from strategizing the campaign idea, defining the audience, deciding the budget to selecting the marketing channels and A/B testing the ad copies. We set your campaign goals and link them back to the broader marketing goals to ensure every effort is in the same direction.",
  },
  {
    id: 4,
    title: "Landing page optimization",
    description:
      "When your audience clicks on the ad, they are directed to a landing page, which must be optimized for conversion.",
    expandedContent:
      "When your audience clicks on the ad, they are directed to a landing page, which must be optimized for conversion. Our team ensures that your landing page tells a story and includes the necessary keywords while guiding your visitors to the action you want them to take.",
  },
  {
    id: 5,
    title: "Performance tracking & reporting",
    description:
      "Once the ad goes live, we continuously work on the backend, monitoring its performance.",
    expandedContent:
      "Once the ad goes live, we continuously work on the backend, monitoring its performance. We compare different ads on various factors to decide the best performing ones and optimize the rest. This informs our decision to continue, stop, or change the ads for your business.",
  },
  {
    id: 6,
    title: "Remarketing campaigns",
    description:
      "We remind your customers why they chose you in the first place.",
    expandedContent:
      "We remind your customers why they chose you in the first place. We retarget them via personalized emails and ad campaigns on their preferred social media platforms to improve your brand recall and spark renewed interest. For ones who abandoned the carts? We reach out to them, too, to nudge them to come back to your brand.",
  },
];


  return (
    <section className="w-full bg-white py-8 lg:py-20" data-section="content-process">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-5 lg:mb-16">
          

          <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">

            Performance Marketing
             </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
            Process That Works
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
