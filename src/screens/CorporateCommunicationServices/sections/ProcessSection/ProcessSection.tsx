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
    title: "Initial Consultation",
    description:
      "We have the solutions and the strategies but we want to hear your unique challenges first.",
    expandedContent:
      "We have the solutions and the strategies but we want to hear your unique challenges first. Our initial consultation is all about you—your challenges, what you have done so far, results obtained, and finally, how we can contribute.",
  },
  {
    id: 2,
    title: "Communication Audit",
    description:
      "We conduct an audit to identify discrepancies in messaging, channel effectiveness, and intent gaps.",
    expandedContent:
      "We then conduct an audit to identify discrepancies in messaging, channel effectiveness, and intent gaps. We also see if there’s a disbalance in communication and how the intended audience has received the previous communications.",
  },
  {
    id: 3,
    title: "Develop a Customized Communication Strategy",
    description:
      "Based on our findings, we create a communication strategy tailored to your audience’s preferences.",
    expandedContent:
      "Based on our findings, we create a customized communication strategy that meets your audience where they are. This means accounting for their preferences for channels and mediums of communication, interests, and personalities. Each pain point is individually addressed to create a cohesive whole.",
  },
  {
    id: 4,
    title: "Bring the Strategy to Life",
    description:
      "This is where our team of experts collaborates to execute the strategy seamlessly.",
    expandedContent:
      "This is where we put on our gears and get to action. Each expert oversees their well-defined tasks while collaborating with others on the team to ensure a consistent outcome. All the challenges are promptly addressed, and you are always kept in the loop for real-time feedback.",
  },
  {
    id: 5,
    title: "Reports & Analysis",
    description:
      "We track every communication piece for the impact and insights it generates.",
    expandedContent:
      "Once the communication starts, analytics come into the picture. We track every communication for the impact it was able to drive. We check how well it was received, what the takeaway was, and if there’s any feedback on the same to fine-tune future communication.",
  },
];


  return (
    <section className="w-full bg-white py-8 lg:py-20" data-section="content-process">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-5 lg:mb-16">
          

          <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">

             Corporate Communication
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
