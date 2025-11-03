import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What does SEO services with Impulse Digital include?",
    a: "Our approach covers strategy, research, and execution across on-page, off-page, and technical SEO. We align every task to business goals such as qualified visibility, conversions, and sustainable growth."
  },
  {
    q: "How do you decide the right SEO mix for my business?",
    a: "We audit your site and market, map search intent to the buyer journey, and prioritize fixes and opportunities. The plan balances content, authority building, and technical improvements based on impact and effort."
  },
  {
    q: "How soon can we expect results?",
    a: "Timelines vary by competition, current site health, and content depth. Most engagements begin to show directional gains within three to six months, with stronger compounding results over the following quarters."
  },
  {
    q: "Do you guarantee page one rankings?",
    a: "Yes, your website will rank, but results depend on factors like industry, competition, business type, and goals. We focus on best practices and steady improvements to drive qualified traffic and conversions."
  },
  {
    q: "How do you measure success and report progress?",
    a: "We set clear goals and track metrics such as qualified impressions, rankings, organic traffic, engagement, and conversion rate. Reporting is delivered at agreed intervals with insights and next steps."
  },
  {
    q: "What is Impulse Digital’s SEO process to rank in search engines?",
    a: "We follow a structured flow that includes discovery, audit, keyword and topic mapping, content and technical work, quality checks, publishing support, and ongoing optimization based on analytics."
  },
  {
    q: "Can you support enterprise and multi-location SEO?",
    a: "Yes. We plan for scale with page templates, internal linking models, structured data where relevant, location strategy, and governance for content and approvals. The setup respects brand standards and local needs."
  },
  {
    q: "Do you handle ecommerce and marketplace SEO service?",
    a: "Yes. We optimize ecommerce website architecture, product and category pages, internal search, and metadata, and we can advise on marketplace content. Efforts focus on discoverability and conversion throughout the ecommerce SEO service."
  },
  {
    q: "What is your approach to local search and maps visibility?",
    a: "We optimize your Google Business Profile, citations, local content, and location signals. The goal is to improve local SEO pack presence and drive qualified visits, calls, and enquiries for each service area."
  }
];

export const FAQSection: React.FC<{ items?: QA[] }> = ({ items = DEFAULT_QA }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq" data-section="faq">
      <div className="faq__header">
        <p className="faq__eyebrow">FAQ</p>
        <h2 className="faq__title">Frequently Asked Questions</h2>
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
                <img alt="Messages Icon" src="messages.png" />
              </center>
            </div>

            <h3 className="faq__cardTitle">Do you have more questions?</h3>
            <p className="faq__cardBody">
              Reach out to our SEO experts for tailored advice and solutions. We’re here to help your business grow online with measurable results.
            </p>

            
             <Button 
            className="w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 bg-[#543d98] hover:bg-[#543d98]/90  rounded-xl  text-white">
            <Link to="/contact" className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base"> Hit a Direct Mail</Link>
            <img src="/impulse-website/button-icon.svg" alt="Arrow"
              className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 pointer-events-none"/>
          </Button>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default FAQSection;
