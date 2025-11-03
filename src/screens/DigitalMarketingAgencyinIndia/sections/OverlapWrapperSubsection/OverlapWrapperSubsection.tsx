import React from "react";

export const OverlapWrapperSubsection = (): JSX.Element => {
  const services = [
    "Employer Branding",
    "SEO",
    "Website Development and Design",
    "Branding",
    "Pay-Per-Click",
    "Content Writing Services",
    "Production",
    "Social Media Marketing",
  ];

  return (
    <section className="relative w-full h-[545px] overflow-hidden bg-[linear-gradient(182deg,rgba(255,255,255,0)_30%,rgba(255,255,255,1)_30%)]">
      <div className="relative w-full h-[474px]">
        <img
          className="absolute w-full max-w-[1417px] h-[164px] top-0 left-1/2 transform -translate-x-1/2"
          alt="Rectangle"
          src="/rectangle-39.png"
        />

        <div className="flex w-full max-w-[1524px] items-center gap-10 p-[50px] absolute top-[104px] left-1/2 transform -translate-x-1/2 bg-[#543d98] overflow-hidden rotate-3">
          {services.map((service, index) => (
            <React.Fragment key={`service-1-${index}`}>
              <div className="relative whitespace-nowrap [font-family:'DM_Sans',Helvetica] font-semibold text-[#fcfbf8] text-6xl tracking-[0] leading-[110.0px]">
                {service}
              </div>
              {index < services.length - 1 && (
                <img
                  className="relative w-[48.4px] h-[49.34px] -rotate-3 flex-shrink-0"
                  alt="Vector"
                  src="/vector-2-2.svg"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex w-full max-w-[1524px] items-center gap-10 p-[50px] absolute top-[234px] left-1/2 transform -translate-x-1/2 bg-[#030019] overflow-hidden border border-solid border-[#090f11] rotate-[-7deg]">
          {services.map((service, index) => (
            <React.Fragment key={`service-2-${index}`}>
              <div className="relative whitespace-nowrap [font-family:'DM_Sans',Helvetica] font-semibold text-[#fcfbf8] text-6xl tracking-[0] leading-[110.0px]">
                {service}
              </div>
              {index < services.length - 1 && (
                <img
                  className="relative w-[46px] h-[47px] rotate-[7deg] flex-shrink-0"
                  alt="Vector"
                  src="/vector-7.svg"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
