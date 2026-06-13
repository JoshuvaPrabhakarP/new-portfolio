"use client";

import { motion } from "framer-motion";

type MetricBadgeProps = {
  value: string;
  label: string;
  context?: string;
  index?: number;
};

export default function MetricBadge({ value, label, context, index = 0 }: MetricBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="glass lift-hover rounded-xl p-4 text-center h-full w-full flex flex-col justify-center"
      style={{ borderColor: "rgba(6, 182, 212, 0.15)" }}
    >
      <div
        className="text-2xl sm:text-3xl font-bold mb-1 text-gradient-accent"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {value}
      </div>
      <div
        className="text-xs font-semibold uppercase tracking-wider mb-0.5"
        style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
      >
        {label}
      </div>
      {context && (
        <div
          className="text-[10px]"
          style={{ color: "var(--color-text-muted)" }}
        >
          {context}
        </div>
      )}
    </motion.div>
  );
}
