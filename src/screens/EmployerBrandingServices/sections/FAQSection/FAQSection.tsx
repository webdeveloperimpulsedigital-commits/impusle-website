import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What is employer branding?",
    a: "Employer branding defines how your current and potential employees perceive you as a workplace. A strong employer brand increases applicant quality, retention, engagement, and overall satisfaction, while reducing recruitment costs in the long run."
  },
  {
    q: "How does Impulse Digital create an employer branding strategy?",
    a: "As a result-oriented employer branding agency, we begin with research, surveys, and interviews to understand your existing perception and goals. We then define positioning, messaging, and tone to create a structured strategy supported by creative and communication guidelines."
  },
  {
    q: "What deliverables are included in an employer branding service?",
    a: "We deliver a comprehensive strategy document, EVP and messaging framework, tone and design guidelines, recruitment marketing plans, leadership content toolkits, internal communication templates, and detailed reporting dashboards."
  },
  {
    q: "How does Impulse Digital ensure internal alignment across teams?",
    a: "We conduct workshops with leadership, HR, and communication teams to align vision and goals. We also create easy-to-use toolkits and content frameworks to ensure that the brand voice remains consistent across all internal and external touchpoints."
  },
  {
    q: "How do you handle reputation management and online reviews in employer branding?",
    a: "Our team monitors sentiment across digital platforms, manages responses to reviews, and builds proactive content to enhance brand perception. We focus on transparency and address concerns quickly to maintain trust and credibility."
  },
  {
    q: "How is success measured for employer branding programs?",
    a: "As a result-oriented employer branding agency, we track metrics such as application quality, offer acceptance rate, time-to-hire, employee referrals, engagement on career platforms, and retention trends. The performance data helps refine strategy and showcase tangible business outcomes."
  },
  {
    q: "How does employer branding connect with recruitment marketing?",
    a: "Employer branding builds awareness and preference, while recruitment marketing turns that preference into applications. We align both to ensure candidates experience a seamless journey from discovering your brand to applying and joining."
  },
  {
    q: "What types of content are most effective for employer branding?",
    a: "Authentic employee stories, leadership features, behind-the-scenes visuals, event highlights, and growth journey narratives work best. We tailor the format for each platform to ensure maximum reach and engagement."
  },
  {
    q: "How do we know if our company needs your employer branding services?",
    a: "Employer Branding Services convey an authentic story about what it is like to be a part of your company and work toward your mission. This lets you attract, engage and retain productive candidates who think and strive for the same goals."
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
