import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What is a digital marketing agency?",
    a: "A digital marketing agency helps businesses grow online using services like performance ads, SEO, social, content, automation and analytics tailored to goals and budgets."
  },
  {
    q: "What are the benefits of hiring a digital marketing agency to leverage your business?",
    a: "You get senior expertise, speed of execution, cross-channel strategy, creative at scale, and measurable performance without building a large in-house team."
  },
  {
    q: "What is the role of a result-oriented digital marketing agency in elevating your business?",
    a: "A results-driven partner aligns channels to KPIs, runs continuous experiments, optimizes budgets in real-time, and reports outcomes clearly to drive revenue and efficiency."
  },
  {
    q: "Top 6 services an agency should offer for your business?",
    a: "Strategy, Performance Ads, SEO, Social & Content, Marketing Automation/CRM, and Analytics/Attribution."
  },
  {
    q: "What are the advantages of hiring a leading digital marketing agency?",
    a: "Proven playbooks, specialized teams, enterprise-grade tools, faster time-to-value, and lower total cost of ownership."
  },
  {
    q: "Can I expect instant results after hiring an agency?",
    a: "Some channels show quick lifts (e.g., performance ads). Others compound over time (e.g., SEO). A balanced mix delivers both short-term and long-term ROI."
  },
  {
    q: "Is it possible to measure the efficacy of your digital marketing agency's strategies?",
    a: "Yes. With clear KPIs, proper tracking, conversion events, and multi-touch attribution, you can measure impact across the funnel."
  },

  {
    q: "What is the budget to hire a digital marketing agency for your business?",
    a: "The budget to hire the best digital marketing agency in Mumbai depends on your requirements which includes various factors like your scope of services, the industry, the size of your business and, most importantly, your marketing goals and expectations. It is essential to contact the agency directly for any further queries about budget or services to make a better deal. Approximately the budget ranges from 70k to 2 Lakh to hire a good marketing agency for your business.To ensure an informed decision, consider several factors carefully."
  },
  {
    q: "Before signing up with an agency, should I consider geographic factors like location?",
    a: "No, one does not need to consider the agency's location, as digital marketing services are provided online and are certainly not restricted to physical presence or areas. Anyone can easily receive top digital marketing services from Mumbai to anywhere in the world. However, it is essential to consider the following factors: the agency's expertise in your domain, industry alignment, experience, and facilities they provide for online operations to ensure a smooth working process."
  },
  {
    q: "What skills are necessary for an agency before onboarding?",
    a: "When onboarding and deciding on an agency, it is essential to prioritize domain expertise, transparent communication that helps build trust, creative design and marketing strategy, and keeping a track record of quality work. The team of people coordinating should have qualities of problem-solving with efficiency. This shows that the agency is highly dependable and trustworthy."
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
