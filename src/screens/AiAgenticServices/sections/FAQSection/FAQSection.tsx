import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What is agentic AI and how is it different from traditional automation?",
    a: "Agentic AI uses intelligent agents that can analyze data, make contextual decisions, and execute tasks in real time. Unlike rule-based automation, agents learn from outcomes, adapt to new inputs, and coordinate actions across multiple channels."
  },
  {
    q: "Which use cases do your AI agents support today?",
    a: "Our agents support lead qualification, customer support, appointment booking, pricing and offer responses, reactivation journeys, win-back flows, campaign reporting, and creative testing. Supported channels include WhatsApp, email, voice notes, Facebook Messenger, Instagram DM, and SMS."
  },
  {
    q: "How do agents integrate with our tools and data sources?",
    a: "We integrate with your CRM, marketing platforms, analytics tools, and data warehouses through secure APIs and Webhooks. A unified data layer enables agents to read context, write events, and maintain synchronized records across all connected systems."
  },
  {
    q: "How do you ensure brand voice, accuracy, and multilingual experiences?",
    a: "We design brand-specific AI personas, conversation flows, and approval rules. Translation workflows and content libraries support multiple languages, ensuring responses remain accurate, culturally aligned, and consistent with your approved brand voice."
  },
  {
    q: "How are risks controlled and when do humans step in?",
    a: "Guardrails, allow/deny lists, and verification checks restrict agent actions to approved scopes. Confidence thresholds trigger human review, and escalation paths seamlessly hand conversations to live teams when needed."
  },
  {
    q: "What does a typical implementation timeline look like?",
    a: "Our timeline includes discovery, integration, conversation design, pilot launch, and scale-up. Actual duration depends on scope and data readiness. We share a milestone-based project plan with owners and acceptance criteria."
  },
  {
    q: "How is performance measured and improved over time?",
    a: "We track response quality, resolution rate, time to action, conversion lift, channel cost, and customer satisfaction. Continuous feedback loops and controlled experiments refine prompts, flows, and policies for steady improvements."
  },
  {
    q: "What do you need from us to get started?",
    a: "We require your business goals, KPIs, access to key systems, sample customer conversations, and approved tone/action guidelines. Once provided, we configure the pilot and align on the scale-up roadmap."
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
