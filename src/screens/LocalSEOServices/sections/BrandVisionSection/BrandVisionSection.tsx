import { useEffect, useRef, useState } from "react";

export const BrandVisionSection = (): JSX.Element => {
  const overlayText =
    "Turning nearby searches into real visits and loyal customers.";

  // ================== COUNTERS ==================
  const [counters, setCounters] = useState({
    first: 0,   // 300,000+
    second: 0,  // 40+
    third: 0,   // 95%
  });

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);
  const rafId = useRef<number | null>(null);

  // ---- Helper: animate a single counter with rAF + easing; resolves when done
  const animateCounter = (
    target: number,
    duration: number,
    onTick: (value: number) => void,
    options?: { decimals?: number }
  ) =>
    new Promise<void>((resolve) => {
      const start = performance.now();
      const decimals = options?.decimals ?? 0;

      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);

        let current = target * ease;

        if (decimals === 0) current = Math.floor(current);
        if (decimals > 0) {
          const factor = Math.pow(10, decimals);
          current = Math.round(current * factor) / factor;
        }

        onTick(current);

        if (t < 1) {
          rafId.current = requestAnimationFrame(tick);
        } else {
          onTick(target); // snap to final
          resolve();
        }
      };

      rafId.current = requestAnimationFrame(tick);
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Sequence: first -> second -> third
          await animateCounter(300000, 1200, (v) =>
            setCounters((c) => ({ ...c, first: v }))
          );

          await new Promise((r) => setTimeout(r, 100));

          await animateCounter(40, 1000, (v) =>
            setCounters((c) => ({ ...c, second: v }))
          );

          await new Promise((r) => setTimeout(r, 100));

          await animateCounter(95, 900, (v) =>
            setCounters((c) => ({ ...c, third: v }))
          );
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // ================== PROCESS (kept; hidden on mobile) ==================
  const steps = [
    {
      title: "Discovery and Research",
      description:
        "We begin by understanding your goals, audience, and tone, supported by keyword and market research to build performance-driven content",
    },
    {
      title: "Strategy and Structure",
      description:
        "We define messaging, map it to funnel stages, and create a clear structure and tone aligned with your objectives",
    },
    {
      title: "Creation and Optimization",
      description:
        "Our writers craft original, SEO optimized content that blends brand context, clarity, and engagement for maximum visibility",
    },
    {
      title: "Review and Performance",
      description:
        "Every piece goes through editorial checks and client review, followed by tracking visibility, engagement, and conversions to improve future content.",
    },
  ];

  const loopedSteps = [...steps, ...steps];

  const mobileRows = steps.reduce<string[][]>((rows, _, i) => {
    if (i % 2 === 0) rows.push(steps.slice(i, i + 2));
    return rows as any;
  }, [] as any);

  return (
    <section
      className="w-full bg-white lg:py-5 sm:py-8"
      id="sec-border"
      data-section="brand-vision"
      ref={sectionRef}
    >
      <div className="max-w-[1280px] mx-auto px-2 lg:px-5 sm:py-10">
        {/* Title */}
        <div className="mb-6 lg:mb-8 pt-10">
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px] ">
            Get Found. Get Chosen.
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight ">
           Get Customers Through Your Door.
          </h2>
        </div>

        {/* Image + Overlay + Counters */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start mb-6">
          {/* IMAGE */}
          <div className="lg:col-span-5 lg:w-[600px]">
            <div className="relative rounded-2xl overflow-hidden shadow-lg ">
              <img
                src="/impulse-website/local About service - 451 x 500.jpg"
                alt="SEO workspace"
                className="w-full sm:h-[400px] lg:h-[700px] object-cover"
              />
            </div>
          </div>

          {/* MOBILE OVERLAY TEXT */}
          <div
            className="block lg:hidden -mt-8 px-2 mt-0"
            style={{ marginTop: "-18%", zIndex: "999" }}
          >
            <div className="bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium text-[20px] leading-[20px] text-left p-7">
                {overlayText}
              </p>
            </div>
          </div>

          {/* STATS / COUNTERS */}
          <div className="lg:mt-[35%] lg:ml-[25%] mt-4 ml-[3%] mr-[3%] lg:col-span-7">
            <div className="relative h-[450px] lg:h-[400px] lg:w-[520px] sm:h-[500px]">
              {/* 300,000+ */}
              <div className="absolute top-6 left-0 text-center">
                <h3 className="[font-family:'Space Grotesk', sans-serif] text-[#543d98] text-4xl lg:text-6xl font-black leading-none mb-2 transition-all">
                  {Math.round(counters.first).toLocaleString()}
                  <span className="align-baseline text-2xl lg:text-4xl">+</span>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] leading-relaxed max-w-[250px] font-[400]">
                     local customers found businesses via Google search and Maps due to our Local SEO optimizations.
                  </p>
                </h3>
              </div>

              {/* 40+ */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 text-center mb-8">
                <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] text-4xl lg:text-6xl font-black leading-none mb-2">
                  {Math.round(counters.second)}
                  <span className="align-baseline text-2xl lg:text-4xl">+</span>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] leading-relaxed max-w-[250px] font-[400]">
                    local businesses saw increased calls, foot traffic, and appointment bookings thanks to our Local SEO services.
                  </p>
                </h3>
              </div>

              {/* 95% */}
              <div className="absolute bottom-6 left-0 text-center">
                <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] text-4xl lg:text-6xl font-black leading-none mb-2">
                  {Math.round(counters.third)}%
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[16px] leading-relaxed max-w-[250px] font-[400]">
                    of our local clients report a higher volume of calls, direction requests, and website visits from optimized GMB listings.
                  </p>
                </h3>
              </div>
            </div>
          </div>

          {/* DESKTOP CENTER OVERLAY (unchanged) */}
          <div className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-[700px] px-4 hidden lg:block">
            <div className="pointer-events-auto bg-white rounded-2xl p-5 lg:p-6">
              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[35px] lg:text:[34px] sm:leading-[20px] lg:leading-[42px] text-left">
                {overlayText}
              </p>
            </div>
          </div>
        </div>

        {/* Body copy */}
        <div className="text-left mb-12">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[12px] lg:text-[24px] text-[#030019]">
            We optimize your Google Business Profile, maps, and reviews to enhance your local presence. We ensure accuracy and consistency in your business information so customers trust what they see. Every optimization, from location keywords to citations, strengthens your local credibility. Our strategy connects you directly with people ready to visit or call. We track performance to help you grow within your community. With Impulse, your brand becomes a trusted name in every neighborhood.
          </p>
        </div>
      </div>

      {/* ---------- DESKTOP AUTO SCROLL (kept hidden) ---------- */}
      <div className="hidden opacity-0 pointer-events-none">
        <div className="absolute left-0 right-0 top-[35px] h-[2px] bg-[#EAEAEA] z-0" />
        <div className="overflow-hidden">
          <div className="steps-track flex gap-16 py-6 will-change-transform relative z-10">
            {loopedSteps.map((s, i) => (
              <div key={i} className="min-w-[260px] max-w-[300px] relative">
                <div className="absolute top-[9px] left-0 w-2 h-2 rounded-full bg-[#6B04FD]" />
                <div className="pt-10">
                  <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-[20px] mb-1">
                    {s.title}
                  </h3>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#666] text-[18px] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- MOBILE STATIC GRID (PROCESS) — HIDDEN ON MOBILE ---------- */}
      <div className="hidden md:hidden space-y-10 px-4 mb-14">
        {mobileRows.map((pair, rowIdx) => (
          <div key={rowIdx} className="relative">
            <div className="absolute left-0 right-0 top-[13px] h-[2px] bg-[#EAEAEA]" />
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              {pair.map((s, i) => (
                <div key={i} className="relative">
                  <div className="absolute top-[9px] left-0 w-2 h-2 rounded-full bg-[#6B04FD]" />
                  <div className="pt-10">
                    <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-[18px] leading-snug mb-1">
                      {s.title}
                    </h3>
                    <p className="[font-family:'DM_Sans',Helvetica] text-[#000] text-[14px] leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div><br></br><br></br>

      {/* optional animation CSS if you unhide steps later */}
      <style>{`
        @keyframes scroll-rtl {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .steps-track {
          animation: scroll-rtl 24s linear infinite;
        }
        .steps-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .steps-track { animation: none; transform: translateX(0); }
        }
        .mb-14{ marging-bottom: 40px; }
      `}</style>
    </section>
  );
};
