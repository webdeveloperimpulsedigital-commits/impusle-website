import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What is enterprise SEO service and how is it different from traditional SEO?",
    a: "Enterprise SEO functions at a much larger scale than traditional SEO. It involves optimizing thousands of pages, coordinating multiple teams, and ensuring consistent visibility across languages, regions, and search engines. It requires structured planning, automation, and governance to achieve sustainable results."
  },
  {
    q: "How does Impulse Digital create an enterprise SEO strategy?",
    a: "As an enterprise SEO agency, we start with a full audit of your digital assets and identify growth opportunities through data analysis. This is followed by a strategic plan covering technical optimization, content clusters, keyword mapping, and reporting frameworks to align with business objectives and measurable outcomes."
  },
  {
    q: "How do you manage SEO for large websites?",
    a: "Our team combines technology, automation, and manual oversight to maintain SEO consistency at a scale. We implement templated structures, use advanced tracking tools, and manage content updates through defined workflows that ensure each page performs effectively within the overall site structure."
  },
  {
    q: "What are the key components of your enterprise technical SEO?",
    a: "We focus on improving crawlability, site architecture, Core Web Vitals, duplicate management, structured data, and internal linking. Each technical enhancement is prioritized based on its impact and feasibility, ensuring that search engines can index and understand your content efficiently."
  },
  {
    q: "How do you handle international and multilingual in the enterprise SEO?",
    a: "We localize strategy and content for each target market, using Hreflang tagging, culturally relevant messaging, and country-specific keyword research. Our approach ensures that every audience sees content in its preferred language while maintaining consistent brand positioning worldwide."
  },
  {
    q: "How do you approach content creation and optimization on a scale?",
    a: "We build topic clusters, define a clear message structure, and maintain uniformity through editorial standards. Each piece is reviewed for quality, relevance, and compliance with E E A T principle. This enables content to perform well across search engines and user segments simultaneously."
  },
  {
    q: "How do Impulse Digital’s ensure ethical and effective link building in enterprise SEO?",
    a: "We follow an earned-media approach by producing authoritative resources that naturally attract citations. Partnerships and outreach are limited to relevant, credible platforms. Every link is vetted for authenticity, maintaining compliance with search engine guidelines."
  },
  {
    q: "How do you collaborate with in-house teams during enterprise projects?",
    a: "Our processes integrate smoothly with your internal marketing, product, design, and IT teams. We align priorities through shared documentation, scheduled reviews, and transparent communication to ensure that all updates and implementations meet timelines and quality standards."
  }
];

export const FAQSection: React.FC<{ items?: QA[] }> = ({ items = DEFAULT_QA }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
   <section className="max-w-[1280px] mx-auto px-4 lg:px-8 lg:pt-20 lg:pb-20" data-section="faq">
      <div className="faq__header">
         <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#000000]  lg:text-[34px] sm:text-[16px]">
              FAQ's
            </span>
            <br />
            <span className="font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[20px]">
             Curious Much?
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
                <img alt="Messages Icon" src="messages.png" />
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
