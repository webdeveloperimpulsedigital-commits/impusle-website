import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What does Impulse Digital do?",
    a: "Impulse Digital is a 360-degree digital marketing agency offering end-to-end services in strategy, creative, media, web, content, and analytics. Our focus is on turning marketing investments into measurable business growth."
  },
  {
    q: "Where is Impulse Digital based?",
    a: "We are headquartered in Mumbai and work with clients across India and overseas, building brands through data-driven creativity and result-oriented digital strategies."
  },
  {
    q: "What services does Impulse Digital offer?",
    a: "Our solutions cover performance marketing, SEO, social media management, branding, website development, employer branding, video production, and content creation, delivered under one roof for consistency and impact."
  },
  {
    q: "What makes Impulse Digital different from other agencies?",
    a: "We merge creativity with analytics and client partnerships. Every campaign we create is insight-driven, strategically crafted, and measured for performance so that we grow alongside our clients."
  },
  {
    q: "How do new projects and collaborations begin?",
    a: "Every partnership starts with discovery. We study your goals, audience, and competition before preparing a tailored plan with timelines, measurable outcomes, and clear communication checkpoints."
  },
  {
    q: "How do you measure success for your clients?",
    a: "Success is tracked through defined KPIs such as visibility, engagement, conversions, and ROI. We use analytics and insights to refine our approach and maximize business outcomes."
  },
  {
    q: "Do you work with startups as well as established brands?",
    a: "Yes. Our team tailors strategies to your business stage, helping startups build visibility and established brands scale performance across markets."
  },
  {
    q: "Do you handle content creation and production in-house?",
    a: "Yes. All content, from copywriting to video production, is handled by our in-house creative and technical teams to ensure quality, consistency, and brand alignment."
  },
  {
    q: "How do you ensure confidentiality and data security?",
    a: "We work under strict confidentiality agreements, request only essential access, and comply with client privacy policies. Data integrity and ownership are fully respected."
  },
  {
    q: "How can I connect with Impulse Digital?",
    a: "You can reach us through our website contact form or our official social media channels. Our team will connect with you to discuss your business goals and next steps."
  }
];

export const FAQSection: React.FC<{ items?: QA[] }> = ({ items = DEFAULT_QA }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="wrap-faq-abt" data-section="faq">
      <div className="faq__header">
        

         <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#000000]  lg:text-[34px] sm:text-[16px]">
              FAQ'S
            </span>
            <br />
            <span className="font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[20px]">
             Frequently Asked Questions
            </span>
          </h2>
      </div>

      <div className="faq__grid">
        {/* Left: Accordion */}
        <div className="faq__list">
          {items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={`faqItem ${open ? "is-open" : ""}`} key={i}>
                <button
                  className="faqItem__button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <span className="faqItem__question">{item.q}</span>
                  <span className={`faqItem__icon ${open ? "minus" : "plus"}`} aria-hidden />
                </button>
                <div className="faqItem__panel" role="region">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Card */}
        <aside className="faq__card">
          <div className="faq__cardInner">
            <div className="faq__bubble" aria-hidden>
              <center>
                <img
                  alt="Messages Icon"
                  src="messages.png"
                />
              </center>
            </div>

            <h3 className="faq__cardTitle">Do you have more questions?</h3><br></br>
            {/* <p className="faq__cardBody">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p> */}

            

                     

                      <Button
                        className="w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]"
                      >
                      
                        <a href="mail:collabs@theimpulsedigital.com"                       
                          className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base group-hover:text-[#543d98] transition-colors duration-300"
                        >
                          Hit a Direct Mail
                        </a>
                        <img
                          src="/impulse-website/button-icon.svg"
                          alt="Arrow"
                          className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert-0 group-hover:invert pointer-events-none"
                        />
                      </Button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default FAQSection;
