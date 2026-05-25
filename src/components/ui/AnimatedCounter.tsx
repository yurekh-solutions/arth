"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label?: string;
  icon?: ReactNode;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  label,
  icon,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="neumorphic p-6 text-center">
      {icon && <div className="mb-3 flex justify-center" style={{ color: 'var(--color-accent)' }}>{icon}</div>}
      <div className="text-4xl md:text-5xl font-heading font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
        {prefix}{count}{suffix}
      </div>
      {label && (
        <p className="text-sm uppercase tracking-wider" style={{ color: 'var(--color-muted-foreground)' }}>{label}</p>
      )}
    </div>
  );
}
