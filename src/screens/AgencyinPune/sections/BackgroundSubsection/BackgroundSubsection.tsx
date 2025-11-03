import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const servicesData = [
  {
    number: "01",
    title: "Pay-Per-Click",
    description:
      "Ad copywriting\nBid management\nLanding page optimization\nTarget audience analysis",
    image: "/rectangle-37-6.png",
  },
  {
    number: "02",
    title: "Content Writing Services",
    description:
      "Blogs\nWebsite content creation\nLanding page content\nCorporate communication\nE-Commerce Content Writing",
    image: "/rectangle-37-7.png",
  },
  {
    number: "03",
    title: "Production",
    description:
      "Scriptwriting and Storyboarding\nFacebook and Instagram videography\nYouTube videography\nVoiceover recording",
    image: "/rectangle-37-6.png",
  },
  {
    number: "04",
    title: "Social Media Marketing",
    description:
      "Social Media Profile Creation\nSocial Media Marketing\nOnline Reputation Management\nCampaign Creation & Management\nCommunity Building (Organic & Paid)\nPerformance Monitoring",
    image: "/rectangle-37-7.png",
  },
  {
    number: "05",
    title: "Employer Branding",
    description:
      "Social Media Management\nRecruitment Marketing\nEmployee Value Proposition\nEmployee Brand Communication Strategy\nEmployer Brand Awareness Audits",
    image: "/rectangle-37-6.png",
  },
  {
    number: "06",
    title: "SEO",
    description: "Enterprise SEO\nE-commerce SEO\nLocal SEO\nB2B SEO",
    image: "/rectangle-37-7.png",
  },
  {
    number: "07",
    title: "Website Development and Design",
    description:
      "Website Design\nWebsite Development\nWebsite Management\nWebsite SEO",
    image: "/rectangle-37-6.png",
  },
  {
    number: "08",
    title: "Branding",
    description:
      "Brand Development\nBrand Identity Design\nLogo Design\nCorporate Identity\nBrand Style Guide\nBrand Story Building",
    image: "/rectangle-37-7.png",
  },
];

export const BackgroundSubsection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#020018] rounded-[60px_60px_0px_0px] overflow-hidden">
      <div className="w-full">
        <div className="relative">
          <header className="w-full px-[75px] bg-[#030019] border-b-2 border-[#ffffff1a] py-[60px]">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="[font-family:'DM_Sans',Helvetica] font-medium text-[#ffffffb2] text-[34px] leading-[60px]">
                  Every goal needs a roadmap
                </div>
                <div className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-[52px] leading-[60px]">
                  We&apos;ve got yours!
                </div>
              </div>
              <div className="flex-shrink-0">
                <img
                  className="w-[199px] h-[199px] bg-blend-difference"
                  alt="White"
                  src="/white-3.png"
                />
              </div>
            </div>
          </header>

          <div className="space-y-0">
            {servicesData.map((service, index) => (
              <Card
                key={`service-${index}`}
                className="bg-[#030019] border-b border-[#ffffff0d] rounded-none"
              >
                <CardContent className="flex items-start gap-[30px] pt-[30px] pb-11 px-[75px] min-h-[450px]">
                  <div className="flex flex-col w-[168px] items-start justify-center flex-shrink-0 h-full">
                    <div className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-[35px] tracking-[0] leading-[39px]">
                      {service.number}
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-[25px] flex-1 min-w-0">
                    <div className="[font-family:'DM_Sans',Helvetica] font-semibold text-white text-[35px] tracking-[0] leading-[39px]">
                      {service.title}
                    </div>
                    <div className="[font-family:'DM_Sans',Helvetica] font-normal text-white text-xl tracking-[0] leading-10 whitespace-pre-line">
                      {service.description}
                    </div>
                  </div>

                  <div className="flex flex-col w-[480px] items-start flex-shrink-0 h-full">
                    <img
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="Service illustration"
                      src={service.image}
                    />
                  </div>

                  <div className="flex w-[120px] items-start justify-end pt-[7px] flex-shrink-0 h-full">
                    <ChevronRightIcon className="w-[120px] h-auto text-white" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
