import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const Frame2Subsection = (): JSX.Element => {
  return (
    <section className="flex items-center gap-[50px] w-full relative">
      <img
        className="w-[691px] h-[575px] rounded-[30px] object-cover flex-shrink-0"
        alt="Rectangle"
        src="/rectangle-32.png"
      />

      <div className="flex flex-col w-[539px] items-start gap-[50px] flex-shrink-0">
        <div className="w-fit [font-family:'DM_Sans',Helvetica] font-normal text-transparent text-[34px] tracking-[0] leading-[34px]">
          <span className="text-[#ffffffb2] font-medium leading-[60px]">
            Our
            <br />
          </span>

          <span className="font-bold text-white text-[52px] leading-[60px]">
            Resources
          </span>
        </div>

        <div className="flex flex-col items-start gap-[50px] self-stretch w-full">
          <div className="flex flex-col items-start gap-[15px] self-stretch w-full">
            <p className="self-stretch opacity-90 [font-family:'DM_Sans',Helvetica] font-medium text-white text-[26px] tracking-[0] leading-10">
              We have always believed that knowledge is best shared. Check our
              curation of industry-specific ebooks, videos, and powerpoints to
              learn more, apply better, and achieve more.
            </p>
          </div>
        </div>

        <Button className="w-[156px] h-[50px] bg-white hover:bg-gray-100 text-[#543d98] font-bold text-base rounded-xl px-5 py-[15px] gap-2.5 [font-family:'DM_Sans',Helvetica]">
          Explore
          <ArrowRightIcon className="w-[18px] h-[18px]" />
        </Button>
      </div>
    </section>
  );
};
