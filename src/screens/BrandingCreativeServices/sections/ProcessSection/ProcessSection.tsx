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
    title: "Research and Development",
    description:
      "We start by hearing your story, going through the existing branding resources, and researching your competitors and audience.",
    expandedContent:
      "We start by hearing your story, going through the existing branding resources, and researching your competitors and audience. Our team gathers insights and feedback on what’s working and what’s not to correctly identify the aspects that need a change.",
  },
  {
    id: 2,
    title: "Brainstorming and Mood Boarding",
    description:
      "Based on the feedback, we start putting together a mood board-this is to answer the personality of your brand, the emotions it will evoke, the colors that go with it, and the kind of typography that will look best.",
    expandedContent:
      "Based on the feedback, we start putting together a mood board-this is to answer the personality of your brand, the emotions it will evoke, the colors that go with it, and the kind of typography that will look best.",
  },
  {
    id: 3,
    title: "Design Curation & Implementation",
    description:
      "Once the mood board is approved, we get to the designing process, starting with the most important branding aspect: logo.",
    expandedContent:
      "Once the mood board is approved, we get to the designing process, starting with the most important branding aspect: logo. Templates for other collaterals like brochures and stationary come to life as well. We make sure every element is carefully and thoughtfully placed.",
  },
  {
    id: 4,
    title: "Design Refining",
    description:
      "The templates are just the starting point.",
    expandedContent:
      "The templates are just the starting point. Our team sits with you, explains to you the logic behind the designs and takes your feedback. Here we lay our thinking process to see if it aligns with yours and the outcome or if there’s a need to refine them.",
  },
  {
    id: 5,
    title: "Presenting the Design",
    description:
      "The final designs are presented to you-exactly the way your audience and everyone else will see them.",
    expandedContent:
      "The final designs are presented to you-exactly the way your audience and everyone else will see them. Every aspect of these designs is detailed to perfection which helps you decide how close the designs are to your vision.",
  },
  {
    id: 6,
    title: "Final Delivery",
    description:
      "Once everything is locked in, our team hands over all the files in the required file formats to you.",
    expandedContent:
      "Once everything is locked in, our team hands over all the files in the required file formats to you. We ensure these files are of the highest quality for the best outcomes. Additionally, we maintain a backup in case you need them at any point in the future.",
  },
];


  return (
    <section className="w-full bg-white py-8 lg:py-20" data-section="content-process">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-5 lg:mb-16">
          

          <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">

             How We  Build Brands
             </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
            People Remembe
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
