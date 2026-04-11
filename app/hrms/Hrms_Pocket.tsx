// app/components/Hrms_Pocket.tsx
"use client"

import { motion, useInView, Variants } from "framer-motion"
import { useRef, useState } from "react"

const Hrms_Pocket = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activePhone, setActivePhone] = useState<"dashboard" | "payslip" | "attendance">("dashboard")

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const phoneVariants :Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
    hover: { scale: 1.02, transition: { duration: 0.2 } }
  }

  const phoneVariantsSide = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 0.7, x: 0, transition: { duration: 0.5, delay: 0.2 } },
    hover: { scale: 0.88, opacity: 0.8 }
  }

  const phoneVariantsSideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 0.7, x: 0, transition: { duration: 0.5, delay: 0.3 } },
    hover: { scale: 0.88, opacity: 0.8 }
  }

  return (
    <section id="mobile-preview" className="py-25 px-[5%] relative overflow-hidden bg-gradient-to-br from-[#1e293b] to-[#0f172a]">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-50 -right-50 w-[700px] h-[700px] rounded-full bg-radial from-[rgba(139,92,246,0.15)] to-transparent"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-radial from-[rgba(30,95,168,0.1)] to-transparent"
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="text-center max-w-[720px] mx-auto mb-20 relative z-10">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-[2.4rem] font-extrabold text-white mb-4">
            HRMS in Your <span className="text-[#3395ff]">Pocket</span>
          </h2>
          <p className="text-[1.05rem] text-white/70 leading-relaxed">
            Complete mobile experience for employees and managers — from attendance to payslips, everything at your fingertips.
          </p>
        </motion.div>
      </div>

      <div ref={ref} className="flex justify-center gap-10 items-center max-w-[900px] mx-auto relative z-10 flex-col lg:flex-row">
        {/* Left Phone - Dashboard */}
        <motion.div
          variants={phoneVariantsSide}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover="hover"
          className="w-[280px] flex-shrink-0"
        >
          <div className="bg-[#1f2937] rounded-[40px] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.5)] border-8 border-[#111827] relative">
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[120px] h-[26px] bg-[#111827] rounded-b-2xl z-10" />
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-[30px] overflow-hidden h-[580px] flex flex-col">
              <div className="pt-12.5 px-4 pb-4 flex items-center justify-between bg-white/5 backdrop-blur-md border-b border-white/10">
                <div className="font-['Sora'] font-bold text-[0.75rem] text-white">Dashboard</div>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-4 h-4">
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                <motion.div
                  className="bg-white/15 rounded-[14px] p-4 mb-3 backdrop-blur-md"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-white/25 flex items-center justify-center font-['Sora'] font-extrabold text-[1.1rem] text-white">RS</div>
                    <div className="flex-1">
                      <div className="font-['Sora'] font-bold text-[0.85rem] text-white">Ravi Shankar</div>
                      <div className="text-[0.65rem] text-white/70">EMP-1042 • Engineering</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/10 rounded-[10px] p-2.5 text-center">
                      <div className="font-['Sora'] font-extrabold text-[1.1rem] text-white">22</div>
                      <div className="text-[0.6rem] text-white/60">Days Present</div>
                    </div>
                    <div className="bg-white/10 rounded-[10px] p-2.5 text-center">
                      <div className="font-['Sora'] font-extrabold text-[1.1rem] text-white">₹68K</div>
                      <div className="text-[0.6rem] text-white/60">This Month</div>
                    </div>
                  </div>
                </motion.div>

                <div className="flex flex-col gap-2">
                  {[
                    { icon: "📅", label: "Mark Attendance", sub: "Tap to check in", color: "rgba(139,92,246,0.2)" },
                    { icon: "💰", label: "View Payslip", sub: "March 2026", color: "rgba(245,146,30,0.2)" },
                    { icon: "📄", label: "Apply Leave", sub: "4 days remaining", color: "rgba(30,95,168,0.2)" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-white/10 border border-white/15 rounded-xl p-3 flex items-center gap-2.5"
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                    >
                      <div className="w-9 h-9 rounded-[10px] flex items-center justify-center text-xl" style={{ background: item.color }}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-[0.7rem] font-bold text-white">{item.label}</div>
                        <div className="text-[0.58rem] text-white/50">{item.sub}</div>
                      </div>
                      <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" className="w-4.5 h-4.5">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-1 bg-white/10 backdrop-blur-md border-t border-white/10 py-2 px-1">
                {["🏠", "📊", "💰", "⚙️"].map((icon, idx) => (
                  <motion.div
                    key={idx}
                    className={`flex flex-col items-center gap-1 py-1.5 cursor-pointer transition-all ${idx === 0 ? "text-[#a78bfa]" : "text-white/40"}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-xl">{icon}</div>
                    <span className="text-[0.58rem] font-semibold">{["Home", "Attendance", "Payslip", "Settings"][idx]}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Center Phone - Payslip */}
        <motion.div
          variants={phoneVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover="hover"
          className="w-[280px] flex-shrink-0 z-20"
        >
          <div className="bg-[#1f2937] rounded-[40px] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.5)] border-8 border-[#111827] relative">
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[120px] h-[26px] bg-[#111827] rounded-b-2xl z-10" />
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-[30px] overflow-hidden h-[580px] flex flex-col">
              <div className="pt-12.5 px-4 pb-4 flex items-center justify-between bg-white/5 backdrop-blur-md border-b border-white/10">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-5 h-5 cursor-pointer">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <div className="font-['Sora'] font-bold text-[0.75rem] text-white">Payslip - March 2026</div>
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" className="w-5 h-5 cursor-pointer">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                <motion.div
                  className="bg-[rgba(139,92,246,0.08)] border border-[rgba(139,92,246,0.2)] rounded-[14px] p-4 mb-3.5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex justify-between mb-3">
                    <div>
                      <div className="text-[0.65rem] text-white/50">Employee ID</div>
                      <div className="text-[0.75rem] font-bold text-white mt-0.5">EMP-1042</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[0.65rem] text-white/50">Pay Period</div>
                      <div className="text-[0.75rem] font-bold text-white mt-0.5">Mar 2026</div>
                    </div>
                  </div>
                  <div className="bg-[rgba(167,139,250,0.15)] rounded-[10px] p-3 text-center">
                    <div className="text-[0.7rem] text-white/60 mb-1">Net Salary</div>
                    <motion.div
                      className="font-['Sora'] text-[1.6rem] font-extrabold text-[#a78bfa]"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      ₹68,420
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white/5 border border-white/10 rounded-[14px] p-3.5 mb-2.5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-[0.7rem] font-bold text-white mb-2.5">Earnings</div>
                  {[
                    { label: "Basic Salary", amount: "₹50,000" },
                    { label: "HRA", amount: "₹20,000" },
                    { label: "Special Allowance", amount: "₹5,000" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between mb-1.5">
                      <div className="text-[0.65rem] text-white/60">{item.label}</div>
                      <div className="text-[0.65rem] font-bold text-white">{item.amount}</div>
                    </div>
                  ))}
                  <div className="border-t border-white/10 mt-2 pt-2 flex justify-between">
                    <div className="text-[0.7rem] font-bold text-green-400">Total Earnings</div>
                    <div className="text-[0.7rem] font-extrabold text-green-400">₹75,000</div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white/5 border border-white/10 rounded-[14px] p-3.5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-[0.7rem] font-bold text-white mb-2.5">Deductions</div>
                  {[
                    { label: "PF", amount: "₹3,600" },
                    { label: "Professional Tax", amount: "₹200" },
                    { label: "TDS", amount: "₹2,780" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between mb-1.5">
                      <div className="text-[0.65rem] text-white/60">{item.label}</div>
                      <div className="text-[0.65rem] font-bold text-white">{item.amount}</div>
                    </div>
                  ))}
                  <div className="border-t border-white/10 mt-2 pt-2 flex justify-between">
                    <div className="text-[0.7rem] font-bold text-orange-400">Total Deductions</div>
                    <div className="text-[0.7rem] font-extrabold text-orange-400">₹6,580</div>
                  </div>
                </motion.div>
              </div>
              <div className="grid grid-cols-4 gap-1 bg-white/10 backdrop-blur-md border-t border-white/10 py-2 px-1">
                {["🏠", "📊", "💰", "⚙️"].map((icon, idx) => (
                  <motion.div
                    key={idx}
                    className={`flex flex-col items-center gap-1 py-1.5 cursor-pointer transition-all ${idx === 2 ? "text-[#a78bfa]" : "text-white/40"}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-xl">{icon}</div>
                    <span className="text-[0.58rem] font-semibold">{["Home", "Attendance", "Payslip", "Settings"][idx]}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Phone - Attendance */}
        <motion.div
          variants={phoneVariantsSideRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover="hover"
          className="w-[280px] flex-shrink-0"
        >
          <div className="bg-[#1f2937] rounded-[40px] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.5)] border-8 border-[#111827] relative">
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[120px] h-[26px] bg-[#111827] rounded-b-2xl z-10" />
            <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-[30px] overflow-hidden h-[580px] flex flex-col">
              <div className="pt-12.5 px-4 pb-4 flex items-center justify-between bg-white/5 backdrop-blur-md border-b border-white/10">
                <div className="font-['Sora'] font-bold text-[0.75rem] text-white">Attendance</div>
                <div className="bg-green-500 rounded-full py-0.5 px-2 text-[0.45rem] font-extrabold text-white">PRESENT</div>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                <motion.div
                  className="bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.2)] rounded-[14px] p-3.5 mb-2.5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-center mb-3">
                    <div className="text-[0.6rem] text-white/50 mb-1">Today - April 9, 2026</div>
                    <motion.div
                      className="font-['Sora'] text-[1.4rem] font-extrabold text-green-400"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      09:15 AM
                    </motion.div>
                    <div className="text-[0.58rem] text-white/60 mt-0.5">Check-in Time</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/5 rounded-lg p-2 text-center">
                      <div className="text-[0.85rem] font-bold text-white">8h 30m</div>
                      <div className="text-[0.55rem] text-white/50">Hours Today</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 text-center">
                      <div className="text-[0.85rem] font-bold text-white">06:00 PM</div>
                      <div className="text-[0.55rem] text-white/50">Expected Out</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white/5 border border-white/10 rounded-[14px] p-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-[0.7rem] font-bold text-white mb-2.5">This Month Summary</div>
                  {[
                    { label: "Present Days", value: "22", color: "text-green-400" },
                    { label: "Leave Days", value: "2", color: "text-orange-400" },
                    { label: "WFH Days", value: "3", color: "text-blue-400" },
                    { label: "Total Hours", value: "187.5h", color: "text-white" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between mb-2">
                      <div className="text-[0.62rem] text-white/60">{item.label}</div>
                      <div className={`text-[0.62rem] font-bold ${item.color}`}>{item.value}</div>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  className="bg-white/5 border border-white/10 rounded-[14px] p-3 mt-2.5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-[0.7rem] font-bold text-white mb-2.5">Recent History</div>
                  {[
                    { date: "Apr 8", time: "09:10 AM - 06:15 PM", hours: "9h", status: "present" },
                    { date: "Apr 7", time: "09:05 AM - 06:10 PM", hours: "9h", status: "present" },
                    { date: "Apr 6", time: "Work From Home", hours: "WFH", status: "wfh" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 mb-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${item.status === "present" ? "bg-green-400" : "bg-blue-400"} flex-shrink-0`} />
                      <div className="text-[0.6rem] text-white/70 flex-1">{item.date} • {item.time}</div>
                      <div className={`text-[0.58rem] font-bold ${item.status === "present" ? "text-green-400" : "text-blue-400"}`}>{item.hours}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
              <div className="grid grid-cols-4 gap-1 bg-white/10 backdrop-blur-md border-t border-white/10 py-2 px-1">
                {["🏠", "📊", "💰", "⚙️"].map((icon, idx) => (
                  <motion.div
                    key={idx}
                    className={`flex flex-col items-center gap-1 py-1.5 cursor-pointer transition-all ${idx === 1 ? "text-[#a78bfa]" : "text-white/40"}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-xl">{icon}</div>
                    <span className="text-[0.58rem] font-semibold">{["Home", "Attendance", "Payslip", "Settings"][idx]}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hrms_Pocket