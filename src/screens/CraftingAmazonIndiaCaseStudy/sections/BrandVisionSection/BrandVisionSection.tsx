// src/pages/services/content-writing/sections/BrandVisionSection.tsx
import React from "react";

export const BrandVisionSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-white py-16 lg:py-20"
      id="sec-border"
      data-section="brand-vision"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 space-y-20">
        {/* ======================= HERO / INTRO ======================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            {/* <p className="[font-family:'DM_Sans',Helvetica] text-[#6B7280] text-sm md:text-base mb-3 uppercase tracking-[0.12em]">
              Case Study · Employer Branding & EVP
            </p> */}
            <h1 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-[30px] sm:text-[34px] lg:text-[44px] leading-tight mb-4">
              Crafting the Employer Value Proposition for{" "}
              <span className="text-[#543d98]">Amazon India</span>
            </h1>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#4B5563] text-[15px] sm:text-[16px] leading-relaxed max-w-[720px] mb-6">
              How we partnered with Amazon India to turn scattered perceptions
              into a sharp, India-first EVP that speaks to the next generation
              of talent while staying true to the global Amazon narrative.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "EVP Strategy",
                "Qualitative Research",
                "Talent Insights",
                "Employer Branding",
              ].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-1 text-xs md:text-[13px] text-[#4B5563]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[28px] bg-[#F6F6FB] shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
              <img
                src="/impulse-website/Crafting the Employer Value.png"
                alt="Team reviewing EVP frameworks and talent insights"
                className="w-full h-[260px] sm:h-[320px] lg:h-[360px] object-cover"
                loading="lazy"
              />

              {/* small overlay label */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                {/* <p className="[font-family:'DM_Sans',Helvetica] text-[11px] md:text-[12px] text-[#4B5563]">
                  Internal research, focus groups & leadership alignment
                </p> */}
              </div>
            </div>
          </div>
        </div>

        {/* ================= OBJECTIVE & CHALLENGE ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Objective */}
          <div className="rounded-3xl bg-[#F6F6FB] border border-[#E5E7EB] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[#6B7280] mb-2 [font-family:'DM_Sans',Helvetica]">
              Objective
            </p>
            <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-semibold text-[22px] md:text-[26px] mb-3">
              Define a clear, research-backed EVP for Amazon India
            </h2>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#4B5563] text-[15px] leading-relaxed">
              Build a compelling value proposition that reflects life at Amazon
              India for 21–35 year-old talent, unifies multiple internal
              narratives, and can be activated consistently across hiring,
              internal communication, and leadership storytelling.
            </p>
          </div>

          {/* Challenge */}
          <div className="rounded-3xl bg-white border border-[#F3E8FF] p-6 md:p-8 shadow-[0_16px_40px_rgba(84,61,152,0.08)]">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8B5CF6] mb-2 [font-family:'DM_Sans',Helvetica]">
              The Challenge
            </p>
            <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-semibold text-[22px] md:text-[26px] mb-3">
              Many strong stories, one unified promise
            </h2>
            <ul className="list-disc pl-5 space-y-2 [font-family:'DM_Sans',Helvetica] text-[#4B5563] text-[15px] leading-relaxed">
              <li>Multiple internal narratives across teams and locations.</li>
              <li>
                Need to localize the global Amazon story for the Indian talent
                market.
              </li>
              <li>
                Ensure the EVP is aspirational yet honest about the pace,
                ownership, and expectations at Amazon.
              </li>
            </ul>
          </div>
        </div>

        {/* ======================= OUR APPROACH ======================== */}
        <div>
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium text-[18px] md:text-[22px] mb-2">
            Our Strategic Approach
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed max-w-[780px] mb-8">
            We followed a structured, people-first process that blended
            on-ground employee insight with leadership vision to build an EVP
            that feels both credible and exciting for current and future
            Amazonians.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1 */}
            <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#F5EBFF] flex items-center justify-center mb-4">
                {/* magnifying-glass icon */}
                <svg
                  className="w-5 h-5 text-[#543d98]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11 5a6 6 0 104.472 10.028l3.25 3.252"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[18px] text-[#030019] mb-2">
                Audit & Alignment
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[14px] text-[#4B5563] leading-relaxed">
                Reviewed existing messaging, employer brand assets, and global
                EVP guidelines to understand the current narrative and gaps.
              </p>
            </div>

            {/* 2 */}
            <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFF] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] flex items-center justify-center mb-4">
                {/* people icon */}
                <svg
                  className="w-5 h-5 text-[#2563EB]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M8 11a3 3 0 100-6 3 3 0 000 6zM16 11a3 3 0 100-6 3 3 0 000 6zM4 19a4 4 0 017-2.646M13 16.354A4 4 0 0120 19"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[18px] text-[#030019] mb-2">
                Deep-Dive Employee Research
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[14px] text-[#4B5563] leading-relaxed">
                Conducted focused group discussions across levels, functions,
                and tenure bands to uncover what people value most about working
                at Amazon India.
              </p>
            </div>

            {/* 3 */}
            <div className="rounded-2xl border border-[#E5E7EB] bg-[#FDF7FF] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#FCE7F3] flex items-center justify-center mb-4">
                {/* spark icon */}
                <svg
                  className="w-5 h-5 text-[#DB2777]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 3l1.4 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.6-1.8L12 3z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 17l1 2m11-4l-1 3M4 11l-2 1m18-6l2-1"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[18px] text-[#030019] mb-2">
                EVP Design & Story Framework
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[14px] text-[#4B5563] leading-relaxed">
                Translated insights into a clear promise, supporting pillars,
                and proof points that could be activated in campaigns, JD
                copy, and internal messaging.
              </p>
            </div>
          </div>
        </div>

        {/* ======================== PHASE TIMELINE ====================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Timeline Copy */}
          <div className="lg:col-span-6">
            <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium text-[18px] md:text-[22px] mb-2">
              The Three-Phase Journey
            </h2>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed mb-6 max-w-[620px]">
              The EVP wasn’t created in a workshop; it was built over multiple
              phases of listening, synthesis, and refinement with Amazon India’s
              HR and leadership teams.
            </p>

            <div className="relative pl-6 mt-4">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-[#E5E7EB]" />

              <div className="space-y-6">
                {[
                  {
                    label: "Phase 1 · Discovery",
                    body: "Audit of existing communications, external perception scan, and understanding global guardrails.",
                  },
                  {
                    label: "Phase 2 · Employee Voice",
                    body: "Focus groups and stakeholder interviews across locations and functions to capture lived experiences.",
                  },
                  {
                    label: "Phase 3 · Synthesis & EVP",
                    body: "Consolidated themes into a core promise, three supporting pillars, and proof-led messaging territories.",
                  },
                ].map((item, idx) => (
                  <div className="flex items-start gap-4" key={idx}>
                    <div className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full bg-white border border-[#A5B4FC] text-[#543d98] text-xs font-semibold">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="[font-family:'DM_Sans',Helvetica] font-semibold text-[15px] md:text-[16px] text-[#111827] mb-1">
                        {item.label}
                      </p>
                      <p className="[font-family:'DM_Sans',Helvetica] text-[14px] text-[#4B5563] leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Supporting Image */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[28px] bg-[#F6F6FB] shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
              <img
                src="/impulse-website/Workshop session.png"
                alt="Workshop session with teams collaborating on EVP"
                className="w-full h-[260px] sm:h-[320px] lg:h-[360px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 right-4 bg-white/95 rounded-full px-4 py-2 shadow-sm">
                <p className="[font-family:'DM_Sans',Helvetica] text-[11px] text-[#4B5563]">
                  Cross-functional workshops & synthesis sessions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =================== RESEARCH & INSIGHTS ====================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Research Methodology */}
          <div className="lg:col-span-5 rounded-3xl bg-[#F6F6FB] border border-[#E5E7EB] p-6 md:p-8">
            <p className="[font-family:'DM_Sans',Helvetica] text-xs uppercase tracking-[0.16em] text-[#6B7280] mb-2">
              Research Methodology
            </p>
            <h3 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-semibold text-[20px] md:text-[22px] mb-3">
              Listening to the people who live the EVP every day
            </h3>
            <ul className="space-y-2 [font-family:'DM_Sans',Helvetica] text-[14px] text-[#4B5563] leading-relaxed">
              <li>Mix of in-person and virtual focus group discussions.</li>
              <li>
                Representation from tech, operations, corporate, and leadership
                teams.
              </li>
              <li>
                Participants across tenure bands to capture both fresh and long-
                term perspectives.
              </li>
              <li>
                Structured discussion guides to explore motivations, moments of
                pride, and challenges honestly.
              </li>
            </ul>
          </div>

          {/* Key Insight Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Ownership & Growth",
                body: "Employees consistently spoke about autonomy, steep learning curves, and the chance to build from scratch.",
              },
              {
                title: "Customer-First Mindset",
                body: "Decisions are evaluated through the customer lens, creating a high bar but also a strong sense of purpose.",
              },
              {
                title: "Bias for Action Culture",
                body: "Speed, experimentation, and problem-solving define day-to-day work and differentiate Amazon from peers.",
              },
              {
                title: "Supportive Ecosystem",
                body: "Leaders and peers play a big role in making intense work feel meaningful, supported, and rewarding.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm"
              >
                <h4 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[16px] text-[#111827] mb-2">
                  {card.title}
                </h4>
                <p className="[font-family:'DM_Sans',Helvetica] text-[14px] text-[#4B5563] leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};
