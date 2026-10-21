"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TechBadge from "@/components/ui/TechBadge";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section"
      style={{ background: "var(--color-bg-surface)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="Experience"
          title="Where I've Applied My Skills"
          subtitle="Five internships across full-stack development, data pipelines, analytics, and machine learning."
          align="left"
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[17px] top-0 bottom-0 w-[1px] hidden sm:block"
            style={{ background: "linear-gradient(to bottom, var(--color-accent-blue), transparent)" }}
          />

          <div className="flex flex-col gap-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-6"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center shrink-0 mt-1.5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center z-10"
                    style={{
                      background: i === 0 ? "var(--gradient-accent)" : "var(--color-bg-elevated)",
                      border: `2px solid ${i === 0 ? "var(--color-accent-cyan)" : "var(--color-border-dim)"}`,
                    }}
                  >
                    <Briefcase
                      size={14}
                      style={{ color: i === 0 ? "#fff" : "var(--color-text-muted)" }}
                    />
                  </div>
                </div>

                {/* Card */}
                <div
                  className="flex-1 rounded-xl p-5 transition-all duration-200"
                  style={{
                    background: "var(--color-glass-bg)",
                    border: `1px solid ${i === 0 || exp.highlight ? "var(--color-border-accent)" : "var(--color-border-subtle)"}`,
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3
                          className="text-base font-bold"
                          style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-heading)" }}
                        >
                          {exp.role}
                        </h3>
                        {exp.tag && (
                          <span
                            className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                            style={{
                              background: "rgba(6, 182, 212, 0.12)",
                              border: "1px solid rgba(6, 182, 212, 0.25)",
                              color: "var(--color-accent-cyan)",
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            {exp.tag}
                          </span>
                        )}
                      </div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "var(--color-accent-cyan)", fontFamily: "var(--font-body)" }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        className="text-xs"
                        style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
                      >
                        {exp.period}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "var(--color-text-faint)", fontFamily: "var(--font-body)" }}
                      >
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2.5 text-sm leading-relaxed">
                        <span
                          className="mt-2 w-1 h-1 rounded-full shrink-0"
                          style={{ background: "var(--color-accent-cyan)" }}
                        />
                        <span style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.stack.map((tech) => (
                      <TechBadge key={tech} label={tech} variant={exp.highlight ? "accent" : "default"} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
