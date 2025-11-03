import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What does social media marketing with Impulse Digital include?",
    a: "We manage strategy, content creation, publishing, community engagement, paid advertising, and analytics. Every activity is designed to strengthen visibility, engagement, and measurable business growth across relevant platforms."
  },
  {
    q: "How do you develop a social media strategy for each brand?",
    a: "We start by studying your brand, audience, and competitors to identify opportunities. Based on this research, we create a customized strategy with defined goals, content pillars, and posting schedules that align with your overall marketing objectives."
  },
  {
    q: "Which platforms do you recommend for my business?",
    a: "Platform selection depends on your audience's demographics, business goals, and content format. We evaluate each platform’s potential to achieve your objectives and then create platform-specific content to maximize impact."
  },
  {
    q: "How do you ensure the content aligns with our brand voice?",
    a: "We develop a content style guide during onboarding, covering tone, vocabulary, and visual preferences. All posts, captions, and designs are created and reviewed against this guide before they go live to ensure brand consistency."
  },
  {
    q: "Do you handle engagement and community management?",
    a: "Yes. We monitor and manage comments, mentions, and direct messages daily. Our team responds promptly within approved guidelines to maintain a positive, consistent brand presence and build long-term relationships with your audience."
  },
  {
    q: "How does Impulse Digital manage paid social campaigns?",
    a: "We plan and execute paid campaigns with defined objectives, audiences, and budgets. Campaigns are continuously optimized through A/B testing, audience segmentation, and performance tracking to achieve maximum efficiency and return on investment."
  },
  {
    q: "How do you measure success on social media?",
    a: "We track engagement, reach, impressions, website traffic, and conversion metrics using analytics tools. Monthly reports include performance summaries, insights, and recommendations for improving upcoming campaigns."
  },
  {
    q: "Do you create specialized or seasonal campaigns?",
    a: "Yes. We design campaigns around key occasions, product launches, and topical events to amplify visibility and engagement. Each campaign is aligned with your brand’s positioning and focuses on generating relevant conversations and measurable results."
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
              Reach out to our social media experts for tailored advice and solutions. We’re here to help your brand grow across platforms with measurable results.
            </p>

            

            <Button 
            className="w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 bg-[#543d98] hover:bg-[#543d98]/90  rounded-xl  text-white">
            <Link to="/contact" className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base">Hit a Direct Mail</Link>
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
