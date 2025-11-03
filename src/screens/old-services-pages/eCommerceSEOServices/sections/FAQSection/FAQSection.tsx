import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What is an eCommerce SEO service and how is it different from traditional SEO?",
    a: "An eCommerce SEO service focuses on optimizing online stores for higher visibility, usability, and conversions. Unlike traditional SEO, which targets business websites, eCommerce SEO enhances product and category pages, site architecture, and technical elements. A professional eCommerce SEO company in Mumbai ensures every product page ranks well and converts visitors into buyers by refining descriptions, images, and schema markup."
  },
  {
    q: "How does Impulse Digital approach eCommerce SEO for a new or existing store?",
    a: "As a results-driven eCommerce SEO agency in Mumbai, we begin with a detailed audit covering technical health, keyword opportunities, and user experience. Based on the insights, we design a custom strategy that includes keyword mapping, product-page optimization, internal linking, and performance reporting making our approach one of the best eCommerce SEO services for sustained growth in traffic and conversions."
  },
  {
    q: "How do you improve the performance of product and category pages?",
    a: "Our eCommerce SEO services optimize every key element from titles, meta descriptions, and product images to reviews and call-to-action placement. We add structured data for better indexing and create smart internal links between related categories and products. These enhancements improve visibility, discoverability, and the overall shopping experience."
  },
  {
    q: "What technical aspects of an eCommerce store do you optimize?",
    a: "As an experienced eCommerce SEO company, we focus on site architecture, crawl efficiency, Core Web Vitals, mobile responsiveness, and duplicate content control. Each optimization is prioritized for measurable impact, ensuring faster page loads, better crawlability, and smoother navigation critical for search ranking and customer retention."
  },
  {
    q: "How do you make eCommerce stores more mobile-friendly?",
    a: "Mobile-first optimization is a core part of our eCommerce SEO services in India. We compress media, improve layout responsiveness, and refine navigation flow for touch devices. This ensures your store performs seamlessly across all screen sizes, driving higher engagement and conversions on mobile."
  },
  {
    q: "Can you manage SEO for international or multi-language eCommerce stores?",
    a: "Yes. Our eCommerce SEO team specializes in international SEO services. We implement Hreflang tags, perform region-specific keyword research, and localize product details to align with cultural and linguistic nuances. This ensures your brand remains globally consistent while connecting authentically with local audiences."
  },
  {
    q: "How does SEO help in reducing cart abandonment?",
    a: "Our marketplace SEO services address key friction points across the purchase journey. We build trust through transparent product information, clear CTAs, user-friendly navigation, and optimized checkout flows. By improving credibility and experience, we reduce bounce and abandonment rates significantly."
  },
  {
    q: "How do you measure the success of an eCommerce SEO campaign?",
    a: "We track metrics such as organic sessions, click-through rate, add-to-cart ratio, conversions, and average order value. As a data-driven eCommerce SEO agency, we use analytics and search-console insights to refine strategy continuously ensuring consistent performance and long-term growth."
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
              Reach out to our eCommerce SEO experts for tailored advice and solutions. We’re here to help your online store achieve measurable growth and conversions.
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
