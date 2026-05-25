"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Tab {
  label: string;
  content: ReactNode;
  icon?: ReactNode;
}

interface TabPanelProps {
  tabs: Tab[];
  className?: string;
}

export default function TabPanel({ tabs, className = "" }: TabPanelProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={className}>
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`
              px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300
              flex items-center gap-2
              ${
                activeIndex === index
                  ? "bg-accent/20 border border-accent/50 text-accent shadow-glass-glow"
                  : "bg-glass-white border border-glass-border hover:text-accent hover:bg-glass-white-light"
              }
            `}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="relative min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {tabs[activeIndex]?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
