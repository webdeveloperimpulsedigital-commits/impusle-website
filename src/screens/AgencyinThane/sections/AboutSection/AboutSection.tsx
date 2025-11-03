import React, { useEffect, useState, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import FlipNumbers from "react-flip-numbers";
import { Link } from "react-router-dom";

// ------------------- Counter Component -------------------
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

  // Animate count when visible
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setCount(target), 300);
      return () => clearTimeout(timer);
    } else {
      setCount(0);
    }
  }, [target, isVisible]);

  // Detect mobile screen dynamically
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center md:items-start w-full p-4 md:p-0">
      <div className="flex items-baseline gap-1 mb-2">
        <FlipNumbers
          height={isMobile ? 30 : 88}
          width={isMobile ? 20 : 40}
          color="#543d98"
          background="transparent"
          play={isVisible}
          perspective={1000}
          numbers={count.toString()}
          numberStyle={{
            fontSize: isMobile ? "30px" : "60px",
            fontWeight: "bold",
            fontFamily: "DM Sans, Helvetica",
            lineHeight: "1",
          }}
        />
        <span className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-[32px] md:text-[80px] leading-none">
          {suffix}
        </span>
      </div>
      <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] sm:text-[10px] lg:text-[18px] md:text-[12px] leading-relaxed text-center md:text-left max-w-[120px] md:max-w-none">
        {description}
      </div>
    </div>
  );
};

// ------------------- AboutSection Component -------------------
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
      target: 200,
      suffix: "K",
      description: "Keywords ranked on first page of Google",
    },
    {
      target: 10,
      suffix: "M+",
      description: "Cumulative website visits for clients per month",
    },
    {
      target: 5,
      suffix: "M+",
      description: "Avg. organic engagements on social for clients per month",
    },
    {
      target: 100,
      suffix: "M+",
      description: "Cumulative INR revenue collected for clients per month",
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
            <span className="text-[#030019]  lg:text-[34px] sm:text-[16px]">
              Know Your{" "}
            </span>
            <br />
            <span className="font-bold text-[#543d98] lg:text-[49px] xl:text-[52px] md:text-[52px] sm:text-[26px]">
              Digital Marketing Agency
            </span>
      </h2>
    </div>
  <div className="wrap-abt1 flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Content Section */}
        <div className="flex flex-col gap-6 md:gap-8 w-full lg:w-[540px] xl:w-[670px]">
         

          <div className="flex flex-col gap-4 md:gap-6">
           <p className="pt-5 [font-family:'DM_Sans',Helvetica] text-[#030019] sm:text-[12px] md:text-[24px] lg:text-[24px] leading-relaxed text-justify">
             At Impulse Digital, we’re more than just a digital marketing agency, we’re growth partners for brands that want to make their mark online. Our approach blends data-driven strategies, customer-centric insights, and realistic timelines to ensure your digital presence aligns seamlessly with your business goals. 
            </p>

            <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] sm:text-[12px] md:text-[24px] lg:text-[24px]  leading-relaxed text-justify">
               We believe in long-term partnerships over one-time transactions. By deeply understanding our clients’ industries and speaking their language, we design digital strategies that don’t just create noise but deliver measurable results. As a trusted digital marketing agency in Thane, we simplify the ever-expanding digital landscape for our clients, making it easier to boost visibility, increase engagement, and win on social media. 
            </p>
             <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] sm:text-[12px] md:text-[24px] lg:text-[24px]  leading-relaxed text-justify">
              So, why keep searching for digital marketing solutions when the answer is right here? Choose Impulse Digital, your Digital Marketing Agency in Thane.  
            </p>
          </div>

          <Button className="w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]">

              <Link to="/contact" className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base group-hover:text-[#543d98] transition-colors duration-300">
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
            {/* First Row */}
            <div className="counter-row">
              <div className="counter-cell">
                <Counter
                  className="one"
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
                  className="two"
                  target={statsData[1].target}
                  suffix={statsData[1].suffix}
                  description={statsData[1].description}
                  isVisible={isVisible}
                />
                <hr className="abt-counter" />
              </div>
            </div>

            {/* Second Row */}
            <div className="counter-row">
              <div className="counter-cell twoo">
                <Counter
                  className="one"
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
            </div><br></br>
          </div>
        </div>
      </div>

      {/* Mobile-only layout overrides for the stats grid */}
      <style>{`
      .wrap-abt{max-width:100%;margin:auto;position:relative;background:var(--bg);padding:6rem 6rem 0rem}
      .wrap-abt1{max-width:100%;margin:auto;position:relative;background:var(--bg);padding:0rem 6rem 6rem}
        @media (max-width: 1023.98px) {
          /* Make stats 2x2 on mobile */
          .abt-counter .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px;
          }
          .counter-row {
            display: contents;
          }
          .counter-cell {
            padding: 0;
          }
          .counter-cell br {
            display: none;
          }
          hr.abt-counter {
            display: none;
          }
        }

          @media (max-width:980px){
          .wrap-abt{max-width:100%;margin:auto;position:relative;background:var(--bg);padding:3rem 1.5rem 0rem}
      .wrap-abt1{max-width:100%;margin:auto;position:relative;background:var(--bg);padding:0rem 1.5rem 6rem}
      .p-4 {
    padding: 1rem;
}
          }
      `}</style>
    </section>
  );
};
