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
    title: "Entity Optimization",
    description:
      "Strengthening your brand’s digital identity across AI ecosystems through entity mapping and contextual clarity.",
    expandedContent:
      "We refine how AI engines interpret your brand by optimizing entity relationships, improving semantic clarity, and ensuring consistent representation across the entire digital landscape.",
  },

  {
    id: 2,
    title: "Content for AI Answers",
    description:
      "Creating authoritative, conversational, and structured content designed for AI summarization and featured responses.",
    expandedContent:
      "We craft content intentionally for AI engines—clear, concise, authoritative, and optimized for answer boxes, AI overviews, conversational responses, and instant summaries across platforms.",
  },

  {
    id: 3,
    title: "Structured Data & Schema",
    description:
      "Implementing schema markup to help AI understand products, services, and reviews with precision.",
    expandedContent:
      "By adding advanced schema markup, we give AI models the context they need—improving visibility, comprehension, and the likelihood of appearing in rich results, snippets, and AI-driven answers.",
  },

  {
    id: 4,
    title: "LLM Content Training Alignment",
    description:
      "Optimizing brand content to align with how large language models like GPT, Gemini, and Perplexity interpret information.",
    expandedContent:
      "We structure your content in formats that LLMs prefer—factually strong, context-rich, logically layered, and highly interpretable—ensuring your brand is represented accurately by AI.",
  },

  {
    id: 5,
    title: "Authority Building",
    description:
      "Enhancing brand credibility through strategic PR, citations, and high-authority digital placements.",
    expandedContent:
      "We strengthen your brand’s trust signals through authoritative mentions, high-quality references, digital PR, and credibility markers that AI models prioritize while ranking and answering.",
  },

  {
    id: 6,
    title: "Multimedia Optimization",
    description:
      "Enriching all digital assets like text, visuals, and videos with metadata that improves AI comprehension and ranking signals.",
    expandedContent:
      "We optimize every asset—images, documents, videos, and graphics—with metadata, alt text, transcripts, and contextual signals to improve multimodal AI understanding and cross-platform visibility.",
  },
];


  return (
    <section className="w-full bg-white py-8 lg:py-20" data-section="content-process">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mb-5 lg:mb-16">
          

          <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">

              How Great Content

             </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
           Comes to Life 
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
