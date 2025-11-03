import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    name: "Rahul Shah",
    title: "Director, HEM Incense, Mumbai",
    image: "/image-11-10.png",
    quote:
      "Our of working with the Impulse team has always matched our utmost satisfaction. From starting our new website until tyveir dedication, work, ard assistarvce have us increase our organic traffic to 300% and increased our lead generation to 150 leads monthly. In addition, their well-fæused work has benefited both of our 32B websites. Indeed a team of experts who are always ready to guide and assist you. Thank you, Team Impulse",
  },
  {
    name: "Riddhi Merchant",
    title: "Partner, Laljee & Co, Mumbai",
    image: "/image-11-8.png",
    quote:
      "We love the freshness and authentic ideas team ID comes up with. They definitely take the customers ideas and vision of into consideration and work Great team to work with, no fuss!",
  },
  {
    name: "Kinnari Gosrani",
    title:
      "Director of Communication and Strategy, Gorna Engineerirg Pvt. Ltd., Mumbai",
    image: "/image-11-9.png",
    quote:
      "What I love about the Impulse Digital team is that they are s14Er enthusiastic. They are always coming up with genuine suggestions and honest feedbæk to improve our præesses hence ensuring noteworthy results!",
  },
  {
    name: "Rajesh Phadke",
    title: "Co-Founder, Kloudq Limited, Pune",
    image: "/image-11-11.png",
    quote:
      "Team Impulse Digital is very helpful and innovative when it comes to crafting digital marketing strategies for us. The üut working with them is their respect for the strict timelines and the brand values. Even though we are in Pune and they are in Murntlli, comml-mication and coordination is never a groblem and the work gets done efficiently.",
  },
  {
    name: "Riya Kothari",
    title: "Growth Engineer- Marketing Sales, Vendirnan, Mumbai",
    image: "/image-11-12.png",
    quote:
      "With Impulse Digitals dedicated team has been a journey. They have a good grasp of the briefs given and their agility, inrvovative creativity, and professionalism concerning deadlines is what sets them apart. The transformation in our SEO, PPC, and scrial media management has been incredible, our ranking to the first within three months with 90% of the keywords. Their well-planned campaigns yielded a arnount of quality leads. In addition, strong communication and visuals give us an edge over our on Scrial Media.",
  },
  {
    name: "Zia Khan",
    title: "Digital Marketing Manager, Nahar Group Mumbai",
    image: "/image-11-13.png",
    quote:
      'Impulse Team is really very professional, the thing is thatthey have always been ready to help and find solution for any challenges. The Word •No" dæs not exist in there dictionary which is rare to find in many agencies. I wish all gcui luck and EE:st of future to Impulse',
  },
];

export const SectionComponentNodeSubsection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center gap-[30px] py-10">
      <div className="flex w-full max-w-[1440px] items-center gap-[30px] overflow-x-auto">
        {testimonials.map((testimonial, index) => (
          <Card
            key={`testimonial-${index}`}
            className="flex-shrink-0 w-[490px] bg-[#543d9805] border-[#543d980d] rounded-[20px]"
          >
            <CardContent className="flex flex-col items-start gap-5 p-5">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2.5 flex-1">
                  <div className="flex w-[50px] h-[50px] items-center justify-center p-2 bg-[#543d9826] rounded-[38px] border border-[#543d9833] overflow-hidden">
                    <Avatar className="w-[50px] h-[50px]">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-[#543d9826] text-[#030019] [font-family:'DM_Sans',Helvetica] font-bold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex flex-col flex-1 items-start justify-center gap-[5px]">
                    <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-base tracking-[0] leading-normal">
                      {testimonial.name}
                    </h3>
                    <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-xs tracking-[0] leading-normal">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                <img
                  className="w-[49px] h-[50px] flex-shrink-0"
                  alt="Quote"
                  src="/vector-1-4.svg"
                />
              </div>

              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-sm tracking-[0] leading-[22px]">
                {testimonial.quote}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex w-full max-w-[1440px] items-center gap-[30px] overflow-x-auto">
        {testimonials.map((testimonial, index) => (
          <Card
            key={`testimonial-row2-${index}`}
            className="flex-shrink-0 w-[490px] bg-[#543d9805] border-[#543d980d] rounded-[20px]"
          >
            <CardContent className="flex flex-col items-start gap-5 p-5">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2.5 flex-1">
                  <div className="flex w-[50px] h-[50px] items-center justify-center p-2 bg-[#543d9826] rounded-[38px] border border-[#543d9833] overflow-hidden">
                    <Avatar className="w-[50px] h-[50px]">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-[#543d9826] text-[#030019] [font-family:'DM_Sans',Helvetica] font-bold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex flex-col flex-1 items-start justify-center gap-[5px]">
                    <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-base tracking-[0] leading-normal">
                      {testimonial.name}
                    </h3>
                    <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-xs tracking-[0] leading-normal">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                <img
                  className="w-[49px] h-[50px] flex-shrink-0"
                  alt="Quote"
                  src="/vector-1-4.svg"
                />
              </div>

              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-sm tracking-[0] leading-[22px]">
                {testimonial.quote}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
