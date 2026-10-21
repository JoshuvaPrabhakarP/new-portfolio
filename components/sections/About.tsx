"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { about, education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="About Me"
          title="Building Software That Holds Up"
          subtitle="Clean Python and SQL, dependable data pipelines, and applications built to be used."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.06fr_0.94fr] gap-8 mb-12 items-stretch">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <GlassCard className="h-full flex flex-col justify-between gap-6">
              <div>
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-1 h-5 rounded-full"
                  style={{ background: "var(--gradient-accent)" }}
                />
                <h3
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: "var(--color-accent-cyan)", fontFamily: "var(--font-body)" }}
                >
                  Background
                </h3>
              </div>
              <p
                className="text-lg font-semibold leading-snug mb-4"
                style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-heading)" }}
              >
                {about.lead}
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
              >
                {about.intro}
              </p>
              </div>

              <div>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-3"
                style={{ color: "var(--color-text-faint)", fontFamily: "var(--font-body)" }}
              >
                {about.specializationsLabel}
              </p>
              <ul className="flex flex-col gap-3">
                {about.specializations.map((item) => (
                  <li key={item.title} className="flex gap-3 text-sm leading-relaxed">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "var(--color-accent-cyan)" }}
                    />
                    <span style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}>
                      <strong style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                        {item.title}:
                      </strong>{" "}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
              </div>

              <p
                className="text-sm font-semibold leading-relaxed px-3 py-2 rounded-lg"
                style={{
                  color: "var(--color-accent-cyan)",
                  background: "rgba(6, 182, 212, 0.08)",
                  border: "1px solid rgba(6, 182, 212, 0.20)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {about.results}
              </p>
            </GlassCard>
          </motion.div>

          {/* Education cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 "
          >
            {education.map((edu, i) => (
              <GlassCard key={edu.institution} accent={i === 0} hoverable>
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: i === 0
                        ? "rgba(6, 182, 212, 0.12)"
                        : "rgba(255, 255, 255, 0.05)",
                      border: `1px solid ${i === 0 ? "rgba(6, 182, 212, 0.25)" : "rgba(255,255,255,0.10)"}`,
                    }}
                  >
                    <GraduationCap
                      size={16}
                      style={{ color: i === 0 ? "var(--color-accent-cyan)" : "var(--color-text-muted)" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5 flex-wrap">
                      <h4
                        className="text-sm font-bold"
                        style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-heading)" }}
                      >
                        {edu.institution}
                      </h4>
                      <span
                        className="text-xs shrink-0"
                        style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
                      >
                        {edu.graduation}
                      </span>
                    </div>
                    <p
                      className="text-sm mb-1"
                      style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
                    >
                      {edu.degree} · {edu.field}
                    </p>
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-semibold"
                        style={{ color: "var(--color-accent-cyan)" }}
                      >
                        GPA {edu.gpa} / {edu.gpaMax}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {edu.location}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-0.5 text-[10px] rounded-md"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            color: "var(--color-text-muted)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}

            <GlassCard className="flex-1 flex flex-col justify-center">
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
              >
                {about.closing}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
              >
                {about.open}
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
