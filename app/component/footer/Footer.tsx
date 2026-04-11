"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Flexi_CRM_Full_Logo from "../../../public/Flexi_CRM_Logo.svg";
import Webdads2u_Logo from "../../../public/Webdads2u_Logo.png";

function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", path: "/features" },
        { name: "Roadmap", path: "/roadmap" },
        { name: "Pricing", path: "/pricing" },
        { name: "Changelog", path: "/changelog" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Careers", path: "/careers" },
        { name: "Press", path: "/press" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/help" },
        { name: "Contact Us", path: "/contact" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms" },
      ],
    },
  ];

  const socialIcons = [
    { Icon: FaTwitter, color: "#1DA1F2", name: "Twitter", url: "https://twitter.com" },
    { Icon: FaLinkedin, color: "#0077B5", name: "LinkedIn", url: "https://linkedin.com" },
    { Icon: FaInstagram, color: "#E4405F", name: "Instagram", url: "https://instagram.com" },
  ];

  return (
    <footer className="bg-gray-800 py-8 sm:py-12 mt-auto" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Logo Section - Full width on mobile, 4 cols on desktop */}
          <div className="sm:col-span-2 md:col-span-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
              <Image 
                src={Flexi_CRM_Full_Logo} 
                alt="Flexi CRM Logo" 
                width={32}
                height={32}
                className="w-8 h-8 object-contain transition-transform duration-300 hover:scale-105" 
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xs mx-auto sm:mx-0">
              The smart, flexible CRM platform for growing teams. Manage leads, close deals, and scale your business — all
              in one place.
            </p>
          </div>

          {/* Footer Links - Responsive grid */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="sm:col-span-1 md:col-span-2 text-center sm:text-left">
              <h3 className="font-sora font-bold text-sm sm:text-base text-white mb-3 sm:mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2 sm:space-y-2.5">
                {section.links.map((link, li) => (
                  <li key={li}>
                    <Link
                      href={link.path}
                      className="text-xs sm:text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="my-6 sm:my-8 border-gray-700" />

        {/* Bottom Section - Fully Responsive */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          
          {/* Copyright Section */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <p className="text-xs text-gray-500">
              © {currentYear} Flexi CRM. All rights reserved. Beta version 1.0
            </p>
            <span className="hidden sm:inline text-gray-600">•</span>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              Built with 
              by
            </p>
            <Link 
              href="https://webdads2u.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <Image src={Webdads2u_Logo} alt="webdads2u" width={14} height={14} className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2 sm:gap-3">
            {socialIcons.map((social, idx) => {
              const Icon = social.Icon;
              return (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-250 bg-white/10 hover:bg-opacity-100"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.color;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = '#9ca3af';
                  }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Mobile Bottom Links (Optional - for better mobile navigation) */}
        <div className="mt-6 pt-6 border-t border-gray-800 flex flex-wrap justify-center gap-4 text-center sm:hidden">
          <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="text-xs text-gray-500 hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="/contact" className="text-xs text-gray-500 hover:text-white transition-colors">
            Contact
          </Link>
          <Link href="/help" className="text-xs text-gray-500 hover:text-white transition-colors">
            Help
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;