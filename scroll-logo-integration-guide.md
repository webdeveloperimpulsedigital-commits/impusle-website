# ScrollRevealLogo Integration Guide

## 1. Component File
Copy this component to your local project:

**File: `src/components/ScrollRevealLogo/ScrollRevealLogo.tsx`**

```tsx
import React, { useEffect, useState } from "react";

interface ScrollRevealLogoProps {
  className?: string;
}

export const ScrollRevealLogo: React.FC<ScrollRevealLogoProps> = ({ 
  className = "" 
}) => {
  const [currentSection, setCurrentSection] = useState<string>("");
  const [logoStyle, setLogoStyle] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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
      const sections = document.querySelectorAll('[data-section]');

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        
        // Check if section is in the middle of viewport
        if (rect.top <= winHeight / 2 && rect.bottom >= winHeight / 2) {
          const sectionName = section.getAttribute('data-section') || "";
          setCurrentSection(sectionName);

          // Position logo differently per section
          if (sectionName === 'hero') {
            // Responsive sizing and positioning for hero section
            const size = isMobile ? '80px' : isTablet ? '120px' : '150px';
            const topPos = isMobile ? '120px' : isTablet ? '150px' : '200px';
            const rightPos = isMobile ? '20px' : isTablet ? '40px' : '120px';
            
            setLogoStyle({
              top: topPos,
              right: rightPos,
              left: 'auto',
              transform: 'none',
              filter: 'brightness(0) invert(1)',
              transition: 'filter 0.5s ease, top 0.5s ease, left 0.5s ease, right 0.5s ease, transform 0.5s ease',
              width: size,
              height: size,
            });
          } else if (sectionName === 'about') {
            // Responsive sizing for about section
            const size = isMobile ? '40px' : isTablet ? '60px' : '80px';
            const topPos = isMobile ? '100px' : isTablet ? '120px' : '200px';
            const rightPos = isMobile ? '20px' : isTablet ? '40px' : '120px';
            
            setLogoStyle({
              top: topPos,
              right: rightPos,
              left: 'auto',
              transform: 'none',
              filter: 'brightness(0)',
              transition: 'filter 0.5s ease, top 0.5s ease, left 0.5s ease, right 0.5s ease, transform 0.5s ease',
              width: size,
              height: size,
            });
          } else if (sectionName === 'services') {
            // Responsive sizing for services section
            const size = isMobile ? '60px' : isTablet ? '80px' : '100px';
            const topPos = isMobile ? '20px' : isTablet ? '30px' : '40px';
            const rightPos = isMobile ? '20px' : isTablet ? '40px' : '60px';
            
            setLogoStyle({
              top: topPos,
              right: rightPos,
              left: 'auto',
              transform: 'none',
              filter: 'brightness(0) invert(1)',
              transition: 'filter 0.8s ease, top 0.8s ease, left 0.8s ease, right 0.8s ease, transform 0.8s ease',
              width: size,
              height: size,
              opacity: '1',
              zIndex: '999',
            });
          } else if (sectionName === 'clients') {
            // Responsive sizing for clients section - position in the middle
            const size = isMobile ? '50px' : isTablet ? '70px' : '80px';
            
            setLogoStyle({
              top: '50%',
              left: '50%',
              right: 'auto',
              transform: 'translate(-50%, -50%)',
              filter: 'brightness(0) saturate(100%)', // Black color
              transition: 'filter 0.6s ease, top 0.6s ease, left 0.6s ease, right 0.6s ease, transform 0.6s ease',
              width: size,
              height: size,
              opacity: '1',
              zIndex: '999',
            });
          }
          // Add more sections as needed for your layout
        }
      });
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, isTablet]);

  return (
    <div
      className={`fixed w-[50px] h-[50px] z-[999] ${className}`}
      style={{
        animation: "spin360 2s linear infinite",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
        ...logoStyle
      }}
    >
      <img
        className="w-full h-full"
        alt="Scroll Reveal Logo"
        src="/logo.svg"
      />
      
      <style jsx>{`
        @keyframes spin360 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
```

## 2. How to Use in Your Layout

### Step 1: Add the Component to Your Main Layout
```tsx
import { ScrollRevealLogo } from './components/ScrollRevealLogo/ScrollRevealLogo';

export const YourMainLayout = () => {
  return (
    <main className="relative w-full min-h-screen">
      {/* Add the scroll-based logo */}
      <ScrollRevealLogo />
      
      {/* Your existing sections */}
      <div className="relative w-full">
        {/* Your sections here */}
      </div>
    </main>
  );
};
```

### Step 2: Add data-section Attributes to Your Sections
Add `data-section` attributes to each section you want the logo to respond to:

```tsx
{/* Hero Section */}
<section className="..." data-section="hero">
  {/* Your hero content */}
</section>

{/* About Section */}
<section className="..." data-section="about">
  {/* Your about content */}
</section>

{/* Services Section */}
<section className="..." data-section="services">
  {/* Your services content */}
</section>

{/* Clients Section */}
<section className="..." data-section="clients">
  {/* Your clients content */}
</section>
```

## 3. Customize Logo Positions for Your Sections

You can customize the logo positioning for each section by modifying the `handleScroll` function. Here's how to add new sections:

```tsx
// Add this inside the handleScroll function
else if (sectionName === 'your-custom-section') {
  const size = isMobile ? '60px' : isTablet ? '80px' : '100px';
  const topPos = isMobile ? '30px' : isTablet ? '40px' : '50px';
  const leftPos = isMobile ? '20px' : isTablet ? '40px' : '60px';
  
  setLogoStyle({
    top: topPos,
    left: leftPos,
    right: 'auto',
    transform: 'none',
    filter: 'brightness(0) invert(1)', // White logo
    // or filter: 'brightness(0)', // Black logo
    transition: 'filter 0.5s ease, top 0.5s ease, left 0.5s ease, right 0.5s ease, transform 0.5s ease',
    width: size,
    height: size,
    opacity: '1',
    zIndex: '999',
  });
}
```

## 4. Logo Asset
Make sure you have your logo file in the public folder:
- Path: `/public/logo.svg`
- The logo should be an SVG for best quality and performance

## 5. CSS Animation (Alternative to styled-jsx)
If you prefer regular CSS, add this to your global CSS file:

```css
@keyframes spin360 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

## 6. TypeScript Support
If using TypeScript, make sure you have the proper types installed:
```bash
npm install @types/react @types/react-dom
```

## 7. Customization Options

### Logo Filters:
- `filter: 'brightness(0) invert(1)'` - White logo
- `filter: 'brightness(0)'` - Black logo  
- `filter: 'brightness(0) saturate(100%)'` - Black logo (alternative)
- `filter: 'hue-rotate(180deg)'` - Color variations

### Animation Speed:
Change the animation duration in the style:
```tsx
animation: "spin360 3s linear infinite", // Slower
animation: "spin360 1s linear infinite", // Faster
```

### Responsive Breakpoints:
Modify the breakpoints in the component:
```tsx
setIsMobile(window.innerWidth < 768);    // Mobile
setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024); // Tablet
```

That's it! Your scroll-based moving logo should now work across all your sections. The logo will automatically move and change appearance based on which section is currently in view.