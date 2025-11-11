import React from "react";

interface CaseStudy {
  id: string;
  name: string;
  image: string;
  link: string;
}

export const ServicesCatalogSection = (): JSX.Element => {
  const caseStudies: CaseStudy[] = [
    { id: "mastercard", name: "Mastercard Inc.", image: "/impulse-website/case-stidy3.png", link: "/case-studies/mastercard" },
    { id: "hul", name: "Hindustan Unilever Limited", image: "/impulse-website/case-stidy6.png", link: "/case-studies/hul" },
    { id: "vendiman", name: "Vendiman", image: "/impulse-website/case-stidy2.png", link: "/case-studies/vendiman" },
    { id: "dmart", name: "Avenue Supermarts / DMart", image: "/impulse-website/case-stidy6.png", link: "/case-studies/dmart" },
    { id: "electromech", name: "ElectroMech", image: "/impulse-website/case-stidy2.png", link: "/case-studies/electromech" },
    { id: "hem", name: "HEM Corporation", image: "/impulse-website/case-stidy6.png", link: "/case-studies/hem-corporation" },
    { id: "rainbow", name: "Rainbow International School", image: "/impulse-website/case-stidy3.png", link: "/case-studies/rainbow" },
    { id: "abg", name: "Aditya Birla Group", image: "/impulse-website/case-stidy6.png", link: "/case-studies/aditya-birla-group" },
    { id: "tjsb", name: "TJSB Bank", image: "/impulse-website/case-stidy2.png", link: "/case-studies/tjsb-bank" },
    { id: "studioorbis", name: "Studio Orbis", image: "/impulse-website/case-stidy3.png", link: "/case-studies/studio-orbis" },
  ];

  return (
    <section className="w-full bg-white py-20 lg:py-28" data-section="case-studies">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-left mb-14 lg:mb-20">
          <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-sm md:text-base mb-1">
            Case Studies
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-2xl md:text-3xl lg:text-4xl mb-6">
            Playbook of Proven Wins
          </h2>
        </div>

        {/* Two-column grid layout with alternating heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {caseStudies.map((cs, i) => {
            const isEven = i % 2 === 0;
            const imageHeight = isEven ? "h-[750px]" : "h-[620px]"; // taller & shorter alternation

            return (
              <a
                key={cs.id}
                href={cs.link}
                className="group block overflow-hidden rounded-[28px] transition-all duration-500 hover:-translate-y-2"
              >
                <img
                  src={cs.image}
                  alt={cs.name}
                  className={`w-full ${imageHeight} object-cover rounded-[28px] transition-transform duration-700 group-hover:scale-[1.05]`}
                />

                <div className="pt-5 pl-1">
                  <h3 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#030019] text-[18px] md:text-[20px] mb-1 group-hover:text-[#543d98] transition-colors duration-300">
                    {cs.name}
                  </h3>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
