// BrandVisionSection.tsx
import React from "react";

export const BrandVisionSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-white lg:py-16 sm:py-10"
      id="sec-border"
      data-section="brand-vision"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* ================== HEADER ================== */}
        <div className="mb-10 lg:mb-14 pt-4">
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-medium lg:text-[34px] sm:text-[16px]">
            Employer Branding with Amazon India
          </h2>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] lg:text-[52px] sm:text-[26px] leading-tight">
            Campaigns that Turned Employees into Storytellers
          </h2>
          <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] lg:text-[17px] leading-relaxed max-w-[720px] mt-4">
            From video podcasts to advocacy programs, our work with Amazon India
            spans content, design, and execution across multiple employer
            branding campaigns—each driving reach, engagement, and stronger
            talent pipelines.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {/* ============== 1. AMAZON UNPLUGGED ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] overflow-hidden shadow-lg bg-[#20124d]">
                <img
                  src="/impulse-website/amazon-unplugged-thumbnail.png"
                  alt="Amazon Unplugged podcast setup"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6">
              {/* <p className="text-xs tracking-[0.2em] uppercase text-[#8D8DAA] mb-2 [font-family:'DM_Sans',Helvetica]">
                Campaign 01
              </p> */}
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Amazon Unplugged – Leadership, Unfiltered
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                A video-podcast series designed to showcase authentic leadership
                stories, career journeys, and the culture that powers Amazon’s
                success. We owned the end-to-end execution—from concept and
                scripting to shoots and edits—for 6 episodes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Views
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    1.2M+
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Impressions
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    9.5M+
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Engagement
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    10K+
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============== 2. POWERING PRIME DAY ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              {/* <p className="text-xs tracking-[0.2em] uppercase text-[#8D8DAA] mb-2 [font-family:'DM_Sans',Helvetica]">
                Campaign 02
              </p> */}
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Powering Prime Day – Employees in the Spotlight
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                A global Prime Day themed campaign that celebrated employees
                behind the event’s success through story-driven spotlights. We
                handled content and design for a series of assets that travelled
                across internal and external channels.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Organic Views
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    75K+
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Employee Advocacy
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    10×
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Social Engagement
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    2.4×
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Collage */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  src="/impulse-website/Powering Prime Day.png"
                  alt="Powering Prime Day employee collage"
                  className="w-full h-[260px] md:h-[320px] lg:h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ============== 3. EMPLOYEE ADVOCACY ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-[28px] overflow-hidden shadow-lg bg-[#F6F6FB]">
                <img
                  alt="Employees creating advocacy content"
                  src="/impulse-website/Employee Advocacy.png"
                  className="w-full h-[240px] md:h-[300px] lg:h-[340px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Copy */}
            <div className="lg:col-span-6">
              {/* <p className="text-xs tracking-[0.2em] uppercase text-[#8D8DAA] mb-2 [font-family:'DM_Sans',Helvetica]">
                Program 03
              </p> */}
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[30px] mb-3">
                Employee Advocacy – Turning Teams into Ambassadors
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-5">
                We built a structured advocacy engine—content calendars,
                internal campaigns, and performance tracking—to empower Amazon
                employees to champion the brand on social media.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    ROI
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    5-digit $
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Impressions
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    2.1M+
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Engagement
                  </p>
                  <p className="text-[#543d98] text-[22px] font-bold [font-family:'DM_Sans',Helvetica]">
                    67K+
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ============== 4. SOCIAL & JOB BOARDS ============== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Social Media Mgmt */}
            <div className="lg:col-span-6 space-y-4">
              {/* <p className="text-xs tracking-[0.2em] uppercase text-[#8D8DAA] mb-1 [font-family:'DM_Sans',Helvetica]">
                Always-On
              </p> */}
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[24px] md:text-[28px]">
                Social Media Management
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-3">
                At the forefront of Amazon APAC’s employer-branding content, we
                manage strategy, execution and promotion of internal programs
                across platforms.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Followers Gained
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    10K+
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Engagement
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    23K+
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Views & Impressions
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    2M+
                  </p>
                </div>
              </div>
            </div>

            {/* Job Board Optimisation */}
            <div className="lg:col-span-6 space-y-4">
              {/* <p className="text-xs tracking-[0.2em] uppercase text-[#8D8DAA] mb-1 [font-family:'DM_Sans',Helvetica]">
                Always-On
              </p> */}
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[24px] md:text-[28px]">
                Job Board Optimisation
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-3">
                We refresh careers pages and job-board profiles with updated
                campaigns, SEO-aligned copy, and timely news so candidates see a
                current, compelling picture of life at Amazon.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Followers Gain
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    60K+
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Impressions
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    2.4M+
                  </p>
                </div>
                <div className="bg-[#F6F6FB] rounded-2xl px-4 py-3">
                  <p className="text-[12px] text-[#7B7B8A] mb-1 [font-family:'DM_Sans',Helvetica]">
                    Engagement
                  </p>
                  <p className="text-[#543d98] text-[20px] font-bold [font-family:'DM_Sans',Helvetica]">
                    400K+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /space-y wrapper */}
      </div>
    </section>
  );
};
