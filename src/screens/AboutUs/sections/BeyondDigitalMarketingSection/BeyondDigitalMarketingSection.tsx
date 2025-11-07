import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

export const BeyondDigitalMarketingSection = (): JSX.Element => {
  return (
    <section
      className="w-full bg-white lg:py-20 lg:mb-5 sm:pt-16"
      data-section="beyond-digital-marketing"
    >
      <div className="max-w-[1290px] mx-auto px-0 lg:px-0">
        {/* changed text-center → text-left */}
        <div className="flex flex-col items-start text-left space-y-8 max-w-12xl mx-auto">
          <div className="space-y-8 lg:mb-10">
            <div className="wrap-abt">
              <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
                <span className="text-[#030019] lg:text-[34px] sm:text-[16px]">
                  Beyond
                </span>
                <br />
                <span className="font-bold text-[#543d98] lg:text-[49px] xl:text-[52px] md:text-[52px] sm:text-[26px]">
                  Digital Marketing
                </span>
              </h2><br></br>

              <div className="space-y-6 mb-10">
                <p className="pt-0 [font-family:'DM_Sans',Helvetica] text-[#030019] sm:text-[12px] md:text-[24px] lg:text-[24px] leading-relaxed text-left">
                  The ABCs of our functioning are simple: Accountability,
                  Balance, and Communication. We take responsibility for every
                  little task we undertake with a promise to maintain
                  transparency and confidentiality. Our team balances creativity
                  with data to deliver campaigns that actually bring you
                  results. And communication? That's our key to success. We
                  maintain open communication at all times, inviting your
                  invaluable input and feedback to ensure that both the process
                  and its outcome are to your liking.
                </p>

                <p className="pt-5 [font-family:'DM_Sans',Helvetica] text-[#030019] sm:text-[12px] md:text-[24px] lg:text-[24px] leading-relaxed text-left sm:mb-16">
                  We care about your brand as much as you do. So, we work with
                  you not as your agency partner but rather as an extension of
                  your business team itself.
                </p>
              </div>

              <Button className="w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] transition-colors duration-300 border-[#543d98] hover:border hover:border-[#543d98]">
                <Link
                  to="/contact-us"
                  className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base group-hover:text-[#543d98] transition-colors duration-300"
                >
                  Connect Now
                </Link>
                <img
                  src="/impulse-website/button-icon.svg"
                  alt="Arrow"
                  className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert pointer-events-none"
                />
              </Button>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
