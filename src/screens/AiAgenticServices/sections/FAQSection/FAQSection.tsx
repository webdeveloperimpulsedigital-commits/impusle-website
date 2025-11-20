import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What does a content writing agency like Impulse Digital do beyond writing?",
    a: "As a full-service content writing agency, we go beyond copy creation to build a complete content ecosystem for your brand. We translate business goals into a focused strategy, combining research, audience analysis, SEO alignment, and messaging consistency. Every piece of content we deliver from blogs to landing pages is designed to inform, engage, and convert. Our content writing services are built to deliver measurable business impact, not just words."
  },
  {
    q: "How do you ensure that our content performs well on search engines?",
    a: "As an experienced content writing company, we begin with keyword and topic research mapped to buyer intent. Each piece is structured with a clear hierarchy, optimized metadata, internal links, and image alt text. Our content writing services include SEO audits and performance tracking through analytics tools to ensure visibility and continuous improvement."
  },
  {
    q: "What content formats and channels do you cover?",
    a: "Our content writing agency creates diverse formats including blogs, website copy, landing pages, infographics, video scripts, white papers, and product descriptions. We also craft eCommerce listings, Amazon content, and corporate communication pieces. Each deliverable is aligned with your funnel stage and marketing objective ensuring maximum relevance and engagement."
  },
  {
    q: "What is included in website content creation with your content writing services?",
    a: "As part of our website content writing services, we define your page goals, tone of voice, and messaging hierarchy. We create persuasive, SEO-friendly copy that blends storytelling with performance. Deliverables include on-page text, microcopy, and CTAs developed in coordination with design and web teams for a cohesive experience."
  },
  {
    q: "How do you measure content success?",
    a: "Our content writing company sets measurable KPIs for every engagement, including visibility, engagement, conversion rate, and assisted leads. We track data in real-time dashboards and share periodic reports. This data-driven approach ensures our content writing services continuously evolve to meet performance goals."
  },
  {
    q: "What is your process from brief to publication?",
    a: "Our structured workflow covers discovery, research, ideation, drafting, editing, optimization, and publishing. Every stage is backed by internal quality checks to maintain accuracy and tone. Post-launch, we monitor content performance and refine future strategies, a hallmark of our process-driven content writing agency."
  },
  {
    q: "Can you adapt to our brand voice and compliance requirements?",
    a: "Yes. Our team ensures that every deliverable reflects your brand personality and complies with industry standards. We study brand guidelines, tone of voice, and legal frameworks to maintain authenticity and precision, one of the key reasons brands trust our content writing company for long-term partnerships."
  },
  {
    q: "Do you offer content design such as infographics and digital brochures?",
    a: "Yes. We integrate content writing services with visual storytelling. Our writers and designers collaborate to create infographics, brochures, and presentations that combine clarity, creativity, and data storytelling ensuring every asset communicates effectively and looks professional."
  },
  {
    q: "How quickly can we get started, and what are the usual timelines?",
    a: "Once the project scope is confirmed, onboarding begins immediately. Smaller deliverables like blogs or pages are typically delivered within one to two weeks. Larger projects such as websites, campaigns, or white papers follow a phased schedule with shared milestones. As a reliable content writing agency, we keep clients informed at every stage."
  }
];

export const FAQSection: React.FC<{ items?: QA[] }> = ({ items = DEFAULT_QA }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
   <section className="max-w-[1280px] mx-auto px-4 lg:px-8 lg:pt-20 lg:pb-20" data-section="faq">
       <h2 className="text-center [font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight mx-auto">
  <span className="text-[#000000] lg:text-[34px] sm:text-[16px]">
    FAQ's
  </span>
  <br />
  <span className="font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[20px]">
    Curious Much?
  </span>
</h2>


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
                  <h3 className="faqItem__question">{item.q}</h3>
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
                <img alt="Messages Icon" src="/impulse-website/messages.png" />
              </center>
            </div>

            <h3 className="faq__cardTitle">Do you have more questions?</h3><br></br>
            {/* <p className="faq__cardBody">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p> */}

             <Button
                        className="w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]"
                      >
                      
                        <a href="mailto:collabs@theimpulsedigital.com"
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
