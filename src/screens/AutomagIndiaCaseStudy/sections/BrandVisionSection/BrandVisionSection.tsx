// BrandVisionSection.tsx
import React from "react";

export const BrandVisionSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-[#F6F6FB]"
      id="sec-border"
      data-section="brand-vision"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16 lg:py-20 space-y-20">
        {/* ============ 1. HERO / INTRO COPY ============ */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Image */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-[28px] shadow-lg">
              <img
                src="/impulse-website/Industrial automation line with robotic arms.png"
                alt="Industrial automation line with robotic arms"
                className="w-full h-[260px] sm:h-[340px] lg:h-[420px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="lg:col-span-6">
            {/* <p className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-semibold text-[14px] md:text-[16px] mb-2 uppercase tracking-[0.12em]">
              SEO Case Study
            </p> */}
            <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-[30px] sm:text-[36px] lg:text-[42px] leading-tight mb-4">
              Automag India – Turning a Website into a B2B Lead Engine
            </h2>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[16px] leading-relaxed max-w-[540px]">
              How Impulse Digital helped Automag India move from{" "}
              <span className="font-semibold">zero visibility</span> to a{" "}
              <span className="font-semibold">steady pipeline of high-quality B2B leads</span>{" "}
              in under four months.
            </p>
          </div>
        </header>

        {/* ============ 2. THE CHALLENGE ============ */}
        <section>
          <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[34px] mb-8">
            The Challenge
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ChallengeCard
              title="Zero Search Visibility"
              description="No keywords ranking in Google’s Top 10; Automag was invisible for its own offerings."
            />
            <ChallengeCard
              title="Minimal Lead Generation"
              description="Only 1–2 inbound B2B leads per month coming from the website."
            />
            <ChallengeCard
              title="Misaligned Traffic"
              description="Career page was the biggest traffic driver instead of revenue-driving product pages."
            />
            <ChallengeCard
              title="Poor Product Discovery"
              description="High-intent product queries like conveyor searches were not showing Automag anywhere."
            />
          </div>

          <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[16px] leading-relaxed mt-6">
            <span className="font-semibold">Objective:</span> Build strong organic visibility, attract
            qualified B2B buyers, and convert the website into a reliable lead-gen channel.
          </p>
        </section>

        {/* ============ 3. OUR SEO PLAYBOOK ============ */}
        <section>
          <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[34px] mb-8">
            Our SEO Playbook
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seoItems.map((item) => (
              <div
                key={item.n}
                className="bg-white rounded-2xl border border-[#E4E4F0] p-5 lg:p-6 flex flex-col gap-3 shadow-sm"
              >
                <span className="text-[#543d98] text-[12px] font-semibold tracking-[0.16em] uppercase">
                  {item.n}
                </span>
                <h4 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[18px] text-[#030019]">
                  {item.title}
                </h4>
                <p className="[font-family:'DM_Sans',Helvetica] text-[14px] text-[#4B4B5C] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ 4. THE BREAKTHROUGH ============ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[34px] mb-4">
              The Breakthrough
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[16px] leading-relaxed mb-3">
              Between <span className="font-semibold">Dec 2024 and Mar 2025</span>, Automag
              transitioned from practically invisible to consistently present for high-intent
              industry searches.
            </p>
            <ul className="[font-family:'DM_Sans',Helvetica] text-[14px] lg:text-[15px] text-[#4B4B5C] space-y-1">
              <li>• Strong jumps across Top 50, Top 20, and Top 10 keyword buckets.</li>
              <li>• High-intent “money” keywords started appearing on page one.</li>
              <li>• Organic visibility became a predictable growth lever.</li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-[28px] border border-[#E4E4F0] shadow-lg p-6 lg:p-7">
              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-semibold mb-4">
                From zero to meaningful visibility in{" "}
                <span className="text-[#543d98]">under 4 months</span>.
              </p>
              <div className="space-y-4">
                <BreakthroughBar label="Top 50 Rankings" before={0} after={75} />
                <BreakthroughBar label="Top 20 Rankings" before={0} after={50} />
                <BreakthroughBar label="Top 10 Rankings" before={0} after={25} />
              </div>
            </div>
          </div>
        </section>

        {/* ============ 5. TRAFFIC GROWTH ============ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[34px] mb-4">
              Traffic Growth
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-semibold text-[18px] mb-2">
              48% increase in organic traffic in just 90 days.
            </p>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[16px] leading-relaxed mb-2">
              Product, home, and contact pages now drive the bulk of traffic — not the career
              section.
            </p>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[16px] leading-relaxed">
              In short, traffic is now aligned with{" "}
              <span className="font-semibold">revenue goals</span> instead of vanity metrics.
            </p>
          </div>

          {/* Image */}
          <div className="lg:col-span-6">
            <div className="rounded-[28px] overflow-hidden shadow-lg bg-black">
              <img
                src="/impulse-website/Analytics dashboard with upward graph.png"
                alt="Analytics dashboard with upward graph"
                className="w-full h-[260px] sm:h-[320px] lg:h-[380px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ============ 6. LEAD TRANSFORMATION ============ */}
        <section className="max-w-[900px] mx-auto text-center">
          <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[34px] mb-8">
            Dramatic Transformation in Leads
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 items-center">
            <div className="bg-white rounded-2xl border border-[#E4E4F0] p-6">
              <p className="[font-family:'DM_Sans',Helvetica] text-xs uppercase tracking-[0.14em] text-[#6B7280] mb-2">
                Before
              </p>
              <p className="text-[30px] md:text-[36px] font-bold text-[#030019] mb-1">1–2</p>
              <p className="[font-family:'DM_Sans',Helvetica] text-[14px] text-[#4B4B5C]">
                leads per month
              </p>
            </div>

            <div className="flex items-center justify-center">
              <span className="[font-family:'DM_Sans',Helvetica] text-[22px] font-semibold text-[#543d98]">
                →
              </span>
            </div>

            <div className="bg-white rounded-2xl border border-[#E4E4F0] p-6">
              <p className="[font-family:'DM_Sans',Helvetica] text-xs uppercase tracking-[0.14em] text-[#6B7280] mb-2">
                After
              </p>
              <p className="text-[30px] md:text-[36px] font-bold text-[#030019] mb-1">45–50</p>
              <p className="[font-family:'DM_Sans',Helvetica] text-[14px] text-[#4B4B5C]">
                qualified B2B leads per month
              </p>
            </div>
          </div>

          <p className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-semibold text-[18px] mb-2">
            2,400%+ growth in lead volume.
          </p>
          <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[16px] leading-relaxed">
            The website is now a <span className="font-semibold">predictable lead-generation engine</span>{" "}
            rather than a static brochure.
          </p>
        </section>

        {/* ============ 7. IMPACT CARDS ============ */}
        <section>
          <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[34px] mb-8">
            The Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-[#E4E4F0] p-6 flex flex-col gap-3 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-[#F6F6FB] flex items-center justify-center mb-1">
                  {item.icon}
                </div>
                <h4 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[18px] text-[#030019]">
                  {item.title}
                </h4>
                <p className="[font-family:'DM_Sans',Helvetica] text-[14px] text-[#4B4B5C] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ 8. SERP RESULTS ============ */}
        <section>
          <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[34px] mb-8">
            Ranking Wins
          </h3>
          <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[16px] leading-relaxed mb-6 max-w-[740px]">
            Core keywords such as{" "}
            <span className="font-semibold">“belt conveyor manufacturer”</span>,{" "}
            <span className="font-semibold">“slat conveyor manufacturer”</span>, and{" "}
            <span className="font-semibold">“conveyor manufacturer in Pune”</span> now rank on the{" "}
            <span className="font-semibold">first page of Google</span>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[24px] border border-[#E4E4F0] overflow-hidden shadow-sm">
              <img
                src="/impulse-website/image AT1.png"
                alt="Google SERP results screenshot 1"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="bg-white rounded-[24px] border border-[#E4E4F0] overflow-hidden shadow-sm">
              <img
                src="/impulse-website/image AT2.png"
                alt="Google SERP results screenshot 1"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="bg-white rounded-[24px] border border-[#E4E4F0] overflow-hidden shadow-sm">
              <img
                src="/impulse-website/image AT3.png"
                alt="Google SERP results screenshot 2"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
             <div className="bg-white rounded-[24px] border border-[#E4E4F0] overflow-hidden shadow-sm">
              <img
                src="/impulse-website/image AT4.png"
                alt="Google SERP results screenshot 2"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
             <div className="bg-white rounded-[24px] border border-[#E4E4F0] overflow-hidden shadow-sm">
              <img
                src="/impulse-website/image AT5.png"
                alt="Google SERP results screenshot 2"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="bg-white rounded-[24px] border border-[#E4E4F0] overflow-hidden shadow-sm">
              <img
                src="/impulse-website/image AT6.png"
                alt="Google SERP results screenshot 2"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="bg-white rounded-[24px] border border-[#E4E4F0] overflow-hidden shadow-sm">
              <img
                src="/impulse-website/image AT7.png"
                alt="Google SERP results screenshot 2"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ============ 9. KEY TAKEAWAY / TIMELINE ============ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[34px] mb-4">
              Key Takeaway
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[16px] leading-relaxed">
              Focused B2B SEO doesn’t just boost traffic—it{" "}
              <span className="font-semibold">transforms pipelines</span>. In under four months,
              Automag India went from zero online visibility to being an{" "}
              <span className="font-semibold">industry reference</span> in search results and
              lead generation.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative pl-6">
              <div className="absolute left-3 top-2 bottom-0 w-px bg-[#E4E4F0]" />
              <div className="space-y-6">
                {timelineSteps.map((s) => (
                  <div key={s.step} className="flex items-start gap-4">
                    <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-md bg-[#543d98] text-white text-[14px] font-semibold">
                      {s.step}
                    </div>
                    <div>
                      <p className="[font-family:'DM_Sans',Helvetica] text-[12px] uppercase tracking-[0.18em] text-[#6B7280] mb-1">
                        {s.label}
                      </p>
                      <h4 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[17px] text-[#030019]">
                        {s.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ 10. FINAL CTA ============ */}
        
      </div>
    </section>
  );
};

/* ===================== SMALL SUB-COMPONENTS ===================== */

const ChallengeCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-5 lg:p-6">
    <h4 className="[font-family:'DM_Sans',Helvetica] font-semibold text-[18px] mb-2 text-[#030019]">
      {title}
    </h4>
    <p className="[font-family:'DM_Sans',Helvetica] text-[14px] lg:text-[15px] text-[#4B4B5C] leading-relaxed">
      {description}
    </p>
  </div>
);

const BreakthroughBar = ({
  label,
  before,
  after,
}: {
  label: string;
  before: number;
  after: number;
}) => (
  <div>
    <div className="flex justify-between text-[11px] text-[#6B7280] mb-1 [font-family:'DM_Sans',Helvetica]">
      <span>{label}</span>
      <span>
        Before: {before}% &nbsp;|&nbsp; After: {after}%
      </span>
    </div>
    <div className="flex items-center gap-2">
      <div className="h-2 flex-1 bg-[#E5E7EB] rounded-full" />
      <div
        className="h-2 rounded-full bg-[#543d98]"
        style={{ width: `${Math.min(after, 100)}%` }}
      />
    </div>
  </div>
);

/* ========== DATA ARRAYS ========== */

const seoItems = [
  {
    n: "01",
    title: "Keyword Research",
    text: "Focused on high-intent B2B search terms mapped to Automag’s core conveyor and automation offerings.",
  },
  {
    n: "02",
    title: "On-Page Optimisation",
    text: "Restructured key pages, refined copy, and aligned metadata to match buyer intent.",
  },
  {
    n: "03",
    title: "Technical SEO",
    text: "Improved crawlability, internal linking, and site architecture for better discovery.",
  },
  {
    n: "04",
    title: "Content Optimisation",
    text: "Refreshed content to answer real customer questions and push them closer to enquiry.",
  },
  {
    n: "05",
    title: "Blog & Support Content",
    text: "Created supporting resources and interlinking to build topical authority.",
  },
  {
    n: "06",
    title: "Monitoring & Refinement",
    text: "Continuous tracking, experimentation, and SEO tweaks to keep rankings climbing.",
  },
];

const impactItems = [
  {
    title: "Lead Generation Engine",
    text: "The website is now a consistent source of high-intent B2B enquiries.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="none"
        stroke="#543d98"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h4v6a4 4 0 1 1-8 0V8a4 4 0 0 1 4-4z" />
        <path d="M16 4h4a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V4z" />
        <path d="M8 4h8" />
      </svg>
    ),
  },
  {
    title: "Top-Ranking Authority",
    text: "Automag now appears prominently for multiple money keywords in its niche.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="none"
        stroke="#543d98"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 20h18l-2-9-5 4-4-6-5 6-2-9z" />
      </svg>
    ),
  },
  {
    title: "Sustainable Growth Driver",
    text: "Organic traffic now compounds month on month, unlike paid campaigns that stop when budgets do.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="none"
        stroke="#543d98"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 20h18" />
        <path d="M7 16l3-6 4 4 5-9" />
      </svg>
    ),
  },
];

const timelineSteps = [
  { step: "1", label: "Month 1", title: "Strategy & SEO foundation" },
  { step: "2", label: "Month 2", title: "Implementation & optimisation" },
  { step: "3", label: "Month 3", title: "Ranking & traffic lift-off" },
  { step: "4", label: "Month 4", title: "Consistent qualified leads" },
];

export default BrandVisionSection;
