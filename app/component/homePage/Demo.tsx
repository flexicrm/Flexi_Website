// app/components/Demo.tsx
"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedCounter from "../ui/AnimatedCounter";

function Demo() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const heroItem: Variants = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const stats = [
    { value: "2k+", label: "Beta Users", color: "#1E5FA8" },
    { value: "98%", label: "Satisfaction Rate", color: "#F5921E" },
    { value: "5x", label: "Faster Lead Tracking", color: "#16a34a" },
  ];

  const heroContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

  return (
    <div
      ref={heroRef}
      id="home"
      className="min-h-screen pt-32 pb-24 md:pt-36 md:pb-32 bg-gradient-hero relative overflow-hidden"
    >
      {/* Background Animations */}
      <motion.div
        style={{
          opacity: heroOpacity,
          y: heroY,
        }}
        className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-radial from-primary/10 to-transparent pointer-events-none"
      />
      <motion.div
        style={{ opacity: heroOpacity }}
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-radial from-accent/10 to-transparent pointer-events-none"
      />

      {/* Floating Dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-${2 + i} h-${2 + i} rounded-full ${
            i % 2 === 0 ? "bg-primary/20" : "bg-accent/20"
          }`}
          style={{ top: `${10 + i * 12}%`, left: `${5 + i * 8}%` }}
          animate={{ y: [0, -18, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 min-h-[70vh]">
          {/* Left Content */}
          <div className="w-full md:w-[48%]">
            <motion.div variants={heroContainer} initial="hidden" animate="visible">
              <motion.div variants={heroItem}>
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10">
                  <motion.span
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-green-500"
                  />
                  <span className="text-green-700 font-semibold text-xs font-sora">Beta Version – Live Now</span>
                </div>
              </motion.div>

              <motion.div variants={heroItem}>
                <h1 className="font-extrabold text-gray-800 mb-3 text-3xl md:text-5xl leading-tight tracking-tight">
                  Manage Leads{" "}
                  <motion.span
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-primary inline-block"
                  >
                    Smarter
                  </motion.span>{" "}
                  with Flexi CRM
                </h1>
              </motion.div>

              <motion.div variants={heroItem}>
                <p className="text-gray-500 mb-6 text-base leading-relaxed max-w-md">
                  Organize, track, and convert leads into customers with a simple and powerful CRM platform built for growing teams.
                </p>
              </motion.div>

              <motion.div variants={heroItem}>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href="/register"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-xl shadow-lg hover:bg-accent-dark transition-all"
                    >
                      Register Now – It's Free
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <button className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all">
                      ▶ View Demo
                    </button>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={heroItem}>
                <div className="flex gap-8" ref={statsRef}>
                  {stats.map((stat, i) => (
                    <div key={i}>
                      {statsVisible ? (
                        <AnimatedCounter value={stat.value} color={stat.color} />
                      ) : (
                        <h4 className="font-extrabold text-2xl" style={{ color: stat.color }}>0</h4>
                      )}
                      <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Dashboard */}
          <div className="flex-1 relative pt-8 md:pt-0">
            {/* Floating Card Top Right */}
            <motion.div
              initial={{ opacity: 0, y: -24, x: 10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.85, duration: 0.6, type: "spring", stiffness: 120 }}
              className="absolute -top-4 right-0 z-10 bg-white rounded-xl shadow-lg border border-gray-200 p-3"
            >
              <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 2.2, repeat: Infinity }}>
                <h3 className="font-sora font-extrabold text-xl text-accent">+34</h3>
                <p className="text-xs text-gray-500 mt-1">New leads today</p>
              </motion.div>
            </motion.div>

            {/* Main Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.93 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-2xl p-5 border border-gray-200 relative z-20"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-sora font-bold text-sm">Lead Dashboard</h3>
                <span className="px-2 py-0.5 bg-green-100 text-green-800 font-bold text-xs rounded">● Live</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { value: "248", label: "Total Leads", color: "#1E5FA8" },
                  { value: "64", label: "Follow-ups", color: "#F5921E" },
                  { value: "38", label: "Converted", color: "#16a34a" },
                ].map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + idx * 0.13 }}
                    className="bg-gray-100 rounded-lg p-2"
                  >
                    <h4 className="font-sora text-lg font-extrabold" style={{ color: m.color }}>{m.value}</h4>
                    <p className="text-xs text-gray-500 mt-1">{m.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Chart */}
              <div className="flex items-end gap-1 h-20 bg-gray-100 p-2 rounded-lg mb-4">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => {
                  const heights = [45, 65, 50, 80, 60, 90, 40];
                  const colors = ["#1E5FA820", "#1E5FA840", "#1E5FA830", "#1E5FA8", "#F5921E", "#F5921E", "#1E5FA820"];
                  return (
                    <div key={day} className="flex-1 flex flex-col items-center gap-1">
                      <motion.div
                        className="w-full rounded-t"
                        style={{ backgroundColor: colors[idx] }}
                        initial={{ height: 0 }}
                        animate={{ height: `${heights[idx]}%` }}
                        transition={{ delay: 1.0 + idx * 0.09, duration: 0.55, ease: "backOut" }}
                        whileHover={{ filter: "brightness(1.25)", transition: { duration: 0.15 } }}
                      />
                      <span className="text-xs text-gray-500">{day}</span>
                    </div>
                  );
                })}
              </div>

              {/* Lead List */}
              <div className="flex flex-col gap-2">
                {[
                  { name: "Arun Kumar", company: "TechCorp Pvt Ltd", initial: "AK", color: "#1E5FA8", status: "🔥 Hot", statusColor: "#fee2e2", statusText: "#991b1b" },
                  { name: "Sneha Raj", company: "Startup X", initial: "SR", color: "#F5921E", status: "Follow-up", statusColor: "#fef3c7", statusText: "#92400e" },
                  { name: "Mohammed V", company: "Global Traders", initial: "MV", color: "#16a34a", status: "✓ Closed", statusColor: "#dcfce7", statusText: "#166534" },
                ].map((lead, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.45 + idx * 0.13 }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: lead.color }}>
                      {lead.initial}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{lead.name}</p>
                      <p className="text-xs text-gray-500">{lead.company}</p>
                    </div>
                    <span className="px-2 py-0.5 text-xs font-bold rounded" style={{ backgroundColor: lead.statusColor, color: lead.statusText }}>
                      {lead.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating Card Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 24, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6, type: "spring", stiffness: 120 }}
              className="absolute -bottom-6 left-4 z-10 bg-white rounded-xl shadow-lg border border-gray-200 p-3"
            >
              <motion.div animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}>
                <h3 className="font-sora font-extrabold text-xl text-green-600">+12%</h3>
                <p className="text-xs text-gray-500 mt-1">Conversion rate this week</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo