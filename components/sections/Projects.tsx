"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TechBadge from "@/components/ui/TechBadge";
import { projects, type Project } from "@/lib/data";

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        background: project.highlight ? "var(--gradient-card)" : "var(--color-glass-bg)",
        border: `1px solid ${project.highlight ? "var(--color-border-accent)" : "var(--color-border-subtle)"}`,
      }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{
          background: project.highlight
            ? "radial-gradient(ellipse at top left, rgba(6,182,212,0.06) 0%, transparent 60%)"
            : "radial-gradient(ellipse at top left, rgba(37,99,235,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full gap-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            {project.highlight && (
              <span
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                style={{
                  background: "rgba(6, 182, 212, 0.12)",
                  border: "1px solid rgba(6, 182, 212, 0.25)",
                  color: "var(--color-accent-cyan)",
                }}
              >
                <Star size={9} fill="currentColor" /> Featured
              </span>
            )}
            {project.published && (
              <span
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                style={{
                  background: "rgba(168, 85, 247, 0.12)",
                  border: "1px solid rgba(168, 85, 247, 0.25)",
                  color: "#C084FC",
                }}
              >
                <BookOpen size={9} /> Published
              </span>
            )}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="View project"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1.5 rounded-lg cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "var(--color-text-muted)",
              }}
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>

        {/* Title + date */}
        <div>
          <h3
            className="font-bold mb-1 leading-snug text-base sm:text-lg"
            style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-heading)" }}
          >
            {project.title}
          </h3>
          <p
            className="text-xs"
            style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
          >
            {project.date} · {project.affiliation}
          </p>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
        >
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.metrics.map((m) => (
              <span
                key={m}
                className="px-2.5 py-1 text-xs font-semibold rounded-lg"
                style={{
                  background: "rgba(6, 182, 212, 0.08)",
                  border: "1px solid rgba(6, 182, 212, 0.20)",
                  color: "var(--color-accent-cyan)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {m}
              </span>
            ))}
          </div>
        )}

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  // Render order: featured first, then rest — total 7 cards
  const ordered = [
    ...projects.filter((p) => p.highlight),
    ...projects.filter((p) => !p.highlight),
  ];
  const lastIndex = ordered.length - 1;

  return (
    <section id="projects" className="section">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="Projects"
          title="Things I've Built"
          subtitle="From 15M-record MLOps pipelines to from-scratch ML implementations — each project targets a real problem."
        />

        {/* Uniform 3-col grid — equal heights via auto-rows-fr; orphan card spans full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {ordered.map((project, i) => (
            <div
              key={project.id}
              className={`h-full ${i === lastIndex ? "sm:col-span-2 lg:col-span-3" : "col-span-1"}`}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        {/* More coming soon */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-sm"
          style={{ color: "var(--color-text-faint)", fontFamily: "var(--font-body)" }}
        >
          More projects coming soon — actively building in Generative AI, RAG pipelines, and MLOps.
        </motion.p>
      </div>
    </section>
  );
}
