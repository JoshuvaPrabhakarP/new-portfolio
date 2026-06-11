"use client";

import { motion } from "framer-motion";
import { Code2, Brain, GitBranch, Cloud, Database, Wrench } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import TechBadge from "@/components/ui/TechBadge";
import { skillCategories } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  Code2, Brain, GitBranch, Cloud, Database, Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      style={{ background: "var(--color-bg-surface)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="Skills"
          title="Tech Stack"
          subtitle="Languages, frameworks, and tools I use to build production AI systems."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <GlassCard hoverable className="h-full">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: "rgba(6, 182, 212, 0.10)",
                        border: "1px solid rgba(6, 182, 212, 0.20)",
                      }}
                    >
                      <Icon size={15} style={{ color: "var(--color-accent-cyan)" }} />
                    </div>
                    <h3
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-heading)" }}
                    >
                      {cat.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <TechBadge key={skill} label={skill} />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
