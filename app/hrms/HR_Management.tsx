// app/components/HR_Management.tsx
"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const HR_Management = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.5">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: "Employee Management",
      description: "Complete 360° employee profiles with personal details, employment history, education, documents, and department assignments.",
      color: "purple"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#F5921E" strokeWidth="2.5">
          <rect x="2" y="3" width="20" height="18" rx="2" />
          <line x1="8" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="16" y2="14" />
        </svg>
      ),
      title: "Payroll Processing",
      description: "Automated monthly payroll runs with earnings, deductions, tax calculations, and instant payslip generation with PDF download.",
      color: "orange"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#1E5FA8" strokeWidth="2.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      title: "Attendance Tracking",
      description: "Real-time attendance monitoring with leave management, WFH tracking, and comprehensive attendance summary reports.",
      color: "blue"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.5">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: "Document Management",
      description: "Secure storage for employee documents, certificates, contracts, and compliance records with role-based access control.",
      color: "purple"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#F5921E" strokeWidth="2.5">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
      title: "Tax & Compliance",
      description: "Automated tax calculations, TDS management, PF/ESI processing, and compliance reporting for seamless financial operations.",
      color: "orange"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#1E5FA8" strokeWidth="2.5">
          <path d="M3 3v18h18" />
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
        </svg>
      ),
      title: "Reports & Analytics",
      description: "Comprehensive HR analytics with customizable reports, payroll insights, and data-driven workforce planning tools.",
      color: "blue"
    }
  ]

  const getIconBg = (color: string) => {
    switch (color) {
      case "purple":
        return "bg-[#F3E8FF]"
      case "orange":
        return "bg-[#fff4e6]"
      case "blue":
        return "bg-[#e8f0fb]"
      default:
        return "bg-[#F3E8FF]"
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="features" className="py-25 px-[5%] bg-white">
      <div className="text-center max-w-[720px] mx-auto mb-15">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-[2.4rem] font-extrabold text-[#2D3142] mb-4">
            Everything You Need to <span className="text-[#8B5CF6]">Manage HR</span>
          </h2>
          <p className="text-[1.05rem] text-[#6B7280] leading-relaxed">
            Comprehensive HR management system covering every aspect from employee onboarding to payroll processing, all in one unified platform.
          </p>
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[1100px] mx-auto"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-white border border-[#E5E7EB] rounded-[16px] p-8 shadow-[0_2px_8px_rgba(30,95,168,0.08)] hover:shadow-[0_8px_32px_rgba(30,95,168,0.12)] transition-all duration-300"
          >
            <motion.div
              className={`w-14 h-14 rounded-[14px] flex items-center justify-center mb-5 ${getIconBg(feature.color)}`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-7 h-7">{feature.icon}</div>
            </motion.div>
            <h4 className="text-[1.15rem] font-bold text-[#2D3142] mb-3">{feature.title}</h4>
            <p className="text-[0.95rem] text-[#6B7280] leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default HR_Management