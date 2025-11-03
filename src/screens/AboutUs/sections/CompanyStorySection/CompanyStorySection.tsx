import React from "react";

export const CompanyStorySection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16 lg:py-24" data-section="company-story">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
                Our Story
              </p>
              <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
                How We Started
              </h2>
            </div>

            <div className="space-y-6">
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed">
                Founded in 2018, Impulse Digital began as a small team of passionate digital marketers with a simple vision: to help businesses tell their stories in the digital world. What started as a two-person operation in a small Mumbai office has grown into a full-service digital marketing agency.
              </p>

              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed">
                Our journey has been driven by one core belief: <strong>We grow when you grow.</strong> This philosophy has shaped every campaign we've created, every strategy we've developed, and every relationship we've built.
              </p>

              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-base leading-relaxed">
                Today, we're proud to be a trusted partner for businesses across India, helping them navigate the ever-evolving digital landscape with creativity, strategy, and measurable results.
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-[#543d98] rounded-full"></div>
                <div>
                  <span className="font-bold text-[#543d98]">2018</span>
                  <span className="text-[#030019] ml-2">Founded in Mumbai</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-[#543d98] rounded-full"></div>
                <div>
                  <span className="font-bold text-[#543d98]">2020</span>
                  <span className="text-[#030019] ml-2">Expanded to 15+ team members</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-[#543d98] rounded-full"></div>
                <div>
                  <span className="font-bold text-[#543d98]">2023</span>
                  <span className="text-[#030019] ml-2">Served 100+ clients across India</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-[#543d98] rounded-full"></div>
                <div>
                  <span className="font-bold text-[#543d98]">2025</span>
                  <span className="text-[#030019] ml-2">Leading digital marketing agency</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/rectangle-32.png"
                alt="Our team working together"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#543d98]/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#543d98]">100+</div>
                <div className="text-sm text-[#030019]">Happy Clients</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#543d98]">7+</div>
                <div className="text-sm text-[#030019]">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};