// app/components/Mobile_App.tsx
"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BellRing,
  CheckCircle,
  LucideIcon,
  ShieldCheck,
  Users
} from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

 function Mobile_App() {
  type FeatureItem = {
  icon: LucideIcon;
  text: string;
};

const features: FeatureItem[] = [
  {
    icon: CheckCircle,
    text: "Real-time lead updates & notifications",
  },
  {
    icon: BellRing,
    text: "Instant follow-up reminders on the go",
  },
  {
    icon: BarChart3,
    text: "Live dashboard charts & metrics",
  },
  {
    icon: Users,
    text: "Team collaboration & lead assignment",
  },
  {
    icon: ShieldCheck,
    text: "Offline mode with secure data sync",
  },
];
{}

  return (
    <section className="bg-gradient-mobile py-16 md:py-24 relative overflow-hidden" id="mobileapp">
      {/* Background Effects */}
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent/12 to-transparent pointer-events-none" />
      <div className="absolute -bottom-36 -left-24 w-[400px] h-[400px] rounded-full bg-gradient-radial from-primary/18 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="md:w-1/2">
            <ScrollReveal direction="left">
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-6 h-0.5 bg-accent" />
                <span className="text-xs font-bold tracking-wider uppercase text-accent">Mobile App</span>
                <div className="w-6 h-0.5 bg-accent" />
              </div>
              <h2 className="font-extrabold text-white mb-3 text-2xl md:text-4xl leading-tight">
                Take Flexi CRM <span className="text-accent">Everywhere</span> You Go
              </h2>
              <p className="text-base text-white/65 mb-6 max-w-md leading-relaxed">
                Manage your leads, track follow-ups, and stay on top of your pipeline right from your pocket.
              </p>


              <div className="flex flex-col gap-3 mb-8">
                {features.map((item, idx) => {
                  const Icon = item.icon;

                  return (
                    <ScrollReveal
                      key={idx}
                      direction="left"
                      delay={0.1 + idx * 0.09}
                    >
                      <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-3 py-2 rounded-lg hover:bg-white/10 transition">
                        
                        <Icon className="w-5 h-5 text-accent" />

                        <span className="text-sm text-white/85">
                          {item.text}
                        </span>

                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                {[
                  { icon: "PhoneIphone", line1: "DOWNLOAD ON THE", line2: "App Store" },
                  { icon: "Android", line1: "GET IT ON", line2: "Google Play" },
                ].map(({ icon, line1, line2 }, idx) => (
                  <motion.div key={idx} whileHover={{ scale: 1.05, y: -3 }}>
                    <button className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/15 hover:border-accent transition-all">
                      <span className="text-xl">{icon}</span>
                      <div className="text-left">
                        <p className="text-xs uppercase opacity-55">{line1}</p>
                        <p className="font-sora font-bold text-sm">{line2}</p>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/20 border border-accent/35 rounded-full">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-bold text-accent">App launching soon — Join the waitlist</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Phone Mockups */}
          <div className="md:w-1/2 flex justify-center items-end gap-4 h-[540px] relative">
            <div className="absolute w-[300px] h-[300px] rounded-full bg-primary/30 blur-[60px] top-[10%] right-[10%] z-0" />
            <div className="absolute w-[200px] h-[200px] rounded-full bg-accent/30 blur-[60px] bottom-[5%] left-[15%] z-0" />

            {/* Phone 1 (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -60, rotate: -6 }}
              whileInView={{ opacity: 1, x: 20, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, rotate: -4, transition: { duration: 0.3 } }}
              className="w-[170px] h-[360px] rounded-3xl shadow-2xl overflow-hidden relative z-20 opacity-85"
            >
              <div className="h-full bg-gradient-to-b from-[#0d1a2e] to-[#0f2540]">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-xl z-30" />
                <div className="absolute inset-0 p-3 pt-10 flex flex-col gap-1">
                  <div className="flex justify-between items-center px-1">
                    <span className="font-sora font-bold text-xs text-white">My Leads</span>
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white text-[10px]">AK</div>
                  </div>
                  <p className="text-[11px] text-white/60 mt-1">Today's Follow-ups (5)</p>
                  {[
                    { name: "Ravi Shankar", tag: "🔥 Hot", tagBg: "rgba(239,68,68,0.2)", tagColor: "#f87171" },
                    { name: "Priya Nair", tag: "Warm", tagBg: "rgba(245,158,11,0.2)", tagColor: "#fbbf24" },
                    { name: "Arjun Mehta", tag: "New", tagBg: "rgba(59,130,246,0.2)", tagColor: "#60a5fa" },
                  ].map((it, idx) => (
                    <div key={idx} className="bg-white/10 rounded-lg p-2 border border-white/10">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-white">{it.name}</span>
                        <span className="text-[10px] font-bold px-1 py-0.5 rounded" style={{ backgroundColor: it.tagBg, color: it.tagColor }}>
                          {it.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Phone 2 (Center) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="w-[200px] h-[420px] rounded-3xl shadow-2xl overflow-hidden relative z-30"
            >
              <div className="h-full bg-gradient-to-b from-[#0d1a2e] to-[#0f2540]">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-xl z-30" />
                <div className="absolute inset-0 p-3 pt-10 flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="font-sora font-bold text-xs text-white">Good morning, Arun 👋</span>
                    <div className="flex gap-1 items-center">
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-green-500"
                      />
                      <span className="text-[10px] text-green-400">Live</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-1">
                    {[
                      { val: "128", label: "Total Leads", color: "#60a5fa" },
                      { val: "32", label: "Follow-ups", color: "#F5921E" },
                      { val: "19", label: "Converted", color: "#4ade80" },
                      { val: "74%", label: "Response Rate", color: "#c084fc" },
                    ].map((m, i) => (
                      <div key={i} className="bg-white/10 rounded-lg p-1.5 border border-white/10">
                        <h4 className="font-sora font-extrabold text-sm" style={{ color: m.color }}>{m.val}</h4>
                        <p className="text-[10px] text-white/45">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/5 rounded-lg p-1.5 border border-white/10">
                    <p className="text-[10px] text-white/50 mb-1 font-semibold">Weekly Lead Activity</p>
                    <div className="flex items-end gap-0.5 h-10">
                      {[40, 65, 50, 85, 70, 95, 45].map((h, idx) => (
                        <motion.div
                          key={idx}
                          className="flex-1 rounded-t"
                          style={{
                            background: idx === 4 || idx === 5 ? "#F5921E" : idx === 3 ? "#1E5FA8" : `rgba(30,95,168,${0.3 + idx * 0.1})`,
                          }}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + idx * 0.08, duration: 0.5 }}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-[10px] text-white/50 font-semibold px-1">Recent Leads</p>
                  {[
                    { name: "Arun Kumar", company: "TechCorp", initial: "AK", color: "#1E5FA8", dot: "#22c55e" },
                    { name: "Sneha Raj", company: "Startup X", initial: "SR", color: "#F5921E", dot: "#fbbf24" },
                    { name: "Mohammed V", company: "Global Traders", initial: "MV", color: "#7c3aed", dot: "#f87171" },
                  ].map((lead, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white/10 rounded p-1.5">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center text-white font-bold text-[10px]" style={{ backgroundColor: lead.color }}>
                        {lead.initial}
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-white">{lead.name}</p>
                        <p className="text-[9px] text-white/40">{lead.company}</p>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: lead.dot }} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Phone 3 (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotate: 6 }}
              whileInView={{ opacity: 1, x: -20, rotate: 6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, rotate: 4, transition: { duration: 0.3 } }}
              className="w-[170px] h-[360px] rounded-3xl shadow-2xl overflow-hidden relative z-20 opacity-85"
            >
              <div className="h-full bg-gradient-to-b from-[#0d1a2e] to-[#0f2540]">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-xl z-30" />
                <div className="absolute inset-0 p-3 pt-10 flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="font-sora font-bold text-xs text-white">Activity</span>
                    <span className="px-1.5 py-0.5 bg-accent text-white text-[9px] font-bold rounded">3 New</span>
                  </div>
                  {[
                    { title: "🔔 Follow-up Due", name: "Ravi Shankar", sub: "TechVision • 10:30 AM", color: "#F5921E", bg: "rgba(245,146,30,0.1)", border: "rgba(245,146,30,0.2)" },
                    { title: "✅ Lead Converted", name: "Priya Nair", sub: "Closed ₹2.4L deal", color: "#4ade80", bg: "rgba(34,197,94,0.08)", border: "rgba(34,197,94,0.2)" },
                    { title: "👤 New Lead Added", name: "Karan Mehta", sub: "Added by Sneha • 9:15 AM", color: "#60a5fa", bg: "rgba(30,95,168,0.15)", border: "rgba(30,95,168,0.25)" },
                  ].map((it, idx) => (
                    <div key={idx} className="rounded-lg p-1.5" style={{ backgroundColor: it.bg, border: `1px solid ${it.border}` }}>
                      <p className="text-[11px] font-bold mb-0.5" style={{ color: it.color }}>{it.title}</p>
                      <p className="text-[10px] text-white font-semibold">{it.name}</p>
                      <p className="text-[9px] text-white/45">{it.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Mobile_App