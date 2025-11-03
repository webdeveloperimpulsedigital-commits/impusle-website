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
    if (prefersReducedMotion) {
      return {
        display: position === 0 ? "block" : "none",
      } as React.CSSProperties;
    }

    const base: React.CSSProperties = {
      transition: "transform 400ms ease, opacity 400ms ease, filter 400ms ease",
    };

    switch (position) {
      case 0:
        return { ...base, transform: "translateX(0) scale(1)", opacity: 1, zIndex: 30 };
      case 1:
        return { ...base, transform: "translateX(24px) scale(0.97)", opacity: 0.8, zIndex: 20 };
      case 2:
        return { ...base, transform: "translateX(48px) scale(0.94)", opacity: 0.6, zIndex: 10 };
      default:
        return { ...base, transform: "translateX(72px)", opacity: 0, zIndex: 0 };
    }
  };

  return (
    <section className="w-full bg-white py-16 lg:py-20" data-section="interactive-slider">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="hidden md:grid md:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* LEFT CONTENT FIXED */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-2">
              <p className="text-[#030019] text-lg">{fixedSlide.smallHeading}</p>
              <h2 className="font-bold text-[#543d98] text-4xl leading-tight">{fixedSlide.mainHeading}</h2>
            </div>

            <p className="text-[#030019] text-base leading-relaxed mb-8">{fixedSlide.paragraph}</p>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 mb-8">
          <Button 
               onClick={goToNext}
                onMouseEnter={() => setHoveredBtn("next")}
                onMouseLeave={() => setHoveredBtn(null)}
            className="group w-12 h-12 rounded-full border-2 border-[#543d98] bg-white flex items-center justify-center group transition-all duration-300 hover:bg-[#f5f5f5] hover:border-[#543d98]">
            
            <img src="/impulse-website/left-arrow.png" alt="Next"
              className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"/>
          </Button>

          <Button 
               onClick={goToNext}
                onMouseEnter={() => setHoveredBtn("next")}
                onMouseLeave={() => setHoveredBtn(null)}
            className="group w-12 h-12 rounded-full border-2 border-[#EAEAEA] bg-[#543d98] flex items-center justify-center group transition-all duration-300">
            
            <img src="/impulse-website/right-arrow.png" alt="Next"
              className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"/>
          </Button>

                </div>
          </div>

          {/* RIGHT SIDE IMAGE DECK */}
          <div className="md:col-span-3 space-y-6">
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
              <h3 className="font-bold text-[#030019] text-xl mb-3">{currentSlide.clientName}</h3>
              <div className="flex flex-wrap gap-2">
                {currentSlide.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 border border-[#EAEAEA] rounded-full text-xs font-medium text-[#666] uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SLIDE INDICATORS */}
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
