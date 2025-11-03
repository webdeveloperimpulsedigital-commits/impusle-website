import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What is Local SEO and how does it help my business?",
    a: "Local SEO focuses on improving your visibility for searches performed in a specific area or for services “near me.” It ensures your business appears in relevant map results, local listings, and search queries made by nearby customers ready to visit or purchase."
  },
  {
    q: "What does Local SEO service with Impulse Digital include?",
    a: "Our best Local SEO services cover Google Business Profile optimization, citation management, NAP consistency, local keyword research, on-page and off-page optimization, and review strategy. Each activity is designed to increase visibility, credibility, and foot traffic."
  },
  {
    q: "How do you optimize a Google Business Profile effectively?",
    a: "We verify and update all business details including name, address, contact number, and business hours. We also optimize descriptions, categories, photos, and attributes, while managing reviews and Q&A to ensure the profile stays active and trustworthy."
  },
  {
    q: "Why is NAP consistency important for Local SEO?",
    a: "Name, address, and phone number consistency signals reliability to search engines. Inconsistent data can confuse both users and algorithms. We audit and correct all citations across listings to maintain complete accuracy and strengthen ranking signals."
  },
  {
    q: "How do you find and target the right local keywords?",
    a: "We research search terms specific to your service area and customer intent, such as “best [service] near me” or “[product] in [city].” These keywords are then integrated into your website and Google Business Profile to improve discoverability and engagement."
  },
  {
    q: "Can Local SEO help my business appear in Google’s Map Pack?",
    a: "Yes. A combination of profile optimization, local content creation, positive reviews, and citation accuracy increases your likelihood of ranking in the Map Pack. The stronger your overall local authority, the better your placement in local search results."
  },
  {
    q: "How do online reviews impact Local SEO performance?",
    a: "Reviews act as signals of trust and relevance. We help you establish a review acquisition plan, monitor feedback, and manage responses to maintain positive sentiment and enhance your business reputation in local searches."
  },
  {
    q: "How do you measure the success of Local SEO efforts?",
    a: "We track local keyword rankings, profile insights, calls, direction requests, and leads or conversions. Reports also include traffic trends from nearby areas, helping you understand how effectively Local SEO contributes to business growth."
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
              Reach out to our Local SEO experts for tailored advice and solutions. We’ll help your business rank higher, attract more nearby customers, and drive measurable local growth.
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
