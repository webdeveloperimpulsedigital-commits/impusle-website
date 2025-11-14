import { useState } from "react";
import { Button } from "../../../../components/ui/button";

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  link: string;
}

export const ServicesCatalogSection = (): JSX.Element => {
  const services: Service[] = [
    {
      id: "content",
      title: "Content Writing Services",
      description:
        "Craft compelling, SEO-driven content that tells your brand story and drives measurable engagement across platforms.",
      features: ["Blog Writing", "Website Copy", "Landing Pages", "Corporate Communication"],
      image: "/impulse-website/servicepage-COntent writing.jpg",
      link: "/impulse-website/services/content-writing-services",
    },
    {
      id: "ppc",
      title: "Performance Marketing (PPC)",
      description:
        "Run targeted campaigns across Google, Meta, and more to maximize ROI through data-backed performance marketing strategies.",
      features: ["Google Ads", "Meta Campaigns", "Bid Optimization", "Landing Page Testing"],
      image: "/impulse-website/servicepage-PPC.jpg",
      link: "/impulse-website/services/performance-marketing",
    },
    {
      id: "social",
      title: "Social Media Marketing",
      description:
        "Build strong social communities and boost engagement through creative content and performance-driven strategies.",
      features: ["Strategy & Planning", "Content Creation", "Paid Campaigns", "Community Management"],
      image: "/impulse-website/servicepage-Social Media Marketing.jpg",
      link: "/impulse-website/services/social-media-marketing",
    },
    {
      id: "seo",
      title: "Search Engine Optimization",
      description:
        "Improve your website visibility and rankings with robust SEO strategies built to deliver sustainable growth.",
      features: ["Technical SEO", "On-Page Optimization", "Off-Page SEO", "Local SEO"],
      image: "/impulse-website/servicepage-SEO.jpg",
      link: "/impulse-website/services/search-engine-optimization",
    },
    {
      id: "web",
      title: "Website Development",
      description:
        "Design and develop user-focused websites that look great, perform well, and convert visitors into customers.",
      features: ["UI/UX Design", "Responsive Development", "CMS Setup", "Website SEO"],
      image: "/impulse-website/servicepage-Website Development.jpg",
      link: "/impulse-website/services/website-development",
    },
    {
      id: "branding",
      title: "Branding Creative",
      description:
        "Shape your brand’s visual and emotional identity through design, storytelling, and creative strategy.",
      features: ["Logo Design", "Brand Guidelines", "Campaign Design", "Creative Strategy"],
      image: "/impulse-website/servicepage-Branding and Identity.jpg",
      link: "/impulse-website/services/branding-creative-services",
    },
    {
      id: "employer",
      title: "Employee Branding",
      description:
        "Build a strong employer brand that attracts, engages, and retains top talent aligned with your company’s values.",
      features: ["EVP Creation", "Recruitment Marketing", "Internal Campaigns", "Culture Storytelling"],
      image: "/impulse-website/servicepage-Employeer Branding.jpg",
      link: "/impulse-website/services/employee-branding-agency",
    },
    {
      id: "corporate",
      title: "Corporate Communication",
      description:
        "Deliver impactful corporate messaging that strengthens your reputation and builds trust across stakeholders.",
      features: ["Press Releases", "Internal Communication", "Crisis Communication", "Leadership Messaging"],
      image: "/impulse-website/Corporate Communication.jpg",
      link: "/impulse-website/services/corporate-communication-agency",
    },
    {
      id: "video",
      title: "Social Media Video Production",
      description:
        "Produce short-form videos, reels, and branded storytelling content that stand out and drive engagement.",
      features: ["Concept Development", "Scriptwriting", "Production", "Editing & Animation"],
      image: "/impulse-website/servicepage-Video Production.jpg",
      link: "/impulse-website/services/social-media-video-production",
    },
  ];

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpanded = (id: string) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section
      className="w-full bg-[#f8f9fa] py-16 lg:py-24"
      data-section="services-catalog"
      id="sec-border"
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header - Left Aligned */}
        <div className="text-left mb-12 lg:mb-16">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            Our Expertise
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-4">
            Comprehensive Service Portfolio
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const isOpen = !!expanded[service.id];
            const base = service.features.slice(0, 3);
            const rest = service.features.slice(3);

            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-3 transition-colors">
                    {service.title}
                  </h3>

                  <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-2">
                    {base.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#543d98] mr-2 text-sm">•</span>
                        <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Expandable rest */}
                  {rest.length > 0 && (
                    <>
                      <div
                        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                        aria-hidden={!isOpen}
                      >
                        <ul className="space-y-2 mt-2">
                          {rest.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-[#543d98] mr-2 text-sm">•</span>
                              <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleExpanded(service.id)}
                        className="mt-3 text-sm font-medium text-[#543d98] hover:underline"
                        aria-expanded={isOpen}
                        aria-controls={`features-${service.id}`}
                      >
                        {isOpen ? "Show fewer" : `+${rest.length} more services`}
                      </button>
                    </>
                  )}

                  {/* CTA */}
                  <div className="mt-6">
                    <Button className="cta-btn w-[180px] h-[44px] group sm:inline-flex items-center gap-2 px-4 py-6 rounded-xl bg-[#543d98] text-white hover:bg-white hover:text-[#543d98] border border-[#543d98] transition-all duration-300">
                      <a
                        href={service.link}
                        className="[font-family:'DM_Sans',Helvetica] font-bold text-white text-sm md:text-base group-hover:text-[#543d98] transition-colors duration-300"
                      >
                        Learn More
                      </a>
                      <img
                        src="/impulse-website/button-icon.svg"
                        alt="Arrow"
                        className="cta-icon w-4 h-4 transition-all duration-300 group-hover:rotate-45 pointer-events-none"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cta-btn:hover .cta-icon {
          filter: brightness(0);
        }
      `}</style>
    </section>
  );
};
