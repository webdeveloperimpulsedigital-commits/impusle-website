import React from "react";

interface CaseStudy {
  id: string;
  name: string;
  image: string;
  link: string;
}

export const ServicesCatalogSection = (): JSX.Element => {
  const caseStudies: CaseStudy[] = [
    {
      id: "electromech",
      name: "ElectroMech",
      image: "/impulse-website/case-stidy2.png",
      link: "/case-studies/electromech",
    },
    {
      id: "hem",
      name: "HEM Corporation",
      image: "/impulse-website/case-stidy6.png",
      link: "/case-studies/hem-corporation",
    },
    {
      id: "automag",
      name: "Automag India",
      image: "/impulse-website/case-stidy6.png",
      link: "/case-studies/automag",
    },
    {
      id: "enpro",
      name: "Enpro Industries",
      image: "/impulse-website/case-stidy2.png",
      link: "/case-studies/enpro",
    },
    {
      id: "tjsb",
      name: "TJSB Bank",
      image: "/impulse-website/case-stidy6.png",
      link: "/case-studies/tjsb-bank",
    },
    {
      id: "rainbow",
      name: "Rainbow International School",
     image: "/impulse-website/case-stidy2.png",
      link: "/case-studies/rainbow-international-school",
    },
    {
      id: "abg",
      name: "Aditya Birla Group",
      image: "/impulse-website/case-stidy6.png",
      link: "/case-studies/aditya-birla-group",
    },
    {
      id: "dazzo",
      name: "Dazzo Hygiene",
      image: "/impulse-website/case-stidy2.png",
      link: "/case-studies/dazzo-hygiene",
    },
    {
      id: "ayama",
      name: "Ayama Fitness",
      image: "/impulse-website/case-stidy6.png",
      link: "/case-studies/ayama-fitness",
    },
    {
      id: "studioorbis",
      name: "Studio Orbis",
      image: "/impulse-website/case-stidy3.png",
      link: "/case-studies/studio-orbis",
    },
  ];

  return (
    <section
      className="w-full bg-[#f8f9fa] py-20 lg:py-28"
      data-section="case-studies"
      id="sec-border"
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-20">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            Proven Impact
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
            Case Studies
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {caseStudies.map((cs) => (
            <a
              key={cs.id}
              href={cs.link}
              className="group block rounded-[36px] overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-[36px]">
                <img
                  src={cs.image}
                  alt={cs.name}
                  className="w-full h-[420px] md:h-[460px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Name */}
              <div className="p-6 text-center">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-lg md:text-xl group-hover:text-[#543d98] transition-colors duration-300">
                  {cs.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
