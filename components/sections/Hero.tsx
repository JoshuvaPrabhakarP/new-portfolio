"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import MetricBadge from "@/components/ui/MetricBadge";
import { personal, metrics } from "@/lib/data";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Premium AI-generated backdrop + legibility overlays */}
      <div aria-hidden className="pointer-events-none select-none absolute inset-0 overflow-hidden">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-80"
        />
        {/* Left-to-right dark wash so headline text stays high-contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #080C18 0%, rgba(8,12,24,0.86) 32%, rgba(8,12,24,0.45) 65%, rgba(8,12,24,0.55) 100%)",
          }}
        />
        {/* Bottom fade into the page background */}
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{ background: "linear-gradient(to bottom, transparent, var(--color-bg-base))" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16"
        >
          {/* ── LEFT: text content ── */}
          <div className="flex flex-col gap-6 flex-1 min-w-0">
          {/* Location + status pill */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 flex-wrap">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: "rgba(34, 197, 94, 0.1)",
                border: "1px solid rgba(34, 197, 94, 0.25)",
                color: "#4ADE80",
                fontFamily: "var(--font-body)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Open to Opportunities
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-xs"
              style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
            >
              <MapPin size={12} />
              {personal.location}
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span style={{ color: "var(--color-text-primary)" }}>Joshuva Prabhakar</span>
              <br />
              <span className="text-gradient">Palicharla</span>
            </h1>
          </motion.div>

          {/* Role + tagline */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <p
              className="text-lg sm:text-xl font-semibold mb-3"
              style={{ color: "var(--color-accent-cyan)", fontFamily: "var(--font-heading)" }}
            >
              {personal.headline}
            </p>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
            >
              {personal.tagline}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer glow-blue"
              style={{
                background: "var(--gradient-accent)",
                color: "#fff",
                fontFamily: "var(--font-body)",
              }}
            >
              Get in Touch <ArrowRight size={16} />
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer glass glass-hover"
              style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
            >
              View Projects
            </a>

            <div
              className="hidden sm:flex items-center gap-1"
              style={{ color: "var(--color-text-faint)" }}
            >
              <div style={{ width: 1, height: 32, background: "var(--color-border-subtle)" }} />
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg glass glass-hover cursor-pointer transition-colors duration-200"
                style={{ color: "var(--color-text-muted)" }}
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg glass glass-hover cursor-pointer transition-colors duration-200"
                style={{ color: "var(--color-text-muted)" }}
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </motion.div>

          {/* Metrics row */}
          <motion.div variants={itemVariants} className="pt-4">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--color-text-faint)", fontFamily: "var(--font-body)" }}
            >
              Key Highlights
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-fr">
              {metrics.map((m, i) => (
                <MetricBadge
                  key={m.value}
                  value={m.value}
                  label={m.label}
                  context={m.context}
                  index={i}
                />
              ))}
            </div>
          </motion.div>
          </div>{/* end left column */}

          {/* ── RIGHT: profile photo ── */}
          <motion.div
            variants={itemVariants}
            className="shrink-0 flex items-center justify-center lg:justify-end lg:pt-4"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-30"
                style={{ background: "radial-gradient(circle, #06B6D4 0%, #2563EB 60%, transparent 80%)" }}
              />
              {/* Accent border ring */}
              <div
                className="relative rounded-full p-[3px]"
                style={{ background: "var(--gradient-accent)" }}
              >
                <div
                  className="rounded-full overflow-hidden w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
                  style={{ background: "var(--color-bg-surface)" }}
                >
                  <Image
                    src="/profile.jpg"
                    alt="Joshuva Prabhakar Palicharla — AI & ML Engineer"
                    width={320}
                    height={320}
                    sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                    className="object-cover object-center w-full h-full"
                    priority
                  />
                </div>
              </div>
              {/* Floating status badge */}
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                style={{
                  background: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border-accent)",
                  color: "var(--color-accent-cyan)",
                  fontFamily: "var(--font-body)",
                }}
              >
                MS CS @ Stevens
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[10px] uppercase tracking-widest"
          style={{ color: "var(--color-text-faint)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8"
          style={{ background: "linear-gradient(to bottom, var(--color-accent-cyan), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
