// app/components/ui/RowSlide.tsx
"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RowSlideProps {
  children: React.ReactNode;
  rowIndex: number;
  cardIndex: number;
  distance?: number;
}

export default function RowSlide({ children, rowIndex, cardIndex, distance = 120 }: RowSlideProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();
  const fromX = rowIndex % 2 === 0 ? distance : -distance;

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay: cardIndex * 0.08, ease: [0.22, 1, 0.36, 1] },
      });
    }
  }, [inView, controls, cardIndex]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, x: fromX }} animate={controls} className="h-full">
      {children}
    </motion.div>
  );
}