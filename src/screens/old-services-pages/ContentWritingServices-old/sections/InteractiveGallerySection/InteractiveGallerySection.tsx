// ... keep your imports and desktop code the same
import React, { useRef, useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
 
export const InteractiveGallerySection = (): JSX.Element => {
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
 
  // MOBILE SLIDER STATE (with peek)
  const [slide, setSlide] = useState(0);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [containerW, setContainerW] = useState(0);
 
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);
  const SLIDE_DURATION = 280;
  const SWIPE_THRESHOLD = 50;
 
  // Visual tuning: how much of next/prev you want to show
  const PEEK = 24; // px of “peek” on each side
  const GAP = 12;  // space between slides
 
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const measure = () => setContainerW(wrapRef.current?.clientWidth ?? 0);
    checkMobile();
    measure();
    window.addEventListener("resize", () => {
      checkMobile();
      measure();
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);
 
  const galleryItems = [
    { id: 1, image: "/impulse-website/demo-1.jpg", alt: "Person working on brand strategy with digital icons and laptop" },
    { id: 2, image: "/impulse-website/demo-2.jpg", alt: "Hand holding smartphone with search interface and digital elements" },
    { id: 3, image: "/impulse-website/demo-3.jpg", alt: "Creative workspace with laptop, notebooks, and design materials" },
  ];
  const total = galleryItems.length;
 
  // Derived dimensions for the peeked layout
  const slideW = Math.max(0, containerW - 2 * PEEK); // each slide width
  const step = slideW + GAP;                          // distance from one slide center to next
 
  // Desktop handlers (unchanged behavior)
  const handlePanelHover = (i: number | null) => { if (!isMobile) setActivePanel(i); };
 
  // Slider helpers
  const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(n, max));
  const goTo = (i: number) => setSlide(clamp(i, 0, total - 1));
  const next = () => goTo(slide + 1);
  const prev = () => goTo(slide - 1);
 
  const applyTransform = (offsetPx: number) => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = `translateX(${offsetPx}px)`;
  };
 
  const centerOffsetFor = (index: number) => {
    // Track is left-aligned with left peek padding.
    // To center slide i, move left by i*step
    return -index * step;
  };
 
  // Touch handlers
  const onTouchStart: React.TouchEventHandler = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    if (trackRef.current) trackRef.current.style.transition = "none";
  };
 
  const onTouchMove: React.TouchEventHandler = (e) => {
    if (touchStartX.current == null) return;
    const currX = e.touches[0].clientX;
    touchDeltaX.current = currX - touchStartX.current;
    applyTransform(centerOffsetFor(slide) + touchDeltaX.current);
  };
 
  const onTouchEnd: React.TouchEventHandler = () => {
    if (trackRef.current) trackRef.current.style.transition = `transform ${SLIDE_DURATION}ms ease`;
    if (Math.abs(touchDeltaX.current) > SWIPE_THRESHOLD) {
      if (touchDeltaX.current < 0) next();
      else prev();
    } else {
      applyTransform(centerOffsetFor(slide));
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };
 
  useEffect(() => {
    if (!trackRef.current) return;
    trackRef.current.style.transition = `transform ${SLIDE_DURATION}ms ease`;
    applyTransform(centerOffsetFor(slide));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide, containerW]);
 
  return (
    <section className="w-full bg-gray py-16 lg:py-20 rounded-t-[40px] md:rounded-t-[60px]" data-section="interactive-gallery">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="md:mb-5 text-left">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">You're Still Here</p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
            That's the Power of Great Content
          </h2>
        </div>
 
        {/* Copy */}
        <div className="text-left mb-8">
          <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-base leading-relaxed">
            Think about it: the words you read on your screen weren't written out of the blue. No. Our team sat together,
            researched your search intent, crafted a draft, and then optimized it for you. That's the power of quality content…
          </p>
        </div>
 
        {/* CTA */}
        <div className="text-left mb-12">
          <Button className="h-[40px] md:h-[50px] bg-[#543d98] hover:bg-[#543d98]/90 rounded-xl px-4 md:px-6 py-2 md:py-3 gap-2">
            <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base">Connect Now</span>
            <img className="w-4 h-4" alt="Arrow" src="/impulse-website/button-icon.svg" />
          </Button>
        </div>
 
        {/* Gallery */}
        <div className="bg-gray">
          {/* Desktop (unchanged) */}
          <div className="hidden md:flex gap-8 h-[300px] lg:h-[210px]">
            {galleryItems.map((item, i) => (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-3xl border border-[#EAEAEA] cursor-pointer transition-all duration-300 ${
                  activePanel === i ? "flex-[3] shadow-lg" : activePanel !== null ? "flex-1 opacity-70" : "flex-1"
                }`}
                onMouseEnter={() => handlePanelHover(i)}
                onMouseLeave={() => handlePanelHover(null)}
                tabIndex={0}
                role="button"
              >
                <img src={item.image} alt={item.alt} className={`w-full h-full object-cover ${activePanel === i ? "scale-103" : "scale-100"}`} />
              </div>
            ))}
          </div>
 
          {/* Mobile with peeks */}
          <div className="block md:hidden">
            {/* Wrapper adds side peeks */}
            <div
              ref={wrapRef}
              className="relative overflow-hidden"
              style={{ paddingLeft: PEEK, paddingRight: PEEK }}
            >
              {/* Track */}
              <div
                ref={trackRef}
                className="flex items-stretch will-change-transform"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                // Prevent accidental vertical scroll locking on gentle diagonal swipes
                style={{ touchAction: "pan-y" as any }}
              >
                {galleryItems.map((item, i) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 overflow-hidden rounded-2xl border border-[#EAEAEA] bg-white"
                    style={{
                      width: slideW,
                      marginRight: i === total - 1 ? 0 : GAP,
                    }}
                  >
                    <div className="h-[250px]">
                      <img src={item.image} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
 
            {/* Controls + Dots */}
            <div className="mt-4 flex items-center justify-between">
              <button
                className="px-3 py-2 rounded-lg border border-[#EAEAEA] text-sm disabled:opacity-40"
                onClick={prev}
                disabled={slide === 0}
                aria-label="Previous"
              >
                ‹ Prev
              </button>
 
              <div className="flex items-center gap-2">
                {galleryItems.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all ${slide === i ? "w-5 bg-[#543d98]" : "w-2 bg-[#D1D5DB]"}`}
                  />
                ))}
              </div>
 
              <button
                className="px-3 py-2 rounded-lg border border-[#EAEAEA] text-sm disabled:opacity-40"
                onClick={next}
                disabled={slide === total - 1}
                aria-label="Next"
              >
                Next ›
              </button>
            </div>
          </div>
        </div>
      </div>
 
      {/* Small helpers */}
      <style>{`
        .scale-103 { transform: scale(1.03); }
        @media (prefers-reduced-motion: reduce) {
          * { transition-duration: .1s !important; animation-duration: .1s !important; }
        }
      `}</style>
    </section>
  );
};
 
 