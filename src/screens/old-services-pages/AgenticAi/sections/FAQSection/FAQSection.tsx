import React, { useState } from "react";
import "./FAQSection.css";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What does social media video production with Impulse Digital include?",
    a: "We handle strategy, scripting, storyboarding, filming, editing, motion graphics, sound design, subtitles, platform versioning, publishing support, and performance tracking. You can choose full service or edit support."
  },
  {
    q: "Which platforms and formats do you support?",
    a: "We produce videos for Instagram, Facebook, YouTube, and LinkedIn in vertical, square, and landscape formats. Cuts are prepared for reels, stories, shorts, long form episodes, and teaser snippets as needed."
  },
  {
    q: "Do you manage the process from concept to publishing?",
    a: "Yes. We run an end-to-end process with a shared brief, mood boards, shot lists, schedules, and approval gates at each stage. If you already have creative assets, we can plug into your workflow."
  },
  {
    q: "How do you tailor videos for each platform?",
    a: "As a result-oriented social media video production agency, we adjust hooks, pacing, aspect ratio, on screen text density, thumbnail design, titles, and metadata to match platform best practices. Technical specifications are followed so uploads pass quality checks without loss."
  },
  {
    q: "Do you optimize videos for discovery and accessibility in social media video production services?",
    a: "Yes. We apply keyword rich titles and descriptions, tags, and chapters where relevant, and add transcripts and closed captions. We also support multi language subtitles, safe text zones, and readable contrast."
  },
  {
    q: "What deliverables will we receive in social media video production services?",
    a: "Typical handover includes master editing, platform specific cuts, thumbnail options, caption copy, a publishing checklist, and performance dashboards. Source files can be shared on request as defined in the contract."
  },
  {
    q: "How do you measure performance and improve future videos?",
    a: "We track view through rate, watch time, retention curves, engagement, click through, and assisted conversions. Insights inform new hooks, thumbnails, and edits, so each release improves the last."
  },
  {
    q: "Can you handle product and location shoots as well as remote production?",
    a: "Yes. We manage product, lifestyle, and testimonial shoots with crew, permits, and schedules. We can also direct remote captures and accept client footage for editing only projects."
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
              Connect with our Social Media Video Production experts to explore how we can help your brand create impactful video content that drives engagement and results.
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
