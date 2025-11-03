import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";
 
export const ScrollingStripsSection = (): JSX.Element => {
  const services = [
    "Employer Branding",
    "SEO",
    "Website Development",
    "Branding",
    "Pay-Per-Click",
    "Content Writing Services",
  ];
 
  const servicesSecond = [
    "Services",
    "Production",
    "Social Media Marketing",
    "Content Strategy",
    "Digital Marketing",
    "Brand Strategy",
    
  ];
 
  const logos = [
    { name: "Dmart", src: "/client-logo4.png" },
    { name: "HDFC Securities", src: "/client-logo5.png" },
    { name: "Hindustan Unilever Limited", src: "/client-logo6.png" },
    { name: "MasterCard", src: "/client-logo1.png" },
    { name: "Amazon", src: "/client-logo2.png" },
    { name: "OLA", src: "/client-logo3.png" },
  ];
 
  // Video zoom state
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [scale, setScale] = useState(1);
 
  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
 
        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = 1 - rect.top / windowHeight; // 0 → 1
          const zoom = 1 + progress * 0.3; // Zoom up to 1.3x
          setScale(zoom);
        }
      }
    };
 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Scrolling Strips */}
      <div className="relative h-[200px] md:h-[300px] w-full">
        {/* Purple Strip */}

        
        <div className="absolute top-[20px] left-0 w-[120%] h-[80px] md:h-[100px] bg-[#6A0DAD] transform -skew-y-3 origin-top-left overflow-hidden -translate-x-[10%] z-20">
          <div className="flex items-center h-full animate-marquee whitespace-nowrap">
            <div className="flex items-center gap-6 md:gap-8 px-4 md:px-8">
              {[...Array(3)].map((_, setIndex) => (
                <React.Fragment key={`purple-set-${setIndex}`}>
                  {services.map((service, index) => (
                    <React.Fragment key={`purple-${setIndex}-${index}`}>
                      <span className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-2xl md:text-4xl lg:text-5xl whitespace-nowrap">
                        {service}
                      </span>
                      <img
                        className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] mx-2 md:mx-4"
                        alt="Vector"
                        src="/Vector-6.png"
                      />
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
 
        {/* Black Strip */}
        
       {/* Black Strip */}
{/* Black Strip */}
{/* Black Strip */}
 <div className="absolute top-[80px] md:top-[120px] left-0 w-full h-[80px] md:h-[100px] bg-[#000000] transform skew-y-3 origin-bottom-left overflow-hidden z-10">
      <div className="marquee-wrapper animate-marquee-reverse transform -skew-y-3 h-full flex">
        <div className="marquee-content flex items-center gap-6 md:gap-8">
          {servicesSecond.concat(servicesSecond).map((service, index) => (
            <React.Fragment key={index}>
              <span className="font-semibold text-white text-2xl md:text-4xl lg:text-5xl whitespace-nowrap">
                {service}
              </span>
              <img
                className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] mx-2 md:mx-4"
                alt="Vector"
                src="/Vector-6.png"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>





      </div>
 
      {/* Businesses We Have Transformed Section */}
      <div className="relative bg-white pt-8 md:pt-16">
        <div className="max-w-[1290px] mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 md:mb-16">
            <div className="flex flex-col items-start mb-6 lg:mb-0">
              <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-xl md:text-2xl lg:text-[34px] mb-2">
                Businesses
              </h2>
              <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-2xl md:text-3xl lg:text-[52px]">
                We Have Transformed
              </h3>
            </div>
 
            {/* Desktop Logo */}
            <div className="hidden lg:block">
              <div className="relative">
                <img
                  className="w-[120px] h-[120px] animate-spin"
                  alt="Animated Logo"
                  src="/logo.svg"
                  style={{
                    animationDuration: "8s",
                    filter:
                      "brightness(0) saturate(100%) invert(25%) sepia(85%) saturate(2103%) hue-rotate(258deg) brightness(95%) contrast(101%)",
                  }}
                />
              </div>
            </div>

            {/* Connect Now Button */}
          <Button className="h-[40px] md:h-[50px] bg-[#543d98] hover:bg-[#543d98]/90 rounded-xl px-4 md:px-6 py-2 md:py-3 gap-2">
            <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-base">
              Connect Now
            </span>
            <img
                className=""
                alt="location Logo"
                src="/button-icon.svg"/> 
          </Button>
          </div>
 
          {/* Mobile Logo */}
          <div className="block lg:hidden mb-4">
            <div className="relative flex justify-center">
              <img
                className="w-[80px] h-[80px] animate-spin"
                alt="Animated Logo"
                src="/logo.svg"
                style={{
                  animationDuration: "8s",
                  filter:
                    "brightness(0) saturate(100%) invert(25%) sepia(85%) saturate(2103%) hue-rotate(258deg) brightness(95%) contrast(101%)",
                }}
              />
            </div>
          </div>
 
          
        </div>
      </div>
 
      {/* Logo Carousel */}
      <div className="relative overflow-visible pb-12 md:pb-20">
        <div className="flex animate-marquee-slow">
          {[...Array(4)].map((_, setIndex) => (
            <div
              key={`logo-set-${setIndex}`}
              className="flex items-center flex-shrink-0"
            >
              {logos.map((logo, index) => (
                <div
                  key={`logo-${setIndex}-${index}`}
                  className="flex-shrink-0 w-[100px] h-[70px] md:w-[140px] md:h-[90px] lg:w-[180px] lg:h-[120px] bg-white rounded-lg border border-gray-200 p-2 md:p-4 flex items-center justify-center client-logo"
                >
                  <img
                    className="max-w-full max-h-full object-contain"
                    alt={logo.name}
                    src={logo.src}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
 
      
    </section>
  );
};