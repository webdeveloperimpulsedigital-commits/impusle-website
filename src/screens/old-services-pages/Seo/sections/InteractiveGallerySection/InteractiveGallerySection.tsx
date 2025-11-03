import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

export const InteractiveGallerySection = (): JSX.Element => {
  const [activePanel, setActivePanel] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const galleryItems = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Brand Strategy",
      alt: "Person working on brand strategy with digital icons and laptop"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "Content Design", 
      alt: "Hand holding smartphone with search interface and digital elements"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      caption: "UX Prototypes",
      alt: "Creative workspace with laptop, notebooks, and design materials"
    }
  ];

  const handlePanelClick = (index: number) => {
    if (isMobile) {
      setActivePanel(activePanel === index ? null : index);
    }
  };

  const handlePanelHover = (index: number | null) => {
    if (!isMobile) {
      setActivePanel(index);
    }
  };

  return (
    <section className="w-full bg-white py-16 lg:py-20" data-section="interactive-gallery">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            You're Still Here
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-8">
            That's the Power of Great Content
          </h2>
        </div>

        {/* Content Text */}
        <div className="text-center mb-8">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed max-w-4xl mx-auto">
            Think about it: the words you read on your screen weren't written out of the blue. No. Our team sat together, 
            researched your search intent, crafted a draft, and then optimized it for you. That's the power of quality content 
            writing and content marketing services. Now, imagine this level of precision for your business when millions of 
            internet users are searching for solutions daily. We don't aim to fill just any space on the internet.
          </p>
        </div>

        {/* Connect Now Button */}
        <div className="text-center mb-8">
          <Button className="bg-[#543d98] hover:bg-[#543d98]/90 text-white px-6 py-3 rounded-xl font-bold transition-colors duration-300">
            Connect Now
            <img className="w-4 h-4 ml-2" alt="Arrow" src="/button-icon.svg" />
          </Button>
        </div>

        {/* Interactive Gallery Container */}
        <div className="bg-white p-6 lg:p-8 ">
          {/* Desktop Gallery */}
          <div className="hidden md:flex gap-4 h-[400px] lg:h-[500px]">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-xl border border-[#EAEAEA] cursor-pointer transition-all duration-400 ease-out group ${
                  activePanel === index 
                    ? 'flex-[3] shadow-lg' 
                    : activePanel !== null 
                      ? 'flex-1 opacity-70' 
                      : 'flex-1'
                }`}
                onMouseEnter={() => handlePanelHover(index)}
                onMouseLeave={() => handlePanelHover(null)}
                onFocus={() => handlePanelHover(index)}
                onBlur={() => handlePanelHover(null)}
                tabIndex={0}
                role="button"
                aria-label={`View ${item.caption} gallery`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`w-full h-full object-cover transition-transform duration-400 ease-out ${
                    activePanel === index ? 'scale-103' : 'scale-100'
                  }`}
                  loading="lazy"
                />
                
                {/* Caption Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 transition-all duration-400 ease-out ${
                  activePanel === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                }`}>
                  <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-lg">
                    {item.caption}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Gallery */}
          <div className="block md:hidden space-y-4">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-xl border border-[#EAEAEA] cursor-pointer transition-all duration-400 ease-out ${
                  activePanel === index ? 'h-[300px] shadow-lg' : 'h-[200px]'
                }`}
                onClick={() => handlePanelClick(index)}
                role="button"
                aria-label={`${activePanel === index ? 'Collapse' : 'Expand'} ${item.caption} gallery`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className={`w-full h-full object-cover transition-transform duration-400 ease-out ${
                    activePanel === index ? 'scale-103' : 'scale-100'
                  }`}
                  loading="lazy"
                />
                
                {/* Caption Overlay - Always visible on mobile */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-center justify-between">
                  <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-base">
                    {item.caption}
                  </h3>
                  <svg 
                    className={`w-5 h-5 text-white transition-transform duration-300 ${
                      activePanel === index ? 'rotate-180' : 'rotate-0'
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .scale-103 {
          transform: scale(1.03);
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.1s !important;
            animation-duration: 0.1s !important;
          }
        }
      `}</style>
    </section>
  );
};