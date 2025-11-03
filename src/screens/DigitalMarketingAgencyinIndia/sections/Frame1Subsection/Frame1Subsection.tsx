import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame1Subsection = (): JSX.Element => {
  const blogPosts = [
    {
      id: 1,
      image: "/rectangle-30-2.png",
      author: "By Admin",
      date: "May 7, 2025",
      title:
        "How to Rank Your Brand on ChatGPT: Our Observations About Brand Visibility",
      description:
        "India's identity deeply vests in its diversity. The country is home to vast landscapes, rich cultures, and varied regions, each of these factors greatly shaping the mindset and lifestyle of its people. These factors contribute to the study and insight identification for businesses and",
      url: "https://www.theimpulsedigital.com/blog/how-to-rank-your-brand-on-chatgpt-our-observations-about-brand-visibility/",
      width: "w-[305px]",
      descriptionLines: "[-webkit-line-clamp:1]",
      descriptionHeight: "h-[37px]",
    },
    {
      id: 2,
      image: "/rectangle-30-1.png",
      author: "By Admin",
      date: "May 16, 2025",
      title:
        "Authenticity Meets Aesthetics: Exploring the Power of Minimalism in Advertising",
      description:
        "There are multiple factors responsible for driving responses to an advertisement. These factors establish themselves on the grounds of emotional appeal or the practical benefit one derives from an advertisement. Over the years creative thinkers and marketers have adopted varied approaches to reach their audience, one of it has been the usage of minimalist forms of advertising.",
      url: null,
      width: "w-[305px]",
      descriptionLines: "[-webkit-line-clamp:1]",
      descriptionHeight: "h-[37px]",
    },
    {
      id: 3,
      image: "/rectangle-30-2.png",
      author: "By Admin",
      date: "Apr 24, 2025",
      title:
        "Mind to Cart: The 2025 E-Commerce Trends Reshaping Indian Retail and Consumption Patterns",
      description:
        "India's identity deeply vests in its diversity. The country is home to vast landscapes, rich cultures, and varied regions, each of these factors greatly shaping the mindset and lifestyle of its people. These factors contribute to the study and insight identification for businesses and",
      url: null,
      width: "w-[630px]",
      descriptionLines: "[-webkit-line-clamp:2]",
      descriptionHeight: "h-[59px]",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-[50px] relative">
      <header className="flex items-end gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative flex-1 mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-transparent text-[34px] tracking-[0] leading-[34px]">
          <span className="text-[#030019] font-medium leading-[60px]">
            Sharing is
            <br />
          </span>

          <span className="font-bold text-[#543d98] text-[52px] leading-[60px]">
            How We Grow Together
          </span>
        </div>

        <Button className="inline-flex h-[50px] items-center justify-center gap-2.5 p-5 relative flex-[0_0_auto] bg-[#543d98] rounded-xl hover:bg-[#543d98]/90 h-auto">
          <span className="relative w-fit mt-[-1.50px] [font-family:'DM_Sans',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
            See All Articles
          </span>

          <img
            className="relative w-[18px] h-[18px] mt-[-4.00px] mb-[-4.00px]"
            alt="Vector"
            src="/vector-1-3.svg"
          />
        </Button>
      </header>

      <div className="flex w-full items-start gap-5 relative flex-[0_0_auto]">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className={`flex flex-col ${post.width} items-center gap-3 pt-2.5 pb-[15px] px-2.5 relative bg-white rounded-[20px] overflow-hidden border border-solid border-[#543d980d] shadow-[0px_5px_24.1px_#0000000d]`}
          >
            <CardContent className="p-0 w-full">
              <img
                className={`relative ${post.id === 3 ? "self-stretch w-full" : "w-[285px]"} h-[212px] rounded-xl object-cover`}
                alt="Rectangle"
                src={post.image}
              />

              <div
                className={`flex flex-col ${post.id === 3 ? "h-[163px]" : ""} items-start gap-[15px] px-[5px] py-0 relative self-stretch w-full ${post.id === 3 ? "" : "flex-[0_0_auto]"} mt-3`}
              >
                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    {post.author}
                  </div>

                  <div className="relative w-fit mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap">
                    {post.date}
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  {post.url ? (
                    <a
                      className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-lg tracking-[0] leading-[normal]"
                      href={post.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {post.title}
                    </a>
                  ) : (
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-lg tracking-[0] leading-[normal]">
                      {post.title}
                    </div>
                  )}

                  <div
                    className={`relative self-stretch ${post.descriptionHeight} [font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-sm tracking-[0] leading-[22px] overflow-hidden text-ellipsis [display:-webkit-box] ${post.descriptionLines} [-webkit-box-orient:vertical]`}
                  >
                    {post.description}
                  </div>

                  <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                    <div className="relative w-fit [font-family:'DM_Sans',Helvetica] font-medium text-[#543d98] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                      Read More
                    </div>

                    <img
                      className="relative w-3 h-3"
                      alt="Svg"
                      src="/svg.svg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
