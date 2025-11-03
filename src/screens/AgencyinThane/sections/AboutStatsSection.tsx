"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * AboutStatsSection – matches the shared design
 * Left: Heading + body + CTA
 * Right: 2x2 counters with separators + flip digits
 */

// ---- useInView: starts animation once visible (client-only useEffect)
function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, options);
    obs.observe(node);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView } as const;
}

// ---- FlipDigit: vertical 0..9 list that slides to the target
const digits = Array.from({ length: 10 }, (_, i) => String(i));

function FlipDigit({
  digit,
  heightClass = "h-16",
  textClass = "text-6xl font-black",
  delayMs = 0,
}: {
  digit: number;
  heightClass?: string;
  textClass?: string;
  delayMs?: number;
}) {
  return (
    <div className={`relative ${heightClass} overflow-hidden inline-flex`} aria-hidden>
      <div
        className="flex flex-col will-change-transform"
        style={{
          transform: `translateY(-${digit * 100}%)`,
          transition: `transform 900ms cubic-bezier(0.2, 0.8, 0.2, 1) ${delayMs}ms`,
        }}
      >
        {digits.map((d) => (
          <div key={d} className={`flex items-center ${heightClass}`}>
            <span className={`${textClass} leading-none tracking-tight`}>{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- FlipNumber: splits value into columns + suffix (K, M+)
function FlipNumber({
  value,
  suffix,
  className = "",
  digitHeightClass = "h-16",
  digitTextClass = "text-6xl font-black",
}: {
  value: number;
  suffix?: string;
  className?: string;
  digitHeightClass?: string;
  digitTextClass?: string;
}) {
  const str = useMemo(() => String(value), [value]);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4, rootMargin: "0px 0px -10% 0px" });

  return (
    <div ref={ref} className={`flex items-end gap-1 ${className}`}>
      {str.split("").map((ch, idx) => (
        <FlipDigit
          key={`${ch}-${idx}`}
          digit={inView ? Number(ch) : 0}
          heightClass={digitHeightClass}
          textClass={digitTextClass}
          delayMs={idx * 120}
        />
      ))}
      {suffix ? <span className={`${digitTextClass} leading-none ml-1`}>{suffix}</span> : null}
    </div>
  );
}

const PURPLE = "#6c43c4";

function AboutStatsSection(): JSX.Element {
  const stats = [
    { value: 200, suffix: "K", sub: "Keywords ranked on first\npage of Google" },
    { value: 10, suffix: "M+", sub: "Cumulative website visits\nfor clients per month" },
    { value: 5, suffix: "M+", sub: "Avg. organic engagements on\nsocial for clients per month" },
    { value: 100, suffix: "M+", sub: "cumulative INR revenue\ncollected for clients per month" },
  ];

  return (
    <section className="relative mx-auto max-w-6xl md:max-w-7xl rounded-[32px] lg:rounded-[40px] bg-white shadow-sm ring-1 ring-black/5 px-6 py-8 md:px-12 md:py-12 lg:px-16 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left copy */}
        <div className="max-w-xl">
          <p className="text-slate-900/80 text-base md:text-lg font-semibold">Know Your</p>
          <h2
            className="text-[34px] leading-[1.15] sm:text-[40px] md:text-[48px] lg:text-[52px] font-black tracking-tight"
            style={{ color: PURPLE }}
          >
            Digital Marketing Agency
          </h2>

          <p className="mt-6 text-slate-700 text-[15px] md:text-[17px] leading-7 md:leading-8">
            We are a Mumbai–based 360° digital marketing agency, a family of go-getters who love creating brands and
            telling stories. Our team is rightfully an extension of your business, helping you find your unique voice,
            redefine your messaging, and stir conversations that resonate with your audience.
          </p>

          <p className="mt-5 text-slate-700 text-[15px] md:text-[17px] leading-7 md:leading-8">
            What makes us one of the top digital marketing companies? It’s the way we marry creativity, strategy, and
            client relationship to deliver results you can data-check and rely on because, for us, the idea is simple:
            We grow when you grow.
          </p>

          <button
            type="button"
            className="mt-7 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-white text-sm md:text-[15px] font-semibold shadow-sm focus:outline-none focus-visible:ring-2"
            style={{ backgroundColor: PURPLE }}
          >
            Connect Now
            <span aria-hidden className="inline-block rotate-[-35deg]">↷</span>
          </button>
        </div>

        {/* Right: stats grid with separators */}
        <div className="relative grid grid-cols-2 gap-0 bg-white self-center">
          {/* separators */}
          <div className="pointer-events-none absolute inset-0 hidden sm:block">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200" />
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200" />
          </div>

          {/* cells */}
          {stats.map((item, idx) => (
            <div key={idx} className="px-6 py-8 md:px-8 md:py-10">
              <FlipNumber
                value={item.value}
                suffix={item.suffix}
                digitHeightClass="h-16"
                digitTextClass="text-6xl lg:text-7xl font-black"
                className=""
              />
              <p className="mt-2 whitespace-pre-line text-slate-500 text-xs md:text-sm leading-5">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutStatsSection;
export { AboutStatsSection };
