import React from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";
import "./ResourcesSection.css";

/* ================================
   Left Image + Right Text Section
   ================================ */
export const ResourcesTeaserSection: React.FC = () => {
  return (
    <section
      className="resources-teaser"
      data-section="resources"
      id="res-border-sec"
    >
      <div className="wrap-res">
        {/* Left: Image card */}
        <div className="resources-teaser__imageWrap">
          <img
            src="rectangle-32.png" /* replace with your actual path */
            alt="People collaborating over documents and a laptop"
            className="resources-teaser__image"
          />
        </div>

        {/* Right: Content */}
        <div className="resources-teaser__content">
          <h2 className="[font-family:'DM_Sans',Helvetica] font-normal text-[20px] md:text-[34px] leading-tight">
            <span className="text-[#ffffff] lg:text-[34px] sm:text-[16px]">
              Our
            </span>
            <br />
            <span className="font-bold text-[#ffffff] lg:text-[49px] md:text-[52px] sm:text-[26px]">
              Resources
            </span>
          </h2>

          <p className="pt-5 [font-family:'DM_Sans',Helvetica] text-[#ffffff] sm:text-[12px] md:text-[24px] lg:text-[20px] leading-relaxed text-left pb-8">
            We have always believed that knowledge is best shared. Check our
            curation of industry-specific ebooks, videos, and powerpoints to
            learn more, apply better, and achieve more.
          </p>

          <Button
            variant="outline"
            className="w-[150px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-5 bg-white rounded-xl hover:bg-[#543d98] hover:text-[#ffffff] text-[#543d98]"
          >
            <Link
              to="/contact"
              className="[font-family:'DM_Sans',Helvetica] font-bold text-sm md:text-base"
            >
              Explore
            </Link>
            <img
              src="/impulse-website/vector-1-3.svg"
              alt="Arrow"
              className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert pointer-events-none"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesTeaserSection;
