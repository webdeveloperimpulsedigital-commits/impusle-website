import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

export const GroupSubsection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: "Home", active: true },
    { label: "About Us", active: false },
    { label: "Services", hasDropdown: true, active: false },
    { label: "Clients & Work", active: false },
    { label: "Case Studies", active: false },
    { label: "Blogs", active: false },
    { label: "Resources", active: false },
    { label: "Careers", active: false },
  ];

  const profileImages = [
    { src: "/rectangle-41.png", alt: "Profile 1" },
    { src: "/rectangle-42.png", alt: "Profile 2" },
    { src: "/rectangle-43.png", alt: "Profile 3" },
    { src: "/rectangle-44.png", alt: "Profile 4" },
  ];

  const headingLines = ["TURNING", "YOUR BUSINESS", "INTO A BRAND"];

  return (
    <div ref={sectionRef} className="relative w-full h-[926px]" data-section="hero">
      <header className="relative w-full h-[926px] bg-[#543d98] bg-blend-darken">
        <div className="relative w-full h-[900px] top-[3px] bg-[url(/rectangle-35.png)] bg-[100%_100%]">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/bg-video.mp4" type="video/mp4" />
          </video>
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>

          <img
            className="absolute w-full h-[114px] top-0 left-0"
            alt="Frame"
            src="/frame-2147224415.svg"
          />

          <nav className="flex w-full max-w-[1360px] h-[75px] items-center justify-between absolute top-7 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 lg:px-10 z-10">
            <img
              className="w-[120px] h-[53px] sm:w-[148.41px] sm:h-[66px]"
              alt="Frame"
              src="/frame-2147224428.svg"
            />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-[30px] xl:gap-[50px]">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center gap-[5px]"
                >
                  <div
                    className={`[font-family:'DM_Sans',Helvetica] text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap ${item.active ? "font-bold" : "font-normal"}`}
                  >
                    {item.label}
                  </div>
                  {item.hasDropdown && (
                    <ChevronDownIcon className="w-3.5 h-3.5 text-white" />
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Contact Button */}
            <Button className="hidden sm:flex w-[120px] sm:w-[156px] h-[40px] sm:h-[50px] items-center justify-center gap-2.5 px-3 sm:px-5 py-[10px] sm:py-[15px] bg-white rounded-xl hover:bg-gray-100 h-auto">
              <div className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Contact Us
              </div>
              <img
                className="w-[18px] h-[18px]"
                alt="Vector"
                src="/vector-1-3.svg"
              />
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </nav>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-[100px] left-0 right-0 bg-[#543d98]/95 backdrop-blur-sm border-t border-white/20 lg:hidden z-50">
              <div className="flex flex-col px-4 py-6 space-y-4">
                {navigationItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2"
                  >
                    <div
                      className={`[font-family:'DM_Sans',Helvetica] text-white text-base tracking-[0] leading-[normal] ${item.active ? "font-bold" : "font-normal"}`}
                    >
                      {item.label}
                    </div>
                    {item.hasDropdown && (
                      <ChevronDownIcon className="w-4 h-4 text-white" />
                    )}
                  </div>
                ))}
                <Button className="flex w-full h-[50px] items-center justify-center gap-2.5 px-5 py-[15px] bg-white rounded-xl hover:bg-gray-100 h-auto mt-4">
                  <div className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    Contact Us
                  </div>
                  <img
                    className="w-[18px] h-[18px]"
                    alt="Vector"
                    src="/vector-1-3.svg"
                  />
                </Button>
              </div>
            </div>
          )}
          
          <div className="absolute w-full max-w-[1350px] h-auto top-[160px] left-[50px] z-10">
            <div className="relative w-full h-auto text-left">
              <div className="[font-family:'DM_Sans',Helvetica] font-black text-white text-[120px] tracking-[-2.60px] leading-[110px]">
                TURNING<br />
                YOUR BUSINESS<br />
                INTO A BRAND
              </div>
            </div>
          </div>

          <div className="absolute w-full max-w-[600px] top-[500px] left-[50px] px-0 text-left [font-family:'DM_Sans',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[1.6] z-10">
            We help technology companies provide exceptional developer
            experiences. We make developer tools, SDKs, and libraries for the open-source ecosystem.
          </div>

          <div className="flex items-center justify-start absolute top-[600px] left-[50px] z-10">
            {profileImages.map((profile, index) => (
              <Avatar
                key={index}
                className={`w-[70px] h-[70px] border-2 border-solid border-white ${index > 0 ? "ml-[-15px]" : ""}`}
              >
                <AvatarImage
                  src={profile.src}
                  alt={profile.alt}
                  className="object-cover"
                />
              </Avatar>
            ))}

            <div className="flex items-center justify-center w-[70px] h-[70px] ml-[-15px] bg-white rounded-full border-2 border-white">
              <div className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                +50
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};