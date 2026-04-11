"use client";

import { motion, useInView } from "framer-motion";
import {
  ClipboardList,
  LucideIcon,
  Receipt,
  TrendingUp,
  UserCog,
  Users,
} from "lucide-react";
import { useRef } from "react";
import ScrollReveal from "../ui/ScrollReveal";

function Product_RoadMap() {
  type ModuleItem = {
    title: string;
    status: "live" | "soon";
    icon: LucideIcon;
    description?: string;
    releaseDate?: string;
  };

  const roadmapItems: ModuleItem[] = [
    { 
      title: "Lead Management", 
      status: "live", 
      icon: Users,
      description: "Complete lead tracking pipeline",
      releaseDate: "Released v2.0"
    },
    { 
      title: "Sales Management", 
      status: "soon", 
      icon: TrendingUp,
      description: "Advanced sales analytics",
      releaseDate: "Coming Q2 2026"
    },
    { 
      title: "Customer Management", 
      status: "soon", 
      icon: UserCog,
      description: "360° customer view",
      releaseDate: "Coming Q3 2026"
    },
    { 
      title: "Project Management", 
      status: "soon", 
      icon: ClipboardList,
      description: "Team collaboration tools",
      releaseDate: "Coming Q4 2026"
    },
    { 
      title: "Invoice Management", 
      status: "soon", 
      icon: Receipt,
      description: "Automated billing system",
      releaseDate: "Coming Q1 2027"
    },
  ];

  const progressRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(progressRef, { once: true, margin: "-100px" });

  const liveCount = roadmapItems.filter(item => item.status === "live").length;
  const totalCount = roadmapItems.length;
  const progressPercentage = (liveCount / totalCount) * 100;

  return (
    <section className="bg-gradient-roadmap py-12 sm:py-16 md:py-24 relative overflow-hidden" id="roadmap">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl hidden md:block" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl hidden md:block" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <motion.div 
              className="inline-flex items-center gap-2 mb-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-4 h-0.5 bg-gradient-to-r from-transparent to-accent" />
              <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-accent/10 px-2 sm:px-3 py-1 rounded-full text-accent">
                Product Roadmap
              </span>
              <div className="w-4 h-0.5 bg-gradient-to-l from-transparent to-accent" />
            </motion.div>

            <motion.h2 
              className="font-extrabold text-black mb-3 text-xl sm:text-2xl md:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              What's <span className="text-[#3395ff] relative inline-block">
                Live &amp; Coming
              </span> Next
            </motion.h2>

            <motion.p 
              className="text-sm sm:text-base text-black/65 max-w-md mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We're building a full business OS. Lead Management is live — more powerful modules are on the way.
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Progress bar */}
        <motion.div 
          ref={progressRef}
          className="max-w-2xl mx-auto mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between text-xs sm:text-sm text-black/60 mb-2">
            <span>Overall Progress</span>
            <span className="font-bold text-accent">{liveCount}/{totalCount} Modules Live</span>
          </div>
          <div className="h-1.5 sm:h-2 bg-black/10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: isInView ? `${progressPercentage}%` : 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Roadmap Items - Responsive grid for mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between lg:items-start gap-6 lg:gap-0 max-w-5xl mx-auto">
          
          {/* Timeline line - Hidden on mobile/tablet */}
          <div className="hidden lg:block absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-black/10 to-transparent z-0" style={{ top: '28px' }} />

          {roadmapItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 0.15}
              >
                <div className="flex flex-col items-center text-center relative z-20 px-2 group w-full">
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: item.status === "live" ? 0 : 2 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 cursor-pointer ${
                      item.status === "live"
                        ? "border-2 border-black shadow-lg"
                        : "border-2 border-black/20 hover:border-accent/50"
                    }`}
                    style={{
                      backgroundColor: item.status === "live" ? "#F5921E" : "rgba(255,255,255,0.08)",
                      boxShadow: item.status === "live" ? "0 0 0 4px rgba(245,146,30,0.2)" : "none",
                    }}
                  >
                    {/* Pulsing ring for live items */}
                    {item.status === "live" && (
                      <motion.span
                        className="absolute inset-0 rounded-full border-2 border-accent"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                    
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-black relative z-10" />

                    {/* Tooltip on hover */}
                    <motion.div 
                      className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] sm:text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-30 hidden sm:block"
                      initial={{ y: 5 }}
                      whileHover={{ y: 0 }}
                    >
                      {item.releaseDate || (item.status === "live" ? "Available Now" : "Development")}
                    </motion.div>
                  </motion.div>

                  <h4 className="font-sora font-bold text-xs sm:text-sm text-black mb-1 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h4>

                  {item.description && (
                    <p className="text-[10px] sm:text-xs text-black/50 mb-2 max-w-[100px]">
                      {item.description}
                    </p>
                  )}

                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className={`px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-xs font-bold rounded-full ${
                      item.status === "live"
                        ? "bg-green-500/20 text-green-600 border border-green-500/30"
                        : "bg-accent/20 text-accent border border-accent/30"
                    }`}
                  >
                    {item.status === "live" ? (
                      <span className="flex items-center gap-1">
                        <motion.span 
                          className="w-1 h-1 rounded-full bg-green-500"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        Live Now
                      </span>
                    ) : (
                      "Coming Soon"
                    )}
                  </motion.span>

                  {/* Mobile connector */}
                  {index < roadmapItems.length - 1 && (
                    <div className="sm:hidden w-0.5 h-4 bg-gradient-to-b from-accent/30 to-transparent mt-2" />
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Product_RoadMap;