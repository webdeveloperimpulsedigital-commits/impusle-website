import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

const css = `
.case-studies-header {
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.case-studies-content { flex: 1; }
.case-studies-overline {
  font-family: 'DM Sans', Helvetica;
  font-weight: normal;
  color: #030019;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 8px;
}
.case-studies-title {
  font-family: 'DM Sans', Helvetica;
  font-weight: bold;
  color: var(--purple);
  font-size: clamp(28px, 4vw, 52px);
  line-height: 1.15;
  margin: 0;
}
.case-studies-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: var(--purple);
  color: white;
  border: none;
  border-radius: 12px;
  font-family: 'DM Sans', Helvetica;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
}
.case-studies-button:hover {
  background: var(--purple-600);
  transform: translateY(-2px);
}
.case-studies-button img { width: 16px; height: 16px; }

/* Desktop grid */
.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  grid-auto-rows: 8px;
  grid-auto-flow: dense;
}
.case-study-card {
  display: block;
  text-decoration: none;
  color: inherit;
  background: transparent;
  border-radius: 50px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.case-study-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
  border-radius: 42px;
}
.case-study-media {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 3;
}
.case-study-media--tall { aspect-ratio: 5 / 6; }
.case-study-media.corner::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background: #23b26d;
  clip-path: polygon(0 0, 100% 0, 100% 100%);
}
.case-study-meta { padding: 20px; }
.case-study-brand {
  margin: 0 0 12px 0;
  font-family: 'DM Sans', Helvetica;
  font-size: 20px;
  font-weight: bold;
  color: #030019;
  line-height: 1.2;
}
.case-study-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.case-study-tag {
  padding: 6px 16px;
  background: transparent;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-family: 'DM Sans', Helvetica;
  font-size: 11px;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Mobile styles */
@media (max-width: 767px) {
  .case-studies-section { padding: 40px 20px; }
  .case-studies-header {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;
  }
  .case-studies-overline { font-size: 16px; }
  .case-studies-title {
    font-size: 28px;
    line-height: 1.2;
    margin-bottom: 16px;
  }
  .case-studies-button { padding: 10px 16px; font-size: 13px; }
  .case-study-meta { padding: 16px; }
  .case-study-brand { font-size: 18px; margin-bottom: 10px; }
  .case-study-tag { padding: 4px 12px; font-size: 10px; }
  .case-study-card { max-width: 320px; margin: 0 auto; width: 100%; }
}

/* (Kept) wrapper */
.wrap-casestuides{max-width:100%;margin:auto;position:relative;background:var(--bg);padding:0rem 5rem 0rem}
@media (max-width:980px){
  .wrap-casestuides{max-width:100%;margin:auto;position:relative;background:var(--bg);padding:0rem 0rem 0rem}
}
`;

const caseStudiesData = [
  {
    id: 1,
    title: "Amazone Employer Branding",
    image: "/impulse-website/Amazon EB.jpg",
    tags: ["Product Design"],
    tall: true,
    corner: false,
    link: "/case-study/amazon-employer-branding",
  },
  {
    id: 2,
    title: "Amazone Employee Value Proposition",
    image: "/impulse-website/Amazon EVP.jpg",
    tags: ["Packaging"],
    tall: false,
    corner: true,
    link: "/case-study/amazon-evp",
  },
  {
    id: 3,
    title: "Grasim Pulp and Fibre",
    image: "/impulse-website/Grasim Pulp and fiber.jpg",
    tags: ["Branding"],
    tall: true,
    corner: true,
    link: "/case-study/grasim-pulp-fibre",
  },
  {
    id: 4,
    title: "Shree Rubber Works",
    image: "/impulse-website/Shree Rubber factory.jpg",
    tags: ["Creative"],
    tall: false,
    corner: false,
    link: "/case-study/shree-rubber-works",
  },
  {
    id: 5,
    title: "Automag India",
    image: "/impulse-website/Automag.jpg",
    tags: ["Branding"],
    tall: false,
    corner: false,
    link: "/case-study/automag-india",
  },
  {
    id: 6,
    title: "Atrac Engineering",
    image: "/impulse-website/Atrac.jpg",
    tags: ["Packaging"],
    tall: false,
    corner: false,
    link: "/case-study/atrac-engineering",
  },
];

