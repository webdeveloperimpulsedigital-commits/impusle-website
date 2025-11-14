import React from "react";

interface EbookItem {
  id: string;
  title: string;
  description: string;
  image: string;
  pdf: string; // PDF link
}

export const Ebook = (): JSX.Element => {
  const ebooks: EbookItem[] = [
    {
      id: "covid-digital-transformation",
      title: "TO WHAT EXTENT HAS COVID19 PUSHED THE DIGITAL TRANSFORMATION",
      description:
        "Understand how the COVID19 lockdown accelerated digital adoption, reshaped industries, and influenced consumer behavior across platforms.",
      image: "/impulse-website/ID_Banner-11.jpg",
      pdf: "/impulse-website/pdfs/covid-digital-transformation.pdf",
    },
    {
      id: "covid-consumer-behaviour",
      title: "HOW COVID HAS CHANGED CONSUMER BEHAVIOUR",
      description:
        "Explore how COVID19 impacted purchasing behavior, digital usage trends, and what it means for brands in the post-pandemic world.",
      image: "/impulse-website/ebook-baner6.jpg",
      pdf: "/impulse-website/pdfs/covid-consumer-behaviour.pdf",
    },
  ];

  return (
    <section className="w-full bg-[#f8f9fa] py-16 lg:py-24" id="sec-border">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-left mb-12 lg:mb-16">
          <p className="font-normal text-[#030019] text-lg mb-2">Free Resources</p>
          <h2 className="font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-3">
            Download Our eBooks
          </h2>
          
        </div>

        {/* eBooks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ebooks.map((ebook) => (
            <a
              key={ebook.id}
              href={ebook.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 block"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56 bg-gray-100">
                <img
                  src={ebook.image}
                  alt={ebook.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="font-bold text-[#030019] text-lg md:text-xl mb-3 leading-snug">
                  {ebook.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  {ebook.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-[#543d98] group-hover:underline">
                  Download PDF →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
