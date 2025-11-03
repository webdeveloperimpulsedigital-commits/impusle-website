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
          height={window.innerWidth < 768 ? 50 : 80}
          width={window.innerWidth < 768 ? 35 : 55}
          color="#543d98"
          background="transparent"
          play={isVisible}
          perspective={1000}
          numbers={count.toString()}
          numberStyle={{
            fontSize: window.innerWidth < 768 ? '40px' : '70px',
            fontWeight: 'bold',
            fontFamily: 'DM Sans, Helvetica',
            lineHeight: '1',
          }}
        />
        <span className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-[40px] md:text-[70px] leading-none">
          {suffix}
        </span>
      </div>
      <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-sm md:text-base leading-relaxed max-w-[200px] mx-auto">
        {description}
      </p>
    </div>
  );
};

export const AchievementsSection = (): JSX.Element => {
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

  const achievements = [
    { target: 200, suffix: "K", description: "Keywords ranked on first page of Google" },
    { target: 10, suffix: "M+", description: "Cumulative website visits for clients per month" },
    { target: 5, suffix: "M+", description: "Avg. organic engagements on social for clients per month" },
    { target: 100, suffix: "M+", description: "Cumulative INR revenue collected for clients per month" }
  ];

  return (
    <section ref={sectionRef} className="w-full bg-[#f8f9fa] py-16 lg:py-24" data-section="achievements">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            Our Impact
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
            Numbers That Speak
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed max-w-3xl mx-auto">
            Our success is measured by the success of our clients. Here are some numbers that showcase the impact we've made together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
              <Counter
                target={achievement.target}
                suffix={achievement.suffix}
                description={achievement.description}
                isVisible={isVisible}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};