import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";
 import { Link } from "react-router-dom";
export const ClientsSection = (): JSX.Element => {

 
  const logos = [
    { name: "abg-chemical1", src: "http://localhost:5173/impulse-website/impulse-clients/abg-chemical.jpg" },
    { name: "hindalco", src: "http://localhost:5173/impulse-website/impulse-clients/hindalco.jpg" },
    { name: "abps", src: "http://localhost:5173/impulse-website/impulse-clients/abps.jpg" },
    { name: "birla-celilues", src: "http://localhost:5173/impulse-website/impulse-clients/birla-celilues.jpg" },
    { name: "hdfc", src: "http://localhost:5173/impulse-website/impulse-clients/hdfc.jpg" },
    { name: "godrej", src: "http://localhost:5173/impulse-website/impulse-clients/godrej.jpg" },
    { name: "amazone", src: "http://localhost:5173/impulse-website/impulse-clients/amazone.jpg" },
    { name: "ola", src: "http://localhost:5173/impulse-website/impulse-clients/ola.jpg" },
    { name: "chings", src: "http://localhost:5173/impulse-website/impulse-clients/chings.jpg" },
    { name: "d-mart", src: "http://localhost:5173/impulse-website/impulse-clients/d-mart.jpg" },
    { name: "mastercard", src: ".http://localhost:5173/impulse-website/impulse-clients/mastercard.jpg" },
    { name: "tjsb", src: "http://localhost:5173/impulse-website/impulse-clients/tjsb.jpg" },
    { name: "tata-soulful", src: "http://localhost:5173/impulse-website/tata-soulful.jpg" },
    { name: "tata", src: "http://localhost:5173/impulse-website/impulse-clients/tata.jpg" },
    { name: "jankalyan", src: "http://localhost:5173/impulse-website/impulse-clients/jankalyan.jpg" },
    { name: "croda", src: "http://localhost:5173/impulse-website/impulse-clients/croda.jpg" },
    { name: "qure-ai", src: "http://localhost:5173/impulse-website/impulse-clients/qure-ai.jpg" },
    { name: "aster", src: "http://localhost:5173/impulse-website/impulse-clients/aster.jpg" },
    { name: "automag", src: "http://localhost:5173/impulse-website/impulse-clients/automag.jpg" },
    { name: "datar", src: "http://localhost:5173/impulse-website/impulse-clients/datar.jpg" },
    { name: "dts", src: "http://localhost:5173/impulse-website/impulse-clients/dts.jpg" },
    { name: "emech", src: "http://localhost:5173/impulse-website/impulse-clients/emech.jpg" },
    { name: "enpro", src: "http://localhost:5173/impulse-website/impulse-clients/enpro.jpg" },
    { name: "goma", src: "http://localhost:5173/impulse-website/impulse-clients/goma.jpg" },
    { name: "hem", src: "http://localhost:5173/impulse-website/impulse-clients/hem.jpg" },
    { name: "lg", src: "http://localhost:5173/impulse-website/impulse-clients/lg.jpg" },
    { name: "more", src: "http://localhost:5173/impulse-website/impulse-clients/more.jpg" },
    { name: "navayasa", src: "http://localhost:5173/impulse-website/impulse-clients/navayasa.jpg" },
    { name: "shree-rubber", src: "http://localhost:5173/impulse-website/impulse-clients/shree-rubber.jpg" },
    { name: "vendiman", src: "http://localhost:5173/impulse-website/impulse-clients/vendiman.jpg" },
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
       {/* Businesses We Have Transformed Section */}
            <div className="relative bg-white pt-8 md:pt-16">
              <div className="wrap-clients">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 md:mb-16">
                  <div className="flex flex-col items-start mb-6 lg:mb-0">
                    <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
                      <span className="text-[#030019] lg:text-[34px] sm:text-[16px]">Brands</span>
                      <br />
                      <span className="font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[26px]">
                        That Trust Our Impulse
                      </span>
                    </h2>
                  </div>
      
                  <Button className="w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]">
                    <Link
                      to="/contact-us"
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
            <div className="relative overflow-hidden group m-0 p-0">
              <div className="flex marquee-track-logos group-hover:[animation-play-state:paused]">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={`logo-set-${setIndex}`} className="flex items-center flex-shrink-0">
                    {logos.map((logo, index) => (
                      <div
                        key={`logo-${setIndex}-${index}`}
                        className="flex-shrink-0 w-[100px] h-[70px] md:w-[140px] md:h-[90px] lg:w-[180px] lg:h-[120px] bg-white border border-gray-200 flex items-center justify-center client-logo"
                      >
                        <img className="max-w-full max-h-full object-contain" alt={logo.name} src={logo.src} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

      <style>{`
        .wrap-clients {
          max-width: 100%;
          margin: auto;
          position: relative;
          background: var(--bg);
          padding: 0rem 6rem 0rem;
        }
        @media (max-width:980px) {
          .wrap-clients { padding: 0rem 1.2rem 0rem; }
        }

        :root{
          /* Adjust speeds here */
          --strip-speed: 10s;   /* services strips (3x clones) */
          --logos-speed: 60s;   /* logos (2x clones) */
        }

        /* ========== SERVICES STRIPS (3 clones → move 33.3333%) ========== */
        @keyframes marquee3x {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .marquee-track-3x {
          display:flex;
          will-change: transform;
          animation: marquee3x var(--strip-speed) linear infinite;
          white-space: nowrap;
        }
        .marquee-track-3x-reverse {
          display:flex;
          will-change: transform;
          animation: marquee3x var(--strip-speed) linear infinite reverse;
          white-space: nowrap;
        }

        /* ========== LOGO MARQUEE (2 clones → move 50%) ========== */
        @keyframes marqueeLogos {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track-logos {
          display:flex;
          width: max-content;
          will-change: transform;
          animation: marqueeLogos var(--logos-speed) linear infinite;
        }

        /* Safety: keep timing strictly linear and avoid transitions creeping in */
        .marquee-track-3x, .marquee-track-3x * ,
        .marquee-track-3x-reverse, .marquee-track-3x-reverse * ,
        .marquee-track-logos, .marquee-track-logos * {
          animation-timing-function: linear !important;
        }

        @media (prefers-reduced-motion: reduce){
          .marquee-track-3x,
          .marquee-track-3x-reverse,
          .marquee-track-logos { animation: none; transform: none; }
        }
      `}</style>
    </section>

    
  );
};