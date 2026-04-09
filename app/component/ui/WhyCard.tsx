"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface WhyCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export default function WhyCard({ icon, title, desc }: WhyCardProps) {
  const Icon = icon;

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.22 } }}
      className="h-full"
    >
      <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg hover:border-primary transition-all h-full">
        
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
        >
          <div
            className="rounded-full bg-primary text-black flex items-center justify-center mx-auto mb-5 shadow-md"
            style={{ width: 60, height: 60 }}
          >
            <Icon className="w-6 h-6" />
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="font-bold text-gray-800 mb-2 text-sm">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-500 leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}