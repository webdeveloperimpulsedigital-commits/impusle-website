import React, { useEffect, useState, useRef } from "react";
import FlipNumbers from "react-flip-numbers";

interface CounterProps {
  target: number;
  suffix: string;
  description: string;
  isVisible: boolean;
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
    <div className="text-center">
      <div className="flex items-baseline justify-center gap-1 mb-4">
        <FlipNumbers
          height={window.innerWidth < 768 ? 50 : 70}
          width={window.innerWidth < 768 ? 35 : 50}
          color="#ffffff"
          background="transparent"
          play={isVisible}
          perspective={1000}
          numbers={count.toString()}
          numberStyle={{
            fontSize: window.innerWidth < 768 ? '40px' : '64px',
            fontWeight: 'bold',
            fontFamily: 'DM Sans, Helvetica',
            lineHeight: '1',
          }}
        />
        <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-[40px] md:text-[64px] leading-none">
          {suffix}
        </span>
      </div>
      <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white/90 text-xs md:text-sm leading-relaxed max-w-[180px] mx-auto text-center">
        {description}
      </p>
    </div>
  );
};

export const StatisticsSection = (): JSX.Element => {
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

  const statistics = [
    { target: 200, suffix: "K", description: "Keywords ranked on first page of Google", display: "200K" },
    { target: 10, suffix: "M+", description: "Cumulative website visits for clients per month", display: "10M+" },
    { target: 5, suffix: "K", description: "Avg. organic engagements on social for clients per month", display: "5K" },
    { target: 100, suffix: "M+", description: "cumulative INR revenue collected for clients per month", display: "100M+" }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full py-16 lg:py-24 overflow-hidden" 
      data-section="statistics"  id="statistics-section"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/impulse-website/Rectangle-4332.png"
          alt="Team collaboration background"
          className="w-full h-full object-cover"
        />
        {/* Purple Overlay */}
        <div 
          className="absolute inset-0"
          
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Stats Grid - 4 columns on desktop, 2x2 on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statistics.map((stat, index) => (
            <div key={index} className="flex justify-center">
              <Counter
                target={stat.target}
                suffix={stat.suffix}
                description={stat.description}
                isVisible={isVisible}
              />
            </div>
          ))}
        </div>
      </div>
       <style>{`
  #statistics-section{
    padding: 12rem 0rem;
    border-top-right-radius: 55px;
    border-top-left-radius: 55px;
    border-bottom-left-radius: 55px;
    border-bottom-right-radius: 55px;
    }
      `}
  </style>
    </section>
    
  );
};