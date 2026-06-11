import { cn } from "@/lib/utils";

type TechBadgeProps = {
  label: string;
  variant?: "default" | "accent" | "dim";
  className?: string;
};

export default function TechBadge({ label, variant = "default", className }: TechBadgeProps) {
  const styles = {
    default: {
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.10)",
      color: "var(--color-text-secondary)",
    },
    accent: {
      background: "rgba(6, 182, 212, 0.08)",
      border: "1px solid rgba(6, 182, 212, 0.25)",
      color: "var(--color-accent-cyan)",
    },
    dim: {
      background: "rgba(37, 99, 235, 0.08)",
      border: "1px solid rgba(37, 99, 235, 0.20)",
      color: "#93C5FD",
    },
  };

  return (
    <span
      className={cn(
        "inline-block px-2.5 py-1 text-xs font-medium rounded-md",
        className
      )}
      style={{
        fontFamily: "var(--font-body)",
        ...styles[variant],
      }}
    >
      {label}
    </span>
  );
}
