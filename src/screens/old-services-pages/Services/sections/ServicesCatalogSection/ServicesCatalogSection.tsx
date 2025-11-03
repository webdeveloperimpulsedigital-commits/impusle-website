import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  category: string;
}

export const ServicesCatalogSection = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("all");

  const services: Service[] = [
    {
      id: "ppc",
      title: "Pay-Per-Click (PPC)",
      description: "Drive immediate traffic and conversions with targeted paid advertising campaigns across Google, Facebook, and other platforms.",
      features: ["Ad copywriting", "Bid management", "Landing page optimization", "Target audience analysis"],
      image: "/rectangle-37-6.png",
      category: "advertising"
    },
    {
      id: "seo",
      title: "Search Engine Optimization",
      description: "Improve your organic search rankings and drive long-term, sustainable traffic growth.",
      features: ["Enterprise SEO", "E-commerce SEO", "Local SEO", "B2B SEO"],
      image: "/rectangle-37-7.png",
      category: "organic"
    },
    {
      id: "social",
      title: "Social Media Marketing",
      description: "Build brand awareness and engage your audience across all major social media platforms.",
      features: ["Social Media Profile Creation", "Content Strategy", "Community Management", "Paid Social Campaigns"],
      image: "/rectangle-37-6.png",
      category: "social"
    },
    {
      id: "content",
      title: "Content Writing Services",
      description: "Compelling content that tells your brand story and drives engagement across all touchpoints.",
      features: ["Blog Writing", "Website Content", "Landing Pages", "Corporate Communication"],
      image: "/rectangle-37-7.png",
      category: "content"
    },
    {
      id: "web",
      title: "Website Development & Design",
      description: "Beautiful, functional websites that convert visitors into customers and reflect your brand perfectly.",
      features: ["Website Design", "Website Development", "Website Management", "Website SEO"],
      image: "/rectangle-37-6.png",
      category: "development"
    },
    {
      id: "branding",
      title: "Branding & Identity",
      description: "Create a memorable brand identity that resonates with your target audience and stands out from competitors.",
      features: ["Brand Development", "Logo Design", "Brand Guidelines", "Brand Story Building"],
      image: "/rectangle-37-7.png",
      category: "branding"
    },
    {
      id: "production",
      title: "Video & Content Production",
      description: "High-quality video content and creative assets that capture attention and drive engagement.",
      features: ["Scriptwriting", "Video Production", "Photography", "Graphic Design"],
      image: "/rectangle-37-6.png",
      category: "content"
    },
    {
      id: "employer",
      title: "Employer Branding",
      description: "Attract top talent and build a strong employer brand that showcases your company culture.",
      features: ["Recruitment Marketing", "Employee Value Proposition", "Employer Brand Strategy", "Brand Audits"],
      image: "/rectangle-37-7.png",
      category: "branding"
    }
  ];

  const categories = [
    { id: "all", label: "All Services" },
    { id: "advertising", label: "Paid Advertising" },
    { id: "organic", label: "Organic Growth" },
    { id: "social", label: "Social Media" },
    { id: "content", label: "Content & Creative" },
    { id: "development", label: "Web Development" },
    { id: "branding", label: "Branding" }
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section className="w-full bg-[#f8f9fa] py-16 lg:py-24" data-section="services-catalog">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#030019] text-lg mb-2">
            Our Expertise
          </p>
          <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-3xl md:text-4xl lg:text-5xl mb-6">
            Comprehensive Service Portfolio
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#543d98] text-white shadow-lg"
                  : "bg-white text-[#030019] hover:bg-[#543d98]/10 border border-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              {/* Service Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#030019] text-xl mb-3 group-hover:text-[#543d98] transition-colors">
                  {service.title}
                </h3>
                
                <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#543d98] mr-2 text-sm">•</span>
                      <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="flex items-start">
                      <span className="text-[#543d98] mr-2 text-sm">•</span>
                      <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-sm">
                        +{service.features.length - 3} more services
                      </span>
                    </li>
                  )}
                </ul>

                {/* CTA Button */}
                <Button className="w-full bg-[#543d98] hover:bg-[#543d98]/90 text-white rounded-xl py-3 font-medium transition-colors">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#666] text-base mb-6">
            Need a custom solution? We create tailored strategies for unique business needs.
          </p>
          <Button className="bg-[#543d98] hover:bg-[#543d98]/90 text-white px-8 py-4 rounded-xl font-bold">
            Get Custom Quote
            <img className="w-4 h-4 ml-2" alt="Arrow" src="/button-icon.svg" />
          </Button>
        </div>
      </div>
    </section>
  );
};