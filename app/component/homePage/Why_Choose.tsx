"use client";

import {
  BarChart3,
  CheckCircle,
  Database,
  Gauge,
  LucideIcon,
  ShieldCheck,
  TrendingUp,
  User,
  Users
} from "lucide-react";

import RowSlide from "../ui/RowSlide";
import SectionHeader from "../ui/SectionHeader";
import WhyCard from "../ui/WhyCard";

type WhyItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

function Why_Choose() {
  const whyChoose: WhyItem[] = [
    {
      icon: CheckCircle,
      title: "Easy Lead Tracking",
      desc: "Effortlessly monitor every lead from the first interaction to final conversion with a clean, intuitive pipeline. Stay organized and never miss an opportunity."
    },
    {
      icon: Database,
      title: "Centralized Data",
      desc: "Store all customer data, notes, and communication in one place. Your team always has access to accurate and up-to-date information."
    },
    {
      icon: Users,
      title: "Team Workflow",
      desc: "Assign leads, set priorities, and streamline processes. Improve productivity with structured and collaborative workflows."
    },
    {
      icon: Gauge,
      title: "Fast Dashboard",
      desc: "View real-time insights instantly with a high-performance dashboard built for speed and clarity."
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      desc: "From startups to enterprises, Flexi CRM grows with your business without performance limits."
    },
    {
      icon: ShieldCheck,
      title: "Secure & Reliable",
      desc: "Enterprise-level security ensures your data is encrypted, protected, and always available."
    },
    {
      icon: User,
      title: "Team Collaboration",
      desc: "Collaborate effectively with shared updates, comments, and notifications across teams."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      desc: "Track performance with detailed reports, forecasts, and actionable insights."
    }
  ];

  // chunk function
  const chunk = <T,>(arr: T[], n: number): T[][] =>
    Array.from({ length: Math.ceil(arr.length / n) }, (_, i) =>
      arr.slice(i * n, i * n + n)
    );

  const whyRows = chunk(whyChoose, 4);

  return (
    <section className="bg-gray-100 py-16 md:py-24" id="whychooseus">
      <div className="container mx-auto px-4">
        
        <SectionHeader
          label="Why Choose Us"
          title={
            <>
              Built for Teams That{" "}
              <span className="text-primary">Move Fast</span>
            </>
          }
          sub="Everything you need to capture, nurture, and convert leads — without the complexity."
        />

        {whyRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative ${
              rowIndex === 0 ? "mb-6" : ""
            }`}
          >
            {/* line */}
            <div className="absolute top-9 left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-primary/10 to-accent/10 hidden md:block" />

            {row.map((item, cardIndex) => (
              <RowSlide
                key={cardIndex}
                rowIndex={rowIndex}
                cardIndex={cardIndex}
              >
                <WhyCard {...item} />
              </RowSlide>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Why_Choose;