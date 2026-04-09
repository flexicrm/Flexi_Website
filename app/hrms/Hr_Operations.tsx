// app/components/Hr_Operations.tsx
"use client"

import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"

const Hr_Operations = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const ctaVariants : Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring" } }
  }

  const footerLinksVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
  }

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5, type: "spring" } }
  }

  return (
    <>
      {/* CTA SECTION */}
      <section id="cta" className="py-25 px-[5%] text-center bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] text-white">
        <motion.div
          ref={ref}
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-[800px] mx-auto"
        >
          <motion.h2
            className="text-3xl lg:text-[2.6rem] font-extrabold mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Transform Your HR Operations Today
          </motion.h2>
          <motion.p
            className="text-[1.15rem] mb-9 opacity-95 max-w-[600px] mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Join companies already using Flexi HRMS in beta. Complete HR management platform with powerful web and mobile apps.
          </motion.p>
          <motion.a
            href="#"
            className="inline-block py-4 px-10 bg-white text-[#8B5CF6] rounded-[10px] font-['Sora'] font-bold text-[1.05rem] no-underline shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Get Started — Free Beta Access
          </motion.a>
          <motion.div
            className="mt-6 text-[0.92rem] opacity-85"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            ✓ No credit card required &nbsp;·&nbsp; ✓ Full platform access &nbsp;·&nbsp; ✓ Beta pricing locked
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

export default Hr_Operations