import React from "react";

export const WhyChooseSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-[#F6F6FB] py-16 lg:py-20"
      id="why-sec-border"
      data-section="why-choose"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 space-y-20">
        {/* ===================== GLOBAL LEAD GENERATION ===================== */}
        <div>
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[32px] md:text-[40px] mb-10">
            Global Lead Generation
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Image */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-[28px] shadow-lg">
                <img
                  src="/impulse-website/map.png"
                  alt="Global map with connected markets"
                  className="w-full h-[340px] md:h-[420px] lg:h-[480px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-6">
              <h3 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[26px] md:text-[32px] mb-6">
                Expanding Beyond Borders
              </h3>

              <div className="space-y-8">
                {/* Domestic Growth */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-[#ECE9F8] flex items-center justify-center">
                    {/* Home / building icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="none"
                      stroke="#543d98"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 10.5 12 4l9 6.5" />
                      <path d="M5 10.5V20h14v-9.5" />
                      <path d="M10 20v-5h4v5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-semibold text-[18px] md:text-[20px] mb-1">
                      Domestic Growth
                    </h4>
                    <p className="[font-family:'DM_Sans',Helvetica] text-[#5D5D6C] text-[15px] md:text-[16px] leading-relaxed">
                      Consistent flow of qualified Indian prospects.
                    </p>
                  </div>
                </div>

                {/* International Reach */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-md bg-[#ECE9F8] flex items-center justify-center">
                    {/* Globe / location icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="none"
                      stroke="#543d98"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3.5 9h17M3.5 15h17" />
                      <path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-semibold text-[18px] md:text-[20px] mb-1">
                      International Reach
                    </h4>
                    <p className="[font-family:'DM_Sans',Helvetica] text-[#5D5D6C] text-[15px] md:text-[16px] leading-relaxed">
                      Breaking into global markets with targeted visibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== THE TRANSFORMATION JOURNEY ===================== */}
        <div>
          <h2 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[32px] md:text-[40px] mb-10">
            The Transformation Journey
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Image */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-[28px] shadow-lg">
                <img
                  src="/impulse-website/Transformation Journey image.png"
                  alt="Before and after analytics dashboard"
                  className="w-full h-[340px] md:h-[420px] lg:h-[480px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Timeline */}
            <div className="lg:col-span-6">
              <div className="relative pl-6">
                {/* Vertical line */}
                <div className="absolute left-4 top-3 bottom-0 w-px bg-[#E0E0F0]" />

                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4">
                    <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-md bg-white border border-[#D2CCF3] text-[#543d98] font-semibold">
                      1
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {/* low activity icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill="none"
                          stroke="#543d98"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 17h16" />
                          <path d="M7 17V9l3 3 2-4 2 5 3-2v6" />
                        </svg>
                        <h4 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-semibold text-[18px] md:text-[20px]">
                          Month 0
                        </h4>
                      </div>
                      <p className="[font-family:'DM_Sans',Helvetica] text-[#5D5D6C] text-[15px] md:text-[16px] leading-relaxed">
                        Minimal traffic, zero rankings, limited leads.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4">
                    <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-md bg-white border border-[#D2CCF3] text-[#543d98] font-semibold">
                      2
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {/* settings / gear icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill="none"
                          stroke="#543d98"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="3" />
                          <path d="M19.4 15a1.78 1.78 0 0 0 .35 1.94l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.78 1.78 0 0 0 15 19.4a1.78 1.78 0 0 0-1 .33 1.78 1.78 0 0 0-.73 1.45V22a2 2 0 0 1-4 0v-.42A1.78 1.78 0 0 0 8 19.4a1.78 1.78 0 0 0-1.94-.35l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.78 1.78 0 0 0 4.6 15a1.78 1.78 0 0 0-.33-1 1.78 1.78 0 0 0-1.45-.73H2a2 2 0 0 1 0-4h.42A1.78 1.78 0 0 0 4.6 8a1.78 1.78 0 0 0-.35-1.94l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.78 1.78 0 0 0 9 4.6a1.78 1.78 0 0 0 1-.33A1.78 1.78 0 0 0 10.73 2.8V2a2 2 0 0 1 4 0v.42A1.78 1.78 0 0 0 16 4.6a1.78 1.78 0 0 0 1.94.35l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.78 1.78 0 0 0 19.4 9c.22.32.33.7.33 1.09V11a1.78 1.78 0 0 0 .73 1.45 1.78 1.78 0 0 0 1.45.73H22a2 2 0 0 1 0 4h-.42a1.78 1.78 0 0 0-1.45.73A1.78 1.78 0 0 0 19.4 15Z" />
                        </svg>
                        <h4 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-semibold text-[18px] md:text-[20px]">
                          Month 2
                        </h4>
                      </div>
                      <p className="[font-family:'DM_Sans',Helvetica] text-[#5D5D6C] text-[15px] md:text-[16px] leading-relaxed">
                        Website revamp complete, SEO foundation established.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4">
                    <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-md bg-white border border-[#D2CCF3] text-[#543d98] font-semibold">
                      3
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {/* growth chart icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill="none"
                          stroke="#543d98"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 20h18" />
                          <path d="M5 16l4-4 3 3 5-7" />
                          <path d="M15 8h5v5" />
                        </svg>
                        <h4 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-semibold text-[18px] md:text-[20px]">
                          Month 5
                        </h4>
                      </div>
                      <p className="[font-family:'DM_Sans',Helvetica] text-[#5D5D6C] text-[15px] md:text-[16px] leading-relaxed">
                        3,500% impression growth, top 10 rankings achieved.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start gap-4">
                    <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-md bg-white border border-[#D2CCF3] text-[#543d98] font-semibold">
                      4
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {/* globe with arrow icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                          fill="none"
                          stroke="#543d98"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 3" />
                        </svg>
                        <h4 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-semibold text-[18px] md:text-[20px]">
                          Today
                        </h4>
                      </div>
                      <p className="[font-family:'DM_Sans',Helvetica] text-[#5D5D6C] text-[15px] md:text-[16px] leading-relaxed">
                        Sustained growth with international market penetration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =================== /TRANSFORMATION JOURNEY ===================== */}
      </div>
    </section>
  );
};
