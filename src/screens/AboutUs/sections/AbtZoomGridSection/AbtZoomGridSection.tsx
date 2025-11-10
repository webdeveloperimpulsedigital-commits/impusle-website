import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AbtZoomGridSection = (): JSX.Element => {
  const gridWrapRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const tileRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Track screen size
  useEffect(() => {
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Ensure video plays
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const p = video.play();
      if (p !== undefined) p.catch(() => {/* autoplay blocked */});
      video.loop = true;
      video.muted = true;
      (video as any).playsInline = true;
    }
  }, []);

  // Desktop zoom/pin only (no change to your desktop behavior)
  useLayoutEffect(() => {
    if (!isLargeScreen) return;

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
        end: "+=460%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.to(others, { opacity: 0.15, duration: 0.2 }, 0)
      .to(
        tile,
        { x: xFn, y: yFn, scale: scaleFn, borderRadius: 0, invalidateOnRefresh: true },
        0
      )
      .to(video, { scale: 1.05, duration: 0.5, ease: "none" }, 0.1)
      .to(grid1, { opacity: 0, duration: 0.2 }, 0.95);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      tl.scrollTrigger?.kill();
      tl.kill();
      gsap.set([tile, video], { clearProps: "all" });
      gsap.set(others, { clearProps: "opacity" });
      gsap.set(grid1, { clearProps: "opacity" });
    };
  }, [isLargeScreen]);

  return (
    <>
      {/* ===== Desktop / Laptop (unchanged) ===== */}
      <div className="page bg-gray pt-8 md:pt-16 hidden lg:block" data-section="portfolio">
        <section id="zoom-grid-section">
          <div className="wrap-grid">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4 md:mb-1">
              <div className="flex flex-col items-start mb-4 lg:mb-0">
                <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-xl md:text-2xl lg:text-[34px] mb-5">
                  Together
                </h2>
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-2xl md:text-3xl lg:text-[52px] lg:mb-5">
                  We Create the Difference
                </h3>
              </div>
            </div>

            <div className="mb-8 md:mb-16">
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-sm md:text-base lg:text-[26px] xl:text[26px] sm:text-[13px] lg:leading-[40px] lg:w-6xl xl:w-7xl">
               At Impulse Digital, every idea is a team effort. From creative sparks to data-driven strategies, we collaborate, challenge, and cheer each other on to build brands that inspire. Because when great minds come together, difference isn’t just made - it’s created.
              </p>
            </div>
          </div>

          <div className="grid-wrap" ref={gridWrapRef}>
            <div className="grid1" ref={gridRef}>
              {/* Row 1 */}
              <div className="tile" data-grid-item>
                <img src="/impulse-website/12_Mastercard.jpg" alt="Project 1" />
              </div>

              {/* Center video tile */}
              <div className="tile video" data-grid-item id="zoom-tile" ref={tileRef}>
                <video
                  id="zoom-video"
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="auto"
                >
                  <source src="/impulse-website/impulse-video.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="tile" data-grid-item>
                <img src="/impulse-website/10_Dmart.jpg" alt="Project 3" />
              </div>

              {/* Row 2 */}
              <div className="tile" data-grid-item>
                <img src="/impulse-website/11_Emech.jpg" alt="Project 4" />
              </div>
              <div className="tile" data-grid-item>
                <img src="/impulse-website/12_HEM.jpg" alt="Project 5" />
              </div>
              <div className="tile" data-grid-item>
                <img src="/impulse-website/09_Automag.jpg" alt="Project 6" />
              </div>
            </div>
          </div>
        </section>

        {/* Desktop styles (unchanged) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
:root { --gap: 16px; --radius: 12px; }

.page { min-height: 200vh; }

#zoom-grid-section .grid-wrap { 
  position: relative; 
  overflow: visible; 
  max-width: 100%; 
  margin: 0 auto; 
  padding: 0 1rem;
}

/* Desktop grid */
#zoom-grid-section .grid1 { 
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  gap: 14px; 
  max-width: 1200px;
  margin: 0 auto;
}

#zoom-grid-section .tile {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius);
  aspect-ratio: 3 / 3;
  background: #ddd;
  transform-origin: center center;
}

#zoom-grid-section .tile img, 
#zoom-grid-section .tile video {
  width: 100%; 
  height: 100%;
  object-fit: cover; 
  object-position: center; 
  display: block;
}

#zoom-grid-section .tile.video { 
  position: relative; 
  z-index: 9999; 
}

#zoom-grid-section .tile.video video { 
  pointer-events: none; 
}

/* Tablet */
@media (max-width: 1024px) {
  #zoom-grid-section .grid1 { 
    grid-template-columns: repeat(2, 1fr); 
  }
  #zoom-grid-section .tile.video { 
    grid-column: 1 / -1; 
  }
}

/* Mobile */
@media (max-width: 640px) {
  #zoom-grid-section .grid-wrap { 
    padding: 0 1rem; 
  }
  #zoom-grid-section .grid1 { 
    grid-template-columns: 1fr; 
    gap: 12px; 
  }
  #zoom-grid-section .tile { 
    border-radius: 10px; 
  }
  #zoom-grid-section .tile.video { 
    grid-column: 1; 
  }
}

.wrap-grid{max-width:100%;margin:auto;position:relative;background:var(--bg);padding:0rem 6rem 0rem}
@media (max-width:980px){
  .wrap-grid{padding:0rem 1.2rem 0rem}
}
          `,
          }}
        />
      </div>

      {/* ===== Mobile / Tablet ONLY slider (new) ===== */}
      <section className="block lg:hidden w-full bg-white py-8" aria-label="Our Work Gallery">
      

        <div className="mobile-slider">
          {/* Slides: show a hint of the next one with 80% width cards */}
          <div className="mobile-slide">
            <img src="/impulse-website/12_Mastercard.jpg" alt="Mastercard Campaign" />
          </div>
          <div className="mobile-slide">
            <img src="/impulse-website/10_Dmart.jpg" alt="DMart Campaign" />
          </div>
          <div className="mobile-slide">
            <img src="/impulse-website/11_Emech.jpg" alt="Emech Project" />
          </div>
          <div className="mobile-slide">
            <img src="/impulse-website/12_HEM.jpg" alt="HEM Initiative" />
          </div>
          <div className="mobile-slide">
            <img src="/impulse-website/09_Automag.jpg" alt="Automag Project" />
          </div>
        </div>

        {/* Mobile slider styles */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
.mobile-slider{
  display:flex;
  overflow-x:auto;
  scroll-snap-type:x mandatory;
  -webkit-overflow-scrolling:touch;
  gap:12px;
  padding: 0 16px 6px;
}
.mobile-slider::-webkit-scrollbar{ height:6px; }
.mobile-slider::-webkit-scrollbar-thumb{ background:#d9d9d9; border-radius:4px; }

.mobile-slide{
  flex:0 0 80%;
  scroll-snap-align:start;
  border-radius:14px;
  overflow:hidden;
  box-shadow:0 10px 24px rgba(0,0,0,0.12);
  background:#f5f5f5;
}
.mobile-slide img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  aspect-ratio: 4 / 5;
}
            `,
          }}
        />
      </section>
    </>
  );
};
