// ProcessSection.tsx
import React from "react";

export const ProcessSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-[#F6F6FB] py-16 lg:py-20"
      data-section="content-process"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8 space-y-20">
        {/* ===================== CLIENT TESTIMONIAL ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Testimonial Card */}
          <div className="lg:col-span-7 flex">
            <div className="relative w-full bg-white rounded-[28px] border border-[#E4E4F0] shadow-sm px-6 sm:px-8 lg:px-10 py-8 lg:py-10">
              {/* Opening quote mark */}
              <div className="absolute -top-4 left-6 text-[#543d98] text-4xl lg:text-5xl leading-none">
                &ldquo;
              </div>

              <h2 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[28px] md:text-[36px] mb-6">
                Client Testimonial
              </h2>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[22px] md:text-[26px] leading-snug mb-5">
                &quot;Working with Impulse Digital has been a{" "}
                <span className="bg-[#ECE9F8] px-1 rounded">
                  great experience
                </span>
                &quot;
              </p>

              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed mb-6">
                Their expertise and dedication have truly transformed our
                digital presence. I&apos;d highly recommend them to any
                business looking to grow online.
              </p>

              <p className="[font-family:'DM_Sans',Helvetica] font-semibold text-[#030019] text-[16px] md:text-[18px] mb-1">
                — Samrat Dhar, Managing Partner
              </p>
              <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px]">
                Shree Rubber Works
              </p>

              {/* Closing quote mark */}
              <div className="absolute -bottom-4 right-6 text-[#543d98] text-4xl lg:text-5xl leading-none">
                &rdquo;
              </div>
            </div>
          </div>

          {/* Right: Testimonial Video (click to play with sound) */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-[28px] overflow-hidden shadow-lg bg-black">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                // optional: add poster if you have a thumbnail
                // poster="/impulse-website/testimonial-poster.jpg"
              >
                {/* 🔁 Replace src below with your actual video path */}
                <source
                  src="/impulse-website/SRW.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* ===================== READY TO TRANSFORM SECTION ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Copy + Benefits */}
          <div className="lg:col-span-7">
            <h2 className="[font-family:'DM_Sans',Helvetica] text-[#543d98] font-bold text-[32px] md:text-[40px] mb-4">
              Ready to Transform Your Business?
            </h2>

            <h3 className="[font-family:'DM_Sans',Helvetica] text-[#030019] font-semibold text-[22px] md:text-[26px] mb-4">
              Partner with Impulse Digital
            </h3>

            <p className="[font-family:'DM_Sans',Helvetica] text-[#4B4B5C] text-[15px] md:text-[16px] leading-relaxed max-w-[580px] mb-8">
              Drive measurable growth with proven SEO strategies and expert
              website development.
            </p>

            <div className="space-y-8">
              {/* Row 1: Explosive visibility + Quality leads */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Explosive visibility growth */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {/* Rocket icon */}
                    <span className="text-[#543d98]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="none"
                        stroke="#543d98"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 19c1.5-1.5 2-3.5 1.5-5L11 9l4 4-5 4.5c-1.5-.5-3.5 0-5 1.5z" />
                        <path d="M14.5 3.5 21 10l-4.5 4.5L10 8z" />
                        <path d="M5 21s1-.5 2-1.5S8.5 17 8.5 17" />
                      </svg>
                    </span>
                    <span className="h-px flex-1 bg-[#543d98]" />
                  </div>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[18px] md:text-[20px]">
                    Explosive visibility growth
                  </p>
                </div>

                {/* Quality lead generation */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {/* Target icon */}
                    <span className="text-[#543d98]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="none"
                        stroke="#543d98"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="8" />
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 4V2M20 12h2M12 20v2M4 12H2" />
                      </svg>
                    </span>
                    <span className="h-px flex-1 bg-[#543d98]" />
                  </div>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[18px] md:text-[20px]">
                    Quality lead generation
                  </p>
                </div>
              </div>

              {/* Row 2: Global market reach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {/* Globe icon */}
                    <span className="text-[#543d98]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="none"
                        stroke="#543d98"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="8" />
                        <path d="M3.5 9h17M3.5 15h17" />
                        <path d="M12 4a14 14 0 0 1 0 16M12 4a14 14 0 0 0 0 16" />
                      </svg>
                    </span>
                    <span className="h-px flex-1 bg-[#543d98]" />
                  </div>
                  <p className="[font-family:'DM_Sans',Helvetica] text-[#030019] text-[18px] md:text-[20px]">
                    Global market reach
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5">
            <div className="rounded-[28px] overflow-hidden shadow-lg">
              <img
                src="/impulse-website/Team reviewing performance dashboards in a meeting.png"
                alt="Team reviewing performance dashboards in a meeting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* =================== /READY TO TRANSFORM ===================== */}
      </div>
    </section>
  );
};
