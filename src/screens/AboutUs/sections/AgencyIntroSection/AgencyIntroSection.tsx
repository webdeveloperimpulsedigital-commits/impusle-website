import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
export const AgencyIntroSection = (): JSX.Element => {
  return (
    <section
      
      className="w-full bg-white md:py-16 lg:py-0 lg:pt-20 sm:py-8 sm:pt-16" id="abt-sec-border">
      <div className="max-w-[1290px] mx-auto px-0 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-12 space-y-8">
            

            <div className="wrap-abt0">
              <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
                <span className="text-[#030019]  lg:text-[34px] sm:text-[16px]">
                  A Result Oriented
                </span>
                <br />
                <span className="font-bold text-[#543d98] lg:text-[49px] xl:text-[52px] md:text-[52px] sm:text-[26px]">
                  Digital Marketing Agency
                </span>
              </h2>
            </div>

            <div className="space-y-2">
              <p className="lg:pt-5 [font-family:'DM_Sans',Helvetica] text-[#030019] sm:text-[12px] md:text-[24px] lg:text-[24px] leading-relaxed text-justify">
                More than 36 years of marketing, branding, and advertising experience with 360° solutions are ready to welcome 
                you and your business at Impulse Digital. As a leading digital marketing agency, we take pride in growing when our 
                clients grow. No fluff or big words. Only research-led, data-backed strategies to address every one of your 
                unique challenges and turn them into opportunities for unparalleled growth.
              </p>

              <p className="pt-5 [font-family:'DM_Sans',Helvetica] text-[#030019] sm:text-[12px] md:text-[24px] lg:text-[24px] leading-relaxed text-justify">
                Led by the visionary and an astute opportunist [XX], Impulse Digital is a culture-first digital marketing agency. We 
                are touted for marrying creativity, strategy, and client relations to deliver results you can count on. Every dollar 
                you invest with us comes back to you multiplied.
              </p>
            </div>

            <Button className="w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]">
            
                          <Link to="/contact" className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base group-hover:text-[#543d98] transition-colors duration-300">
                            Connect Now
                          </Link>
                          <img
                            src="/impulse-website/button-icon.svg"
                            alt="Arrow"
                            className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert-0 group-hover:invert pointer-events-none"
                          />
                      </Button>
          </div>

          {/* Right Side - Decorative Element */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative space - can add other elements here if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};