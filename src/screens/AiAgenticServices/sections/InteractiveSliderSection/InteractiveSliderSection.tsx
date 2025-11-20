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

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      else if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeSlide]);

  const slides: SlideData[] = [
    {
      id: 1,
      image: "/impulse-website/case study section 701 x 500 Mastercard 2.jpg",
      alt: "Person working on SEO strategy with digital analytics and laptop",
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
      alt: "Hand holding smartphone with search interface and digital elements",
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
      alt: "Creative workspace with laptop, notebooks, and design materials",
      smallHeading: "Brand Development",
      mainHeading: "Building Memorable Experiences",
      paragraph:
        "We don't just create brands; we build experiences that stick. Through strategic positioning and creative execution, we help your brand stand out in a crowded marketplace and connect with your ideal customers.",
      clientName: "OLA Mobility",
      tags: ["BRAND STRATEGY", "DESIGN", "EXPERIENCE"],
    },
  ];

  const fixedSlide = slides[0];
  const currentSlide = slides[activeSlide];
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  const handleSlideChange = (newIndex: number) => {
    if (isTransitioning || newIndex === activeSlide) return;
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

  // Same stack used for both desktop & mobile
  const stackSlides = Array.from({ length: 4 }, (_, i) => slides[(activeSlide + i) % slides.length]);

  const getCardStyle = (stackIndex: number): React.CSSProperties => {
    const configs = [
      { x: 0, y: 0, scale: 0.9, op: 1, blur: 0, z: 40 },
      { x: 28, y: -2, scale: 0.865, op: 0.9, blur: 1, z: 30 },
      { x: 56, y: -4, scale: 0.82, op: 0.75, blur: 2, z: 20 },
      { x: 84, y: -6, scale: 0.78, op: 0.6, blur: 3, z: 10 },
    ];
    const cfg = configs[Math.min(stackIndex, 3)];
    return {
      transform: `translate(${cfg.x}px, ${cfg.y}px) scale(${cfg.scale})`,
      opacity: cfg.op,
      filter: `blur(${cfg.blur}px)`,
      zIndex: cfg.z,
      transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
      borderRadius: "16px",
      overflow: "hidden",
      pointerEvents: stackIndex === 0 ? "auto" : "none",
    };
  };

  const srcEncoded = (p: string) => encodeURI(p);

  return (
    <section
      className="w-full bg-white py-16 lg:py-20 rounded-t-[40px] md:rounded-t-[60px] overflow-x-hidden"
      data-section="interactive-slider"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 lg:pb-16">
        {/* --- DESKTOP VIEW --- */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left */}
          <div className="md:col-span-6 pr-6 lg:pr-10 space-y-6 h-full flex flex-col justify-center">
           

            <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">

            Case Studies
             </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[20px] leading-tight ">
            Solutions to Solve Your Problems
          </h2>

          
            <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-base leading-relaxed mb-8 max-w-[520px]">
              {fixedSlide.paragraph}
            </p>
            <div className="flex items-center gap-4">
              <Button 
                             onClick={goToNext}
                              onMouseEnter={() => setHoveredBtn("next")}
                              onMouseLeave={() => setHoveredBtn(null)}
                          className="group w-12 h-12 rounded-full border-2 border-[#543d98] bg-white flex items-center justify-center group transition-all duration-300 hover:bg-[#f5f5f5] hover:border-[#543d98]">
                          
                          <img src="/impulse-website/left-arrow.png" alt="Next"
                            className="w-9 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"/>
                        </Button>
              
                        <Button 
                             onClick={goToNext}
                              onMouseEnter={() => setHoveredBtn("next")}
                              onMouseLeave={() => setHoveredBtn(null)}
                          className="group w-12 h-12 rounded-full border-2 border-[#EAEAEA] bg-[#543d98] flex items-center justify-center group transition-all duration-300">
                          
                          <img src="/impulse-website/right-arrow.png" alt="Next"
                            className="w-9 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"/>
                        </Button>
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-6 pl-6 lg:pl-10 space-y-0 h-full flex flex-col justify-between">
            <div className="relative max-w-[620px] w-full mx-auto h-[340px] lg:h-[400px] overflow-visible pr-28">
              {stackSlides.map((slide, i) => (
                <div key={i} className="absolute inset-0" style={getCardStyle(i)}>
                  <img
                    src={srcEncoded(slide.image)}
                    alt={slide.alt}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              ))}
            </div>
            <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] lg:text-[35px] mb-3 pl-8">
              {currentSlide.clientName}
            </h3>
          </div>
        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="block md:hidden space-y-8">
          {/* 1) CONTENT FIRST */}
          <div className="space-y-6">
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg">
              {fixedSlide.smallHeading}
            </p>
            <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-2xl leading-tight">
              {fixedSlide.mainHeading}
            </h2>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-base leading-relaxed">
              {fixedSlide.paragraph}
            </p>
          </div>

          {/* 2) IMAGE GALLERY SAME AS DESKTOP */}
          <div className="relative max-w-[300px] w-full mx-0 h-[220px] overflow-visible pr-20">
            {stackSlides.map((slide, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                style={getCardStyle(i)}
              >
                <img
                  src={srcEncoded(slide.image)}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* 3) CLIENT NAME */}
          <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-lg text-center pt-3">
            {currentSlide.clientName}
          </h3>

          {/* 4) CONTROLS CENTERED */}
          <div className="flex justify-center items-center gap-4 pt-4">
            <Button 
                             onClick={goToNext}
                              onMouseEnter={() => setHoveredBtn("next")}
                              onMouseLeave={() => setHoveredBtn(null)}
                          className="group w-12 h-12 rounded-full border-2 border-[#543d98] bg-white flex items-center justify-center group transition-all duration-300 hover:bg-[#f5f5f5] hover:border-[#543d98]">
                          
                          <img src="/impulse-website/left-arrow.png" alt="Next"
                            className="w-9 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"/>
                        </Button>
              
                        <Button 
                             onClick={goToNext}
                              onMouseEnter={() => setHoveredBtn("next")}
                              onMouseLeave={() => setHoveredBtn(null)}
                          className="group w-12 h-12 rounded-full border-2 border-[#EAEAEA] bg-[#543d98] flex items-center justify-center group transition-all duration-300">
                          
                          <img src="/impulse-website/right-arrow.png" alt="Next"
                            className="w-9 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"/>
                        </Button>
          </div><br></br>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.1s !important;
            animation-duration: 0.1s !important;
          }
        }

        
      `}
      
      </style>
    </section>
  );
};
