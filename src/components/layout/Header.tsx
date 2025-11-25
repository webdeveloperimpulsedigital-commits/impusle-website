// src/components/layout/Header.tsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown as ChevronDownIcon,
  Menu as MenuIcon,
  X as XIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";

type DropdownItem = {
  label: string;
  href: string;
  active?: boolean;
  hasSubDropdown?: boolean;
  subItems?: DropdownItem[];
};
type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
  active?: boolean;
};

type HeaderProps = {
  overlay?: boolean;
  onContactClick?: () => void;
  items?: NavItem[];
};

const DEFAULT_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { label: "Content Writing ", href: "/services/content-writing-services" },
      { label: "Performance Marketing (PPC)", href: "/services/performance-marketing" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
      {
        label: "Search Engine Optimization",
        href: "/services/search-engine-optimization",
        hasSubDropdown: true,
        subItems: [
          { label: "AI Seo" , href: "/services/search-engine-optimization/ai-seo-agency"},
          { label: "Enterprise SEO ", href: "/services/search-engine-optimization/enterprise-seo-services" },
          { label: "eCommerce SEO ", href: "/services/search-engine-optimization/ecommerce-seo-services" },
          { label: "B2B SEO", href: "/services/search-engine-optimization/b2b-seo-services" },
          { label: "Local SEO ", href: "/services/search-engine-optimization/local-seo-services" },
        ],
      },
      { label: "Website Development", href: "/services/website-development" },
      { label: "Branding Creative", href: "/services/branding-creative-services" },
      { label: "Employee Branding", href: "/services/employee-branding-agency" },
      // { label: "Corporate Communication", href: "/services/corporate-communication-agency" },
      { label: "Social Media Video Production", href: "/services/social-media-video-production" },
      { label: " Agentic AI", href: "/services/agentic-ai"},
    ],
  },
  { label: "Case Studies", href: "/casestudies",
     hasDropdown: true,
    dropdownItems: [
      { label: "Shree Rubber Works ", href: "/casestudies/shree-rubber-works" },
      { label: "Atrac", href: "/casestudies/atrac-engine-parts" },
      { label: "Automag India", href: "/casestudies/automag-india" },
      { label: "Amazone Employer Branding", href: "/casestudies/amazon-eb" },
      { label: "Amazone Employee Value Proposition", href: "/casestudies/crafting-the-employer-value-proposition-for-amazon-india" },
      { label: "Grasim Pulp and Fibre", href: "/casestudies/grasim-pulp-and-fibre" },
    ]
  },
  { label: "Blog", href: "#" },
  // { label: "Resouces", href: "/resources"},

  {
    label: "Resouces",
    href: "/resources",
    hasDropdown: true,
    dropdownItems: [
      { label: "EBooks", href: "/resources/EBooks/" },
      { label: "Videos", href: "/resources/videos/" },
      { label: "Slideshare PPT", href: "/resources/Slideshare-PPT/" }
    ]
    },
  { label: "Career", href: "/career" },
];

