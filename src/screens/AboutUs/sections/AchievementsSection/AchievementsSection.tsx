import React, { useEffect, useState, useRef } from "react";
import FlipNumbers from "react-flip-numbers";

interface CounterProps {
  target: number;
  suffix: string;
  description: string;
  isVisible: boolean;
  decimal?: boolean;
}

const Counter: React.FC<CounterProps> = ({
  target,
  suffix,
  description,
  isVisible,
  decimal = false,
}) => {
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

  const displayNumber = decimal ? target.toFixed(1) : count.toString();

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
          numbers={displayNumber}
          numberStyle={{
            fontSize: window.innerWidth < 768 ? "40px" : "70px",
            fontWeight: "bold",
            fontFamily: "DM Sans, Helvetica",
            lineHeight: "1",
          }}
        />
        <span className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-[40px] md:text-[70px] leading-none">
          {suffix}
        </span>
      </div>
      <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-sm md:text-base leading-relaxed max-w-[250px] mx-auto">
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
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const achievements = [
    {
      target: 3.5,
      suffix: "X",
      description:
        "Business growth achieved for clients through integrated digital strategies.",
      decimal: true,
    },
    {
      target: 100,
      suffix: "+",
      description:
        "Brands partnered with us to scale their digital presence.",
    },
    {
      target: 10,
      suffix: "K+",
      description:
        "Cups of coffee enjoyed with our clients while building their digital success stories.",
    },
    {
      target: 120,
      suffix: "+",
      description:
        "Years of collective experience in building, scaling, & transforming brands digitally.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#f8f9fa] py-16 lg:py-24"
      data-section="achievements"
    >
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
            We’ve helped brands grow, scale, and build lasting impact — and these numbers
            reflect our journey of delivering measurable success through creativity and strategy.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100"
            >
              <Counter
                target={achievement.target}
                suffix={achievement.suffix}
                description={achievement.description}
                isVisible={isVisible}
                decimal={achievement.decimal}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
