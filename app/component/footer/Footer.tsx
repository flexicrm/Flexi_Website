// app/components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Flexi_CRM_Full_Logo from "../../../public/Flexi_CRM_Logo.svg";


 function Footer() {
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
  type SocialItem = {
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
};

  const socialIcons: SocialItem[] = [
  { Icon: FaTwitter, color: "#1DA1F2" },
  { Icon: FaLinkedin, color: "#0077B5" },
  { Icon: FaInstagram, color: "#E4405F" },
];

  return (
    <footer className="bg-gray-800 py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo Section */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <Image 
              src={Flexi_CRM_Full_Logo} 
              alt="Flexi CRM Logo" 
              height={38} 
              className="transition-transform duration-300 group-hover:scale-105" 
            />
              <span className="font-sora font-extrabold text-xl text-white">
                Flexi <span className="text-primary">CRM</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              The smart, flexible CRM platform for growing teams. Manage leads, close deals, and scale your business — all
              in one place.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="md:col-span-2">
              <h3 className="font-sora font-bold text-sm text-white mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, li) => (
                  <li key={li}>
                    <Link
                      href={link.path}
                      className="text-sm text-gray-400 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2026 Flexi CRM. All rights reserved. Beta version — built with ❤️</p>
          <div className="flex gap-2">
            {socialIcons.map((social, idx) => {
              const Icon = social.Icon
              return(
                <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-9 h-9 bg-white/10 rounded flex items-center justify-center text-gray-400 hover:bg-[#3395ff] hover:text-white transition-all duration-250"
              >
                 <Icon className="w-6 h-6 text-white" />
              </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer