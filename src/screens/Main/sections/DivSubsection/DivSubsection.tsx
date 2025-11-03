import React from "react";

export const DivSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[50px] relative">
      <div className="flex-col items-start gap-[30px] self-stretch w-full flex-[0_0_auto] flex relative">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-transparent text-[34px] text-center tracking-[0] leading-[34px]">
          <span className="text-[#030019] font-medium leading-[60px]">
            Testimonial
            <br />
          </span>

          <span className="font-bold text-[#543d98] text-[52px] leading-[60px]">
            Real Client Stories
          </span>
        </div>

        <div className="relative self-stretch opacity-90 [font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-[26px] text-center tracking-[0] leading-10">
          You&apos;ve heard our side of the story. Only fair you hear our
          client&apos;s too. The truth is we have not worked for them. Instead,
          we have worked with them—to create stories that audiences recall,
          campaigns they&apos;ve loved, and impact that can be measured.
          Here&apos;s to their stories in their words.
        </div>
      </div>
    </section>
  );
};
