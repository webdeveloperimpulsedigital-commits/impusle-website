import React, { useEffect, useState } from "react";

interface ScrollRevealLogoProps {
  className?: string;
}

export const ScrollRevealLogoHome: React.FC<ScrollRevealLogoProps> = ({ 
  className = "" 
}) => {
  const [currentSection, setCurrentSection] = useState<string>("");
  const [logoStyle, setLogoStyle] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // 👈 new state

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const vw = window.innerWidth; // 👈 for large-screen responsive offsets
      const sections = document.querySelectorAll('[data-section]');

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
       
        // Check if section is in the middle of viewport
        if (rect.top <= winHeight / 2 && rect.bottom >= winHeight / 2) {
          const sectionName = section.getAttribute('data-section') || "";
          setCurrentSection(sectionName);

          // Get section's absolute position on the page
          const sectionTop = window.scrollY + rect.top;
          const sectionHeight = rect.height;
          
          // Calculate position within the section
          const scrollProgress = Math.max(0, Math.min(1, (window.scrollY - sectionTop) / sectionHeight));
           
          // Position logo differently per section
          if (sectionName === 'hero') {
            setIsVisible(true);
            const size = isMobile ? '60px' : isTablet ? '80px' : '300px';
            const top = sectionTop + (isMobile ? 180 : isTablet ? 200 : 250);
            // desktop: keep min 80px from edge or ~10vw, whichever is larger
            const right = isMobile ? 60 : isTablet ? 40 : Math.max(80, Math.floor(vw * 0.10));
            
            setLogoStyle({
              position: 'absolute',
              top: `${top}px`,
              right: `${right}px`,
              left: 'auto',
              transform: 'none',
              filter: 'brightness(1) ', // White
              width: size,
              height: size,
              zIndex: 999,
              transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            });
          } else if (sectionName === 'about') {
            const size = isMobile ? '50px' : isTablet ? '60px' : '80px';
            const top = sectionTop + (isMobile ? 30 : isTablet ? 100 : 120);
            const right = isMobile ? 20 : isTablet ? 40 : Math.max(80, Math.floor(vw * 0.08));
            
            setLogoStyle({
              position: 'absolute',
              top: `${top}px`,
              left: 'auto',
              right: `${right}px`,
              transform: 'none',
              filter: 'brightness(0)', // Black
              width: size,
              height: size,
              zIndex: 999,
              transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            });
          } else if (sectionName === 'services') {
            const size = isMobile ? '60px' : isTablet ? '80px' : '100px';
            const top = sectionTop + (isMobile ? 45 : isTablet ? 80 : 120);
            const right = isMobile ? 20 : isTablet ? 40 : Math.max(80, Math.floor(vw * 0.10));
            
            setLogoStyle({
              position: 'absolute',
              top: `${top}px`,
              right: `${right}px`,
              left: 'auto',
              transform: 'none',
              filter: 'brightness(1) ', // White
              width: size,
              height: size,
              zIndex: 999,
              transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            });
          } else if (sectionName === 'clients') {
            const size = isMobile ? '50px' : isTablet ? '70px' : '80px';
             const top = sectionTop + (isMobile ? 130 : isTablet ? 260 : 280);
            //const top = sectionTop + sectionHeight / 2.5;
            //const left = '70%';
            const left = isMobile ? 300 : isTablet ? 650 : Math.max(10, Math.floor(vw * 0.56));
            setLogoStyle({
              position: 'absolute',
              top: `${top}px`,
              left: left,
              right: 'auto',
              transform: 'translateX(-50%)',
              filter: 'brightness(0)', // Black
              width: size,
              height: size,
              zIndex: 999,
              transition: 'all 1.5s cubic-bezier(0.22, 1, 0.36, 1)',
            });
          } else if (sectionName === 'portfolio') {
            const size = isMobile ? '50px' : isTablet ? '70px' : '80px';
            const top = sectionTop + (isMobile ? 80 : isTablet ? 120 : 100);
            const right = isMobile ? 20 : isTablet ? 90 : Math.max(70, Math.floor(vw * 0.010));
            
            setLogoStyle({
              position: 'absolute',
              top: `${top}px`,
              left: 'auto',
              right: `${right}px`,
              transform: 'none',
              filter: 'brightness(0)', // Black
              width: size,
              height: size,
              zIndex: 999,
              transition: 'all 2s cubic-bezier(0.22, 1, 0.36, 1)',
            });
          } else if (sectionName === 'case-studies') {
            const size = isMobile ? '50px' : isTablet ? '70px' : '80px';
            const top = sectionTop + (isMobile ? 40 : isTablet ? 120 : 100);
            // desktop: position further inboard (~22vw), but clamp 180px–560px
            const right = isMobile ? 20 : isTablet ? 240 : Math.min(Math.max(100, Math.floor(vw * 0.27)), 500);
            
            setLogoStyle({
              position: 'absolute',
              top: `${top}px`,
              left: 'auto',
              right: `${right}px`,
              transform: 'none',
              filter: 'brightness(0)', // Black
              width: size,
              height: size,
              zIndex: 999,
              transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            });
          } else if (sectionName === 'testimonials') {
            const size = isMobile ? '50px' : isTablet ? '70px' : '80px';
            const top = sectionTop + (isMobile ? 40 : isTablet ? 80 : 10);
            const right = isMobile ? 20 : isTablet ? 40 : Math.max(80, Math.floor(vw * 0.08));
            
            setLogoStyle({
              position: 'absolute',
              top: `${top}px`,
              left: 'auto',
              right: `${right}px`,
              transform: 'none',
              filter: 'brightness(0)', // Black
              width: size,
              height: size,
              zIndex: 999,
              transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            });
          } else if (sectionName === 'blog') {
            const size = isMobile ? '50px' : isTablet ? '60px' : '80px';
            const top = sectionTop + (isMobile ? 35 : isTablet ? 80 : 80);
            //const left = '80%';

            const left = isMobile ? 300 : isTablet ? 420 : Math.max(10, Math.floor(vw * 0.60));
            setLogoStyle({
              position: 'absolute',
              top: `${top}px`, 
              left: left,
              right: 'auto',
              transform: 'translateX(-50%)',
              filter: 'brightness(0)', // Black
              width: size,
              height: size,
              zIndex: 999,
              transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            });
          } else if (sectionName === 'contact-resources') {
            const size = isMobile ? '50px' : isTablet ? '70px' : '80px';
            const top = sectionTop + (isMobile ? 0 : isTablet ? 100 : -20);
            // desktop: deeper inset (~35vw) but cap it
            const right = isMobile ? 10 : isTablet ? 40 : 53.5;
            
            setLogoStyle({
              position: 'absolute',
              top: `${top}px`,
              left: 'auto',
              right: `${right}%`,
              transform: 'none',
              filter: 'brightness(1) ', // White
              width: size,
              height: size,
              zIndex: 999,
              transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            });
          } else if (sectionName === 'resources') {
            const size = isMobile ? '50px' : isTablet ? '70px' : '80px';
            const top = sectionTop + (isMobile ? 60 : isTablet ? 750 : 120);
            const right = isMobile ? 20 : isTablet ? 40 : Math.max(80, Math.floor(vw * 0.10));
            
            setLogoStyle({
              position: 'absolute',
              top: `${top}px`,
              left: 'auto',
              right: `${right}px`,
              transform: 'none',
              filter: 'brightness(1) ', // White
              width: size,
              height: size,
              zIndex: 999,
              transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            });
          } else if (sectionName === 'contact') {
            const size = isMobile ? '50px' : isTablet ? '70px' : '80px';
            const top = sectionTop + (isMobile ? 100 : isTablet ? 150 : 200);
            const left = isMobile ? 20 : isTablet ? 40 : Math.max(10, Math.floor(vw * 0.4));
            
            setLogoStyle({
              position: 'absolute',
              top: `${top}px`,
              left: `${left}px`,
              right: 'auto',
              transform: 'none',
              filter: 'brightness(1) ', // White
              width: size,
              height: size,
              zIndex: 999,
              transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            });
          } else if (sectionName === 'faq') {
            const size = isMobile ? '50px' : isTablet ? '70px' : '80px';
            const top = sectionTop + (isMobile ? 50 : isTablet ? 70 : 80);
            const right = isMobile ? 20 : isTablet ? 40 : Math.max(180, Math.floor(vw * 0.20));
            
            setLogoStyle({
              position: 'absolute',
              top: `${top}px`,
              left: 'auto',
              right: `${right}px`,
              transform: 'none',
              filter: 'brightness(0)', // Black
              width: size,
              height: size,
              zIndex: 999,
              transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
            });
          }
        }
      });
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, isTablet, isVisible]);

  // 👇 don't render logo until visible
  if (!isVisible) return null;
  return (
    <div
      className={`${className}`}
      style={{
        animation: "spin360 4s linear infinite",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        transition: 'all 4.2s cubic-bezier(0.22, 1, 0.36, 1)', // slowed overall
        ...logoStyle
      }}
    >
      <img
        className="w-full h-full"
        alt="Scroll Reveal Logo"
        src="/impulse-website/logo.svg"
      />
      
      <style>{`
        @keyframes spin360 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
