"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { publications } from "@/lib/data";

export default function Publications() {
  return (
    <section
      id="publications"
      className="section"
      style={{ background: "var(--color-bg-surface)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="Research"
          title="Published Work"
          subtitle="Peer-reviewed research in AI/ML — from deepfake detection to deep learning literature."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {publications.map((pub, i) => (
            <motion.a
              key={pub.issn}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group flex flex-col gap-4 rounded-2xl p-6 cursor-pointer"
              style={{
                background: "var(--gradient-card)",
                border: "1px solid var(--color-border-accent)",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(6, 182, 212, 0.12)",
                    border: "1px solid rgba(6, 182, 212, 0.25)",
                  }}
                >
                  <FileText size={18} style={{ color: "var(--color-accent-cyan)" }} />
                </div>
                <ExternalLink
                  size={15}
                  className="opacity-0 group-hover:opacity-70 transition-opacity mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                />
              </div>

              <div>
                <h3
                  className="text-base font-bold mb-2 leading-snug"
                  style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-heading)" }}
                >
                  {pub.title}
                </h3>
                <p
                  className="text-xs leading-relaxed mb-2"
                  style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
                >
                  {pub.journal}
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className="px-2 py-0.5 text-[10px] rounded-md font-mono"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "var(--color-text-faint)",
                    }}
                  >
                    ISSN {pub.issn}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "var(--color-text-faint)", fontFamily: "var(--font-body)" }}
                  >
                    {pub.year}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