export const ServicesCatalogSection = (): JSX.Element => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  // state for the INTERACTIVE mobile slider
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // desktop masonry sizing
  useEffect(() => {
    if (typeof window === "undefined" || !gridRef.current || isMobile) return;
    const grid = gridRef.current;

    const getNum = (prop: string) =>
      parseInt(getComputedStyle(grid).getPropertyValue(prop), 10) || 0;

    const spanItem = (card: HTMLElement) => {
      const rowH = getNum("grid-auto-rows");
      const gap = getNum("gap");
      const media = card.querySelector(".case-study-media") as
        | HTMLElement
        | null;
      const meta = card.querySelector(".case-study-meta") as
        | HTMLElement
        | null;
      if (!media || !meta) return;

      const total = media.offsetHeight + meta.offsetHeight + gap;
      const span = Math.ceil((total + gap) / (rowH + gap));
      card.style.gridRowEnd = `span ${span}`;
    };

    const resizeAll = () => {
      grid.querySelectorAll<HTMLElement>(".case-study-card").forEach(spanItem);
    };

    resizeAll();

    const imgs = Array.from(
      grid.querySelectorAll<HTMLImageElement>(".case-study-media img")
    );
    const handleImgLoad = () => resizeAll();
    imgs.forEach((img) => {
      if (!img.complete)
        img.addEventListener("load", handleImgLoad, { once: true });
    });

    window.addEventListener("resize", resizeAll);
    return () => {
      window.removeEventListener("resize", resizeAll);
      imgs.forEach((img) => img.removeEventListener("load", handleImgLoad));
    };
  }, [isMobile]);

  // reduced-motion preference (for mobile slider)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handle = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  // Reuse your case study data as slides
  const slides = caseStudiesData.map((c) => ({
    id: c.id,
    image: c.image,
    alt: c.title,
    clientName: c.title,
    link: c.link,
  }));

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

  // Layered card positioning logic (mobile)
  const getCardStyle = (index: number) => {
    const position = (index - activeSlide + slides.length) % slides.length;

    if (prefersReducedMotion) {
      return { display: position === 0 ? "block" : "none" } as React.CSSProperties;
    }

    const base: React.CSSProperties = {
      transition: "transform 400ms ease, opacity 400ms ease, filter 400ms ease",
    };

    // tuned for mobile (<= 767px)
    const x0 = -20;
    const x1 = 10;
    const x2 = 30;
    const scaleActive = 0.9;
    const scaleBack = 0.88;
    const mt1 = 12;
    const mt2 = 28;
    const h1 = 380;
    const h2 = 340;

    switch (position) {
      case 0:
        return {
          ...base,
          transform: `translateX(${x0}px) scale(${scaleActive})`,
          opacity: 1,
          zIndex: 30,
        };
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
        return {
          ...base,
          transform: `translateX(${x2 * 1.5}px)`,
          opacity: 0,
          zIndex: 0,
        };
    }
  };

  const CaseStudyCard = ({
    caseStudy,
  }: {
    caseStudy: (typeof caseStudiesData)[0];
  }) => (
    <a href={caseStudy.link} className="case-study-card">
      <div
        className={`case-study-media ${
          !isMobile && caseStudy.tall ? "case-study-media--tall" : ""
        } ${caseStudy.corner ? "corner" : ""}`}
      >
        <img src={caseStudy.image} alt={caseStudy.title} loading="lazy" />
      </div>
      <div className="case-study-meta">
        <h3 className="case-study-brand">{caseStudy.title}</h3>
      </div>
    </a>
  );

  const MobileSlider = () => (
    <div className="block lg:hidden">
      {/* Layered cards slider */}
      <div className="relative h-[400px] overflow-visible">
        {slides.map((slide, i) => (
          <a
            key={slide.id}
            href={slide.link}
            className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg"
            style={getCardStyle(i)}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="block w-full h-full object-cover"
            />
          </a>
        ))}
      </div>

      {/* Client name below image */}
      <div className="mt-4 text-left ml-1">
        <a href={currentSlide.link}>
          <h3 className="font-bold text-[#030019] text-[26px] hover:underline">
            {currentSlide.clientName}
          </h3>
        </a>
      </div>

      {/* Prev / Next buttons */}
      <div className="flex items-center justify-center gap-4 mt-6 pb-8">
        <Button
          onClick={goToPrevious}
          className="group w-12 h-12 rounded-full border-2 border-[#543d98] bg-white flex items-center justify-center transition-all duration-300 hover:bg-[#f5f5f5] hover:border-[#543d98]"
          aria-label="Previous"
        >
          <img
            src="/impulse-website/left-arrow.png"
            alt="Previous"
            className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"
          />
        </Button>

        <Button
          onClick={goToNext}
          className="group w-12 h-12 rounded-full border-2 border-[#EAEAEA] bg-[#543d98] flex items-center justify-center transition-all duration-300"
          aria-label="Next"
        >
          <img
            src="/impulse-website/right-arrow.png"
            alt="Next"
            className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"
          />
        </Button>
      </div>
    </div>
  );

  const DesktopGrid = () => (
    <div className="hidden lg:block">
      <div className="case-studies-grid" ref={gridRef}>
        {caseStudiesData.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <section
        className="case-studies-section pt-16 bg-white pb-0 mx-auto md:px-4"
        data-section="case-studies"
      >
        <div className="wrap-casestuides">
          <div className="case-studies-header">
            <div className="case-studies-content">
              <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
                <span className="text-[#030019]  lg:text-[34px] sm:text-[16px]">
                  Case Studies
                </span>
                <br />
                <span className="font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[26px]">
                  Playbook of Proven Wins
                </span>
              </h2>
            </div>
          </div>

          {/* Mobile slider */}
          <MobileSlider />

          {/* Desktop grid */}
          <DesktopGrid />
        </div>
      </section>
      <style>{css}</style>
    </>
  );
};
