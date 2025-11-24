// BrandVisionSection.tsx
import React from "react";

export const BrandVisionSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-white py-16 lg:py-20"
      id="sec-border"
      data-section="brand-vision"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 space-y-20">
        {/* ================= HERO / INTRO ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Text */}
          <div className="lg:col-span-6">
            <h2 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[32px] md:text-[40px] leading-tight mb-4">
              How Atrac Engine Parts Revved Up Their LinkedIn Presence
            </h2>

            <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-4">
              Strategic social media positioning for measurable business impact.
            </p>

            <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed">
              Our challenge? Reposition Atrac Engine Parts as a manufacturer of
              high-quality cylinder liners, pistons, and engine valves—not just
              a trader—through LinkedIn.
            </p>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-6">
            <div className="rounded-[28px] overflow-hidden shadow-lg">
              <img
                src="/impulse-website/Atrac Engine Parts.png"
                alt="Atrac Engine Parts branded packaging"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ================= CHALLENGE ================= */}
        <div className="space-y-10">
          <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[28px] md:text-[34px]">
            The Challenge
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#F6F6FB] rounded-[20px] p-6 border border-[#E4E4F0]">
              <h4 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#030019] text-[18px] mb-2">
                Breaking the Trader Perception
              </h4>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[14px] leading-relaxed">
                Stakeholders saw Atrac Engine Parts as a{" "}
                <span className="font-semibold">distributor</span>, not a{" "}
                <span className="font-semibold">manufacturer</span>. We needed
                to showcase production capabilities and innovation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F6F6FB] rounded-[20px] p-6 border border-[#E4E4F0]">
              <h4 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#030019] text-[18px] mb-2">
                Low Engagement Market
              </h4>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[14px] leading-relaxed">
                B2B automotive brands typically see only{" "}
                <span className="font-semibold">2–3% engagement</span> on
                LinkedIn. We needed to exceed this benchmark.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F6F6FB] rounded-[20px] p-6 border border-[#E4E4F0]">
              <h4 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#030019] text-[18px] mb-2">
                Manufacturing Excellence
              </h4>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[14px] leading-relaxed">
                Earlier content focused only on{" "}
                <span className="font-semibold">products and engineering</span>.
                We had to highlight precision manufacturing processes and
                behind-the-scenes expertise.
              </p>
            </div>
          </div>

          {/* Factory Image */}
          <div className="rounded-[28px] overflow-hidden shadow-lg">
            <img
              src="/impulse-website/atract-indsutry.png"
              alt="Atrac Engine Parts manufacturing line"
              className="w-full h-[320px] md:h-[420px] lg:h-[460px] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* ================= OUR GAME PLAN ================= */}
        <div className="space-y-8">
          <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[28px] md:text-[34px]">
            Our Game Plan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Content Repositioning */}
            <div className="bg-white rounded-[20px] border border-[#E4E4F0] p-5 shadow-sm">
              <p className="text-xs text-[#543d98] font-semibold mb-1 tracking-[0.08em] uppercase">
                01
              </p>
              <h4 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#030019] text-[18px] mb-2">
                Content Repositioning
              </h4>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[14px] leading-relaxed">
                Shifted from product-centric posts to{" "}
                <span className="font-semibold">behind-the-scenes</span>{" "}
                manufacturing insights with the{" "}
                <span className="font-semibold">#BehindTheProduct</span> series.
              </p>
            </div>

            {/* Format Optimization */}
            <div className="bg-white rounded-[20px] border border-[#E4E4F0] p-5 shadow-sm">
              <p className="text-xs text-[#543d98] font-semibold mb-1 tracking-[0.08em] uppercase">
                02
              </p>
              <h4 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#030019] text-[18px] mb-2">
                Format Optimization
              </h4>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[14px] leading-relaxed">
                Increased use of{" "}
                <span className="font-semibold">video</span>,{" "}
                <span className="font-semibold">carousels</span>, and{" "}
                <span className="font-semibold">case studies</span> to showcase
                engineering expertise and factory operations.
              </p>
            </div>

            {/* Data Driven Posting */}
            <div className="bg-white rounded-[20px] border border-[#E4E4F0] p-5 shadow-sm">
              <p className="text-xs text-[#543d98] font-semibold mb-1 tracking-[0.08em] uppercase">
                03
              </p>
              <h4 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#030019] text-[18px] mb-2">
                Data-Driven Posting
              </h4>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[14px] leading-relaxed">
                Refined posting schedule based on engagement data with structured
                storytelling and clear CTAs.
              </p>
            </div>

            {/* Strategic Benchmarking */}
            <div className="bg-white rounded-[20px] border border-[#E4E4F0] p-5 shadow-sm">
              <p className="text-xs text-[#543d98] font-semibold mb-1 tracking-[0.08em] uppercase">
                04
              </p>
              <h4 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#030019] text-[18px] mb-2">
                Strategic Benchmarking
              </h4>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[14px] leading-relaxed">
                Focused on conversations and inbound inquiries using polls,
                Q&As, and expert insights.
              </p>
            </div>
          </div>
        </div>

        {/* ================= KEY RESULTS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Metrics */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[28px] md:text-[34px]">
              Key Results
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* 11K+ Impressions */}
              <div className="bg-[#F6F6FB] rounded-[20px] p-6 border border-[#E4E4F0]">
                <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-bold text-[28px] md:text-[32px] mb-1">
                  11K+
                </p>
                <p className="text-[14px] font-semibold text-[#4B4B5C] mb-1">
                  Impressions
                </p>
                <p className="text-[13px] text-[#6B6B7A]">
                  Strong performance for a B2B manufacturing brand in a niche
                  market.
                </p>
              </div>

              {/* 8.3% Engagement */}
              <div className="bg-[#F6F6FB] rounded-[20px] p-6 border border-[#E4E4F0]">
                <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-bold text-[28px] md:text-[32px] mb-1">
                  8.3%
                </p>
                <p className="text-[14px] font-semibold text-[#4B4B5C] mb-1">
                  Engagement Rate
                </p>
                <p className="text-[13px] text-[#6B6B7A]">
                  Exceeding the industry benchmark of 2–3% for B2B automotive
                  companies.
                </p>
              </div>

              {/* 3.4K+ Clicks */}
              <div className="bg-[#F6F6FB] rounded-[20px] p-6 border border-[#E4E4F0]">
                <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-bold text-[28px] md:text-[32px] mb-1">
                  3.4K+
                </p>
                <p className="text-[14px] font-semibold text-[#4B4B5C] mb-1">
                  Clicks
                </p>
                <p className="text-[13px] text-[#6B6B7A]">
                  Demonstrating high content relevance and audience interest.
                </p>
              </div>

              {/* 2K+ Reactions */}
              <div className="bg-[#F6F6FB] rounded-[20px] p-6 border border-[#E4E4F0]">
                <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-bold text-[28px] md:text-[32px] mb-1">
                  2K+
                </p>
                <p className="text-[14px] font-semibold text-[#4B4B5C] mb-1">
                  Reactions
                </p>
                <p className="text-[13px] text-[#6B6B7A]">
                  With 200+ comments indicating improved brand perception.
                </p>
              </div>
            </div>
          </div>

          {/* Engine Graphic */}
          <div className="lg:col-span-6">
            <div className="rounded-[28px] overflow-hidden shadow-lg">
              <img
                src="/impulse-website/atract-manifacturing.png"
                alt="Engine cutaway showing internal components"
                className="w-full h-[320px] md:h-[420px] lg:h-[460px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ================= TOP CONTENT & IMPACT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Top Performing Content */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[24px] md:text-[28px]">
              Top Performing Content
            </h3>

            <ul className="space-y-4">
              <li className="bg-white rounded-[16px] border border-[#E4E4F0] p-5">
                <p className="text-xs text-[#543d98] font-semibold mb-1 uppercase tracking-[0.08em]">
                  Product Video
                </p>
                <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[15px] mb-1">
                  79.5% Engagement
                </p>
                <p className="text-[13px] text-[#6B6B7A]">
                  Showcasing engineering expertise through visual storytelling.
                </p>
              </li>

              <li className="bg-white rounded-[16px] border border-[#E4E4F0] p-5">
                <p className="text-xs text-[#543d98] font-semibold mb-1 uppercase tracking-[0.08em]">
                  AAPEX Event Highlight
                </p>
                <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[15px] mb-1">
                  42.7% Engagement
                </p>
                <p className="text-[13px] text-[#6B6B7A]">
                  Strengthened industry leadership positioning with strong
                  impressions.
                </p>
              </li>

              <li className="bg-white rounded-[16px] border border-[#E4E4F0] p-5">
                <p className="text-xs text-[#543d98] font-semibold mb-1 uppercase tracking-[0.08em]">
                  Behind-the-Scenes
                </p>
                <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[15px] mb-1">
                  8.3% Engagement
                </p>
                <p className="text-[13px] text-[#6B6B7A]">
                  Revealing manufacturing processes and technical expertise.
                </p>
              </li>
            </ul>
          </div>

          {/* Impact */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[24px] md:text-[28px]">
              The Impact
            </h3>

            <div className="space-y-4">
              <div className="bg-[#F6F6FB] rounded-[16px] p-5 border border-[#E4E4F0]">
                <p className="text-xs text-[#543d98] font-semibold uppercase tracking-[0.08em] mb-1">
                  01
                </p>
                <p className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#030019] text-[16px] mb-1">
                  Transformed Perception
                </p>
                <p className="text-[13px] text-[#6B6B7A]">
                  Atrac is now recognized for manufacturing leadership—not just
                  trading.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-[16px] p-5 border border-[#E4E4F0]">
                <p className="text-xs text-[#543d98] font-semibold uppercase tracking-[0.08em] mb-1">
                  02
                </p>
                <p className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#030019] text-[16px] mb-1">
                  Industry Benchmark Success
                </p>
                <p className="text-[13px] text-[#6B6B7A]">
                  Outperformed standard B2B engagement metrics on LinkedIn.
                </p>
              </div>

              <div className="bg-[#F6F6FB] rounded-[16px] p-5 border border-[#E4E4F0]">
                <p className="text-xs text-[#543d98] font-semibold uppercase tracking-[0.08em] mb-1">
                  03
                </p>
                <p className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#030019] text-[16px] mb-1">
                  Strengthened Credibility
                </p>
                <p className="text-[13px] text-[#6B6B7A]">
                  Built stakeholder trust and recognition with consistent,
                  expert-led content.
                </p>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};
