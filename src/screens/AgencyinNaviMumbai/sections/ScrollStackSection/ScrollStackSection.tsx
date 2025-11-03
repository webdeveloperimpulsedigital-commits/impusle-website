
import { Card, CardContent } from "../../../../components/ui/card";
 
const servicesData = [
  {
    number: "01",
    title: "Pay-Per-Click",
    description: [
      "Ad copywriting",
      "Bid management",
      "Landing page optimization",
      "Target audience analysis"
    ],
    image: "/rectangle-37-6.png",
  },
  {
    number: "02",
    title: "Content Writing Services",
    description: [
      "Blogs",
      "Website content creation",
      "Landing page content",
      "Corporate communication",
      "E-Commerce Content Writing"
    ],
    image: "/rectangle-37-7.png",
  },
  {
    number: "03",
    title: "Production",
    description: [
      "Scriptwriting and Storyboarding",
      "Facebook and Instagram videography",
      "YouTube videography",
      "Voiceover recording"
    ],
    image: "/rectangle-37-6.png",
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description: [
      "Social Media Profile Creation",
      "Social Media Marketing",
      "Online Reputation Management",
      "Campaign Creation & Management",
      "Community Building (Organic & Paid)",
      "Performance Monitoring"
    ],
    image: "/rectangle-37-7.png",
  },
  {
    number: "05",
    title: "Employer Branding",
    description: [
      "Social Media Management",
      "Recruitment Marketing",
      "Employee Value Proposition",
      "Employee Brand Communication Strategy",
      "Employer Brand Awareness Audits"
    ],
    image: "/rectangle-37-6.png",
  },
  {
    number: "06",
    title: "SEO",
    description: [
      "Enterprise SEO",
      "E-commerce SEO",
      "Local SEO",
      "B2B SEO"
    ],
    image: "/rectangle-37-7.png",
  },
  {
    number: "07",
    title: "Website Development and Design",
    description: [
      "Website Design",
      "Website Development",
      "Website Management",
      "Website SEO"
    ],
    image: "/rectangle-37-6.png",
  },
  {
    number: "08",
    title: "Branding",
    description: [
      "Brand Development",
      "Brand Identity Design",
      "Logo Design",
      "Corporate Identity",
      "Brand Style Guide",
      "Brand Story Building"
    ],
    image: "/rectangle-37-7.png",
  },
];

export const ScrollStackSection = (): JSX.Element => {
  const HEADER_HEIGHT = 200; // Height of sticky header
  const CARD_OFFSET = 20; // Offset between stacked cards

  return (
    <section className="relative w-full bg-[#020018]">
      {/* Sticky Header */}
      <div className="sticky top-0 w-full bg-[#030019] border-b-2 border-[#ffffff1a] px-4 md:px-[75px] py-8 md:py-[60px] z-50">
        <div className="max-w-[1290px] mx-auto">
          <div className="[font-family:'DM_Sans',Helvetica] font-normal text-[24px] md:text-[34px] tracking-[0] leading-[28px] md:leading-[34px]">
            <span className="text-[#ffffffb2] font-medium leading-[40px] md:leading-[60px]">
              Every goal needs a roadmap<br />
            </span>
            <span className="font-bold text-white text-[36px] md:text-[52px] leading-[40px] md:leading-[60px]">
              We&apos;ve got yours!
            </span>
          </div>

        </div>
      </div>

      {/* Stacking Cards */}
      <div className="relative">
        {servicesData.map((service, index) => {
          const stickyTop = HEADER_HEIGHT + (index * CARD_OFFSET);
          const zIndex = 50 - index; // Earlier cards have higher z-index

          return (
            <section
              key={`service-${index}`}
              className="relative"
              style={{
                height: "100vh",
                marginTop: index === 0 ? 0 : `-${100 - (CARD_OFFSET / window.innerHeight * 100)}vh`,
              }}
            >
              <div
                className="sticky"
                style={{
                  top: `${stickyTop}px`,
                  zIndex: zIndex,
                }}
              >
                <Card className="bg-[#030019] border-b border-[#ffffff0d] rounded-none shadow-xl">
                  <CardContent className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[30px] pt-6 lg:pt-[30px] pb-8 lg:pb-11 px-4 lg:px-[75px] min-h-[400px] lg:h-[450px]">
                    {/* Service Number */}
                    <div className="flex flex-col max-w-[1290px] w-full lg:w-[168px] items-start justify-center h-auto lg:h-full">
                      <div className="flex flex-col items-start flex-1 w-full">
                        <div className="flex flex-col items-start w-full">
                          <div className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-[28px] lg:text-[35px] tracking-[0] leading-[32px] lg:leading-[39px]">
                            {service.number}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="flex flex-col items-start gap-4 lg:gap-[25px] flex-1 h-auto lg:h-full">
                      <div className="flex flex-col items-start w-full">
                        <div className="w-full lg:w-[344px] [font-family:'DM_Sans',Helvetica] font-semibold text-white text-[28px] lg:text-[35px] tracking-[0] leading-[32px] lg:leading-[39px]">
                          {service.title}
                        </div>
                      </div>

                      <div className="flex flex-col items-start w-full">
                        <ul className="space-y-2 lg:space-y-3">
                          {service.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="text-white mr-3 text-lg lg:text-xl">•</span>
                              <span className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-base lg:text-xl tracking-[0] leading-6 lg:leading-8">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Service Image */}
                    <div className="flex flex-col max-w-[1290px] w-full lg:w-[480px] items-start h-[200px] lg:h-full">
                      <img
                        className="flex-1 w-full rounded-[20px] object-cover"
                        alt="Service illustration"
                        src={service.image}
                      />
                    </div>

                    {/* Arrow Icon */}
                    <div className="flex w-60 items-start justify-center lg:justify-end pt-2 lg:pt-[7px] h-auto lg:h-full">
                      <img
                        className="w-[56px] lg:w-[80px] object-contain"
                        alt="Next"
                        src="/Arrow.png"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          );
        })}
      </div>

      {/* Spacer to allow scrolling through all cards */}
      <div style={{ height: `${servicesData.length * 100}vh` }} />
    </section>
  );
};