import React from "react";

export const DiagonalServicesSection = (): JSX.Element => {
  const services = [
    "Employer Branding",
    "SEO", 
    "Website Development and Design",
    "Social Media Marketing",
    "Production",
    "Content Writing Services",
    "Pay-Per-Click",
    "Branding"
  ];

  return (
    <section className="relative w-full h-[300px] overflow-hidden bg-white">
      {/* First Strip - Purple */}
      <div 
        className="absolute w-[200%] h-[120px] bg-gradient-to-r from-[#7c3aed] to-[#a855f7] transform rotate-[8deg] top-[20px] -left-[50%] flex items-center"
        style={{
          animation: 'slide-right-diagonal 25s linear infinite'
        }}
      >
        <div className="flex items-center gap-12 whitespace-nowrap px-8">
          {[...services, ...services].map((service, index) => (
            <React.Fragment key={`strip1-${index}`}>
              <span className="text-white font-bold text-2xl [font-family:'DM_Sans',Helvetica]">
                {service}
              </span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">L</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Second Strip - Dark Navy */}
      <div 
        className="absolute w-[200%] h-[120px] bg-gradient-to-r from-[#1e1b4b] to-[#312e81] transform rotate-[-5deg] top-[150px] -left-[50%] flex items-center"
        style={{
          animation: 'slide-left-diagonal 30s linear infinite'
        }}
      >
        <div className="flex items-center gap-12 whitespace-nowrap px-8">
          {[...services, ...services].map((service, index) => (
            <React.Fragment key={`strip2-${index}`}>
              <span className="text-white font-bold text-2xl [font-family:'DM_Sans',Helvetica]">
                {service}
              </span>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-navy-600 font-bold text-sm">L</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};