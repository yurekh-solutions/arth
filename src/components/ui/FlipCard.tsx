"use client";

import { ReactNode } from "react";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  height?: string;
}

export default function FlipCard({
  front,
  back,
  className = "",
  height = "h-80",
}: FlipCardProps) {
  return (
    <div className={`flip-card ${height} ${className}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front glass-card flex items-center justify-center p-6">
          {front}
        </div>
        <div className="flip-card-back glass-card-strong flex items-center justify-center p-6 bg-gradient-to-br from-accent/20 to-accent/5">
          {back}
        </div>
      </div>
    </div>
  );
}
