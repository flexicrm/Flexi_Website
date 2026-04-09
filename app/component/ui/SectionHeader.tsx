// app/components/ui/SectionHeader.tsx
"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  sub: string;
}

export default function SectionHeader({ label, title, sub }: SectionHeaderProps) {
  return (
    <ScrollReveal>
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-7 h-0.5 bg-accent rounded" />
          <span className="text-xs font-bold tracking-wider uppercase text-accent">{label}</span>
          <div className="w-7 h-0.5 bg-accent rounded" />
        </div>
        <h2 className="font-extrabold text-gray-800 mb-2 text-2xl md:text-4xl">
          {title}
        </h2>
        <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">{sub}</p>
      </div>
    </ScrollReveal>
  );
}