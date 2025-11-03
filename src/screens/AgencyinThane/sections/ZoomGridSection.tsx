// ZoomGridSection.tsx
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ⬇️ Import your grid section
import { CaseStudiesGrid } from "../CaseStudiesGrid/CaseStudiesGrid"; // <-- change path as needed

gsap.registerPlugin(ScrollTrigger);

export const ZoomGridSection = (): JSX.Element => {
  const gridWrapRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const tileRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    const gridWrap = gridWrapRef.current;
    const grid1 = gridRef.current;
    const tile = tileRef.current;
    const video = videoRef.current;
    if (!gridWrap || !grid1 || !tile || !video) return;

    const others = Array.from(
      grid1.querySelectorAll<HTMLElement>("[data-grid-item]")
    ).filter((el) => el !== tile);

    const xFn = () => {
      const r = tile.getBoundingClientRect();
      return window.innerWidth / 2 - (r.left + r.width / 2);
    };
    const yFn = () => {
      const r = tile.getBoundingClientRect();
      return window.innerHeight / 2 - (r.top + r.height / 2);
    };
    const scaleFn = () => {
      const r = tile.getBoundingClientRect();
      return Math.max(window.innerWidth / r.width, window.innerHeight / r.height);
    };

    gsap.set(tile, { willChange: "transform", transformOrigin: "center center" });
    gsap.set(video, { willChange: "transform", transformOrigin: "center center" });

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: gridWrap,
        start: "top top",
        end: "+=760%",          // keep your desktop effect
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        // markers: true,
      },
    });

    tl.to(others, { opacity: 0.15, duration: 0.2 }, 0)
      .to(
        tile,
        { x: xFn, y: yFn, scale: scaleFn, borderRadius: 0, invalidateOnRefresh: true },
        0
      )
      .to(video, { scale: () => 1.05, invalidateOnRefresh: true }, 0.1)
      .to(grid1, { opacity: 0, duration: 0.2 }, 0.95);
    }, gridWrapRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="page bg-gray pt-8 md:pt-16">
      {/* ===== ZOOM SECTION ===== */}
      <section className="" id="zoom-grid-section">
        <div className="max-w-[1290px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 md:mb-16">
            <div className="flex flex-col items-start mb-6 lg:mb-0">
              <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-xl md:text-2xl lg:text-[34px] mb-2">
                Our Work 
              </h2>
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-2xl md:text-3xl lg:text-[52px]">
                Tells the Story 
              </h3>
            </div>

            <div className="hidden lg:block">
              <img
                className="w-[120px] h-[120px] animate-spin"
                alt="Animated Logo"
                src="/impulse-website/logo.svg"
                style={{
                  animationDuration: "8s",
                  filter:
                    "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                }}
              />
            </div>
          </div>

          <div className="mb-8 md:mb-16">
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl">
              Every campaign we craft isn’t just marketing; it’s a story lived by our clients and loved by their audiences. From sparking conversations to building communities, our results aren’t numbers on a sheet their experiences that last. Ready for your story to be heard? 
            </p>
          </div>
        </div>

        <div className="grid-wrap" ref={gridWrapRef}>
          <div className="grid1" ref={gridRef}>
            {/* Row 1 */}
            <div className="tile" data-grid-item>
              <img src="/impulse-website/Pay-Per-Click.jpg" alt="img1" />
            </div>

            {/* VIDEO (ZOOM TARGET) */}
            <div className="tile video" data-grid-item id="zoom-tile" ref={tileRef}>
              <video id="zoom-video" ref={videoRef} autoPlay muted loop playsInline>
                <source
                  src="https://impulsedigital.co.in/impulse-website/sample-video.webm"
                  type="video/webm"
                />
              </video>
            </div>

            <div className="tile" data-grid-item>
              <img src="https://impulsedigital.co.in/impulse-website/project-1-jpg.png" alt="img3" />
            </div>

            {/* Row 2 */}
            <div className="tile" data-grid-item>
              <img src="https://impulsedigital.co.in/impulse-website/project-1-jpg.png" alt="img4" />
            </div>
            <div className="tile" data-grid-item>
              <img src="https://impulsedigital.co.in/impulse-website/project-1-jpg.png" alt="img5" />
            </div>
            <div className="tile" data-grid-item>
              <img src="https://impulsedigital.co.in/impulse-website/project-1-jpg.png" alt="img6" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEXT SECTION: your CaseStudiesGrid ===== */}
      <CaseStudiesGrid />

      {/* Scoped styles for the zoom section only (to avoid affecting CaseStudiesGrid) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
:root { --gap: 16px; --radius: 12px; }
* { box-sizing: border-box; margin: 0; padding: 0; }

.page { min-height: 200vh; }

/* ⬇️ Scope .wrap to the zoom section only */
#zoom-grid-section.wrap { position: relative; overflow: visible; padding: 6vh 0vw; }

#zoom-grid-section .grid-wrap { position: relative; overflow: visible; max-width: 100%; margin: 0 auto; }

/* Desktop: 3 columns */
#zoom-grid-section .grid1 { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--gap); }

#zoom-grid-section .tile {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius);
  aspect-ratio: 4 / 3;
  background: #ddd;
  transform-origin: center center;
}
#zoom-grid-section .tile img, 
#zoom-grid-section .tile video {
  width: 100%; height: 100%;
  object-fit: cover; object-position:center; display: block;
}

/* keep zooming video above others; allow wheel/scroll to pass through */
#zoom-grid-section .tile.video { position: relative; z-index: 10; }
#zoom-grid-section .tile.video video { pointer-events: none; }

/* Optional desktop corner styling */
#zoom-grid-section .tile:first-child { border-radius: 0 var(--radius) var(--radius) 0; }
#zoom-grid-section .tile:nth-child(3) { border-radius: var(--radius) 0 0 var(--radius); }
#zoom-grid-section .tile:nth-child(4) { border-radius: 0 var(--radius) var(--radius) 0; }
#zoom-grid-section .tile:nth-child(6) { border-radius: var(--radius) 0 0 var(--radius); }

/* Responsive */
@media (max-width: 1024px) {
  #zoom-grid-section .grid1 { grid-template-columns: repeat(2, 1fr); }
  #zoom-grid-section .tile.video { grid-column: 1 / -1; }
  #zoom-grid-section .tile:first-child,
  #zoom-grid-section .tile:nth-child(3),
  #zoom-grid-section .tile:nth-child(4),
  #zoom-grid-section .tile:nth-child(6) { border-radius: var(--radius); }
}
@media (max-width: 640px) {
  #zoom-grid-section.wrap { padding: 4vh 3vw; }
  #zoom-grid-section .grid1 { grid-template-columns: 1fr; gap: 12px; }
  #zoom-grid-section .tile { border-radius: 10px; }
  #zoom-grid-section .tile.video { grid-column: 1; }
}
          `,
        }}
      />
    </div>
  );
};

