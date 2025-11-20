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
   <section className="max-w-[1280px] mx-auto px-4 lg:px-8 lg:pt-20 lg:pb-20" data-section="faq">
      <div className="faq__header">
        <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#000000]  lg:text-[34px] sm:text-[16px]">
              FAQ's
            </span>
            <br />
            <span className="font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[20px]">
             Curious Much?
            </span>
          </h2>
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
