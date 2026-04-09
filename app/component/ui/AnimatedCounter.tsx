// app/components/ui/AnimatedCounter.tsx
"use client";

import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  color?: string;
}

export default function AnimatedCounter({ value, color }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const match = value.match(/(\d+)/);
  const num = match ? parseInt(match[1]) : 0;
  const suffix = value.replace(/\d+/, "");

  useEffect(() => {
    if (!num) return;
    let start = 0;
    const step = num / (1500 / 16);
    const t = setInterval(() => {
      start += step;
      if (start >= num) {
        setCount(num);
        clearInterval(t);
      } else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(t);
  }, [num]);

  return (
    <h4 className="font-extrabold text-2xl" style={{ color }}>
      {count}
      {suffix}
    </h4>
  );
}