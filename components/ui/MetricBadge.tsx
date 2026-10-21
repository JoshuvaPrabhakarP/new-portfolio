"use client";

import { motion } from "framer-motion";

type MetricBadgeProps = {
  value: string;
  label: string;
  context?: string;
  index?: number;
  featured?: boolean;
};

export default function MetricBadge({ value, label, context, index = 0, featured = false }: MetricBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="glass lift-hover rounded-xl p-4 text-center h-full w-full flex flex-col justify-center"
      style={{ borderColor: featured ? "rgba(6, 182, 212, 0.35)" : "rgba(6, 182, 212, 0.15)" }}
    >
      <div
        className={`font-bold mb-1 text-gradient-accent ${
          featured ? "text-2xl sm:text-3xl" : value.length > 6 ? "text-lg sm:text-xl leading-8 sm:leading-9" : "text-2xl sm:text-3xl"
        }`}
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
