import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { ResponsiveNav } from "../../../../components/ui/responsive-nav";
import { AnimatedLogo } from "../../../../components/AnimatedLogo";

export const FeaturedItemsSection = (): JSX.Element => {
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
    { src: "/Rectangle-41.png", alt: "Profile 1" },
    { src: "/rectangle-42.png", alt: "Profile 2" },
    { src: "/Rectangle-43.png", alt: "Profile 3" },
    { src: "/rectangle-44.png", alt: "Profile 4" },
  ];

  const heroTextLines = ["TURNING", "YOUR BUSINESS", "INTO A BRAND"];

  const handleContactClick = () => {
    // Handle contact button click
    console.log("Contact button clicked");
  };

  return (
    <section className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[820px]">
      <header className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[820px] bg-[#543d98] bg-blend-darken">
        <div className="relative w-full h-[598px] sm:h-[698px] md:h-[798px] lg:h-[818px] bg-[url(/rectangle-35.png)] bg-cover bg-center">
         <div className="absolute inset-0 -z-10">
  <video
    className="w-full h-full object-cover"
    src="/bg-video.mp4"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    poster="/rectangle-35.png"
  />
  {/* Custom blue overlay on video */}
  <div
    className="absolute inset-0"
    style={{ backgroundColor: "#020018", opacity: 0.9 }}
    aria-hidden="true"
  />
</div>


          <div className="absolute top-[15px] sm:top-[20px] md:top-[25px] left-0 right-0 px-4 lg:px-0">
            <ResponsiveNav
              navigationItems={navigationItems}
              onContactClick={handleContactClick}
            />
          </div>

          <div className="absolute w-full max-w-[1350px] h-auto top-[80px] sm:top-[100px] md:top-[140px] lg:top-[190px] left-4 sm:left-6 md:left-8 lg:left-[50px] right-4 sm:right-6 md:right-8 lg:right-auto">
            <div className="relative w-full h-auto">
              {heroTextLines.map((line, index) => (
                <div
                  key={index}
                  className={`relative lg:absolute left-0 [font-family:'DM_Sans',Helvetica] font-black text-white text-[40px] sm:text-[60px] md:text-[90px] lg:text-[130px] tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.60px] leading-[40px] sm:leading-[60px] md:leading-[90px] lg:leading-[147.7px] ${
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

            <AnimatedLogo className="absolute top-0 right-0 lg:left-[1040px]" />
             {/* <div className="absolute top-[100px] top-08 right-0">
            <img
    className="w-[300px] h-[120px] animate-spin"
    alt="Animated Logo"
    src="/logo.svg"
    style={{
      animationDuration: "8s",
      
    }}
  />
          </div> */}
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
