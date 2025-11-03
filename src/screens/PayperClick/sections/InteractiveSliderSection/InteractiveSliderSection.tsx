import React, { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";

interface SlideData {
  id: number;
  image: string;
  alt: string;
  smallHeading: string;
  mainHeading: string;
  paragraph: string;
  clientName: string;
  tags: string[];
}

export const InteractiveSliderSection = (): JSX.Element => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Track desktop vs mobile (md breakpoint)
  const [isDesktop, setIsDesktop] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 768px)").matches
      : false
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handle = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    setIsDesktop(mq.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const slides: SlideData[] = [
    {
      id: 1,
      image: "/impulse-website/case study section 701 x 500 Mastercard 2.jpg",
      alt: "Person working on SEO strategy",
      smallHeading: "Case Studies",
      mainHeading: "Solutions to Solve Your Problems",
      paragraph:
        "One problem can have multiple solutions. But which one will help you get the results? Wait. Why are you stressing over it when we can take care of it? It's time we turn your search visibility into your biggest strength.",
      clientName: "Mastercard Inc.",
      tags: ["PRODUCT DESIGN", "BRANDING", "CREATIVE"],
    },
    {
      id: 2,
      image: "/impulse-website/case study section 701 x 500 Amazon 1.jpg",
      alt: "Hand holding smartphone with search interface",
      smallHeading: "Content Strategy",
      mainHeading: "Words That Drive Action",
      paragraph:
        "Every piece of content we create is designed with purpose. From blog posts that educate to landing pages that convert, we craft messaging that resonates with your audience and drives meaningful engagement.",
      clientName: "Amazon India",
      tags: ["CONTENT STRATEGY", "COPYWRITING", "DIGITAL"],
    },
    {
      id: 3,
      image: "/impulse-website/case study section 701 x 500 Ola Mobility 1.jpg",
      alt: "Creative workspace with laptop and design materials",
      smallHeading: "Brand Development",
      mainHeading: "Building Memorable Experiences",
      paragraph:
        "We don't just create brands; we build experiences that stick. Through strategic positioning and creative execution, we help your brand stand out and connect with your ideal customers.",
      clientName: "OLA Mobility",
      tags: ["BRAND STRATEGY", "DESIGN", "EXPERIENCE"],
    },
  ];

  const fixedSlide = slides[0];
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  const handleSlideChange = (newIndex: number) => {
    if (isTransitioning || newIndex === activeSlide) return;
    if (prefersReducedMotion) {
      setActiveSlide(newIndex);
      return;
    }
    setIsTransitioning(true);
    setActiveSlide(newIndex);
    setTimeout(() => setIsTransitioning(false), 450);
  };

  const goToPrevious = () => {
    const newIndex = activeSlide === 0 ? slides.length - 1 : activeSlide - 1;
    handleSlideChange(newIndex);
  };

  const goToNext = () => {
    const newIndex = activeSlide === slides.length - 1 ? 0 : activeSlide + 1;
    handleSlideChange(newIndex);
  };

  const currentSlide = slides[activeSlide];

  const getCardStyle = (index: number) => {
    const position = (index - activeSlide + slides.length) % slides.length;

    // Respect reduced motion: only show active
    if (prefersReducedMotion) {
      return { display: position === 0 ? "block" : "none" } as React.CSSProperties;
    }

    // Layered deck effect on BOTH mobile and desktop
    const base: React.CSSProperties = {
      transition: "transform 400ms ease, opacity 400ms ease, filter 400ms ease",
    };

    // Slightly smaller offsets on mobile so it fits the viewport
    const x0 = isDesktop ? 0 : -12;
    const x1 = isDesktop ? 24 : 12;
    const x2 = isDesktop ? 48 : 28;
    const scaleActive = isDesktop ? 1.1 : 0.90;
    const scaleBack = isDesktop ? 1.1 : 0.88;
    const mt1 = isDesktop ? 25 : 18;
    const mt2 = isDesktop ? 46 : 28;
    const h1 = isDesktop ? 455 : 380;
    const h2 = isDesktop ? 404 : 360;

    switch (position) {
      case 0:
        return { ...base, transform: `translateX(${x0}px) scale(${scaleActive})`, opacity: 1, zIndex: 30 };
      case 1:
        return {
          ...base,
          transform: `translateX(${x1}px) scale(${scaleBack})`,
          opacity: 0.8,
          zIndex: 20,
          height: h1,
          marginTop: mt1,
        };
      case 2:
        return {
          ...base,
          transform: `translateX(${x2}px) scale(${scaleBack})`,
          opacity: 0.7,
          zIndex: 10,
          height: h2,
          marginTop: mt2,
        };
      default:
        return { ...base, transform: `translateX(${x2 * 1.5}px)`, opacity: 0, zIndex: 0 };
    }
  };

  return (
    <section className="w-full bg-white py-12 lg:py-20" data-section="interactive-slider">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">

        {/* ===== MOBILE-ONLY: title + same layered slider (left content hidden) ===== */}
        <div className="block md:hidden">
          <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] leading-tight mb-4">
            <span className="text-[#030019] sm:text-[16px]">{currentSlide.smallHeading}</span>
            <br />
            <span className="font-bold text-[#543d98] text-[32px] sm:text-[26px]">
              {currentSlide.mainHeading}
            </span>
          </h2>

          <div className="relative h-[400px] overflow-visible">
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg"
                style={getCardStyle(i)}
              >
                <img src={slide.image} alt={slide.alt} className="block w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Optional mobile nav (kept commented to not change your UI)
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button onClick={goToPrevious} className="w-10 h-10 rounded-full border border-[#543d98] bg-white">
              <img src="/impulse-website/left-arrow.png" alt="Previous" className="w-4 h-4" />
            </Button>
            <Button onClick={goToNext} className="w-10 h-10 rounded-full bg-[#543d98]">
              <img src="/impulse-website/right-arrow.png" alt="Next" className="w-4 h-4" />
            </Button>
          </div>
          */}
        </div>
        {/* ===== END MOBILE-ONLY ===== */}

        {/* ===== DESKTOP/TABLET: original 50/50 grid (unchanged) ===== */}
        <div className="hidden md:grid md:grid-cols-2 gap-15 lg:gap-15 items-center">
          {/* LEFT CONTENT FIXED */}
          <div className="md:col-span-1 space-y-6">
            <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
              <span className="text-[#030019]  lg:text-[34px] sm:text-[16px]">
                {fixedSlide.smallHeading}
              </span>
              <br />
              <span className="font-bold text-[#543d98] lg:text-[49px] xl:text-[52px] md:text-[52px] sm:text-[26px]">
                {fixedSlide.mainHeading}
              </span>
            </h2>

            <p className="text-[#030019] text-base leading-relaxed mb-8">
              {fixedSlide.paragraph}
            </p>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <Button
                onClick={goToPrevious}
                onMouseEnter={() => setHoveredBtn("prev")}
                onMouseLeave={() => setHoveredBtn(null)}
                className="group w-12 h-12 rounded-full border-2 border-[#543d98] bg-white flex items-center justify-center group transition-all duration-300 hover:bg-[#f5f5f5] hover:border-[#543d98]"
              >
                <img
                  src="/impulse-website/left-arrow.png"
                  alt="Previous"
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"
                />
              </Button>

              <Button
                onClick={goToNext}
                onMouseEnter={() => setHoveredBtn("next")}
                onMouseLeave={() => setHoveredBtn(null)}
                className="group w-12 h-12 rounded-full border-2 border-[#EAEAEA] bg-[#543d98] flex items-center justify-center group transition-all duration-300"
              >
                <img
                  src="/impulse-website/right-arrow.png"
                  alt="Next"
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"
                />
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE DECK */}
          <div className="md:col-span-1 space-y-10">
            <div className="relative h-[400px] lg:h-[500px]">
              {slides.map((slide, i) => (
                <div
                  key={slide.id}
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg"
                  style={getCardStyle(i)}
                >
                  <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-bold text-[#030019] text-xl mb-3">
                {currentSlide.clientName}
              </h3>
            </div>
          </div>
        </div>
        {/* ===== END DESKTOP/TABLET ===== */}

        {/* SLIDE INDICATORS (shared for both views) */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSlideChange(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeSlide ? "bg-[#543d98] w-6" : "bg-[#EAEAEA]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
