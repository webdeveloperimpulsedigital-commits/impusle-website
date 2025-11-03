import React, { useEffect, useState, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import FlipNumbers from "react-flip-numbers";

interface CounterProps {
  target: number;
  suffix: string;
  description: string;
  isVisible: boolean;
  className?: string; 
}

const Counter: React.FC<CounterProps> = ({ target, suffix, description, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setCount(target);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setCount(0);
    }
  }, [target, isVisible]);

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-baseline gap-1 mb-2">
        <FlipNumbers
          height={80}
          width={60}
          color="#543d98"
          background="transparent"
          play={isVisible}
          perspective={1000}
          numbers={count.toString()}
          numberStyle={{
            fontSize: '80px',
            fontWeight: 'bold',
            fontFamily: 'DM Sans, Helvetica',
            lineHeight: '1',
          }}
        />
        <span className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-[80px] leading-none">
          {suffix}
        </span>
      </div>
      <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-[16px] leading-relaxed max-w-[280px]">
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
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const statsData = [
    { target: 200, suffix: "K", description: "Keywords ranked on first page of Google" },
    { target: 10, suffix: "M+", description: "Cumulative website visits for clients per month" },
    { target: 5, suffix: "M+", description: "Avg. organic engagements on social for clients per month" },
    { target: 100, suffix: "M+", description: "cumulative INR revenue collected for clients per month" }
  ];

  return (
    <section ref={sectionRef} className="w-full min-h-[600px] bg-white py-16 lg:py-24" data-section="about">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="flex w-full items-start pt-[64px] pb-20 relative">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-[50px] w-[640px] pr-8">
            <h2 className="w-full [font-family:'DM_Sans',Helvetica] font-normal text-[34px] tracking-[0] leading-[34px]">
              <span className="text-[#030019] font-medium leading-[60px]">
                Know Your{" "}
              </span>
              <span className="font-medium text-[#543d98] leading-[60px]">
                <br />
              </span>
              <span className="font-bold text-[#543d98] text-[52px] leading-[60px]">
                Digital Marketing Agency
              </span>
            </h2>

            <div className="flex flex-col gap-6">
              <p className="w-full [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-[16px] tracking-[0] leading-6">
                We are a Mumbai-based 360° digital marketing agency, a
                family of go-getters who love creating brands and telling
                stories. Our team is rightfully an extension of your business,
                helping you find your unique voice, redefine your messaging,
                and stir conversations that resonate with your audience.
              </p>

              <p className="w-full [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-[16px] tracking-[0] leading-6">
                What makes us one of the top digital marketing companies?
                It's the way we marry creativity, strategy, and client
                relationship to deliver results you can data-check and rely on
                because, for us, the idea is simple: <strong>We grow when you grow.</strong>
              </p>
            </div>

            <Button className="h-[50px] bg-[#543d98] hover:bg-[#543d98]/90 rounded-xl px-6 py-3 gap-2">
              <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-base">
                Connect Now
              </span>
              <span className="">
                <img
                  className=""
                  alt="location Logo"
                  src="/impulse-website/button-icon.svg"
                /> 
              </span>
              <ArrowRightIcon className="w-[18px] h-[18px] text-white" />
            </Button>
          </div>

          {/* Right Statistics - 2x2 Grid */}
          <div className="flex-1 pl-8">
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
                  <hr style={{marginTop: '3.5rem'}}></hr>
                </div>

                <div className="counter-cell">
                  <br></br> <br></br><Counter className="two"
                    target={statsData[1].target}
                    suffix={statsData[1].suffix}
                    description={statsData[1].description}
                    isVisible={isVisible}
                  />
                  <hr style={{marginTop: '3.5rem'}}></hr>
                </div>
              </div>

              {/* Second Row */}
              <div className="counter-row">
                <div className="counter-cell">
                  <Counter
                    className="one"
                    target={statsData[2].target}
                    suffix={statsData[2].suffix}
                    description={statsData[2].description}
                    isVisible={isVisible}
                  />
                </div>

                <div className="counter-cell">
                  <br></br> <br></br> <Counter
                    target={statsData[3].target}
                    suffix={statsData[3].suffix}
                    description={statsData[3].description}
                    isVisible={isVisible}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .counter-row {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .counter-cell {
          flex: 1;
        }
        
        .counter-cell hr {
          border: none;
          height: 1px;
          background: #e5e7eb;
          margin: 0;
        }
      `}</style>
    </section>
  );
};