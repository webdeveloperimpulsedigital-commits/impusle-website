import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// If your Vite base may change, importing the asset is safest. Otherwise keep your <img src="/impulse-website/logo.svg" />
// import logoUrl from "/impulse-website/logo.svg";

interface ScrollRevealLogoProps {
  className?: string;
}

type Px = number | "auto";
type Percent = string;

export const ScrollRevealLogo: React.FC<ScrollRevealLogoProps> = ({ className = "" }) => {
  const [logoStyle, setLogoStyle] = useState<React.CSSProperties>({});
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  // Reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Breakpoints
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useLayoutEffect(() => {
    const getTop = (el?: HTMLElement | null) => (el ? el.getBoundingClientRect().top + window.scrollY : 0);
    const R = (m: Px | Percent, t: Px | Percent, d: Px | Percent): Px | Percent =>
      isMobile ? m : isTablet ? t : d; // responsive helper

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const wh = window.innerHeight;

      // ---- Query all sections ONCE ----
      // About
      const aboutHero = document.querySelector<HTMLElement>('[data-section="about-hero"]');
      const agencyIntro = document.querySelector<HTMLElement>('[data-section="agency-intro"]');
      const statistics = document.querySelector<HTMLElement>('[data-section="statistics"]');
      const beyondDigital = document.querySelector<HTMLElement>('[data-section="beyond-digital-marketing"]');
      const blog = document.querySelector<HTMLElement>('[data-section="blog"]');

      // Services
      const servicesHero = document.querySelector<HTMLElement>('[data-section="services-hero"]');
      const servicesOverview = document.querySelector<HTMLElement>('[data-section="services-overview"]');
      const servicesCatalog = document.querySelector<HTMLElement>('[data-section="services-catalog"]');
      const process = document.querySelector<HTMLElement>('[data-section="process"]');
      const whyChooseUs = document.querySelector<HTMLElement>('[data-section="why-choose-us"]');
      const servicesCTA = document.querySelector<HTMLElement>('[data-section="services-cta"]');

      // Content Writing
      const cwHero = document.querySelector<HTMLElement>('[data-section="content-writing-hero"]');
      const brandVision = document.querySelector<HTMLElement>('[data-section="brand-vision"]');
      const interactiveGallery = document.querySelector<HTMLElement>('[data-section="interactive-gallery"]');
      const interactiveSlider = document.querySelector<HTMLElement>('[data-section="interactive-slider"]');
      const cwWhyChoose = document.querySelector<HTMLElement>('[data-section="why-choose"]');
      // robust selector so minor attribute name differences won’t break it
      const cservice = document.querySelector<HTMLElement>(
        '[data-section="cw-service"], [data-section="service"], [data-section="services"]'
      );
      const cwProcess = document.querySelector<HTMLElement>('[data-section="content-process"]');

      // Shared
      const contact = document.querySelector<HTMLElement>('[data-section="contact"]');
      const faq = document.querySelector<HTMLElement>('[data-section="faq"]');

      // Which page?
      const isAboutPage = !!aboutHero;
      const isServicesPage = !!servicesHero;
      const isContentWritingPage = !!cwHero;

      // If none detected yet, set a safe visible fallback and exit
      if (!isAboutPage && !isServicesPage && !isContentWritingPage) {
        const size = isMobile ? "60px" : isTablet ? "80px" : "100px";
        setLogoStyle({
          position: "fixed",
          top: "24px",
          right: "24px",
          width: size,
          height: size,
          filter: "brightness(0) invert(1)",
          zIndex: 9999,
          pointerEvents: "none",
          willChange: prefersReducedMotion ? "auto" : "transform, filter, top, left, right",
          transitionProperty: "top,left,right,width,height,filter,transform",
          transitionDuration: prefersReducedMotion ? "0s" : "1200ms", // slowed
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          transform: "translateZ(0)",
          opacity: 1,
        });
        return;
      }

      type Pos = {
        top: number;
        right?: Px | Percent;
        left?: Px | Percent;
        size: string;
        filter: string;
        transform?: string;
      };

      const size = isMobile ? "60px" : isTablet ? "80px" : "100px";
      const vpCenter = scrollY + wh * 0.5;

      let currentPosition: Pos | null = null;

      // -------- ABOUT PAGE --------
      if (isAboutPage) {
        const aboutPositions = {
          aboutHero: {
            top: getTop(aboutHero) + wh * 0.5 - (isMobile ? 60 : isTablet ? 40 : 120),
             right: R(33, 48, "33%"),
           size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0) invert(1)",
            left: "auto",
            transform: "none",
          },
          agencyIntro: {
            top: getTop(agencyIntro) + (isMobile ? 80 : isTablet ? 100 : 120),
            right: R(24, 48, "8%"),
             size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0)",
            left: "auto",
            transform: "none",
          },
          statistics: {
            top: getTop(statistics) + (isMobile ? 30 : isTablet ? 80 : 50),
            right: R(20, 40, "4%"),
            size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0) invert(1)",
            left: "auto",
            transform: "none",
          },
          beyondDigital: {
            top: getTop(beyondDigital) + (isMobile ? 40 : isTablet ? 60 : 80),
            right: R(24, 48, "8%"),
             size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0)",
            left: "auto",
            transform: "none",
          },
          blog: {
            top: getTop(blog) + (isMobile ? 40 : isTablet ? 50 : 60),
            left: "50%",
            right: "auto",
            size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0)",
            transform: "translateX(-50%)",
          },
          contact: {
            top: getTop(contact) + (isMobile ? 90 : isTablet ? 50 : 120),
           left: R(300, 48, "46%"),
            right: "auto",
            size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0) invert(1)",
            transform: "translateX(-50%)",
          },
          faq: {
            top: getTop(faq) + (isMobile ? 60 : isTablet ? 80 : 100),
            right: R(24, 48, "8%"),
            size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0)",
            left: "auto",
            transform: "none",
          },
        } satisfies Record<string, Pos>;

        if (faq && vpCenter >= getTop(faq)) currentPosition = aboutPositions.faq;
        else if (contact && vpCenter >= getTop(contact)) currentPosition = aboutPositions.contact;
        else if (blog && vpCenter >= getTop(blog)) currentPosition = aboutPositions.blog;
        else if (beyondDigital && vpCenter >= getTop(beyondDigital)) currentPosition = aboutPositions.beyondDigital;
        else if (statistics && vpCenter >= getTop(statistics)) currentPosition = aboutPositions.statistics;
        else if (agencyIntro && vpCenter >= getTop(agencyIntro)) currentPosition = aboutPositions.agencyIntro;
        else currentPosition = aboutPositions.aboutHero;
      }

      // -------- SERVICES PAGE --------
      if (!currentPosition && isServicesPage) {
        const servicesPositions = {
          hero: {
            top: getTop(servicesHero) + (isMobile ? 120 : isTablet ? 150 : 150),
            right: R(20, 40, "15%"),
            size,
            filter: "brightness(0) invert(1)",
            left: "auto",
            transform: "none",
          },
          overview: {
            top: getTop(servicesOverview) + (isMobile ? 80 : isTablet ? 100 : 180),
            right: R(24, 48, "10%"),
            size,
            filter: "brightness(0)",
          },
          catalog: {
            top: getTop(servicesCatalog) + (isMobile ? 60 : isTablet ? 80 : 100),
            right: R(20, 40, "10%"),
            size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0)",
          },
          process: {
            top: getTop(process) + (isMobile ? 40 : isTablet ? 60 : 80),
            right: R(24, 48, "8%"),
            size,
            filter: "brightness(0)",
          },
          why: {
            top: getTop(whyChooseUs) + (isMobile ? 40 : isTablet ? 50 : 60),
            left: "50%",
            right: "auto",
            size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0)",
            transform: "translateX(-50%)",
          },
          cta: {
            top: getTop(servicesCTA) + wh * 0.3,
            left: "50%",
            right: "auto",
            size,
            filter: "brightness(0) invert(1)",
            transform: "translateX(-50%)",
          },
          contact: {
            top: getTop(contact) + wh * 0.3,
            left: "50%",
            right: "auto",
            size,
            filter: "brightness(0) invert(1)",
            transform: "translateX(-50%)",
          },
          faq: {
            top: getTop(faq) + (isMobile ? 60 : isTablet ? 80 : 100),
            right: R(24, 48, "8%"),
            size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0)",
          },
        } satisfies Record<string, Pos>;

        if (faq && vpCenter >= getTop(faq)) currentPosition = servicesPositions.faq;
        else if (contact && vpCenter >= getTop(contact)) currentPosition = servicesPositions.contact;
        else if (servicesCTA && vpCenter >= getTop(servicesCTA)) currentPosition = servicesPositions.cta;
        else if (whyChooseUs && vpCenter >= getTop(whyChooseUs)) currentPosition = servicesPositions.why;
        else if (process && vpCenter >= getTop(process)) currentPosition = servicesPositions.process;
        else if (servicesCatalog && vpCenter >= getTop(servicesCatalog)) currentPosition = servicesPositions.catalog;
        else if (servicesOverview && vpCenter >= getTop(servicesOverview)) currentPosition = servicesPositions.overview;
        else currentPosition = servicesPositions.hero;
      }

      // -------- CONTENT WRITING PAGE --------
      if (!currentPosition && isContentWritingPage) {
        const cwPositions = {
          hero: {
            top: getTop(cwHero) + (isMobile ? 200 : isTablet ? 150 : 180),
            right: R(40, 40, "12%"),
            left: "auto",
            size,
            filter: "brightness(0) invert(1)",
            transform: "none",
          },
          brandVision: {
            top: getTop(brandVision) + (isMobile ? 490 : isTablet ? 100 : 40),
            right: R(60, 48, "10%"),
            left: "auto",
            size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0)",
            transform: "none",
          },
          gallery: {
            top: getTop(interactiveGallery) + (isMobile ? 50 : isTablet ? 100 : 40),
            right: R(24, 48, "16%"),
            left: "auto",
            size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0)",
            transform: "none",
          },
          slider: {
            top: getTop(interactiveSlider) + (isMobile ? 380 : isTablet ? 100 : 120),
            right: R(60, 48, "60%"),
            left: "auto",
            size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0)",
            transform: "none",
          },
          // SERVICE first so it isn't overshadowed by "why"
          service: {
            top: getTop(cservice) + (isMobile ? 30 : isTablet ? 100 : 150),
            right: R(24, 48, "10%"),
            left: "auto",
            size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0) invert(1)", // flip if the section is light
            transform: "none",
          },
          why: {
            top: getTop(cwWhyChoose) + (isMobile ? 80 : isTablet ? 100 : 80),
            right: R(24, 48, "8%"),
            left: "auto",
            size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0)",
            transform: "none",
          },
          process: {
            top: getTop(cwProcess) + (isMobile ? 80 : isTablet ? 100 : 80),
            right: R(24, 48, "14%"),
            left: "auto",
            size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0)",
            transform: "none",
          },
         contact: {
            top: getTop(contact) + (isMobile ? 90 : isTablet ? 50 : 120),
           left: R(300, 48, "46%"),
            right: "auto",
            size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0) invert(1)",
            transform: "translateX(-50%)",
          },
          faq: {
            top: getTop(faq) + (isMobile ? 60 : isTablet ? 80 : 100),
            right: R(24, 48, "8%"),
            size: isMobile ? "50px" : isTablet ? "70px" : "90px",
            filter: "brightness(0)",
            left: "auto",
            transform: "none",
          },
        } satisfies Record<string, Pos>;

        if (faq && vpCenter >= getTop(faq)) currentPosition = cwPositions.faq;
        else if (contact && vpCenter >= getTop(contact)) currentPosition = cwPositions.contact;
        else if (cwProcess && vpCenter >= getTop(cwProcess)) currentPosition = cwPositions.process;
        else if (cservice && vpCenter >= getTop(cservice)) currentPosition = cwPositions.service;
        else if (cwWhyChoose && vpCenter >= getTop(cwWhyChoose)) currentPosition = cwPositions.why;
        else if (interactiveSlider && vpCenter >= getTop(interactiveSlider)) currentPosition = cwPositions.slider;
        else if (interactiveGallery && vpCenter >= getTop(interactiveGallery)) currentPosition = cwPositions.gallery;
        else if (brandVision && vpCenter >= getTop(brandVision)) currentPosition = cwPositions.brandVision;
        else currentPosition = cwPositions.hero;
      }

      if (!currentPosition) return;

      // ---- Apply styles (with smooth transitions)
      const style: React.CSSProperties = {
        position: "fixed",
        top: `${currentPosition.top - scrollY}px`,
        right:
          currentPosition.right === "auto"
            ? "auto"
            : typeof currentPosition.right === "number"
            ? `${currentPosition.right}px`
            : (currentPosition.right as string),
        left:
          currentPosition.left === "auto"
            ? "auto"
            : typeof currentPosition.left === "number"
            ? `${currentPosition.left}px`
            : (currentPosition.left as string),
        width: currentPosition.size,
        height: currentPosition.size,
        filter: currentPosition.filter,
        zIndex: 9999,
        pointerEvents: "none",
        willChange: prefersReducedMotion ? "auto" : "transform, filter, top, left, right",
        transitionProperty: "top,left,right,width,height,filter,transform",
        transitionDuration: prefersReducedMotion ? "0s" : "1200ms", // slowed
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transform: currentPosition.transform || "translateZ(0)",
        opacity: 1,
      };

      setLogoStyle(style);
    };

    handleScroll();                 // 🔹 run once immediately (fixes About page initial visibility)
    // Throttled listeners via rAF
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
    };

    // ✅ Defer the initial run to the next two paints so sections are mounted
    const runInitial = () => requestAnimationFrame(() => requestAnimationFrame(handleScroll));
    runInitial();

    // Also run after full window load (images, fonts) for extra safety
    window.addEventListener("load", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("load", onScroll);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isMobile, isTablet, prefersReducedMotion]);

  return (
    <div
      ref={logoRef}
      className={className}
      style={{
        ...logoStyle,
      }}
      aria-hidden="true"
    >
      {/* Spin only the image for no-conflict rotation */}
      <img
        className={`w-full h-full ${prefersReducedMotion ? "" : "spin"}`}
        alt=""
        src="/impulse-website/logo.svg"
        draggable={false}
      />

      <style>{`
        .spin { animation: spin360 8s linear infinite; }
        @keyframes spin360 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) {
          .spin { animation: none !important; }
        }
      `}</style>
    </div>
  );
};
