import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button"
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What is B2B SEO Service and how is it different from B2C or D2C SEO?",
    a: "B2B SEO focuses on reaching business decision-makers through targeted search visibility, high-value content, and long-term trust building. Unlike B2C, which targets immediate consumer action, B2B SEO supports a longer sales cycle and prioritizes authority, credibility, and qualified B2B lead generation."
  },
  {
    q: "How does Impulse Digital align SEO with the B2B buyer journey?",
    a: "We design strategies around the three stages of the buyer’s journey: awareness, consideration, and decision. Each content piece is mapped to these stages to ensure your audience finds relevant, informative, and persuasive information at every step of their decision-making process."
  },
  {
    q: "How do you reach and influence multiple decision-makers?",
    a: "We create role-specific content that speaks to different stakeholders such as technical heads, financial officers, and executive leadership. This ensures that every decision-maker finds information that matches their priorities, strengthening your overall conversion potential."
  },
  {
    q: "What is your approach to keyword research for niche B2B industries?",
    a: "We combine qualitative and quantitative research to identify intent-based, industry-specific keywords. The focus is on discovering phrases that indicate genuine buying intent or problem-solving queries rather than generic high-volume keywords."
  },
  {
    q: "How do you establish authority and trust for B2B brands?",
    a: "We build trust by producing expert-led content, earning backlinks from credible industry sources, showcasing case studies, and maintaining a consistent digital footprint. This approach positions your brand as an authoritative voice in your niche."
  },
  {
    q: "What technical elements are part of B2B SEO optimization?",
    a: "Our team improves technical health by addressing site architecture, load speed, indexation, schema markup, and various on-page & off-page SEO strategies. We also streamline navigation and ensure all pages are crawlable, improving discoverability and user experience."
  },
  {
    q: "How do Impulse Digital measure success in B2B SEO campaigns?",
    a: "We measure performance across multiple metrics such as organic visibility, lead quality, engagement rate, and conversion from target segments. Tracking is done using Google Analytics (GA4) & Google Tag Manager to ensure every improvement aligns with long-term business goals."
  },
  {
    q: "Can you manage SEO for global or region-specific B2B operations?",
    a: "Yes. We develop multilingual and multi-regional SEO strategies using correct Hreflang implementation and localized content. This ensures your message resonates with diverse markets while maintaining a unified global brand voice."
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
              Reach out to our B2B SEO experts for tailored advice and solutions. We’re here to help your business generate qualified leads and grow online.
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
