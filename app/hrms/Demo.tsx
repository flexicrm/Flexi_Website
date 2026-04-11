// app/components/Demo.tsx
"use client"

import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { useEffect, useState } from "react"

const Demo = () => {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.95])
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.98])


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animation variants
  const navVariants : Variants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }

  const heroLeftVariants : Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } }
  }

  const heroRightVariants : Variants= {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4, ease: "easeOut" } }
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.1 } }
  }

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.6 }
    }
  }

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>

      {/* HERO SECTION */}
      <motion.section
  id="home"
  style={{ opacity: heroOpacity, scale: heroScale }}
  className="min-h-screen pt-[120px] pb-20 px-[5%] flex items-center relative overflow-hidden bg-gradient-to-br from-[#f8f9fb] via-[#eef3fb] to-[#f3e8ff]"
>
        {/* Animated background blobs */}
        <motion.div
          className="absolute -top-[120px] -right-[120px] w-[600px] h-[600px] rounded-full bg-radial from-[rgba(139,92,246,0.08)] to-transparent pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-radial from-[rgba(30,95,168,0.06)] to-transparent pointer-events-none"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        <div className="grid lg:grid-cols-2 gap-15 items-center max-w-[1240px] mx-auto w-full">
          <motion.div
            variants={heroLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:text-left text-center"
          >
            <motion.div
              variants={badgeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#e0e7ff] text-[#3730a3] border border-[#c7d2fe] py-1.5 px-4 rounded-full text-[0.82rem] font-semibold font-['Sora'] mb-5"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-green-700 font-semibold text-xs font-sora">Beta v1.0 – Now Live</span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.15] text-[#2D3142] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Complete{" "}
              <motion.span
                className="text-[#3395ff] inline-block"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                HRMS
              </motion.span>{" "}
              for Modern Teams
            </motion.h1>

            <motion.p
              className="text-[1.05rem] text-[#6B7280] leading-relaxed mb-8 max-w-[480px] lg:mx-0 mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Employee management, payroll processing, attendance tracking, and comprehensive HR operations — all unified in one powerful platform. Web & Mobile ready.
            </motion.p>

            <div className="flex gap-3.5 flex-wrap justify-center lg:justify-start">
              <motion.a
                 href="/register"
                className="py-3.5 px-8 bg-[#3395ff] text-white border-none rounded-[10px] font-['Sora'] font-bold text-base hover:bg-blue-700 transition-all no-underline"
                whileHover={{ scale: 1.05, y: -2, boxShadow: "0 8px 25px rgba(139,92,246,0.4)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Start Free Trial
              </motion.a>
              <motion.a
                href="#platforms"
                className="py-3.5 px-8 bg-white text-[#3395ff] border-2 border-[#3395ff] hover:border-blue-700 rounded-[10px] font-['Sora'] font-bold text-base hover:text-blue-700 transition-all no-underline"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                Explore Platforms
              </motion.a>
            </div>

            <motion.div
              variants={statsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-8 mt-10 justify-center lg:justify-start"
            >
              {[
                { num: "5000+", label: "Active Employees" },
                { num: "₹2.5Cr+", label: "Payroll Processed" },
                { num: "98%", label: "Accuracy Rate" }
              ].map((stat, idx) => (
                <motion.div key={idx} variants={statItemVariants} className="text-left">
                  <motion.div
                    className="font-['Sora'] text-[1.6rem] font-extrabold text-[#8B5CF6]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.num}
                  </motion.div>
                  <div className="text-[0.8rem] text-[#6B7280]">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={heroRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="absolute -top-5 right-5 bg-white rounded-xl py-3 px-4 shadow-[0_8px_32px_rgba(30,95,168,0.12)] border border-[#E5E7EB] z-30"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="font-['Sora'] font-extrabold text-[1.2rem] text-[#8B5CF6]">147</div>
              <div className="text-[0.72rem] text-[#6B7280]">Active Employees</div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(30,95,168,0.16)] p-5 border border-[#E5E7EB] relative z-20"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="font-['Sora'] font-bold text-[0.95rem] text-[#2D3142]">Payroll Dashboard</div>
                <motion.div
                  className="bg-[#e0e7ff] text-[#5b21b6] text-[0.7rem] font-bold py-0.5 px-2.5 rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  LIVE
                </motion.div>
              </div>

              <div className="grid grid-cols-3 gap-2.5 mb-4">
                {[
                  { num: "₹18.2L", label: "This Month", color: "text-[#8B5CF6]" },
                  { num: "142", label: "Payslips", color: "text-[#F5921E]" },
                  { num: "₹2.1L", label: "Deductions", color: "text-[#1E5FA8]" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-[#F8F9FB] rounded-[10px] p-3"
                    whileHover={{ scale: 1.02, backgroundColor: "#f0f2f5" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                  >
                    <div className={`font-['Sora'] text-[1.3rem] font-extrabold ${item.color}`}>
                      {item.num}
                    </div>
                    <div className="text-[0.72rem] text-[#6B7280]">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-end gap-2 h-20 mb-4 bg-[#F8F9FB] p-3 rounded-[10px]">
                {[
                  { height: 45, label: "Jan" },
                  { height: 55, label: "Feb" },
                  { height: 70, label: "Mar" },
                  { height: 85, label: "Apr" }
                ].map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                    <motion.div
                      className="w-full rounded-t-[4px] bg-[#3395ff]"
                      initial={{ height: 0 }}
                      animate={{ height: `${item.height}%` }}
                      transition={{ duration: 0.8, delay: 1 + idx * 0.1, ease: "easeOut" }}
                    />
                    <div className="text-[0.65rem] text-[#6B7280]">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                {[
                  { initials: "RS", name: "Ravi Shankar", dept: "Engineering • EMP-1042", status: "Present", statusColor: "bg-green-100 text-green-700" },
                  { initials: "PN", name: "Priya Nair", dept: "Marketing • EMP-1045", status: "WFH", statusColor: "bg-blue-100 text-blue-700" },
                  { initials: "KM", name: "Karan Mehta", dept: "Sales • EMP-1050", status: "On Leave", statusColor: "bg-amber-100 text-amber-700" }
                ].map((emp, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 bg-[#F8F9FB] rounded-[10px]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + idx * 0.1 }}
                    whileHover={{ scale: 1.02, backgroundColor: "#eef2f5" }}
                  >
                    <motion.div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-['Sora'] font-bold text-[0.8rem] text-white flex-shrink-0"
                      style={{ background: idx === 0 ? "#8b5cf6" : idx === 1 ? "#f59e0b" : "#1e5fa8" }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {emp.initials}
                    </motion.div>
                    <div className="flex-1">
                      <div className="font-['Sora'] font-semibold text-[0.83rem] text-[#2D3142]">{emp.name}</div>
                      <div className="text-[0.72rem] text-[#6B7280]">{emp.dept}</div>
                    </div>
                    <div className={`text-[0.7rem] font-bold py-0.5 px-2 rounded-full ${emp.statusColor}`}>
                      {emp.status}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-5 left-5 bg-white rounded-xl py-3 px-4 shadow-[0_8px_32px_rgba(30,95,168,0.12)] border border-[#E5E7EB] z-30"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="font-['Sora'] font-extrabold text-[1.2rem] text-[#8B5CF6]">₹18.2L</div>
              <div className="text-[0.72rem] text-[#6B7280]">Monthly Payroll</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default Demo