import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What does the PPC (Pay-Per-Click) service with Impulse Digital include?",
    a: "We handle strategy, keyword and audience research, creative and copy development, campaign setup, tracking, daily optimization, and regular reporting. You can opt for full-service management or specific support such as audits or creative refreshments."
  },
  {
    q: "Which platforms and campaign types do you manage?",
    a: "We run campaigns on Google Search, Display, Shopping, Performance Max, YouTube, Meta platforms, LinkedIn, and Amazon. Formats include search, display, video, discovery, and shopping listings depending on your goals."
  },
  {
    q: "How do you choose keywords and audiences for my campaigns?",
    a: "We combine first-party insights with platform data to map intent across the funnel. Keywords and audiences are grouped by themes and matched to relevant ads and landing pages so that each click has a clear path to conversion."
  },
  {
    q: "How do you create and test ads effectively?",
    a: "We follow message match principles, write clear value propositions, and pair them with strong calls to action. Creative and copy are tested through structured A/B testing, so winners can scale while underperformers are retired."
  },
  {
    q: "How do you ensure the traffic converts into leads or sales?",
    a: "We set up accurate conversion tracking, align ads with purpose-built landing pages, and remove friction in the user journey. Bid and budget decisions are guided by cost per acquisition, conversion rate, and return on ad spend."
  },
  {
    q: "What industries does Impulse Digital specialize in performance marketing?",
    a: "Impulse Digital has proven expertise in Real Estate, D2C (Direct-to-Consumer), BFSI, Edtech, Manufacturing, and Healthcare sectors."
  },
  {
    q: "What is the minimum budget required to start?",
    a: "Ad budgets vary depending on your goals and chosen platforms. For new brands with no prior campaign data, we recommend starting with a budget that allows enough data collection and optimization to generate meaningful insights."
  },
  {
    q: "How do you approach budgets, bids, and pacing?",
    a: "We set budgets by channel and objective, choose bidding strategies that fit your data depth, and apply guardrails to control spend. Budgets are reallocated based on performance so the best-performing segments receive priority."
  },
  {
    q: "Do you build and optimize landing pages as part of PPC?",
    a: "Yes. We create and optimize landing pages to improve relevance, speed, and user experience while maintaining consistency with ad messaging. We refine forms, content, and trust signals to maximize conversions."
  },
  {
    q: "How do you measure success and what will we see in reports?",
    a: "Our reports include key metrics such as impressions, CTR (Click-Through Rate), CPC (Cost per Click), conversions, CPA (Cost per Acquisition), revenue, and ROAS. Each report also provides actionable insights and a data-backed plan for the next cycle to enhance performance."
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
              Connect with our PPC experts to explore how Impulse Digital can help you plan,
              optimize, and scale your campaigns for measurable growth.
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
