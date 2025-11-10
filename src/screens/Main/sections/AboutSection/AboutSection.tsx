import React, { useEffect, useState, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import FlipNumbers from "react-flip-numbers";
import { Link } from "react-router-dom";

interface CounterProps {
  target: number;
  suffix: string;
  description: string;
  isVisible: boolean;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({
  target,
  suffix,
  description,
  isVisible,
}) => {
  const [count, setCount] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setCount(target), 300);
      return () => clearTimeout(timer);
    } else {
      setCount(0);
    }
  }, [target, isVisible]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center md:items-start w-full p-2 md:p-0">
      {/* number row */}
      <div className="counter-num flex items-end gap-1 mb-2 whitespace-nowrap">
        <div className="flex items-baseline">
          {/* Split number to make '.' perfectly aligned */}
          {count.toString().split("").map((char, idx) =>
            char === "." ? (
              <span
                key={idx}
                style={{
                  color: "#543d98", // brand violet
                  fontSize: isMobile ? "30px" : "68px",
                  fontWeight: "bold",
                  fontFamily: "DM Sans, Helvetica",
                  lineHeight: "0.8",
                  margin: "0 3px",
                  position: "relative",
                  top: isMobile ? "-10px" : "-16px", // ✅ precise mid alignment
                  display: "inline-block",
                }}
              >
                {char}
              </span>
            ) : (
              <FlipNumbers
                key={idx}
                height={isMobile ? 26 : 88}
                width={isMobile ? 18 : 40}
                color="#543d98"
                background="transparent"
                play={isVisible}
                perspective={1000}
                numbers={char}
                numberStyle={{
                  fontSize: isMobile ? "26px" : "60px",
                  fontWeight: "bold",
                  fontFamily: "DM Sans, Helvetica",
                  lineHeight: "1",
                }}
              />
            )
          )}
        </div>

        <span className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-[22px] md:text-[80px] leading-[1] md:leading-none pb-[2px] md:pb-0">
          {suffix}
        </span>
      </div>

      <div className="counter-desc [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-[11px] md:text-[12px] lg:text-[18px] leading-relaxed text-center md:text-left max-w-[180px] md:max-w-none">
        {description}
      </div>
    </div>
  );
};

export const AboutSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const statsData = [
    {
      target: 3.5,
      suffix: "X",
      description:
        "Business Growth achieved for clients through integrated digital strategies.",
    },
    {
      target: 100,
      suffix: "+",
      description:
        "Brands Partnered with us to scale their digital presence.",
    },
    {
      target: 10,
      suffix: "k+",
      description:
        "cups of coffee enjoyed with our clients while building their digital success stories.",
    },
    {
      target: 120,
      suffix: "+",
      description:
        "years of collective experience in building, scaling, & transforming brands digitally.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-0 md:py-16 lg:py-0 mt-0"
      data-section="about"
      id="sec-border"
    >
      <div className="wrap-abt">
        <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
          <span className="text-[#030019] lg:text-[34px] sm:text-[16px]">
            Impulse Digital{" "}
          </span>
          <br />
          <span className="font-bold text-[#543d98] lg:text-[49px] xl:text-[52px] md:text-[52px] sm:text-[26px]">
            Where Brands Go from Seen<br></br>To Remembered
          </span>
        </h2>
      </div>

      <div className="wrap-abt1 flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Content Section */}
        <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-[540px] xl:w-[670px]">
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="pt-5 [font-family:'DM_Sans',Helvetica] text-[#030019] sm:text-[12px] md:text-[24px] lg:text-[24px] leading-relaxed text-justify">
              We are a Mumbai-based 360° digital marketing agency, a family of
              go-getters who love creating brands and telling stories. Our team
              is rightfully an extension of your business, helping you find your
              unique voice, redefine your messaging, and stir conversations that
              resonate with your audience.
            </p>

            <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] sm:text-[12px] md:text-[24px] lg:text-[24px]  leading-relaxed text-justify">
              What makes us one of the top digital marketing companies? It's the
              way we marry creativity, strategy, and client relationship to
              deliver results you can data-check and rely on because, for us,
              the idea is simple: We grow when you grow.
            </p>
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

        {/* Statistics Grid */}
        <div className="flex-1 abt-counter">
          <div className="grid grid-cols-1">
            <div className="counter-row">
              <div className="counter-cell">
                <Counter
                  target={statsData[0].target}
                  suffix={statsData[0].suffix}
                  description={statsData[0].description}
                  isVisible={isVisible}
                />
                <hr className="abt-counter" />
              </div>

              <div className="counter-cell">
                <br /> <br />
                <Counter
                  target={statsData[1].target}
                  suffix={statsData[1].suffix}
                  description={statsData[1].description}
                  isVisible={isVisible}
                />
                <hr className="abt-counter" />
              </div>
            </div>

            <div className="counter-row">
              <div className="counter-cell twoo">
                <Counter
                  target={statsData[2].target}
                  suffix={statsData[2].suffix}
                  description={statsData[2].description}
                  isVisible={isVisible}
                />
              </div>

              <div className="counter-cell">
                <br /> <br />
                <Counter
                  target={statsData[3].target}
                  suffix={statsData[3].suffix}
                  description={statsData[3].description}
                  isVisible={isVisible}
                />
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>

      {/* ✅ Mobile-specific CSS fix */}
      <style>{`
      .wrap-abt{max-width:100%;margin:auto;position:relative;background:var(--bg);padding:6rem 6rem 0rem}
      .wrap-abt1{max-width:100%;margin:auto;position:relative;background:var(--bg);padding:0rem 6rem 6rem}

      @media (max-width:1023.98px){
        .abt-counter .grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }
        .counter-row { display: contents; }
        .counter-cell { padding: 0; }
        .counter-cell br { display: none; }
        hr.abt-counter { display: none; }

        .counter-num {
          min-height: 38px;  
          margin-bottom: 8px; 
        }
        .counter-desc {
          margin-top: 8px;
          line-height: 1.4;
        }
      }

      @media (max-width:980px){
        .wrap-abt{padding:3rem 1.5rem 0rem}
        .wrap-abt1{padding:0rem 1.5rem 6rem}
      }
      `}</style>
    </section>
  );
};
