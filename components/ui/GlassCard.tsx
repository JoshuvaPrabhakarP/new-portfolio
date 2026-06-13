"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLMotionProps<"div"> & {
  accent?: boolean;
  hoverable?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function GlassCard({
  accent = false,
  hoverable = false,
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-xl p-6",
        accent ? "glass-accent" : "glass",
        hoverable && "glass-hover lift-hover cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
