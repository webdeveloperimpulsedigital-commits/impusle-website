import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

export const ScrollingStripsSection = (): JSX.Element => {
  const servicesSecond = [
    "Services",
    "Production",
    "Social Media Marketing",
    "Content Strategy",
    "Digital Marketing",
    "Brand Strategy",
  ];

  const logos = [
    { name: "abg-chemical", src: "./impulse-clients/abg-chemical.jpg" },
    { name: "hindalco", src: "./impulse-clients/hindalco.jpg" },
    { name: "abps", src: "./impulse-clients/abps.jpg" },
    { name: "amazone", src: "./impulse-clients/amazone.jpg" },
    { name: "chings", src: "./impulse-clients/chings.jpg" },
    { name: "qure-ai", src: "./impulse-clients/qure-ai.jpg" },
    { name: "tjsb", src: "./impulse-clients/tjsb.jpg" },
    { name: "tata-soulful", src: "./impulse-clients/tata-soulful.jpg" },
    { name: "tata", src: "./impulse-clients/tata.jpg" },
    { name: "birla-celilues", src: "./impulse-clients/birla-celilues.jpg" },
    { name: "croda", src: "./impulse-clients/croda.jpg" },
    { name: "aster", src: "./impulse-clients/aster.jpg" },
    { name: "automag", src: "./impulse-clients/automag.jpg" },
    { name: "datar", src: "./impulse-clients/datar.jpg" },
    { name: "d-mart", src: "./impulse-clients/d-mart.jpg" },
    { name: "dts", src: "./impulse-clients/dts.jpg" },
    { name: "emech", src: "./impulse-clients/emech.jpg" },
    { name: "enpro", src: "./impulse-clients/enpro.jpg" },
    { name: "godrej", src: "./impulse-clients/godrej.jpg" },
    { name: "goma", src: "./impulse-clients/goma.jpg" },
    { name: "hdfc", src: "./impulse-clients/hdfc.jpg" },
    { name: "hem", src: "./impulse-clients/hem.jpg" },
    { name: "jankalyan", src: "./impulse-clients/jankalyan.jpg" },
    { name: "lg", src: "./impulse-clients/lg.jpg" },
    { name: "mastercard", src: "./impulse-clients/mastercard.jpg" },
    { name: "more", src: "./impulse-clients/more.jpg" },
    { name: "navayasa", src: "./impulse-clients/navayasa.jpg" },
    { name: "ola", src: "./impulse-clients/ola.jpg" },
    { name: "shree-rubber", src: "./impulse-clients/shree-rubber.jpg" },
    { name: "vendiman", src: "./impulse-clients/vendiman.jpg" },
  ];

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const rect = videoRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = 1 - rect.top / windowHeight;
          const zoom = 1 + progress * 0.3;
          setScale(zoom);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full bg-white overflow-hidden"
      data-section="clients"
    >
      {/* Scrolling Strips */}
      <div className="relative h-[100px] md:h-[200px] w-full">
        {/* Black Strip */}
        <div className="absolute lg:top-[100px] md:top-[100px] left-0 w-full h-[80px] md:h-[100px] bg-[#000000] transform skew-y-3 origin-bottom-left overflow-hidden z-999">
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
                    src="vector-6.png"
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Businesses We Have Transformed Section */}
      <div className="relative bg-white pt-8 md:pt-16">
        <div className="wrap-clients">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 md:mb-16">
            <div className="flex flex-col items-start mb-6 lg:mb-0">
              <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
                <span className="text-[#030019] lg:text-[34px] sm:text-[16px]">
                  Brands
                </span>
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
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, setIndex) => (
            <div
              key={`logo-set-${setIndex}`}
              className="flex items-center flex-shrink-0"
            >
              {logos.map((logo, index) => (
                <div
                  key={`logo-${setIndex}-${index}`}
                  className="flex-shrink-0 w-[100px] h-[70px] md:w-[140px] md:h-[90px] lg:w-[180px] lg:h-[120px] bg-white border border-gray-200 flex items-center justify-center client-logo"
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

      <style>{`
        .wrap-clients {
          max-width: 100%;
          margin: auto;
          position: relative;
          background: var(--bg);
          padding: 0rem 6rem 0rem;
        }

        @media (max-width:980px) {
          .wrap-clients {
            padding: 0rem 1.2rem 0rem;
          }
        }

        /* Infinite logo marquee */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 60s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
