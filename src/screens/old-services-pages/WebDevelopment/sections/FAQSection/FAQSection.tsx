import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What does Impulse Digital offer in website design & development services?",
    a: "As a full-service website development company, we cover every phase of discovery, information architecture, design, development, content support, testing, launch, and post-launch maintenance. Each step is aligned to your goals such as brand credibility, performance, SEO readiness, and lead conversion. Our website design and development services ensure your digital presence is visually engaging and performance-driven."
  },
  {
    q: "How do you decide on the right platform or CMS for our site?",
    a: "We evaluate your goals, content workflows, integration needs, and budget. Based on these insights, we recommend the right platform such as WordPress, Shopify, React, or a custom build, outlining trade-offs for scalability, security, and ease of management."
  },
  {
    q: "How do you ensure fast load times and strong performance?",
    a: "Performance is a core part of our web services. We optimize images and code, manage scripts efficiently, implement caching, and follow clean coding standards. Core Web Vitals are tracked during development and post-launch to ensure speed and responsiveness."
  },
  {
    q: "Will the website be mobile-friendly and cross-browser compatible?",
    a: "Absolutely. We follow a mobile-first approach and test across modern browsers and devices. Interfaces are optimized for touch gestures, various screen sizes, and accessibility for a consistent experience across platforms."
  },
  {
    q: "How do you make the website search-ready at launch?",
    a: "We integrate on-page SEO best practices from day one — optimized structure, metadata, internal linking, image alt text, analytics, and Google Search Console setup. XML sitemaps are submitted and guidance is provided for content strategy and organic growth."
  },
  {
    q: "What is your approach to security and data protection?",
    a: "Security is built into our development process. We implement secure coding practices, SSL, software updates, backups, CDN, and strict access controls to ensure data privacy for both you and your users."
  },
  {
    q: "Can you handle content migration and redirects from an existing site?",
    a: "Yes. We manage content migration and URL mapping to preserve SEO equity. Redirects are tested to ensure a seamless experience for visitors and search engines."
  },
  {
    q: "Do you provide hosting and domain support?",
    a: "We can recommend or provision hosting, manage domain setup, and configure SSL certificates, ensuring stable performance, security, and clear ownership of digital assets."
  },
  {
    q: "What happens after the site goes live?",
    a: "Post-launch, our maintenance program covers monitoring, updates, performance reviews, small enhancements, uptime tracking, and traffic analysis. This ensures long-term reliability and continuous improvement of your website."
  },
  {
    q: "How long will the project take and what affects the timeline?",
    a: "Timelines depend on scope, integrations, and feedback cycles. During discovery, we share a detailed milestone plan and provide regular updates to keep you informed. Our structured process ensures a transparent and efficient journey from concept to completion."
  },
  {
    q: "Do you create custom designs or use templates?",
    a: "We focus on custom designs tailored to your brand and audience. Templates may be used for rapid prototyping, but the final design is always unique and aligned with your business goals."
  },
  {
    q: "Can you integrate third-party tools and APIs?",
    a: "Yes. We handle integrations with CRMs, payment gateways, analytics, marketing tools, and other APIs to extend your website’s functionality and business impact."
  }
];

export const FAQSection: React.FC<{ items?: QA[] }> = ({ items = DEFAULT_QA }) => {
  // ✅ First question open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq" data-section="faq">
      <div className="faq__header">
        <p className="faq__eyebrow">FAQ</p>
        <h2 className="faq__title">Frequently Asked Questions</h2>
        {/* <p className="faq__intro">
          Discover answers to common questions about how Impulse Digital designs and develops websites that are visually engaging, performance-driven, and optimized for growth.
        </p> */}
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

        {/* Right: Contact Card */}
        <aside className="faq__card">
          <div className="faq__cardInner">
            <div className="faq__bubble" aria-hidden>
              <center>
                <img alt="Messages Icon" src="messages.png" />
              </center>
            </div>

            <h3 className="faq__cardTitle">Do you have more questions?</h3>
            <p className="faq__cardBody">
              Connect with our Website Design & Development experts to explore how we can create a fast, secure, and high-performing website tailored for your brand.
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
