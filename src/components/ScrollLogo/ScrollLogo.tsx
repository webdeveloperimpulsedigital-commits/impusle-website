import React, { useEffect, useState, useRef } from "react";

interface ScrollLogoProps {
  className?: string;
}

export const ScrollLogo: React.FC<ScrollLogoProps> = ({ className = "" }) => {
  const [scrollY, setScrollY] = useState(0);
  const [logoStyle, setLogoStyle] = useState({});
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Movement multiplier - adjust this to control sensitivity
      const moveMultiplier = 0.3;
      
      // Calculate vertical position based on scroll
      const baseTop = 120; // Starting position from top
      const newTop = baseTop + (currentScrollY * moveMultiplier);

      // Get current section to determine background color
      const sections = document.querySelectorAll('[data-section]');
      let currentSection = '';
      let logoColor = 'brightness(0) invert(1)'; // Default white

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + currentScrollY;
        const sectionBottom = sectionTop + rect.height;
        
        if (currentScrollY >= sectionTop - 200 && currentScrollY < sectionBottom - 200) {
          currentSection = section.getAttribute('data-section') || '';
        }
      });

      // Determine logo color based on section background
      switch (currentSection) {
        case 'about-hero':
          logoColor = 'brightness(0) invert(1)'; // White on dark background
          break;
        case 'agency-intro':
          logoColor = 'brightness(0)'; // Black on white background
          break;
        case 'achievements':
          logoColor = 'brightness(0)'; // Black on light background
          break;
        case 'company-story':
          logoColor = 'brightness(0)'; // Black on white background
          break;
        case 'values':
          logoColor = 'brightness(0)'; // Black on white background
          break;
        case 'team':
          logoColor = 'brightness(0)'; // Black on light background
          break;
        case 'culture':
          logoColor = 'brightness(0)'; // Black on white background
          break;
        case 'contact-cta':
          logoColor = 'brightness(0) invert(1)'; // White on dark background
          break;
        default:
          logoColor = 'brightness(0)'; // Default black
      }

      setLogoStyle({
        position: 'fixed',
        top: `${newTop}px`,
        right: '40px',
        zIndex: 9999,
        filter: logoColor,
        transition: 'filter 0.5s ease, top 0.1s ease-out',
        pointerEvents: 'none',
      });
    };

    // Initial call
    handleScroll();

    // Throttled scroll listener for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <img
      ref={logoRef}
      className={`w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] animate-spin ${className}`}
      alt="Scroll Logo"
      src="/logo.svg"
      style={{
        animationDuration: "8s",
        ...logoStyle
      }}
    />
  );
};