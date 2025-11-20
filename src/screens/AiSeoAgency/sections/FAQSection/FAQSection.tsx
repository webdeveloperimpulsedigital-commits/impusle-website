import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import "./FAQSection.css";

type QA = { q: string; a: string };

const DEFAULT_QA: QA[] = [
  {
    q: "What is AI SEO and how is it different from traditional SEO?",
    a: "AI SEO applies machine learning, predictive analytics, and automation to decisions that traditionally relied on manual research. It accelerates insight discovery, improves targeting, and adapts in real time—while still maintaining the fundamentals of relevance, authority, and user experience.",
  },
  {
    q: "What are AEO and GEO and why do they matter now?",
    a: "AEO (Answer Engine Optimization) focuses on improving visibility across voice assistants and AI-driven answer experiences. GEO (Generative Engine Optimization) focuses on gaining visibility inside AI summaries, recommendations, and generated responses. Both are essential as users increasingly expect direct answers rather than browsing multiple links.",
  },
  {
    q: "How do you use AI for keyword and intent research?",
    a: "We analyze intent clusters, entities, query patterns, and user journeys to surface high-intent themes and conversion-ready opportunities. AI-driven models help identify gaps, emerging trends, and supporting topics that guide page structure and internal linking.",
  },
  {
    q: "How do you optimize content for AI answers and summaries?",
    a: "We create authoritative, conversational, and well-structured content with verified facts, examples, and clear formatting. Content is aligned to common questions, use cases, and real-world outcomes so AI systems can extract accurate, helpful responses.",
  },
  {
    q: "What is entity optimization and how does it improve results?",
    a: "Entity optimization clarifies your brand’s identity, offerings, attributes, and relationships with products, people, and locations. By standardizing this information across your website and profiles, AI systems can better connect your brand with relevant queries.",
  },
  {
    q: "Do you implement structured data and schema, and why is it important?",
    a: "Yes. We implement schema markup for products, services, FAQs, reviews, how-to guides, and more. Structured data helps AI and search engines understand page meaning clearly, increasing eligibility for rich results and answer experiences.",
  },
  {
    q: "How do you align content with large language models like GPT or Gemini?",
    a: "We structure content using model-friendly patterns including concise definitions, step-by-step lists, comparisons, and evidence-backed explanations. By removing ambiguity and adding contextual depth, we ensure LLMs interpret and summarize your information accurately.",
  },
  {
    q: "How is performance tracked and reported in an AI SEO program?",
    a: "We monitor visibility across search and AI answer surfaces, track entity coverage, measure engagement and conversions, and analyze cross-channel impact. Dashboards highlight trends and insights, guiding the next stage of optimization.",
  },
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
                <img alt="Messages Icon" src="/impulse-website/messages.png" />
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
