// ServicesSection.tsx
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

type Service = {
  number: string;
  title: string;
  description: string[];
  image: string;
};

const servicesData: Service[] = [
  {
    number: "01",
    title: "Pay-Per-Click",
    description: ["Ad copywriting", "Bid management", "Landing page optimization", "Target audience analysis"],
    image: "/impulse-website/rectangle-37-6.png",
  },
  {
    number: "02",
    title: "Content Writing Services",
    description: ["Blogs", "Website content creation", "Landing page content", "Corporate communication", "E-Commerce Content Writing"],
    image: "/impulse-website/rectangle-37-7.png",
  },
  {
    number: "03",
    title: "Production",
    description: ["Scriptwriting and Storyboarding", "Facebook and Instagram videography", "YouTube videography", "Voiceover recording"],
    image: "/impulse-website/rectangle-37-6.png",
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description: [
      "Social Media Profile Creation",
      "Social Media Marketing",
      "Online Reputation Management",
      "Campaign Creation & Management",
      "Community Building (Organic & Paid)",
      "Performance Monitoring",
    ],
    image: "/impulse-website/rectangle-37-7.png",
  },
  {
    number: "05",
    title: "Employer Branding",
    description: [
      "Social Media Management",
      "Recruitment Marketing",
      "Employee Value Proposition",
      "Employee Brand Communication Strategy",
      "Employer Brand Awareness Audits",
    ],
    image: "/impulse-website/rectangle-37-6.png",
  },
  {
    number: "06",
    title: "SEO",
    description: ["Enterprise SEO", "E-commerce SEO", "Local SEO", "B2B SEO"],
    image: "/impulse-website/rectangle-37-7.png",
  },
  {
    number: "07",
    title: "Website Development and Design",
    description: ["Website Design", "Website Development", "Website Management", "Website SEO"],
    image: "/impulse-website/rectangle-37-6.png",
  },
  {
    number: "08",
    title: "Branding",
    description: ["Brand Development", "Brand Identity Design", "Logo Design", "Corporate Identity", "Brand Style Guide", "Brand Story Building"],
    image: "/impulse-website/rectangle-37-7.png",
  },
];

export const ServicesSection = (): JSX.Element => {
  // Must equal your sticky header height (including borders/padding)
  const HEADER_OFFSET_PX = 120;

  // === Sentinel-based "one card at a time" with a single sticky card ===
  // We render N full-screen sentinel sections to create scroll length.
  // A single sticky Card sits below the header; as you scroll,
  // IntersectionObserver updates `activeIndex`, and we swap the content.
  const [activeIndex, setActiveIndex] = useState(0);
  const sentinelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the highest intersectionRatio that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const idx = Number((visible.target as HTMLElement).dataset.index);
          if (!Number.isNaN(idx)) setActiveIndex(idx);
        }
      },
      {
        root: null,
        // Subtract header so the "majority in view" is measured under it
        rootMargin: `-${HEADER_OFFSET_PX}px 0px 0px 0px`,
        threshold: [0.51], // more than half of a sentinel in view
      }
    );

    sentinelsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = servicesData[activeIndex];

  return (
    <section className="relative w-full bg-[#020018]" data-section="services">
      {/* Fixed/Sticky Header */}
      <div className="sticky top-0 w-full bg-[#030019] border-b-2 border-[#ffffff1a] px-4 md:px-[75px] py-8 md:py-[60px] z-50">
        <div className="max-w-[1290px] mx-auto relative">
          <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[24px] md:text-[34px] leading-[28px] md:leading-[34px]">
            <span className="text-[#ffffffb2] font-medium leading-[40px] md:leading-[60px]">
              Every goal needs a roadmap<br />
            </span>
            <span className="font-bold text-white text-[36px] md:text-[52px] leading-[40px] md:leading-[60px]">
              We&apos;ve got yours!
            </span>
          </div>
        </div>
      </div>

      {/* Sticky display card: stays pinned; only the content changes */}
      <div
        className="sticky z-40"
        style={{
          top: HEADER_OFFSET_PX,
          height: `calc(110vh - ${HEADER_OFFSET_PX}px)`,
        }}
      >
        <div className="h-full px-4 lg:px-[75px] flex items-stretch">
          <Card className="bg-[#030019] border-[#ffffff0d] rounded-none shadow-xl w-full" style={{ borderWidth: "0px" }}>
            <CardContent className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[30px] pt-6 lg:pt-[180px] pb-8 lg:pb-11 min-h-full">
              {/* Service Number */}
              <div className="flex flex-col max-w-[1290px] w-full lg:w-[168px] items-start justify-center px-0 lg:px-0">
                <div className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-[28px] lg:text-[35px] leading-[32px] lg:leading-[39px]">
                  {current.number}
                </div>
              </div>

              {/* Service Content */}
              <div className="flex flex-col items-start gap-4 lg:gap-[25px] flex-1 px-0 lg:px-0">
                <div className="w-full lg:w-[344px] [font-family:'DM_Sans',Helvetica] font-semibold text-white text-[28px] lg:text-[35px] leading-[32px] lg:leading-[39px]">
                  {current.title}
                </div>

                <ul className="space-y-2 lg:space-y-3">
                  {current.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-white mr-3 text-lg lg:text-xl">•</span>
                      <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base lg:text-xl leading-6 lg:leading-8">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Image */}
              <div className="flex flex-col max-w-[1290px] w-full lg:w-[480px] items-start px-0 lg:px-0">
                <img
                  className="flex-1 w-full rounded-[20px] object-cover"
                  alt="Service illustration"
                  src={current.image}
                />
              </div>

              {/* Arrow Icon */}
              <div className="flex w-60 items-start justify-center lg:justify-end pt-2 lg:pt-[7px]">
                <img className="w-[56px] lg:w-[80px] object-contain" alt="Next" src="/impulse-website/Arrow.png" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Scroll space + sentinels (one full-viewport per card) */}
      <div>
        {servicesData.map((_, idx) => (
          <div
            key={idx}
            data-index={idx}
            ref={(el) => (sentinelsRef.current[idx] = el)}
            style={{ height: "100vh" }}
          />
        ))}
      </div>
    </section>
  );
};