export const Header: React.FC<HeaderProps> = ({ overlay = false, items }) => {
  const navigationItems = items ?? DEFAULT_ITEMS;
  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement | null>(null);
  const [headerH, setHeaderH] = useState<number>(0);

  useEffect(() => {
    const update = () => setHeaderH(navRef.current ? navRef.current.offsetHeight : 0);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);
  useEffect(() => {
    setTimeout(() => setHeaderH(navRef.current ? navRef.current.offsetHeight : 0), 0);
  }, [isMobileMenuOpen]);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation AND force page to start at top
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileDropdown(null);

    // 🔝 Ensure new route starts at top (instant jump; use "smooth" if you prefer)
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  // Active state helper
  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  /* ▼▼▼ show/hide on scroll direction ▼▼▼ */
  const [showNav, setShowNav] = useState(true);
  const lastYRef = useRef<number>(0);
  const threshold = 6;

  useEffect(() => {
    lastYRef.current = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const curr = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const diff = curr - lastYRef.current;
          if (Math.abs(diff) > threshold) {
            if (curr <= 0) {
              setShowNav(true);
            } else {
              setShowNav(diff < 0);
            }
            lastYRef.current = curr;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep nav visible while mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) setShowNav(true);
  }, [isMobileMenuOpen]);
  /* ▲▲▲ END ▲▲▲ */

  // Sticky/fixed behavior
  const positionClasses = overlay ? "fixed top-4" : "fixed top-0";
  const headerBg = overlay
    ? "bg-[#020018]"
    : (scrolled || isMobileMenuOpen)
      ? "bg-[#16132A] backdrop-blur-sm border-b border-white/10 shadow-md"
      : "bg-transparent";

  return (
    <>
      <nav
        ref={navRef}
        className={`${positionClasses} border-bot left-0 right-0 px-4 py-4 pb-6 z-[1000] ${headerBg} transition-all duration-300
        transform will-change-transform ${showNav ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex w-full items-center justify-between pr-2">
          {/* Logo */}
          <Link to="/" className="inline-block">
            <img
              className="w-[100px] sm:w-[120px] sm:h-[90px] md:w-[148px] md:h-[82px] lg:w-[150px] object-contain pt-2 pl-8 pb-2"
              alt="Impulse Digital Logo"
              src="/impulse-website/header-logo.png"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => {
                  setOpenDropdown(null);
                  setOpenSubDropdown(null);
                }}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  <Link
                    to={item.href}
                    className={`font-dm-sans text-white text-sm whitespace-nowrap hover:text-gray-200 transition-colors ${
                      item.active || isActive(item.href) ? "font-bold" : "font-normal"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <ChevronDownIcon
                      className={`w-3.5 h-3.5 text-white transition-transform duration-300 ${
                        openDropdown === item.label ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </div>

                {item.hasDropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
                    {item.dropdownItems?.map((dd) => (
                      <div
                        key={dd.label}
                        className="relative"
                        onMouseEnter={() =>
                          dd.hasSubDropdown ? setOpenSubDropdown(dd.label) : setOpenSubDropdown(null)
                        }
                        onMouseLeave={() => setOpenSubDropdown(null)}
                      >
                        <Link
                          to={dd.href}
                          className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <span>{dd.label}</span>
                          {dd.hasSubDropdown && (
                            <ChevronDownIcon
                              className={`w-3.5 h-3.5 text-gray-600 transition-transform duration-300 ${
                                openSubDropdown === dd.label ? "rotate-180" : "rotate-0"
                              }`}
                            />
                          )}
                        </Link>

                        {dd.hasSubDropdown && openSubDropdown === dd.label && (
                          <div className="absolute top-0 left-full w-56 bg-white shadow-lg rounded-lg py-2 z-50">
                            {dd.subItems?.map((sub) => (
                              <Link
                                key={sub.label}
                                to={sub.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <Button
            variant="outline"
            className="w-[150px] h-[44px] group hidden sm:inline-flex items-center gap-2 px-4 py-5 bg-white rounded-xl hover:bg-[#543d98] hover:text-[#ffffff] text-[#543d98]"
          >
            <Link
              to="/contact-us"
              className="[font-family:'DM_Sans',Helvetica] font-bold text-sm md:text-base"
            >
              Contact Us
            </Link>
            <img
              src="/impulse-website/vector-1-3.svg"
              alt="Arrow"
              className="w-4 h-4 transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:invert pointer-events-none"
            />
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#543d98]/95 border-t border-white/20 lg:hidden z-50 mx-4 rounded-lg">
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label} className="flex flex-col">
                  <div
                    className="flex items-center justify-between py-2 cursor-pointer"
                    onClick={() =>
                      setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)
                    }
                  >
                    <Link
                      to={item.href}
                      className={`font-dm-sans text-white text-base ${
                        item.active || isActive(item.href) ? "font-bold" : "font-normal"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && <ChevronDownIcon className="w-4 h-4 text-white" />}
                  </div>

                  {item.hasDropdown && openMobileDropdown === item.label && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {item.dropdownItems?.map((dd) => (
                        <Link
                          key={dd.label}
                          to={dd.href}
                          className="font-dm-sans text-white text-sm hover:text-gray-200"
                        >
                          {dd.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Button (Mobile) */}
              <Button
                variant="outline"
                className="w-120 group flex items-center gap-2 px-4 py-6 bg-white rounded-xl hover:bg-gray-100 text-[#543d98]"
              >
                <Link to="/contact-us" className="font-dm-sans font-bold text-sm text-[#543d98]">
                  Contact Us
                </Link>
                <img
                  src="/impulse-website/vector-1-3.svg"
                  alt="Arrow"
                  className="w-4 h-4 transition-transform duration-200 pointer-events-none
                    [@media(hover:hover)]:group-hover:rotate-45
                    [@media(hover:none)]:group-active:rotate-45"
                />
              </Button>
            </div>
          </div>
        )}
      </nav>

      {!overlay && <div style={{ height: headerH }} />}

      <style>{`
        w-30 {
          width: 30% !important;
          max-width: 30% !important;
        }
        .contact-arrow {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
          pointer-events: none;
        }
        .contact-btn:hover .contact-arrow {
          transform: rotate(45deg);
        }
        .contact-arrow {
          transition: transform 0.2s ease;
          pointer-events: none;
        }
        @media (hover: hover) {
          .group:hover .contact-arrow {
            transform: rotate(45deg);
          }
        }
        @media (hover: none) {
          .group:active .contact-arrow {
          transform: rotate(45deg);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
