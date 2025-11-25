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
    title: "Planning & Strategy",
    description:
      "Every outcome requires a clear, intentional process. Our first step is to gauge your exact requirements, expected outcome, and vision behind the video.",
    expandedContent:
      "Every outcome requires a clear, intentional process. Our first step is to gauge your exact requirements, expected outcome, and idea behind the video. This means digging into your inspiration, finding references for specific elements, and doing our creative research.",
  },
  {
    id: 2,
    title: "Storyboarding & Scripting",
    description:
      "Our team of storyboarders and scripters create a storyline that hits the mark and captures your brand’s essence.",
    expandedContent:
      "Next, our team of storyboarders and scripters sit down with the brief to create a storyline that hits right on the mark. We shape up characters, set up the scene, decide the background, scout for shoot locations, and craft the dialogues. For products, we look into photography concepts, color contrasts, and setup.",
  },
  {
    id: 3,
    title: "Filming / Recording",
    description:
      "With a detailed plan, we move on to actual creation-lights, camera, and action come together to tell your story.",
    expandedContent:
      "With a detailed plan, we move on to actually creating the content. It’s all about lights, camera, and action for everyone working on the project. We carefully shoot each sequence and product to highlight the details and bring out the story.",
  },
  {
    id: 4,
    title: "Editing & Assembly",
    description:
      "All the raw footage comes together here-edited, refined, and perfected for the final outcome.",
    expandedContent:
      "It’s time to gather all the raw footage and put it together. Our editing team sits down to view each footage and image one by one, make the necessary corrections for lighting, contrast, sound, etc., and assemble it together for the final outcome.",
  },
  {
    id: 5,
    title: "Publishing & Performance Marketing",
    description:
      "Once approved, we launch your video, promote it, and track performance for maximum ROI.",
    expandedContent:
      "Once you approve of the final outcome, our team goes live with social media videos. We spread the word, promote the video, and run our analytics to measure its performance. After all, all that effort needs to translate into ROIs.",
  },
];


  return (
    <section className="w-full bg-white py-8 lg:py-20" data-section="content-process">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-5 lg:mb-16">
          

          <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">

             How We Make Social Videos That
             </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
            Actually Work
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
