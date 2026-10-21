"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import SectionHeading from "@/components/ui/SectionHeading";
import { personal } from "@/lib/data";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: "#60A5FA",
    bg: "rgba(96, 165, 250, 0.10)",
    border: "rgba(96, 165, 250, 0.20)",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "joshuva-prabhakar",
    href: personal.linkedin,
    color: "#38BDF8",
    bg: "rgba(56, 189, 248, 0.10)",
    border: "rgba(56, 189, 248, 0.20)",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "JoshuvaPrabhakarP",
    href: personal.github,
    color: "var(--color-text-secondary)",
    bg: "rgba(255, 255, 255, 0.05)",
    border: "rgba(255, 255, 255, 0.10)",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="Contact"
          title="Let's Work Together"
          subtitle="Open to Software Engineer, Backend, and Data roles — NJ/NY preferred, remote welcome."
        />

        <div className="max-w-2xl mx-auto">
          {/* Location note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-2 mb-10"
          >
            <MapPin size={14} style={{ color: "var(--color-accent-cyan)" }} />
            <span
              className="text-sm"
              style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
            >
              {personal.location} · {personal.locationNote}
            </span>
          </motion.div>

          {/* Contact cards */}
          <div className="flex flex-col gap-3">
            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ x: 4, transition: { duration: 0.15 } }}
                  className="group flex items-center gap-4 rounded-2xl p-5 cursor-pointer transition-all duration-200"
                  style={{
                    background: "var(--color-glass-bg)",
                    border: "1px solid var(--color-border-subtle)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: link.bg, border: `1px solid ${link.border}` }}
                  >
                    <Icon size={18} style={{ color: link.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-xs uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
                    >
                      {link.label}
                    </p>
                    <p
                      className="text-sm font-medium break-all sm:break-normal sm:truncate"
                      style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
                    >
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-60 transition-opacity"
                    style={{ color: "var(--color-text-muted)" }}
                  />
                </motion.a>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 cursor-pointer glow-blue"
              style={{
                background: "var(--gradient-accent)",
                color: "#fff",
                fontFamily: "var(--font-heading)",
              }}
            >
              <Mail size={18} />
              Send me an email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
