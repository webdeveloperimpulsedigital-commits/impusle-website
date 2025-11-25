// src/pages/case-studies/Grasim/sections/BrandVisionSection.tsx
import React, { useEffect, useRef, useState } from "react";

export const BrandVisionSection = (): JSX.Element => {
  // ================== IMPACT COUNTERS ==================
  const [metrics, setMetrics] = useState({
    reachM: 0,        // 0 -> 1.9 (M)
    engagementsK: 0,  // 0 -> 139 (K)
    engagementRate: 0, // 0 -> 5.8 (%)
    reactionsK: 0,    // 0 -> 35 (K)
  });

  const numbersRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);
  const rafId = useRef<number | null>(null);

  const animateNumber = (
    target: number,
    setter: (value: number) => void,
    duration = 1200,
    decimals = 0
  ) => {
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const valueRaw = target * eased;
      const factor = Math.pow(10, decimals);
      const value =
        decimals > 0
          ? Math.round(valueRaw * factor) / factor
          : Math.floor(valueRaw);

      setter(value);

      if (progress < 1) {
        rafId.current = requestAnimationFrame(tick);
      }
    };

    rafId.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;

        // 1.9M+ reach
        animateNumber(1.9, (v) =>
          setMetrics((m) => ({ ...m, reachM: v }))
        , 1400, 1);

        // 139K+ engagements
        animateNumber(139, (v) =>
          setMetrics((m) => ({ ...m, engagementsK: v }))
        , 1200);

        // 5.8% engagement rate
        animateNumber(5.8, (v) =>
          setMetrics((m) => ({ ...m, engagementRate: v }))
        , 1000, 1);

        // 35K+ reactions & comments
        animateNumber(35, (v) =>
          setMetrics((m) => ({ ...m, reactionsK: v }))
        , 1100);
      },
      { threshold: 0.4 }
    );

    if (numbersRef.current) observer.observe(numbersRef.current);

    return () => {
      observer.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section
      className="w-full bg-[#F6F6FB] py-16 lg:py-24"
      id="sec-border"
      data-section="brand-vision"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 space-y-20">
        {/* ================= HERO ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            {/* <p className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-medium text-[16px] md:text-[18px] mb-3 uppercase tracking-wide">
              LinkedIn Case Study
            </p> */}
            <h1 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-bold text-[32px] md:text-[40px] lg:text-[46px] leading-tight mb-4">
              Elevating Grasim Pulp and Fibre&apos;s LinkedIn Presence
            </h1>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B57] text-[15px] md:text-[17px] leading-relaxed max-w-xl">
              At <span className="font-semibold">Impulse Digital</span>, we
              transformed Grasim Pulp and Fibre&apos;s LinkedIn presence,
              driving measurable impact and setting new industry benchmarks.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-[28px] overflow-hidden shadow-lg">
              <img
                src="/impulse-website/Grasim Pulp and Fibre.png"
                alt="Grasim Pulp and Fibre LinkedIn visual"
                className="w-full h-[260px] md:h-[340px] lg:h-[380px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ================= CHALLENGE ================= */}
        <div>
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-bold text-[26px] md:text-[32px] mb-6">
            The Challenge
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Increase engagement beyond the industry standard of 2–3%.",
              "Drive meaningful interactions through reactions, comments, and shares.",
              "Maximize impressions to strengthen the company’s position as a thought leader.",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-[#E5E7F0] p-6 flex items-start gap-4"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#ECE9F8] text-[#543d98] font-bold text-lg">
                  {index + 1}
                </div>
                <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B57] text-[15px] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= STRATEGY ================= */}
        <div>
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-bold text-[26px] md:text-[32px] mb-6">
            The Strategy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Content Optimization",
                desc: "Leveraged audience insights to craft posts aligned with user behaviour, peak times, and trending topics.",
              },
              {
                title: "Engagement-First Framework",
                desc: "Moved beyond standard corporate updates to deliver narratives that invite discussion and interaction.",
              },
              {
                title: "Performance Benchmarking",
                desc: "Measured every post against industry best practices to consistently outperform LinkedIn norms.",
              },
              {
                title: "Strategic CTAs",
                desc: "Structured calls-to-action designed to drive clicks, shares, and meaningful engagement.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl border border-[#E5E7F0] p-6 shadow-sm"
              >
                <h3 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-semibold text-[18px] mb-2">
                  {card.title}
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B57] text-[14px] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= IMPACT IN NUMBERS ================= */}
        <div ref={numbersRef}>
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-bold text-[26px] md:text-[32px] mb-6">
            The Impact in Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Reach */}
            <div className="bg-white rounded-2xl border border-[#E5E7F0] p-6 text-center shadow-sm">
              <div className="[font-family:'DM_Sans',Helvetica] text-[#543d98] text-[32px] md:text-[40px] font-bold mb-2">
                {metrics.reachM.toFixed(1)}M+
              </div>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B57] text-[14px] leading-relaxed">
                A 67% higher reach than typical B2B brand performance on
                LinkedIn.
              </p>
            </div>

            {/* Impressions / Engagements */}
            <div className="bg-white rounded-2xl border border-[#E5E7F0] p-6 text-center shadow-sm">
              <div className="[font-family:'DM_Sans',Helvetica] text-[#543d98] text-[32px] md:text-[40px] font-bold mb-2">
                {Math.floor(metrics.engagementsK)}K+
              </div>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B57] text-[14px] leading-relaxed">
                Demonstrating strong audience interest and high content
                relevance.
              </p>
            </div>

            {/* Engagement Rate */}
            <div className="bg-white rounded-2xl border border-[#E5E7F0] p-6 text-center shadow-sm">
              <div className="[font-family:'DM_Sans',Helvetica] text-[#543d98] text-[32px] md:text-[40px] font-bold mb-2">
                {metrics.engagementRate.toFixed(1)}%
              </div>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B57] text-[14px] leading-relaxed">
                More than double the industry standard of 2–3% engagement.
              </p>
            </div>

            {/* Reactions & Comments */}
            <div className="bg-white rounded-2xl border border-[#E5E7F0] p-6 text-center shadow-sm">
              <div className="[font-family:'DM_Sans',Helvetica] text-[#543d98] text-[32px] md:text-[40px] font-bold mb-2">
                {Math.floor(metrics.reactionsK)}K+
              </div>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B57] text-[14px] leading-relaxed">
                34,000+ likes and 1,300+ comments — strong engagement from the
                target audience.
              </p>
            </div>
          </div>
        </div>

        {/* ================= TOP PERFORMING CONTENT ================= */}
        <div>
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-bold text-[26px] md:text-[32px] mb-6">
            Top Performing Content Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: "959K",
                label: "Record Impressions",
                desc: "On a single post, setting a benchmark for content reach.",
              },
              {
                stat: "31%",
                label: "Engagement Rate",
                desc: "On leadership-driven content, far above standard benchmarks.",
              },
              {
                stat: "29%",
                label: "Click-Through Rate",
                desc: "Showcasing a strategy that not only grabs attention but drives action.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl border border-[#E5E7F0] p-6 shadow-sm text-center"
              >
                <div className="[font-family:'DM_Sans',Helvetica] text-[#543d98] text-[32px] md:text-[40px] font-bold mb-1">
                  {item.stat}
                </div>
                <div className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-semibold text-[16px] mb-2">
                  {item.label}
                </div>
                <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B57] text-[14px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= JOURNEY IN BRIEF ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative rounded-[28px] overflow-hidden shadow-lg">
              <img
                src="/impulse-website/journey-dartboard.png"
                alt="Target representing performance goals"
                className="w-full h-[260px] md:h-[340px] lg:h-[380px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-bold text-[26px] md:text-[32px] mb-6">
              The Journey in Brief
            </h2>

            <div className="space-y-6">
              {[
                "Proven engagement strategies that outperform industry averages.",
                "Data-backed content planning for maximum impact.",
                "Consistent performance that positions brands as industry leaders.",
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#ECE9F8] text-[#543d98] font-bold">
                    {index + 1}
                  </div>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B57] text-[15px] leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
