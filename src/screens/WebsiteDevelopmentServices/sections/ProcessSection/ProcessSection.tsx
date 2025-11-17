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
      "Our team begins with a detailed discussion on your business’s goals, audience, and vision.",
    expandedContent:
      "Our team begins with a detailed discussion on your business’s goals, audience, current challenges, and vision for the website or the store. We touch upon everything here, from aesthetics to features and functionality, to create a custom web development plan that exceeds your expectations.",
  },
  {
    id: 2,
    title: "Access & Backup",
    description:
      "Before development begins, we request access to existing resources and create a secure backup.",
    expandedContent:
      "Before we begin the development, we request access to the existing resources and create a secure backup of the existing website. This step guarantees safety and allows for easy restoration if required, ensuring a seamless transition and minimized risks.",
  },
  {
    id: 3,
    title: "Design & Development",
    description:
      "We design and develop a custom website optimized for performance and scalability.",
    expandedContent:
      "The process starts with designing a custom website, keeping in mind your visual and end goal for approval. Once you approve the design, we begin development, ensuring every element is optimized for performance. The result is a secure, scalable, and adaptable website.",
  },
  {
    id: 4,
    title: "Regular Communication",
    description:
      "We ensure transparent updates and milestone communication throughout the project.",
    expandedContent:
      "Our team will keep sharing important updates as we achieve project milestones. Clear communication is paramount to address concerns and roadblocks promptly and responsibly. Open communication, therefore, ensures the entire process is transparent and aligned with your expectations.",
  },
  {
    id: 5,
    title: "Quality Assurance (QA) Testing",
    description:
      "Before going live, we conduct rigorous QA tests to ensure performance and stability.",
    expandedContent:
      "Before going live with the website, our team conducts rigorous Quality Assurance tests to uncover any loopholes, dysfunctionality, errors in messaging, and areas for optimization. Based on the outcome, we optimize the website further to run smoothly with minimal downtime.",
  },
  {
    id: 6,
    title: "Ongoing Support & Maintenance",
    description:
      "Even after launch, we provide expert maintenance and real-time issue resolution.",
    expandedContent:
      "We are here for you even after the website is live. Our team regularly updates the websites, scans them for bugs, and fixes them in real time for a seamless user experience. With our expert support, you can focus on growing your business while we handle the technicalities.",
  },
];


  return (
    <section className="w-full bg-white py-8 lg:py-20" data-section="content-process">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-5 lg:mb-16">
          

          <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">

             Because Great Websites
             </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
            Need More Than Just Good Code
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
