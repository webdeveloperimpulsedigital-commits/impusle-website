import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";
 import { Link } from "react-router-dom";
export const ClientsSection = (): JSX.Element => {

 
  const logos = [
    { name: "Dmart", src: "client-logo4.png" },
    { name: "HDFC Securities", src: "client-logo5.png" },
    { name: "Hindustan Unilever Limited", src: "client-logo6.png" },
    { name: "MasterCard", src: "client-logo1.png" },
    { name: "Amazon", src: "client-logo2.png" },
    { name: "OLA", src: "client-logo3.png" },
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
    <section className="relative w-full bg-white overflow-hidden" data-section="clients">
      {/* Scrolling Strips */}
      
 
      {/* Businesses We Have Transformed Section */}
      <div className="relative bg-white lg:pt-0 md:pt-1">
        <div className="wrap-clients">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 md:mb-16">
            <div className="flex flex-col items-start mb-6 lg:mb-0">
             

              <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#030019]  lg:text-[34px] sm:text-[16px]">
              Businesses
            </span>
            <br />
            <span className="font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[26px]">
             We Have Transformed
            </span>
      </h2>
            </div>
 
            {/* Connect Now Button */}
            

           

                      <Button
                                              className="w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]"
                                            >
                                            
                                              <Link
                                                to="/contact"
                                                className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base group-hover:text-[#543d98] transition-colors duration-300"
                                              >
                                                Connect Now
                                              </Link>
                                              <img
                                                src="/impulse-website/button-icon.svg"
                                                alt="Arrow"
                                                className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert-0 group-hover:invert pointer-events-none"
                                              />
                                            </Button>
          </div>
        </div>
      </div>

      {/* Logo Carousel */}
      <div className="relative overflow-visible">
        <div className="flex animate-marquee-slow">
          {[...Array(4)].map((_, setIndex) => (
            <div
              key={`logo-set-${setIndex}`}
              className="flex items-center flex-shrink-0"
            >
              {logos.map((logo, index) => (
                <div
                  key={`logo-${setIndex}-${index}`}
                  className="flex-shrink-0 w-[100px] h-[70px] md:w-[140px] md:h-[90px] lg:w-[180px] lg:h-[120px] bg-white border border-gray-200 p-2 md:p-4 flex items-center justify-center client-logo"
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
      </div><br></br>

      <style>{`
      .wrap-clients{max-width:100%;margin:auto;position:relative;background:var(--bg);padding:0rem 6rem 0rem}

      @media (max-width:980px){
      .wrap-clients{max-width:100%;margin:auto;position:relative;background:var(--bg);padding:0rem 1.2rem 0rem}
      }
    `}
    </style>
    </section>

    
  );
};