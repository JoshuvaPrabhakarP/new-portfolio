"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Cloud, Globe, Workflow } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import TechBadge from "@/components/ui/TechBadge";
import { skillCategories } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  Code2, Brain, Cloud, Globe, Workflow,
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
          subtitle="Languages, GenAI and ML, cloud, data engineering, and the web backend stack."
        />

        {/* 6-col grid: two featured cards on top, three supporting cards below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Code2;
            const isLast = i === skillCategories.length - 1;
            return (
              <motion.div
                key={cat.category}
                className={`${cat.featured ? "lg:col-span-3" : "lg:col-span-2"} ${
                  isLast ? "sm:col-span-2" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <GlassCard hoverable accent={cat.featured} className="h-full">
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
                  {cat.groups ? (
                    <div className="flex flex-col gap-4">
                      {cat.groups.map((g) => (
                        <div key={g.label}>
                          <p
                            className="text-[10px] font-semibold uppercase tracking-wider mb-2"
                            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
                          >
                            {g.label}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {g.skills.map((skill) => (
                              <TechBadge
                                key={skill}
                                label={skill}
                                variant="accent"
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <TechBadge
                          key={skill}
                          label={skill}
                          variant={cat.featured ? "accent" : "default"}
                          className={cat.featured ? "!text-sm !px-3 !py-1.5" : undefined}
                        />
                      ))}
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
