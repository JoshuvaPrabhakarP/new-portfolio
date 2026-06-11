"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <span
        className="inline-block mb-3 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full"
        style={{
          background: "rgba(6, 182, 212, 0.1)",
          border: "1px solid rgba(6, 182, 212, 0.25)",
          color: "var(--color-accent-cyan)",
          fontFamily: "var(--font-body)",
        }}
      >
        {label}
      </span>

      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <span className="text-gradient">{title}</span>
      </h2>

      {subtitle && (
        <p
          className="max-w-2xl text-base sm:text-lg leading-relaxed"
          style={{
            color: "var(--color-text-muted)",
            fontFamily: "var(--font-body)",
            margin: align === "center" ? "0 auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
