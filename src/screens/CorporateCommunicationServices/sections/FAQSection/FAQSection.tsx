import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What does corporate communication with Impulse Digital include?",
    a: "We plan and deliver internal and external communication across strategy, message architecture, content creation, media relations, executive communication, crisis support, and measurement. The goal is to protect reputation, build trust, and keep every audience informed with clear and consistent messaging."
  },
  {
    q: "How do you create a corporate communication strategy for a company?",
    a: "We begin with discovery and a communication audit to understand audiences, channels, and current perceptions. From there we define objectives, a message house, audience maps, channel plans, and a governance model with roles, workflows, and review checkpoints."
  },
  {
    q: "What is the difference between internal and external communication and how do you handle both?",
    a: "Internal communication keeps employees aligned and engaged through updates, town halls, intranet content, and leadership messages. External communication manages public perception through press material, social content, websites, and stakeholder reports. We use one message framework so tone and facts stay consistent for every audience."
  },
  {
    q: "How do you ensure consistency across all channels and teams?",
    a: "We create a detailed style guide, message house, and content calendar. Templates for emails, press releases, social posts, and reports help teams publish accurately. Reviews and training sessions keep everyone aligned as plans evolve."
  },
  {
    q: "How do you support media relations and thought leadership?",
    a: "We identify priority topics, prepare spokesperson material, and develop bylines, interviews, and opinion pieces that add value to industry conversations. We do not promise placements, but we use research, relevance, and relationships to pursue credible opportunities."
  },
  {
    q: "How do you handle crisis communication and reputation risks?",
    a: "We prepare issue profiles, holding statements, and Q and A documents in advance. During an incident we coordinate approvals, publish verified facts, monitor sentiment, and update stakeholders in a timely manner. After the event, we review performance and refine protocols."
  },
  {
    q: "What content do you produce as part of corporate communication?",
    a: "Typical outputs include press releases, investor and stakeholder updates, leadership articles, internal newsletters, policy notes, social media posts, and multimedia assets. Every item is mapped to a clear purpose, audience, and call to action."
  },
  {
    q: "How do you measure the effectiveness of corporate communication?",
    a: "We track reach, engagement quality, message recall, media sentiment, share of voice, employee feedback, and action rates such as event attendance or policy adoption. Dashboards translate results into decisions for the next cycle."
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
