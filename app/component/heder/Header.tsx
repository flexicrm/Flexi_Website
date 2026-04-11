"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Assuming these are your valid paths. Adjust if needed.
import Flexi_CRM_Full_Logo from "../../../public/Flexi_CRM_Full_Logo.svg";
import Flexi_CRM_Logo from "../../../public/Flexi_CRM_Logo.svg";

const navItems = [
  { name: "CRM", path: "/", hash: "flexi-crm" },
  { name: "HRMS", path: "/hrms", hash: "hrms" },
  { name: "Contact", path: "/contact", hash: "contact" }
];

 function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileOpen]);

  const isActive = (itemPath: string) => {
    if (itemPath === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(itemPath);
  };

  const getNavLink = (item: typeof navItems[0]) => {
    if (item.path === "/" && item.hash) {
      return `/#${item.hash}`;
    }
    return item.path;
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
            : "bg-white/90 backdrop-blur-sm py-3"
        } border-b border-gray-100`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-12 md:h-14">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <Image 
              src={Flexi_CRM_Full_Logo} 
              alt="Flexi CRM Logo" 
              height={38} 
              className="transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  href={getNavLink(item)}
                  className={`text-sm font-semibold relative py-2 transition-colors duration-300 ${
                    active ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                  } after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-blue-600 after:rounded-t-md after:transition-all after:duration-300 ${
                    active ? "after:w-full" : "after:w-0 hover:after:w-full"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>


          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden flex items-center justify-center p-2 -mr-2 text-gray-600 hover:text-blue-600 transition-colors z-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              // Close Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Hamburger Menu Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-0 right-0 z-[95] h-full w-[280px] sm:w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between mt-1">
          <div className="flex items-center gap-2">
            <Image src={Flexi_CRM_Logo} alt="Flexi CRM Icon" width={28} height={28} />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
              Flexi
            </span>
          </div>
        </div>

        {/* Drawer Navigation Links */}
        <nav className="flex flex-col py-4 px-3 flex-1 overflow-y-auto">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                href={getNavLink(item)}
                className={`flex items-center px-4 py-3.5 mx-2 my-1 rounded-xl text-[15px] font-semibold transition-all duration-200 ${
                  active
                    ? "text-blue-700 bg-blue-50/80"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

      </div>
    </>
  );
}

export default Header;