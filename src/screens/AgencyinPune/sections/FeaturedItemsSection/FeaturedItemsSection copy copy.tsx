import React, { useState } from "react";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";

export const FeaturedItemsSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "#", active: true },
    { label: "About Us", href: "#" },
    { label: "Services", href: "#", hasDropdown: true },
    { label: "Clients & Work", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Careers", href: "#" },
  ];

  const profileImages = [
    { src: "/impulse-website/rectangle-41.png", alt: "Profile 1" },
    { src: "/impulse-website/rectangle-42.png", alt: "Profile 2" },
    { src: "/impulse-website/rectangle-43.png", alt: "Profile 3" },
    { src: "/impulse-website/rectangle-44.png", alt: "Profile 4" },
  ];

  const heroTextLines = ["TURNING", "YOUR BUSINESS", "INTO A BRAND"];

  const handleContactClick = () => {
    console.log("Contact button clicked");
  };

  return (
    <section className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[820px]" data-section="hero">
      <header className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[820px] bg-[#543d98] bg-blend-darken">
        <div className="absolute  w-full h-[598px] sm:h-[698px] md:h-[798px] lg:h-[818px] bg-[url(/rectangle-35.png)] bg-cover bg-center">
          <div className="absolute inset-0 z-0">  {/* <-- don't use negative z-index */}
  <video
    className="w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    poster="/impulse-website/rectangle-35.png"
  >
    <source src="/impulse-website/bg-video.mp4" type="video/mp4" />
    
  </video>

  {/* Blue overlay above the video */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{ backgroundColor: "#020018", opacity: 0.9 }}
    aria-hidden="true"
  />
</div>


          {/* Responsive Navigation */}
          <nav className="absolute top-[15px] sm:top-[20px] md:top-[25px] left-0 right-0 px-4 lg:px-0 z-10">
            <div className="flex w-full max-w-[1360px] h-[75px] items-center justify-between mx-auto ">
              <img
                className="w-[120px] h-[53px] sm:w-[148.41px] sm:h-[66px]"
                alt="Logo"
                src="/impulse-website/frame-2147224428.svg"
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
              <Button 
                onClick={handleContactClick}
                className="hidden sm:flex w-[120px] sm:w-[156px] h-[40px] sm:h-[50px] items-center justify-center gap-2.5 px-3 sm:px-5 py-[10px] sm:py-[15px] bg-white rounded-xl hover:bg-gray-100"
              >
                <div className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  Contact Us
                </div>
                <img
                  className="w-[18px] h-[18px]"
                  alt="Vector"
                  src="/impulse-website/vector-1-3.svg"
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
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="absolute top-[75px] left-0 right-0 bg-[#543d98]/95 backdrop-blur-sm border-t border-white/20 lg:hidden z-50">
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
                  <Button 
                    onClick={handleContactClick}
                    className="flex w-full h-[50px] items-center justify-center gap-2.5 px-5 py-[15px] bg-white rounded-xl hover:bg-gray-100 mt-4"
                  >
                    <div className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Contact Us
                    </div>
                    <img
                      className="w-[18px] h-[18px]"
                      alt="Vector"
                      src="/impulse-website/vector-1-3.svg"
                    />
                  </Button>
                </div>
              </div>
            )}
          </nav>

          <div className="absolute w-full max-w-[1350px] h-auto top-[80px] sm:top-[100px] md:top-[140px] lg:top-[190px] left-4 sm:left-6 md:left-8 lg:left-[80px] right-4 sm:right-6 md:right-8 lg:right-auto">
            <div className="relative w-full h-auto">
              {heroTextLines.map((line, index) => (
                <div
                  key={index}
                  className={`relative lg:absolute left-0 [font-family:'DM_Sans',Helvetica] font-black text-white text-[40px] sm:text-[60px] md:text-[90px] lg:text-[100px] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.60px] leading-[40px] sm:leading-[60px] md:leading-[90px] lg:leading-[147.7px] ${
                    index === 0
                      ? "lg:-top-px"
                      : index === 1
                        ? "lg:top-[142px]"
                        : "lg:top-[285px]"
                  }`}
                >
                  {line}
                </div>
              ))}
            </div>

          </div>

          <p className="absolute w-full max-w-[933px] top-[350px] sm:top-[420px] md:top-[520px] lg:top-[674px] left-4 sm:left-6 md:left-8 lg:left-[457px] right-4 sm:right-6 md:right-8 lg:right-auto px-4 lg:px-0 [font-family:'DM_Sans',Helvetica] font-normal text-white text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px] tracking-[0] leading-[normal] z-0">
            We help technology companies provide exceptional developer
            experiences. We make developer tools, SDKs, and libraries for the
            open-source ecosystem.
          </p>

          <div className="inline-flex items-center absolute top-[450px] sm:top-[520px] md:top-[620px] lg:top-[656px] left-4 sm:left-6 md:left-8 lg:left-[50px] z-0">
            {profileImages.map((profile, index) => (
              <Avatar
                key={index}
                className={`relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px] rounded-[48px] border border-solid border-white ${
                  index > 0 ? "ml-[-20px] sm:ml-[-30px] md:ml-[-40px] lg:ml-[-50px]" : ""
                }`}
              >
                <AvatarImage
                  src={profile.src}
                  alt={profile.alt}
                  className="object-cover"
                />
              </Avatar>
            ))}

            <div className="relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px] ml-[-20px] sm:ml-[-30px] md:ml-[-40px] lg:ml-[-50px] bg-white rounded-[48px] flex items-center justify-center">
              <div className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-xs sm:text-sm md:text-lg lg:text-[26px] tracking-[0] leading-[normal] whitespace-nowrap">
                +50
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};