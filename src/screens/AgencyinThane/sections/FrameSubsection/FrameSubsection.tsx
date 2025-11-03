import { ArrowRightIcon } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { Button } from "../../../../components/ui/button";

const statisticsData = [
  {
    value: "200K",
    description: "Keywords ranked on first page of Google",
    finalValue: 200000,
  },
  {
    value: "10M+",
    description: "Cumulative website visits for clients per month",
    finalValue: 10000000,
  },
  {
    value: "5M+",
    description: "Avg. organic engagements on social for clients per month",
    finalValue: 5000000,
  },
  {
    value: "100M+",
    description: "cumulative INR revenue collected for clients per month",
    finalValue: 100000000,
  },
];

const CountUpNumber = ({ finalValue, suffix = "", duration = 2000 }: { finalValue: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`count-${finalValue}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [finalValue, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(finalValue * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, finalValue, duration]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return Math.floor(num / 1000000) + "M+";
    } else if (num >= 1000) {
      return Math.floor(num / 1000) + "K";
    }
    return num.toString();
  };

  return (
    <span id={`count-${finalValue}`} className="tabular-nums">
      {formatNumber(count)}{suffix}
    </span>
  );
};

export const FrameSubsection = (): JSX.Element => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="w-full min-h-[820px] bg-white rounded-[60px_60px_0px_0px] relative overflow-hidden" data-section="about">
      <div className="max-w-[1280px] mx-auto px-5 py-[60px] lg:py-[80px]">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[50px] lg:gap-[100px] items-start">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-[50px]">
            <div className="flex flex-col items-start gap-[30px]">
              <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[24px] sm:text-[28px] lg:text-[34px] tracking-[0] leading-[28px] sm:leading-[34px]">
                <span className="text-[#030019] font-medium leading-[32px] sm:leading-[40px] lg:leading-[50px]">
                  Know Your
                  <br />
                </span>
                <span className="font-bold text-[#543d98] text-[32px] sm:text-[42px] lg:text-[52px] leading-[36px] sm:leading-[46px] lg:leading-[56px]">
                  Digital Marketing Agency
                </span>
              </div>

              <div className="opacity-90 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-sm sm:text-base lg:text-lg tracking-[0] leading-6 sm:leading-7 lg:leading-8 max-w-[500px]">
                We are a Mumbai-based 360° digital marketing agency, a
                family of go-getters who love creating brands and telling
                stories. Our team is rightfully an extension of your business,
                helping you find your unique voice, redefine your messaging,
                and stir conversations that resonate with your audience.
                <br />
                <br />
                What makes us one of the top digital marketing companies?
                It&apos;s the way we marry creativity, strategy, and client
                relationship to deliver results you can data-check and rely on
                because, for us, the idea is simple: <strong>We grow when you grow.</strong>
              </div>
            </div>

            <Button className="inline-flex h-[50px] items-center justify-center gap-2.5 px-5 py-[15px] bg-[#543d98] rounded-xl hover:bg-[#543d98]/90">
              <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Connect Now
              </span>
              <ArrowRightIcon className="w-[18px] h-[18px]" />
            </Button>
          </div>

          {/* Right Statistics */}
          <div className="relative w-full lg:w-auto">
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* 200K - Top Left */}
              <div className="flex flex-col items-start text-left order-1">
                <div className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-[40px] sm:text-[50px] lg:text-[70px] tracking-[0] leading-[40px] sm:leading-[50px] lg:leading-[70px]">
                  <CountUpNumber finalValue={200000} />
                </div>
                <div className="opacity-90 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-xs sm:text-sm tracking-[0] leading-4 sm:leading-5 mt-2 max-w-[140px] sm:max-w-[160px]">
                  Keywords ranked on first page of Google
                </div>
              </div>

              {/* 10M+ - Top Right */}
              <div className="flex flex-col items-end text-right order-2">
                <div className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-[40px] sm:text-[50px] lg:text-[70px] tracking-[0] leading-[40px] sm:leading-[50px] lg:leading-[70px]">
                  <CountUpNumber finalValue={10000000} />
                </div>
                <div className="opacity-90 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-xs sm:text-sm tracking-[0] leading-4 sm:leading-5 mt-2 max-w-[140px] sm:max-w-[160px] text-right">
                  Cumulative website visits for clients per month
                </div>
              </div>

              {/* 5M+ - Bottom Left */}
              <div className="flex flex-col items-start text-left order-3">
                <div className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-[40px] sm:text-[50px] lg:text-[70px] tracking-[0] leading-[40px] sm:leading-[50px] lg:leading-[70px]">
                  <CountUpNumber finalValue={5000000} />
                </div>
                <div className="opacity-90 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-xs sm:text-sm tracking-[0] leading-4 sm:leading-5 mt-2 max-w-[140px] sm:max-w-[160px]">
                  Avg. organic engagements on social for clients per month
                </div>
              </div>

              {/* 100M+ - Bottom Right */}
              <div className="flex flex-col items-end text-right order-4">
                <div className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-[40px] sm:text-[50px] lg:text-[70px] tracking-[0] leading-[40px] sm:leading-[50px] lg:leading-[70px]">
                  <CountUpNumber finalValue={100000000} />
                </div>
                <div className="opacity-90 [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-xs sm:text-sm tracking-[0] leading-4 sm:leading-5 mt-2 max-w-[140px] sm:max-w-[160px] text-right">
                  cumulative INR revenue collected for clients per month
                </div>
              </div>
            </div>

            {/* Decorative Lines */}
            <div className="hidden lg:block">
              {/* Horizontal line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#543d98]/20 to-transparent transform -translate-y-1/2" />
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#543d98]/20 to-transparent transform -translate-x-1/2" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <img
        className="absolute w-[150px] h-[150px] sm:w-[179px] sm:h-[179px] bottom-0 right-[20px] sm:right-[50px] bg-blend-difference opacity-30"
        alt="White"
        src="/white-2.png"
      />
    </section>
  );
};