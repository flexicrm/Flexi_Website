"use client";

import { motion } from "framer-motion";
import {
  BellRing,
  Database,
  LucideIcon,
  TrendingUp,
  UserPlus
} from "lucide-react";

import ScrollReveal from "../ui/ScrollReveal";
import SectionHeader from "../ui/SectionHeader";

function HowIt_works() {
  type StepItem = {
    num: number;
    title: string;
    desc: string;
    icon: LucideIcon;
  };

  const steps: StepItem[] = [
    {
      num: 1,
      title: "Register Account",
      desc: "Create your free account in 30 seconds. No credit card or setup required.",
      icon: UserPlus,
    },
    {
      num: 2,
      title: "Add & Manage Leads",
      desc: "Import existing leads or start fresh. Organize them by status, priority, or owner.",
      icon: Database,
    },
    {
      num: 3,
      title: "Track Follow-ups",
      desc: "Set reminders, log activities, and never miss a follow-up that could close a deal.",
      icon: BellRing,
    },
    {
      num: 4,
      title: "Grow Your Business",
      desc: "Convert more leads, grow your pipeline, and scale your revenue with clear insights.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-24" id="howitworks">
      <div className="container mx-auto px-4">
        
        <SectionHeader
          label="How It Works"
          title={
            <>
              Up &amp; Running in{" "}
              <span className="text-primary">4 Simple Steps</span>
            </>
          }
          sub="No training required. Start managing leads in minutes, not weeks."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
          
          {/* Line */}
          <div className="absolute top-9 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/10 to-accent/10 hidden md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <ScrollReveal
                key={index}
                direction="down"
                delay={index * 0.18}
              >
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.22 } }}
                >
                  <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all h-full">
                    
                    {/* Icon Circle */}
                    <motion.div
                      whileHover={{
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.4 },
                      }}
                    >
                      <div
                        className={`rounded-full flex items-center justify-center mx-auto mb-5 shadow-md ${
                          index === 3
                            ? "bg-accent shadow-accent/30"
                            : "bg-primary shadow-primary/30"
                        }`}
                        style={{ width: 60, height: 60 }}
                      >
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                    </motion.div>

                    {/* Step Number */}
                    <div className="text-xs text-gray-400 mb-1">
                      Step {step.num}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-gray-800 mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowIt_works;