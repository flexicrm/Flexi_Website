// app/components/CoreFeatures.tsx
"use client";

import {
  BarChart3,
  BellRing,
  CheckSquare,
  ClipboardList,
  LucideIcon,
  Mail,
  Smartphone,
  UserPlus,
  Users
} from "lucide-react";
import FeatureCard from "../ui/FeatureCard";
import RowSlide from "../ui/RowSlide";
import SectionHeader from "../ui/SectionHeader";

 function CoreFeatures() {
  type FeatureItem = {
  title: string;
  desc: string;
  color: string;
  live: boolean;
  icon: LucideIcon;
};

const coreFeatures: FeatureItem[] = [
  {
    title: "Lead Capture",
    desc: "Capture leads from any source — forms, email, or manual entry — into a single organized inbox.",
    color: "#F5921E",
    live: true,
    icon: Users
  },
  {
    title: "Lead Tracking",
    desc: "Visualize your entire pipeline with customizable stages and real-time status updates.",
    color: "#F5921E",
    live: true,
    icon: BarChart3
  },
  {
    title: "Follow-up Reminders",
    desc: "Set automated reminders so no follow-up falls through the cracks.",
    color: "#F5921E",
    live: true,
    icon: BellRing
  },
  {
    title: "Team Assignment",
    desc: "Assign leads to the right sales rep automatically.",
    color: "#F5921E",
    live: true,
    icon: UserPlus
  },
  {
    title: "Contact Management",
    desc: "Maintain a rich contact database with full history.",
    color: "#F5921E",
    live: true,
    icon: ClipboardList
  },
  {
    title: "Activity Notes",
    desc: "Log calls, meetings, and emails with timestamped notes.",
    color: "#F5921E",
    live: true,
    icon: CheckSquare
  },
  {
    title: "Email Integration",
    desc: "Sync all communications automatically with lead records.",
    color: "#F5921E",
    live: true,
    icon: Mail
  },
  {
    title: "Mobile Access",
    desc: "Access your leads and pipeline on the go.",
    color: "#F5921E",
    live: true,
    icon: Smartphone
  }
];

  const chunk = <T,>(arr: T[], n: number): T[][] => Array.from({ length: Math.ceil(arr.length / n) }, (_, i) => arr.slice(i * n, i * n + n));
  const featureRows = chunk(coreFeatures, 4);

  return (
    <section className="py-16 md:py-24 bg-white" id="features">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Core Features"
          title={
            <>
              Everything You Need to <span className="text-primary">Manage Leads</span>
            </>
          }
          sub="Powerful tools designed for simplicity. Go from lead capture to closed deal in record time."
        />

        {featureRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative ${rowIndex === 0 ? "mb-6" : ""}`}
          >
            <div className="absolute top-9 left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-accent/10 to-accent/5 hidden md:block" />

            {row.map((feature, cardIndex) => (
              <RowSlide key={cardIndex} rowIndex={rowIndex} cardIndex={cardIndex}>
                <FeatureCard {...feature} />
              </RowSlide>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
export default CoreFeatures