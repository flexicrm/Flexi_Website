// app/components/Header.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Flexi_CRM_Full_Logo from "../../../public/Flexi_CRM_Full_Logo.svg";
import Flexi_CRM_Logo from "../../../public/Flexi_CRM_Logo.svg";
import Reusable_Button from "../common/Reusable_Button";

const navItems = [
  { name: "Flexi CRM", path: "/", hash: "flexi-crm" },
  { name: "HRMS", path: "/hrms", hash: "hrms" },
  { name: "Contact", path: "/contact", hash: "contact" }
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isActive = (itemPath: string, itemHash: string) => {
    if (itemPath === "/") {
      return pathname === "/";
    }
    return pathname === itemPath;
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
        className={`fixed top-0 w-full z-50 transition-all duration-350 ${
          scrolled
            ? "bg-white/96 backdrop-blur-lg shadow-lg"
            : "bg-white/85 backdrop-blur-lg"
        } border-b border-gray-200`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between h-[68px]">
          {/* Logo with Brand Name */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image 
              src={Flexi_CRM_Full_Logo} 
              alt="Flexi CRM Logo" 
              height={40} 
              className="transition-transform group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={getNavLink(item)}
                className={`text-sm font-medium relative transition-colors duration-300 ${
                  isActive(item.path, item.hash)
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                } after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-accent after:rounded-full after:transition-all after:duration-300 ${
                  isActive(item.path, item.hash)
                    ? "after:w-[70%]"
                    : "hover:after:w-[70%]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden sm:block px-4 py-2 text-primary font-semibold border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-250"
            >
              Login
            </Link>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/register"
                className="hidden sm:block px-6 py-2 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-250"
              >
                Register Now
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-all duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="pt-6 px-4 mb-4 flex items-center gap-2">
            <Image src={Flexi_CRM_Logo} alt="Flexi CRM Logo" width={28} height={28} />
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Flexi CRM
            </span>
          </div>
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={getNavLink(item)}
                className={`px-4 py-3 transition-all duration-300 ${
                  isActive(item.path, item.hash)
                    ? "text-primary bg-gradient-to-r from-primary/10 to-accent/10 border-l-4 border-primary"
                    : "text-gray-700 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="px-4 mt-4 flex flex-col gap-3">
            <Reusable_Button
              text="Login"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            />
            <Reusable_Button
              text="Register Now"
              variant="primary"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;