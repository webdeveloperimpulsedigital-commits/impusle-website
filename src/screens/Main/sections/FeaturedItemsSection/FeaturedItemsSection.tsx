import { Helmet } from "react-helmet-async";
import Header from "../../../../components/layout/Header";

export const FeaturedItemsSection = (): JSX.Element => {
  const heroTextLines = ["TURNING", "YOUR BUSINESS", "INTO A BRAND"];

  

  return (
    <>
      {/* ✅ SEO Meta Tags */}
<Helmet>
<title>Best Digital Marketing Agency in Mumbai | Impulse</title>
<meta name="description" content="Impulse Digital is a top digital marketing agency in Mumbai that has the expertise to expand your business reach in the digital space. Our creative, innovative, and energetic"/>
<meta name="keywords" content="digital marketing agency in mumbai, digital marketing company, impulse digital"/>
<meta property="og:title" content="Best Digital Marketing Agency in Mumbai | Impulse Digital" />
<meta property="og:description" content="Impulse Digital is a top digital marketing agency in Mumbai that has the expertise to expand your business reach in the digital space. Our creative, innovative, and energetic team helps us stand out from a cluster of digital marketing agencies in Mumbai. We are handling a plethora of clients which includes Amazon, HUL, OLA, Dmart, HDFC, and more big market giants." />
<meta property="og:url" content="https://www.theimpulsedigital.com" />
<meta property="og:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta property="og:site_name" content="Impulse Digital" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@impulsedigi" />
<meta name="twitter:creator" content="@impulsedigi" />
<meta name="twitter:title" content="Best Digital Marketing Agency in Mumbai | Impulse Digital" />
<meta name="twitter:description" content="Impulse Digital is a top digital marketing agency in Mumbai that has the expertise to expand your business reach in the digital space. Our creative, innovative, and energetic team helps us stand out from a cluster of digital marketing agencies in Mumbai. We are handling a plethora of clients which includes Amazon, HUL, OLA, Dmart, HDFC, and more big market giants." />
<meta name="twitter:image" content="https://www.theimpulsedigital.com/img/logo-id-new.jpg" />
<meta name="twitter:url" content="https://www.theimpulsedigital.com" />
<link rel="canonical" href="https://www.theimpulsedigital.com" />
</Helmet>

      {/* ✅ Hero Section */}
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
                        items-center text-center
                        lg:items-start lg:text-left
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
                We blend strategy, design, and AI to build iconic brands.
                Because good isn’t enough when great is possible.
              </p>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default FeaturedItemsSection;
