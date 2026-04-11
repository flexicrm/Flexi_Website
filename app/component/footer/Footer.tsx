"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
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
        { name: "Integrations", path: "/integrations" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Careers", path: "/careers" },
        { name: "Press", path: "/press" },
        { name: "Partners", path: "/partners" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/help" },
        { name: "Contact Us", path: "/contact" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Status", path: "/status" },
      ],
    },
  ];

  const contactInfo = [
    { icon: MdEmail, text: "support@flexicrm.com", href: "mailto:support@flexicrm.com" },
    { icon: MdPhone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MdLocationOn, text: "San Francisco, CA", href: "#" },
  ];

  const socialIcons = [
    { Icon: FaTwitter, color: "#1DA1F2", name: "Twitter", url: "https://twitter.com" },
    { Icon: FaLinkedin, color: "#0077B5", name: "LinkedIn", url: "https://linkedin.com" },
    { Icon: FaInstagram, color: "#E4405F", name: "Instagram", url: "https://instagram.com" },
    { Icon: FaYoutube, color: "#FF0000", name: "YouTube", url: "https://youtube.com" },
    { Icon: FaGithub, color: "#333333", name: "GitHub", url: "https://github.com" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-auto" id="contact">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Top Section with Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
          
          {/* Brand Section - 4 columns */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-4 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="bg-blue-500/20 p-2 rounded-xl">
                <Image 
                  src={Flexi_CRM_Full_Logo} 
                  alt="Flexi CRM Logo" 
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain" 
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Flexi CRM
                </h2>
                <p className="text-xs text-gray-400">Smart CRM for Modern Teams</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0">
              The smart, flexible CRM platform for growing teams. Manage leads, close deals, and scale your business — all in one place.
            </p>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center justify-center lg:justify-start gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{item.text}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links Sections */}
          {footerSections.map((section, idx) => (
            <motion.div 
              key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="lg:col-span-2 text-center lg:text-left"
            >
              <h3 className="font-sora font-bold text-sm sm:text-base text-white mb-4 relative inline-block lg:inline-block">
                {section.title}
                <span className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              </h3>
              <ul className="space-y-2.5 mt-4">
                {section.links.map((link, li) => (
                  <li key={li}>
                    <Link
                      href={link.path}
                      className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-200 inline-block hover:translate-x-1 lg:hover:translate-x-2"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 text-center lg:text-left"
          >
            <h3 className="font-sora font-bold text-sm sm:text-base text-white mb-4 relative inline-block lg:inline-block">
              Stay Updated
              <span className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">Get the latest updates and news.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 text-gray-600 text-sm">
              <span className="text-blue-400">✦</span>
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
          
          {/* Copyright */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-center">
            <p className="text-xs text-gray-500">
              © {currentYear} Flexi CRM. All rights reserved.
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
              className="flex items-center gap-1 hover:opacity-80 transition-opacity group"
            >
              <Image src={Webdads2u_Logo} alt="webdads2u" width={16} height={16} className="w-4 h-4" />
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2">
            {socialIcons.map((social, idx) => {
              const Icon = social.Icon;
              return (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 bg-gray-800 hover:shadow-lg group"
                  style={{ color: '#9ca3af' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = social.color;
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1f2937';
                    e.currentTarget.style.color = '#9ca3af';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {social.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Mobile Bottom Links */}
        <div className="mt-6 pt-6 border-t border-gray-800 flex flex-wrap justify-center gap-4 text-center md:hidden">
          <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-blue-400 transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="text-xs text-gray-500 hover:text-blue-400 transition-colors">
            Terms
          </Link>
          <Link href="/contact" className="text-xs text-gray-500 hover:text-blue-400 transition-colors">
            Contact
          </Link>
          <Link href="/help" className="text-xs text-gray-500 hover:text-blue-400 transition-colors">
            Help
          </Link>
          <Link href="/sitemap" className="text-xs text-gray-500 hover:text-blue-400 transition-colors">
            Sitemap
          </Link>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50 hidden md:block"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}

export default Footer;