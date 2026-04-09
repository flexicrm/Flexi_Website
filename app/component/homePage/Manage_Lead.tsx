// app/components/Manage_Lead.tsx
"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
 function Manage_Lead() {
  return (
    <section className="bg-gradient-cta py-16 md:py-24 relative overflow-hidden" id="cta">
      <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-accent/10 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-white/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <ScrollReveal>
          <h2 className="font-extrabold text-white mb-3 text-2xl md:text-4xl">
            Start Managing Your Leads Today
          </h2>
          <p className="text-base text-white/75 mb-6 max-w-md mx-auto">
            Join thousands of teams already using Flexi CRM in beta. It's completely free to start.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="/register"
              className="inline-block px-12 py-4 bg-accent text-white font-extrabold text-lg rounded-xl shadow-lg hover:bg-accent-dark transition-all"
            >
              Register Now — It's Free
            </a>
          </motion.div>
          <p className="text-xs text-white/55 mt-3">
            ✓ No credit card required &nbsp;·&nbsp; ✓ Cancel anytime &nbsp;·&nbsp; ✓ Beta access
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
export default Manage_Lead