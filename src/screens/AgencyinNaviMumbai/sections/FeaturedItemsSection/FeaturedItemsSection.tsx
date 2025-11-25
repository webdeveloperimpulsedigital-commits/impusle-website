import Header from "../../../../components/layout/Header";
import { Helmet } from "react-helmet-async";
export const FeaturedItemsSection = (): JSX.Element => {
  
  const heroTextLines = ["CREATING", "DIGITAL GROWTH", "STORIES"];
  

  const handleContactClick = () => {
    console.log("Contact button clicked");
  };

  return (
    <>
    <Helmet>
      <title>Digital Marketing Agency in Navi Mumbai | SEO Company | Impulse Digital</title>
<meta name="description" content="Impulse Digital is a best digital marketing agency in Navi Mumbai with decades of expertise in global marketing. Our team of proficient experts endure 24*7 to see your brand excel in the online landscape. As a leading digital marketing agency, we seamlessly fulfil all your marketing endeavours within steadfast timelines. Transform your digital marketing goals into impactful revenue with Impulse Digital." />
<meta name="keywords" content="digital marketing agency in navi mumbai, digital marketing company, impulse digital" />
<link rel="canonical" href="https://www.theimpulsedigital.com/digital-marketing-agency-in-navi-mumbai" />

<meta name="robots" content="index, follow" />
<meta name="revisit-after" content="1 day" />
<meta name="language" content="English" />
<meta name="generator" content="N/A" />
<meta property="og:title" content="Digital Marketing Agency in Navi Mumbai | Impulse Digital" />
<meta property="og:description" content="Impulse Digital is a best digital marketing agency in Navi Mumbai with decades of expertise in global marketing. Our team of proficient experts endure 24*7 to see your brand excel in the online landscape. As a leading digital marketing agency, we seamlessly fulfil all your marketing endeavours within steadfast timelines. Transform your digital marketing goals into impactful revenue with Impulse Digital." />
<meta property="og:url" content="https://www.theimpulsedigital.com/digital-marketing-agency-in-navi-mumbai" />
<meta property="og:image" content="https://www.theimpulsedigital.com/uploads/images/content/contact.jpg" />
<meta property="og:site_name" content="Impulse Digital" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@impulsedigi" />
<meta name="twitter:creator" content="@impulsedigi" />
<meta name="twitter:title" content="Digital Marketing Agency in Navi Mumbai | Impulse Digital" />
<meta name="twitter:description" content="Impulse Digital is a best digital marketing agency in Navi Mumbai with decades of expertise in global marketing. Our team of proficient experts endure 24*7 to see your brand excel in the online landscape. As a leading digital marketing agency, we seamlessly fulfil all your marketing endeavours within steadfast timelines. Transform your digital marketing goals into impactful revenue with Impulse Digital." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/uploads/images/content/contact.jpg" />
<meta name="twitter:url" content="https://www.theimpulsedigital.com/digital-marketing-agency-in-navi-mumbai" />

    </Helmet>
  
    <section
      className="relative w-full h-screen min-h-[600px] mb-0 h-[600px] sm:h-[700px] md:h-[800px] lg:h-[820px] rounded-t-[55px] overflow-hidden"
      data-section="hero"
    >
      <header>
        {/* Common header (overlay) */}
        <Header />

        <div className="absolute inset-0 w-full h-[598px] sm:h-[698px] md:h-[798px] lg:h-[818px] bg-[url(/rectangle-35.png)] bg-cover bg-center">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
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
            {/* Dark overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundColor: "#020018", opacity: 0.85 }}
              aria-hidden="true"
            />
          </div>

          {/* Hero Content */}
          <div
            className="xl:w-[1450px] lg:w-[1290px] mx-auto absolute inset-0 flex flex-col justify-center
                       items-center text-center               /* center on mobile */
                       lg:items-start lg:text-left            /* revert on desktop */
                       px-0 sm:px-6 md:px-2 lg:px-20 pt-20 lg:pt-24 lg:pl-0 sm:pt-25"
          >
            {/* Main Heading */}
            <div className="mb-8 sm:mb-12 text-center lg:text-left">
              {heroTextLines.map((line, index) => (
                <h1
                  key={index}
                  className="font-dm-sans font-black text-white text-[32px] sm:text-[48px] md:text-[64px] lg:text-[100px] xl:text-[100px] lg:leading-[100px] xl:leading-[120px] tracking-tight mb-1"
                >
                  {line}
                </h1>
              ))}
            </div>

            {/* Description */}
            <p
              className="font-dm-sans text-white text-sm sm:text-base md:text-lg lg:text-[26px]
                         max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]
                         mx-auto lg:mx-0 lg:leading-[40px] mb-8 sm:mb-12"
            >
              In today’s fast-paced digital world, your business deserves to shine online. 
            </p>

            {/* Profile Avatars (commented out) */}
            {/* 
            <div className="flex items-center justify-center lg:justify-start">
              {profileImages.map((profile, index) => (
                <Avatar
                  key={index}
                  className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 border-2 border-white ${
                    index > 0 ? "-ml-3 sm:-ml-4" : ""
                  }`}
                >
                  <AvatarImage
                    src={profile.src}
                    alt={profile.alt}
                    className="object-cover"
                  />
                </Avatar>
              ))}

              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 -ml-3 sm:-ml-4 bg-white rounded-full flex items-center justify-center border-2 border-white">
                <span className="font-dm-sans font-bold text-[#543d98] text-xs sm:text-sm md:text-base lg:text-lg">
                  +50
                </span>
              </div>
            </div>
            */}
          </div>
        </div>
      </header>
    </section>
    </>
  );
};

export default FeaturedItemsSection;
