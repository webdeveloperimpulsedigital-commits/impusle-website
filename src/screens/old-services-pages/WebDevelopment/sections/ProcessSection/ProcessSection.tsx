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
      description: "Our team begins with a detailed discussion on your business goals, audience, challenges, and vision.",
      expandedContent: "We touch upon everything here, from aesthetics to features and functionality, to create a custom web development plan that exceeds your expectations."
    },
    {
      id: 2,
      title: "Access & Backup",
      description: "Before development begins, we request access to existing resources and create a secure backup.",
      expandedContent: "This step guarantees safety and allows for easy restoration if required, ensuring a seamless transition and minimized risks."
    },
    {
      id: 3,
      title: "Design & Development",
      description: "We design a custom website tailored to your visual and functional goals.",
      expandedContent: "Once you approve the design, we begin development, ensuring every element is optimized for performance, resulting in a secure, scalable, and adaptable website."
    },
    {
      id: 4,
      title: "Regular Communication",
      description: "Our team shares updates as we achieve project milestones.",
      expandedContent: "Clear communication addresses concerns promptly, making the entire process transparent and aligned with your expectations."
    },
    {
      id: 5,
      title: "Quality Assurance (QA) Testing",
      description: "Before going live, our team conducts rigorous QA tests to uncover errors and optimization opportunities.",
      expandedContent: "Based on the outcome, we optimize the website further to run smoothly with minimal downtime, ensuring reliability and performance."
    },
    {
      id: 6,
      title: "Ongoing Support & Maintenance",
      description: "Even after launch, we provide expert maintenance and support.",
      expandedContent: "We regularly update websites, scan for bugs, and fix issues in real-time, giving you a seamless user experience while you focus on growing your business."
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-20" data-section="web-dev-process">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
                Web Development
              </p>
              <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl">
                Our Website Development Process
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

                    {/* Expanded Content */}
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
