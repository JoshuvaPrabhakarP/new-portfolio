"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { personal, education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="About Me"
          title="The Engineer Behind the Models"
          subtitle="Research depth meets engineering execution — bridging cutting-edge AI and real business value."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="h-full">
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
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
              >
                I'm an AI & ML Engineer completing my MS in Computer Science at Stevens Institute of
                Technology (May 2026), with hands-on experience building intelligent systems that
                perform in the real world, not just in notebooks.
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
              >
                I specialize in Generative AI solutions using LLMs, Prompt Engineering, and RAG
                pipelines — and engineering scalable ETL and MLOps pipelines that handle 15M+ records
                with end-to-end integrity on AWS, Azure, and GCP.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
              >
                A published AI researcher and 6× certified cloud professional, I bring both research
                depth and engineering execution to every project.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {personal.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-2.5 py-1 text-xs rounded-md"
                    style={{
                      background: "rgba(37, 99, 235, 0.08)",
                      border: "1px solid rgba(37, 99, 235, 0.20)",
                      color: "#93C5FD",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Education cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {education.map((edu, i) => (
              <GlassCard key={edu.institution} accent={i === 0} hoverable className="flex-1">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
