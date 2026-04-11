// app/components/Web_Mobile.tsx
"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Web_Mobile = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const platforms = [
    {
      type: "web",
      badge: "🖥️ WEB PLATFORM",
      title: "Web Application",
      description: "Full-featured desktop experience with advanced controls for HR managers and administrators. Perfect for comprehensive HR operations.",
      features: [
        "Complete employee profile management",
        "Bulk payroll processing & reports",
        "Advanced analytics & dashboards",
        "Document upload & management",
        "Role-based access control"
      ],
      btnText: "Launch Web App",
      btnColor: "bg-[#1E5FA8] hover:bg-[#154080]"
    },
    {
      type: "mobile",
      badge: "📱 MOBILE APPS",
      title: "iOS & Android",
      description: "Powerful mobile apps for employees and managers on the go. Mark attendance, view payslips, and manage approvals from your phone.",
      features: [
        "Quick attendance & leave marking",
        "Instant payslip access & download",
        "Push notifications for updates",
        "Manager approvals on the move",
        "Offline mode for attendance"
      ],
      btnText: "Download Apps",
      btnColor: "bg-[#8B5CF6] hover:bg-[#7C3AED]"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="platforms" className="py-25 px-[5%] bg-[#F8F9FB]">
      <div className="text-center max-w-[720px] mx-auto mb-15">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-[2.4rem] font-extrabold text-[#2D3142] mb-4">
            Available on <span className="text-[#3395ff]">Web & Mobile</span>
          </h2>
          <p className="text-[1.05rem] text-[#6B7280] leading-relaxed">
            Access your complete HRMS from anywhere — desktop, tablet, or mobile. Seamless experience across all your devices.
          </p>
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1100px] mx-auto"
      >
        {platforms.map((platform, idx) => (
          <motion.div
            key={idx}
            variants={idx === 0 ? cardVariants : cardVariantsRight}
            whileHover={{ y: -8 }}
            className="bg-white border border-[#E5E7EB] rounded-2xl p-10 shadow-[0_8px_32px_rgba(30,95,168,0.12)] hover:shadow-[0_20px_60px_rgba(30,95,168,0.16)] transition-all duration-300"
          >
            <motion.div
              className={`inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full text-[0.8rem] font-bold font-['Sora'] mb-5 ${
                platform.type === "web"
                  ? "bg-[#e8f0fb] text-[#154080]"
                  : "bg-[#F3E8FF] text-[#7C3AED]"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {platform.badge}
            </motion.div>
            <h3 className="text-[1.8rem] font-extrabold text-[#2D3142] mb-3.5">{platform.title}</h3>
            <p className="text-base text-[#6B7280] leading-relaxed mb-6">{platform.description}</p>
            <ul className="list-none mb-7">
              {platform.features.map((feature, fIdx) => (
                <motion.li
                  key={fIdx}
                  className="flex items-center gap-2.5 py-2.5 border-b border-[#E5E7EB] text-[0.92rem] text-[#2D3142] last:border-b-0"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + fIdx * 0.05 }}
                >
                  <motion.svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    className="w-4.5 h-4.5 flex-shrink-0"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + fIdx * 0.05, type: "spring" }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </motion.svg>
                  {feature}
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="#"
              className={`inline-flex items-center gap-2 py-3 px-7 ${platform.btnColor} text-white rounded-[10px] font-['Sora'] font-bold text-[0.95rem] no-underline transition-all`}
              whileHover={{ x: 5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {platform.btnText}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4.5 h-4.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Web_Mobile