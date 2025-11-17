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
    title: "Researching the Brand and Competitor Analysis",
    description:
      "We start by hearing your story, going through the existing branding resources, and researching your competitors and audience.",
    expandedContent:
      "What makes your company different from your competitors? Research unfolds this. We break down your organization and your competitors on various aspects like culture, values, and employee experiences. This allows us to benchmark and uncover differentiating opportunities and attract the best-fit talents.",
  },
  {
    id: 2,
    title: "Aligning Research and Strategizing Branding",
    description:
      "Once we complete the research, we gather the insights and shape them into a strategy.",
    expandedContent:
      "Once we complete the research, we gather the insights and shape them into a strategy. This means identifying how your values and offerings can resonate with your employees and potential hires. It also aligns the approach with your specific business goals.",
  },
  {
    id: 3,
    title: "Creating Content Based on Strategy: Copy and Design",
    description:
      "Our team weaves interesting narratives supported by eye-catching visuals that match your employer brand identity.",
    expandedContent:
      "How do you communicate? Via content and visuals. Our team weaves interesting narratives supported by eye-catching visuals that match your employer brand identity. We take care of everything—social media, employee testimonials, job descriptions, and career pages—for you in the perfect tone and style.",
  },
  {
    id: 4,
    title: "Execution of the Strategy",
    description:
      "We uncover insights to decide the right platforms and channels to distribute content effectively.",
    expandedContent:
      "What channels do you distribute the content to? Where are your employees and potential hires spending their time? We uncover this insight and post relevant content on job boards, social media platforms, and the company’s website. With regular updates and consistent execution, we make sure your employer brand stays on the top of their minds.",
  },
  {
    id: 5,
    title: "Analyzing Content Performance",
    description:
      "We track engagement rates, application numbers, and social interactions to measure success.",
    expandedContent:
      "Key metrics like engagement rates, application numbers, social media interactions, and website traffic offer invaluable insights. Based on these data points and trends, we analyze how the content is performing to determine where improvements are needed.",
  },
  {
    id: 6,
    title: "Optimizing Strategy Based on Results",
    description:
      "Continuous testing and tweaking help keep your employer brand relevant and effective.",
    expandedContent:
      "Continuous testing and tweaking—whether that’s adjusting copies, exploring new social media channels, or updating content—help you fine-tune the strategy and achieve better results. Our goal is to keep your employer brand fresh, relevant, and effective in attracting the right kind of talent.",
  },
];

  return (
    <section className="w-full bg-white py-8 lg:py-20" data-section="content-process">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-5 lg:mb-16">
          

          <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
    How We Turn Culture Into a 
             </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
            Compelling Talent Story
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
