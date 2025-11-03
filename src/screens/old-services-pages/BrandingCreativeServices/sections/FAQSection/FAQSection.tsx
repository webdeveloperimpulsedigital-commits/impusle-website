import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What do Impulse Digital’s branding and creative services include?",
    a: "As a full-service branding and marketing agency, we cover brand discovery, strategy and positioning, tone of voice, visual identity systems, logo design, colour and typography systems, iconography, image style, and templates. We also produce social media creatives, website design, packaging, print assets, and a rollout plan supported by training and documentation."
  },
  {
    q: "How do you turn our story into a distinct brand identity?",
    a: "We begin with stakeholder interviews, market and audience research, and an audit of existing touchpoints. We then create mood boards and concept routes, test ideas across real use cases, refine based on feedback, and build an identity that reflects your values and business goals."
  },
  {
    q: "What is the difference between a logo and a full brand identity?",
    a: "A logo is a single mark. A brand identity is a complete system that includes voice, messaging, colour, typography, imagery, layout rules, and templates. The system keeps your brand consistent and recognizable across every interaction."
  },
  {
    q: "How do you ensure consistency across all channels and assets?",
    a: "We create a detailed brand style guide and a component library with ready-to-use templates for social, presentations, brochures, and ads. We align teams during handover, provide usage rules, and run quality checks before assets go live."
  },
  {
    q: "What is your process from brief to final delivery?",
    a: "The process includes research and discovery, mood boarding, design curation, prototype application on real touchpoints, review and refinement, final presentation, and delivery of production-ready files. We also support implementation and change management during rollout."
  },
  {
    q: "What deliverables will we receive at the end of the project?",
    a: "You receive the master logo set, colour and typography specifications, grid and spacing rules, icon sets, image and illustration guidelines, presentation and brochure templates, social media templates, packaging layouts where relevant, and a brand style guide in an easy-to-share format."
  },
  {
    q: "How do you measure the impact of branding after launch?",
    a: "We track branded search demand, direct and referral traffic, social engagement, asset consistency scores, conversion lift on key pages, and recall through surveys where needed. Insights from these measures guide further optimization."
  },
  {
    q: "Can you refresh an existing brand without a full redesign?",
    a: "Yes. We audit the current system to understand what should be retained, refined, or retired. We modernize elements while preserving equity so that the change is effective without confusing loyal customers."
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
              Reach out to our branding experts for custom strategies and creative solutions tailored to your business goals.
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
