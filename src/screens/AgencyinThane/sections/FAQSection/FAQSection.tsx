import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What services does a digital marketing agency in Thane like Impulse Digital offer?",
    a: "Impulse Digital offers a wide range of digital marketing services including Search Engine Optimization (SEO), Social Media Marketing, Website Development, Pay-Per-Click Advertising (PPC), Content Marketing, Branding & Creatives, Employer Branding, and Corporate Communication."
  },
  {
    q: "Why choose a digital marketing agency based in Thane?",
    a: "Choosing a Thane-based agency ensures you work with experts who understand the local market and consumer behavior. Impulse Digital combines local insights with national and international digital strategies to deliver real results."
  },
  {
    q: "How much experience does Impulse Digital have in digital marketing?",
    a: "Impulse Digital brings over 34 years of experience in advertising and marketing. We’ve helped startups, SMEs, and large corporations grow their digital presence with customized, result-driven strategies."
  },
  {
    q: "What kind of results can clients expect from Impulse Digital?",
    a: "Our clients have seen results like a 200-300% increase in organic traffic and 50 to 100+ leads generated per month. We focus on measurable growth, ROI, and long-term brand building."
  },
  {
    q: "Which industries does Impulse Digital serve?",
    a: "We work with clients from a wide range of industries including FMCG, education, manufacturing, real estate, health care, e-commerce, and professional services."
  },
  {
    q: "Can Impulse Digital work with clients outside of Thane?",
    a: "Yes, we work with clients across Mumbai, Pune, and other cities in India. Our team is equipped to manage projects remotely while maintaining seamless communication and performance tracking."
  },
  {
    q: "How long does it take to see results from digital marketing?",
    a: "It depends on the service. SEO typically takes 3 to 6 months to show significant results, while PPC, social media ads, and email marketing can generate leads and traffic in a matter of weeks."
  },
  {
    q: "Do you offer a free consultation or strategy session?",
    a: "Yes, we offer a free consultation to understand your business goals and recommend the best digital marketing strategy tailored to your needs."
  },
  {
    q: "How is your pricing structured?",
    a: "Our pricing is flexible and based on the services required, campaign goals, and business size. We offer customized packages that align with your marketing objectives and budget."
  },
  {
    q: "Is there a clear process for tracking performance and ROI?",
    a: "Absolutely. We provide transparent performance reports using tools like Google Analytics, Search Console, and ad dashboards. You'll always know what’s working, what’s not, and how your investment is performing."
  }
];


export const FAQSection: React.FC<{ items?: QA[] }> = ({ items = DEFAULT_QA }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="wrap-faq" data-section="faq">
      <div className="faq__header">
        

         <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#000000]  lg:text-[34px] sm:text-[16px]">
              FAQ'S
            </span>
            <br />
            <span className="font-bold text-[#543d98] lg:text-[49px] md:text-[52px] sm:text-[20px]">
             Curious Much ?
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
                <img
                  alt="Messages Icon"
                  src="messages.png"
                />
              </center>
            </div>

            <h3 className="faq__cardTitle">Do you have more questions?</h3><br></br>
            {/* <p className="faq__cardBody">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p> */}

            

                     

                      <Button
                        className="w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]"
                      >
                      
                        <a href="mail:collabs@theimpulsedigital.com"                       
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
