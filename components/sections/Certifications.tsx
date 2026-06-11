"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/lib/data";

const issuerColor: Record<string, { bg: string; border: string; text: string }> = {
  Microsoft:                { bg: "rgba(0, 120, 212, 0.10)", border: "rgba(0, 120, 212, 0.25)", text: "#60A5FA" },
  Databricks:               { bg: "rgba(255, 102, 0, 0.10)",  border: "rgba(255, 102, 0, 0.25)",  text: "#FB923C" },
  "Amazon Web Services":    { bg: "rgba(255, 153, 0, 0.10)",  border: "rgba(255, 153, 0, 0.25)",  text: "#FCD34D" },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="Certifications"
          title="6× Certified"
          subtitle="Microsoft Azure (×4), Databricks, and AWS — validating cloud and AI expertise."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => {
            const color = issuerColor[cert.issuer] ?? issuerColor["Microsoft"];
            return (
              <motion.a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative flex flex-col rounded-xl p-5 cursor-pointer transition-all duration-200"
                style={{
                  background: "var(--color-glass-bg)",
                  border: "1px solid var(--color-border-subtle)",
                }}
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at top left, rgba(37,99,235,0.04) 0%, transparent 60%)" }}
                />

                <div className="relative z-10 flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: color.bg, border: `1px solid ${color.border}` }}
                  >
                    <Award size={16} style={{ color: color.text }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h3
                        className="text-sm font-semibold leading-snug"
                        style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-heading)" }}
                      >
                        {cert.name}
                      </h3>
                      <ExternalLink
                        size={13}
                        className="shrink-0 opacity-0 group-hover:opacity-70 transition-opacity mt-0.5"
                        style={{ color: "var(--color-text-muted)" }}
                      />
                    </div>
                    <p
                      className="text-xs mt-1 font-medium"
                      style={{ color: color.text, fontFamily: "var(--font-body)" }}
                    >
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
