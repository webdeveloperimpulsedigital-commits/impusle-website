import React from "react";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const FrameWrapperSubsection = (): JSX.Element => {
  const firstRowProjects = [
    {
      src: "/project-1-jpg.png",
      alt: "Project 1",
    },
    {
      src: "/project-4-jpg.png",
      alt: "Project 4",
    },
    {
      src: "/project-2-jpg.png",
      alt: "Project 2",
    },
    {
      src: "/rectangle-19-3.png",
      alt: "Project",
    },
    {
      src: "/project-5-jpg.png",
      alt: "Project 5",
    },
    {
      src: "/project-3-jpg.png",
      alt: "Project 3",
    },
    {
      src: "/project-6-jpg.png",
      alt: "Project 6",
    },
  ];

  const secondRowProjects = [
    {
      src: "/project-4-jpg.png",
      alt: "Project 4",
    },
    {
      src: "/project-5-jpg.png",
      alt: "Project 5",
    },
    {
      src: "/project-3-jpg.png",
      alt: "Project 3",
    },
    {
      src: "/project-1-jpg.png",
      alt: "Project 1",
    },
    {
      src: "/project-6-jpg.png",
      alt: "Project 6",
    },
    {
      src: "/project-2-jpg.png",
      alt: "Project 2",
    },
    {
      src: "/rectangle-19-13.png",
      alt: "Project",
    },
  ];

  return (
    <section className="w-full bg-[#543d980d] shadow-[0px_4px_4px_#00000040,0px_4px_4px_#00000040] py-[70px]">
      <div className="max-w-[1280px] mx-auto px-5">
        <div className="flex flex-col items-start gap-[30px] mb-[50px]">
          <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[34px] tracking-[0] leading-[34px]">
            <span className="text-[#030019] font-medium leading-[60px]">
              Our Results
              <br />
            </span>
            <span className="font-bold text-[#543d98] text-[52px] leading-[60px]">
              Speak for Us
            </span>
          </div>
          <div className="max-w-[1182px] opacity-90 [font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-[26px] tracking-[0] leading-10">
            Our clients have heard it, experienced it, and loved it. Now,
            it&apos;s your turn. Take a look at what our digital marketing
            agency has created and achieved out of our love for creating brands
            &amp; telling their stories. We promise to level it up if you are
            ready too.
          </div>
        </div>

        <div className="flex flex-col gap-[15px]">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-4 pb-4">
              {firstRowProjects.map((project, index) => (
                <div key={`first-row-${index}`} className="flex-shrink-0">
                  <img
                    className="w-[516px] h-[516px] rounded-[30px] object-cover"
                    alt={project.alt}
                    src={project.src}
                  />
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-4 pb-4">
              {secondRowProjects.map((project, index) => (
                <div key={`second-row-${index}`} className="flex-shrink-0">
                  <img
                    className="w-[516px] h-[516px] rounded-[30px] object-cover"
                    alt={project.alt}
                    src={project.src}
                  />
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};
