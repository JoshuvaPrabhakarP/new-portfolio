import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      className="py-10 mt-0"
      style={{
        borderTop: "1px solid var(--color-border-subtle)",
        background: "var(--color-bg-surface)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}>
          © {new Date().getFullYear()} {personal.nameShort}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-200 cursor-pointer"
            style={{ color: "var(--color-text-muted)" }}
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors duration-200 cursor-pointer"
            style={{ color: "var(--color-text-muted)" }}
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="transition-colors duration-200 cursor-pointer"
            style={{ color: "var(--color-text-muted)" }}
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
