import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperSubsection = (): JSX.Element => {
  const caseStudies = [
    {
      id: 1,
      title: "Mastercard Inc.",
      image: "..//project-1-jpg.png",
      height: "h-[761.19px]",
      tags: ["PRODUCT DESIGN", "BRANDING", "CREATIVE"],
    },
    {
      id: 2,
      title: "Vendiman",
      image: "..//project-2-jpg.png",
      height: "h-[399.63px]",
      tags: ["PRODUCT DESIGN", "BRANDING", "CREATIVE"],
    },
    {
      id: 3,
      title: "ElectroMech",
      image: "..//project-3-jpg.png",
      height: "h-[399.63px]",
      tags: ["PRODUCT DESIGN", "BRANDING", "CREATIVE"],
    },
    {
      id: 4,
      title: "Hindustan Unilever Limited",
      image: "..//project-4-jpg.png",
      height: "h-[399.63px]",
      tags: ["PRODUCT DESIGN", "BRANDING", "CREATIVE"],
    },
    {
      id: 5,
      title: "Avenue Supermarts/DMart",
      image: "..//project-5-jpg.png",
      height: "h-[761.19px]",
      tags: ["PRODUCT DESIGN", "BRANDING", "CREATIVE"],
    },
    {
      id: 6,
      title: "HEM Corporation",
      image: "..//project-6-jpg.png",
      height: "h-[399.63px]",
      tags: ["PRODUCT DESIGN", "BRANDING", "CREATIVE"],
    },
  ];

  const leftColumnStudies = [caseStudies[0], caseStudies[1], caseStudies[2]];
  const rightColumnStudies = [caseStudies[3], caseStudies[4], caseStudies[5]];

  return (
    <section className="flex flex-col w-full items-start gap-[50px] relative">
      <header className="flex items-end gap-[30px] relative w-full">
        <div className="flex-1 [font-family:'DM_Sans',Helvetica] font-normal text-transparent text-[34px] tracking-[0] leading-[34px]">
          <span className="text-[#030019] font-medium leading-[60px]">
            Case Studies <br />
          </span>
          <span className="font-bold text-[#543d98] text-[52px] leading-[60px]">
            Demonstrating real-life results
          </span>
        </div>

        <Button className="h-auto bg-[#543d98] hover:bg-[#543d98]/90 rounded-xl px-5 py-5 gap-2.5">
          <span className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-base whitespace-nowrap">
            See All Case Studies
          </span>
          <ArrowRightIcon className="w-[18px] h-[18px]" />
        </Button>
      </header>

      <div className="flex flex-wrap items-start gap-[0px_50px] relative w-full">
        <div className="flex flex-col max-w-[1545px] items-start gap-[95px] relative flex-1 grow">
          {leftColumnStudies.map((study, index) => (
            <Card
              key={study.id}
              className="flex flex-col items-start gap-6 relative w-full border-none shadow-none bg-transparent"
            >
              <CardContent className="p-0 w-full">
                <div className="flex flex-col w-full z-[1] items-start relative">
                  <div
                    className={`${study.height} bg-cover bg-center bg-no-repeat relative max-w-[637.5px] w-full rounded-[30px]`}
                    style={{ backgroundImage: `url(${study.image})` }}
                  />
                </div>

                <div className="flex flex-col items-start gap-[13px] relative w-full z-0 mt-6">
                  <div className="flex flex-col items-start pt-0 pb-[0.8px] px-0 relative w-full">
                    <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-[35px] tracking-[0] leading-[40.8px] whitespace-nowrap">
                      {study.title}
                    </h3>
                  </div>

                  <div className="flex items-start gap-[8.9px] pt-0 pb-2 px-0 relative w-full flex-wrap">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="px-[18px] py-2 rounded-[20px] border-[#13160d1a] bg-transparent hover:bg-transparent"
                      >
                        <span className="[font-family:'DM_Sans',Helvetica] font-medium text-[#141414] text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                          {tag}
                        </span>
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col max-w-[1545px] items-start gap-[95px] relative flex-1 grow">
          {rightColumnStudies.map((study, index) => (
            <Card
              key={study.id}
              className="flex flex-col items-start gap-6 relative w-full border-none shadow-none bg-transparent"
            >
              <CardContent className="p-0 w-full">
                <div className="flex flex-col w-full z-[1] items-start relative">
                  <div
                    className={`${study.height} bg-cover bg-center bg-no-repeat relative max-w-[637.5px] w-full rounded-[30px]`}
                    style={{ backgroundImage: `url(${study.image})` }}
                  />
                </div>

                <div className="flex flex-col items-start gap-[13px] relative w-full z-0 mt-6">
                  <div className="flex flex-col items-start pt-0 pb-[0.8px] px-0 relative w-full">
                    <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-[35px] tracking-[0] leading-[40.8px] whitespace-nowrap">
                      {study.title}
                    </h3>
                  </div>

                  <div className="flex items-start gap-[8.9px] pt-0 pb-2 px-0 relative w-full flex-wrap">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="px-[18px] py-2 rounded-[20px] border-[#13160d1a] bg-transparent hover:bg-transparent"
                      >
                        <span className="[font-family:'DM_Sans',Helvetica] font-medium text-[#141414] text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                          {tag}
                        </span>
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
