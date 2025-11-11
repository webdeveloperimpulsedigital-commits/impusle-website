import React, { useMemo } from "react";

const WALL_IMAGES = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1600&auto=format&fit=crop",
];

const Lane: React.FC<{ images: string[]; direction: "ltr" | "rtl"; speedSec?: number }> = ({
  images,
  direction,
  speedSec = 36,
}) => {
  const loop = useMemo(() => [...images, ...images], [images]);

  return (
    <div className="relative w-full overflow-hidden group">
      <ul
        className={`
          flex gap-8 w-max
          ${direction === "ltr" ? "animate-marquee-ltr" : "animate-marquee-rtl"}
          group-hover:[animation-play-state:paused]
        `}
        style={{ animationDuration: `${speedSec}s` }}
      >
        {loop.map((src, i) => (
          <li key={i} className="shrink-0">
            <div
              className={`
                relative overflow-hidden rounded-[32px] shadow-lg
                w-[70vw] sm:w-[50vw] md:w-[35vw] lg:w-[26vw] xl:w-[22vw]
                h-[70vw] sm:h-[50vw] md:h-[40vw] lg:h-[30vw] xl:h-[26vw]
                ${i % 2 === 0 ? "mt-6" : "-mt-6"}
                transition-transform duration-300 hover:scale-[1.05]
              `}
            >
              <img
                src={src}
                alt={`Impulse wall ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover rounded-[32px]"
                loading="lazy"
              />
            </div>
          </li>
        ))}
      </ul>

      {/* Keyframes for auto-scroll */}
      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-ltr { animation: marquee-ltr linear infinite; }
        .animate-marquee-rtl { animation: marquee-rtl linear infinite; }
      `}</style>
    </div>
  );
};

export const CompanyCultureSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-white py-20 lg:pt-28 lg:pb-32"
      data-section="wall-of-impulse"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 mb-8">
        <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl lg:text-4xl">
          Wall of Impulse
        </h3>
        <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] max-w-3xl mt-2">
          A visual flow of moments — two rows sliding in opposite directions,
          each image carrying the pulse of creativity, teamwork, and fun.
        </p>
      </div>

      {/* Top row - moves left to right */}
      <Lane images={WALL_IMAGES} direction="ltr" speedSec={45} />

      <div className="h-12" />

      {/* Bottom row - moves right to left */}
      <Lane images={[...WALL_IMAGES].reverse()} direction="rtl" speedSec={38} />
    </section>
  );
};
