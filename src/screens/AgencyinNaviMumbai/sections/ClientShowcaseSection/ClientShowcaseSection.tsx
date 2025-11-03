import React from "react";
import { Button } from "../../../../components/ui/button";

export const ClientShowcaseSection = (): JSX.Element => {
  const clients = [
    { name: "MasterCard", logo: "/project-1-jpg.png" },
    { name: "Amazon", logo: "/project-2-jpg.png" },
    { name: "OLA", logo: "/project-3-jpg.png" },
    { name: "DMart", logo: "/project-4-jpg.png" },
    { name: "HDFC", logo: "/project-5-jpg.png" },
    { name: "HUL", logo: "/project-6-jpg.png" },
    { name: "Vendiman", logo: "/rectangle-37-6.png" },
    { name: "ElectroMech", logo: "/rectangle-37-7.png" },
  ];

  // Duplicate the array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="w-full bg-white py-16 lg:py-24 overflow-hidden" data-section="clients">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16 mb-8">
          <div className="flex flex-col items-start gap-2 flex-1">
            <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#030019] text-lg lg:text-xl tracking-[0] leading-6 lg:leading-7">
              Businesses
            </div>
            <div className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl lg:text-4xl xl:text-5xl tracking-[0] leading-tight">
              We Have Transformed
            </div>
          </div>
        </div>

        {/* Sliding Logo Carousel */}
        <div className="relative w-full overflow-hidden py-4">
          <div 
            className="flex items-center gap-16"
            style={{
              width: 'calc(200% + 64px)', // Account for gaps
              animation: 'slide-right 30s linear infinite'
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`client-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-[180px] h-[90px] bg-white rounded-lg hover:bg-gray-50 transition-colors group shadow-sm border border-gray-100"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-[140px] max-h-[60px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  style={{ filter: 'grayscale(100%) brightness(0) saturate(100%)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};