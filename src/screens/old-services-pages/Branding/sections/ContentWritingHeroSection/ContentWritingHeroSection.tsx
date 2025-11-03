import React, { useState } from "react";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

export const ContentWritingHeroSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  
  const navigationItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services", hasDropdown: true, dropdownItems: [
      { label: "All Services", href: "/services" },
      { label: "Content Writing Services", href: "/content-writing-services", active: true }
    ]},
    { label: "Clients & Work", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Blogs", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Careers", href: "#" },
  ];
  const handleContactClick = () => {
    console.log("Contact button clicked");
  };
  return (
    <section className="relative w-full h-screen min-h-[600px] bg-[#020018]" data-section="content-writing-hero">
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
          <source src="/impulse-website/bg-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: "#020018", opacity: 0.85 }}
          aria-hidden="true"
        />
      </div>

      {/* Navigation */}
      <nav className="absolute top-4 left-0 right-0 px-4 z-999">
                       <div className="flex w-full items-center justify-between">
                         {/* Logo */}
                         <img
                           className="w-[100px] h-[44px] sm:w-[120px] sm:h-[53px] md:w-[148px] md:h-[66px]"
                           alt="Impulse Digital Logo"
                           src="/impulse-website/frame-2147224428.svg"
                         />
           
                         {/* Desktop Navigation */}
                 <div className="hidden lg:flex items-center gap-8 xl:gap-12">
                   {navigationItems.map((item, index) => (
                     <div
                       key={index}
                       className="relative"
                       onMouseEnter={() => setOpenDropdown(item.label)}
                       onMouseLeave={() => setOpenDropdown(null)}
                     >
                       <div className="flex items-center gap-1 cursor-pointer">
                         <Link
                           to={item.href}
                           className={`font-dm-sans text-white text-sm whitespace-nowrap hover:text-gray-200 transition-colors ${
                             item.active ? "font-bold" : "font-normal"
                           }`}
                         >
                           {item.label}
                         </Link>
                         {item.hasDropdown && (
                           <ChevronDownIcon className="w-3.5 h-3.5 text-white" />
                         )}
                       </div>
           
                       {/* Dropdown Menu */}
                       {item.hasDropdown && openDropdown === item.label && (
                         <div className="absolute top-full left-0  w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                           {item.dropdownItems?.map((dropdown, dIndex) => (
                             <Link
                               key={dIndex}
                               to={dropdown.href}
                               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                             >
                               {dropdown.label}
                             </Link>
                           ))}
                         </div>
                       )}
                     </div>
                   ))}
                 </div>
           
                         {/* Desktop Contact Button */}
                         <Button 
                           onClick={handleContactClick}
                           className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white rounded-xl hover:bg-gray-100 transition-colors"
                         >
                           <a href="/about">
                             <span className="font-dm-sans font-bold text-[#543d98] text-sm">
                             Contact Us
                           </span>
                           </a>
                           <img
                             className="w-4 h-4"
                             alt="Arrow"
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
                   <div className="absolute top-16 left-0 right-0 bg-[#543d98]/95 backdrop-blur-sm border-t border-white/20 lg:hidden z-50 mx-4 rounded-lg">
                       <div className="flex flex-col px-4 py-6 space-y-4">
                       {navigationItems.map((item, index) => (
                         <div key={index} className="flex flex-col">
                           <div
                             className="flex items-center justify-between py-2 cursor-pointer"
                             onClick={() =>
                               setOpenMobileDropdown(
                                 openMobileDropdown === item.label ? null : item.label
                               )
                             }
                           >
                             <Link
                               to={item.href}
                               className={`font-dm-sans text-white text-base ${
                                 item.active ? "font-bold" : "font-normal"
                               }`}
                             >
                               {item.label}
                             </Link>
                             {item.hasDropdown && (
                               <ChevronDownIcon className="w-4 h-4 text-white" />
                             )}
                           </div>
           
                           {/* Mobile Dropdown */}
                           {item.hasDropdown && openMobileDropdown === item.label && (
                             <div className="ml-4 mt-2 flex flex-col gap-2">
                               {item.dropdownItems?.map((dropdown, dIndex) => (
                                 <Link
                                   key={dIndex}
                                   to={dropdown.href}
                                   className="font-dm-sans text-white text-sm hover:text-gray-200"
                                 >
                                   {dropdown.label}
                                 </Link>
                               ))}
                             </div>
                           )}
                         </div>
                       ))}
           
                       {/* Button (Mobile) */}
                       <Button className="flex w-full items-center justify-center gap-2 px-5 py-3 bg-white rounded-xl hover:bg-gray-100 mt-4">
                                       <span className="[font-family:'DM_Sans',Helvetica] font-bold text-[#543d98] text-base">
                                         Contact Us
                                       </span>
                                       <img className="w-4 h-4" alt="Arrow" src="/impulse-website/vector-1-3.svg" />
                                     </Button>
                     </div>
                   </div>
                       )}
                     </nav>

      {/* Main Content - Centered */}
      <div className="absolute inset-0 flex items-center justify-center pt-20">
        <div className="text-center flex flex-col items-center">
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="[font-family:'DM_Sans',Helvetica] font-black text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[0.9] tracking-tight">
              CONTENT WRITING SERVICES
            </h1>
          </div>

          {/* Breadcrumb Navigation */}
          <div className="mt-6">
            <nav className="flex items-center justify-center gap-2 text-white/80 text-sm">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>{'>'}</span>
              <span className="text-white">Content Writing Services</span>
            </nav>
          </div>
        </div>
      </div>

    </section>
  );
};