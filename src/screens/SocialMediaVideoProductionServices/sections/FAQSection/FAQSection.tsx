import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import "./FAQSection.css";

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
