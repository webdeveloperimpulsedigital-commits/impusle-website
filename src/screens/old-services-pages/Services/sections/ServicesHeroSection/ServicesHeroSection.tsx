import React, { useState } from "react";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const ServicesHeroSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services", active: true, hasDropdown: true, dropdownItems: [
      { label: "All Services", href: "/services" },
      { label: "Content Writing Services", href: "/content-writing-services" }
    ]},
    { label: "Clients & Work", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Careers", href: "#" },
  ];

  return (
    <section className="relative w-full h-screen min-h-[600px] bg-[#020018]" data-section="services-hero">
      <div className="absolute inset-0">
        {/* Background Video */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: "#020018", opacity: 0.85 }}
          aria-hidden="true"
        />
      </div>

      {/* Navigation */}
      <nav className="absolute top-4 left-0 right-0 px-4 z-20">
        <div className="flex w-full items-center justify-between max-w-[1360px] mx-auto">
          {/* Logo */}
          <Link to="/">
            <img
              className="w-[120px] h-[53px] md:w-[148px] md:h-[66px]"
              alt="Impulse Digital Logo"
              src="/frame-2147224428.svg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group flex items-center gap-1">
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className={`[font-family:'DM_Sans',Helvetica] text-white text-sm whitespace-nowrap hover:text-gray-200 transition-colors ${
                      item.active ? "font-bold" : "font-normal"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={`[font-family:'DM_Sans',Helvetica] text-white text-sm whitespace-nowrap ${
                      item.active ? "font-bold" : "font-normal"
                    }`}
                  >
                    {item.label}
                  </span>
                )}
                {item.hasDropdown && (
                  <ChevronDownIcon className="w-3.5 h-3.5 text-white" />
                )}
                
                {/* Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          to={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-[#030019] hover:bg-[#543d98]/10 hover:text-[#543d98] transition-colors"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <Button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white rounded-xl hover:bg-gray-100 transition-colors">
            <span className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-sm">
              Contact Us
            </span>
            <img className="w-4 h-4" alt="Arrow" src="/vector-1-3.svg" />
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
          <div className="absolute top-16 left-0 right-0 bg-[#543d98]/95 backdrop-blur-sm border-t border-white/20 lg:hidden z-50 mx-4 rounded-lg">
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navigationItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  {item.href.startsWith('/') ? (
                    <Link
                      to={item.href}
                      className={`[font-family:'DM_Sans',Helvetica] text-white text-base hover:text-gray-200 transition-colors ${
                        item.active ? "font-bold" : "font-normal"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      className={`[font-family:'DM_Sans',Helvetica] text-white text-base ${
                        item.active ? "font-bold" : "font-normal"
                      }`}
                    >
                      {item.label}
                    </span>
                  )}
                  {item.hasDropdown && (
                    <ChevronDownIcon className="w-4 h-4 text-white" />
                  )}
                </div>
              ))}
              <Button className="flex w-full items-center justify-center gap-2 px-5 py-3 bg-white rounded-xl hover:bg-gray-100 mt-4">
                <span className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-base">
                  Contact Us
                </span>
                <img className="w-4 h-4" alt="Arrow" src="/vector-1-3.svg" />
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content - Centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          {/* Main Heading */}
          <div className="flex items-center justify-center gap-8 mb-6">
            <h1 className="[font-family:'DM_Sans',Helvetica] font-black text-white text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[120px] leading-[0.9] tracking-tight">
              OUR SERVICES
            </h1>
          </div>

          {/* Subtitle */}
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Comprehensive digital marketing solutions to transform your business and drive measurable results
          </p>

          {/* Breadcrumb Navigation */}
          <div className="mt-6">
            <nav className="flex items-center justify-center gap-2 text-white/80 text-sm">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>{'>'}</span>
              <span className="text-white">Services</span>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};