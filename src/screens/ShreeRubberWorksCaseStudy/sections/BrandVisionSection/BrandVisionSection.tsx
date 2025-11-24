// src/pages/services/content-writing/sections/BrandVisionSection.tsx

import React from "react";

export const BrandVisionSection = (): JSX.Element => {
  const challenges = [
    {
      title: "Minimal SEO Visibility",
      description: "Website buried in search results with almost no organic traffic",
    },
    {
      title: "Zero Keyword Rankings",
      description: "Critical industry keywords not appearing in top search positions",
    },
    {
      title: "Poor Lead Quality",
      description: "Struggled to attract qualified prospects ready to convert",
    },
  ];

  const approachPoints = [
    {
      title: "Complete Website Revamp",
      description: "Modern, conversion-focused design with improved UX and structure.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 stroke-[#543d98]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7h18M3 12h18M3 17h18"
          />
        </svg>
      ),
    },
    {
      title: "Advanced SEO Implementation",
      description: "Technical optimization, keyword research, and structured content.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 stroke-[#543d98]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364l-2.121 2.121M8.757 17.243l-2.121 2.121M17.243 17.243l-2.121-2.121M8.757 6.343 6.636 4.222"
          />
        </svg>
      ),
    },
    {
      title: "Continuous Optimization",
      description: "Refinements based on analytics, CRO, and performance insights.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 stroke-[#543d98]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3v18h18M7 16l3-3 2 2 4-4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#F6F6FA] py-16" data-section="brand-vision">
      <div className="max-w-[1280px] mx-auto px-4">

        {/* ======================== THE CHALLENGE =========================== */}
        <div className="mb-20">
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[36px] mb-10">
            The Challenge
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#E5E5EC] rounded-lg shadow-sm p-6 relative"
              >
                {/* Left Gradient Accent Line */}
                <div className="absolute top-0 left-0 h-full w-[6px] bg-gradient-to-b from-[#4F3BC4] to-[#6B4EEA] rounded-l-lg" />

                <h3 className="text-[#030019] font-semibold text-[22px] mb-2 [font-family:'DM_Sans',Helvetica]">
                  {item.title}
                </h3>

                <p className="text-[#5D5D6C] text-[16px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== OUR STRATEGIC APPROACH ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="/impulse-website/team-discussion.png"
              alt="Team discussion and analytics dashboard"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[36px] mb-8">
              Our Strategic Approachh
            </h2>

            <div className="space-y-10">
              {approachPoints.map((point, index) => (
                <div key={index} className="flex gap-5 items-start">
                  <div className="w-16 h-16 rounded-xl bg-white shadow flex items-center justify-center border border-[#E7E3F4]">
                    {point.icon}
                  </div>

                  <div>
                    <h3 className="text-[#030019] font-semibold text-[22px] mb-1">
                      {point.title}
                    </h3>
                    <p className="text-[#5D5D6C] text-[16px] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
