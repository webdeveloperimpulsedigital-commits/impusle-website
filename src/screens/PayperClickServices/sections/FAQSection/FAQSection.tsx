import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What does a pay per click engagement with Impulse Digital include?",
    a: "We handle strategy, keyword and audience research, creative and copy development, campaign setup, tracking, daily optimization, and regular reporting. You can opt for full-service management or specific support such as audits or creative refresh."
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
    a: "We follow message match principles, write clear value propositions, and pair them with strong calls to action. Creative and copy are tested through structured A/B testing so winners can scale while underperformers are retired."
  },
  {
    q: "How do you ensure the traffic converts into leads or sales?",
    a: "We set up accurate conversion tracking, align ads with purpose-built landing pages, and remove friction in the user journey. Bid and budget decisions are guided by cost per acquisition, conversion rate, and return on ad spend."
  },
  {
    q: "How do you approach budgets, bids, and pacing?",
    a: "We set budgets by channel and objective, choose bidding strategies that fit your data depth, and apply guardrails to control spend. Budgets are reallocated based on performance so the best performing segments receive priority."
  },
  {
    q: "Do you build and optimize landing pages as part of PPC?",
    a: "Yes. We improve relevance, speed, and clarity, and keep design consistent with ad messaging. Forms, product information, and trust signals are refined so visitors can act without confusion."
  },
  {
    q: "How do you measure success and what will we see in reports?",
    a: "We track impressions, click-through rate, cost per click, conversions, cost per acquisition, revenue, and return on ad spend. Reports include insights, recommended actions, and a plan for the next cycle so learning turns into improvement."
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
