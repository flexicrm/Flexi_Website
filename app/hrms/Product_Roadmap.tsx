// app/components/Product_Roadmap.tsx
"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Product_Roadmap = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const roadmapItems = [
    {
      status: "live",
      badge: "✓ LIVE NOW – v1.0 Beta",
      badgeClass: "bg-green-100 text-green-700",
      title: "Core HRMS Features",
      description: "Foundation release with essential HR and payroll management capabilities.",
      features: [
        "Employee master data & profiles",
        "Monthly payroll processing",
        "Payslip generation & download",
        "Basic attendance tracking",
        "Department & role management"
      ],
      dotClass: "border-green-500 bg-green-500 shadow-[0_0_0_6px_rgba(34,197,94,0.2)]"
    },
    {
      status: "upcoming",
      badge: "🚀 COMING SOON – v1.5",
      badgeClass: "bg-[#F3E8FF] text-[#7C3AED]",
      title: "Advanced Features",
      description: "Enhanced capabilities for comprehensive workforce management and automation.",
      features: [
        "Biometric attendance integration",
        "Advanced leave management",
        "Performance review system",
        "Automated tax filing",
        "Custom workflow automation"
      ],
      dotClass: "border-[#8B5CF6] animate-pulse-roadmap"
    },
    {
      status: "upcoming",
      badge: "📅 Q3 2026 – v2.0",
      badgeClass: "bg-[#F3E8FF] text-[#7C3AED]",
      title: "Enterprise Features",
      description: "Enterprise-grade capabilities for large organizations with complex requirements.",
      features: [
        "Multi-company & branch support",
        "AI-powered insights & predictions",
        "Recruitment & onboarding",
        "Training & development portal",
        "API & third-party integrations"
      ],
      dotClass: "border-[#8B5CF6] animate-pulse-roadmap"
    }
  ]

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  }

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="roadmap" className="py-25 px-[5%] bg-white">
      <div className="text-center max-w-[720px] mx-auto mb-15">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-[2.4rem] font-extrabold text-[#2D3142] mb-4">
            Product <span className="text-[#3395ff]">Roadmap</span>
          </h2>
          <p className="text-[1.05rem] text-[#6B7280] leading-relaxed">
            We're continuously improving Flexi HRMS. Here's what's live now and what's coming next in our journey.
          </p>
        </motion.div>
      </div>

      <div ref={ref} className="max-w-[900px] mx-auto relative">
        {/* Timeline line */}
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8B5CF6] to-[#E5E7EB] hidden md:block"
          initial={{ height: 0, opacity: 0 }}
          animate={isInView ? { height: "100%", opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {roadmapItems.map((item, idx) => (
          <div
            key={idx}
            className={`relative grid md:grid-cols-2 gap-10 mb-15 last:mb-0 ${
              idx % 2 === 0 ? "" : ""
            }`}
          >
            {/* Timeline dot */}
            <motion.div
              className={`absolute left-1/2 top-6 w-5 h-5 rounded-full border-4 bg-white z-20 hidden md:block transform -translate-x-1/2 ${item.dotClass}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5 + idx * 0.2, type: "spring" }}
            />

            <motion.div
              variants={idx % 2 === 0 ? itemVariants : itemVariantsRight}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: idx * 0.15 }}
              className={`${idx % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}
            >
              <motion.div
                className="bg-white border-2 border-[#E5E7EB] rounded-[16px] p-7 shadow-[0_2px_8px_rgba(30,95,168,0.08)] hover:shadow-[0_8px_32px_rgba(30,95,168,0.12)] transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className={`inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-[0.75rem] font-bold font-['Sora'] mb-3 ${item.badgeClass}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.badge}
                </motion.div>
                <h4 className="text-[1.3rem] font-bold text-[#2D3142] mb-2.5">{item.title}</h4>
                <p className="text-[0.92rem] text-[#6B7280] leading-relaxed mb-4">{item.description}</p>
                <ul className="list-none">
                  {item.features.map((feature, fIdx) => (
                    <motion.li
                      key={fIdx}
                      className="flex items-center gap-2 text-[0.85rem] text-[#2D3142] mb-1.5"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + idx * 0.1 + fIdx * 0.05 }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={item.status === "live" ? "#22c55e" : "#8B5CF6"}
                        strokeWidth="2.5"
                        className="w-4 h-4 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Product_Roadmap