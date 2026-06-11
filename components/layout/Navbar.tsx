"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personal } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-4 right-4 z-50"
    >
      <nav
        className={cn(
          "max-w-5xl mx-auto rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-300",
          scrolled
            ? "glass glow-blue"
            : "bg-transparent border border-transparent"
        )}
        style={scrolled ? { backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" } : {}}
      >
        {/* Logo */}
        <button
          onClick={() => handleNavClick("#")}
          className="flex items-center gap-2 cursor-pointer"
          aria-label="Go to top"
        >
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{
              background: "var(--gradient-accent)",
              fontFamily: "var(--font-heading)",
              color: "#fff",
            }}
          >
            {personal.initials}
          </span>
          <span
            className="hidden sm:block text-sm font-semibold"
            style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-heading)" }}
          >
            {personal.nameShort}
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative px-3 py-1.5 text-sm rounded-lg transition-colors duration-200 cursor-pointer",
                    isActive
                      ? "text-white"
                      : "hover:text-white"
                  )}
                  style={{
                    color: isActive ? "var(--color-accent-cyan)" : "var(--color-text-muted)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "rgba(6, 182, 212, 0.10)",
                        border: "1px solid rgba(6, 182, 212, 0.20)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-3">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer"
            style={{
              background: "var(--gradient-accent)",
              color: "#fff",
              fontFamily: "var(--font-body)",
            }}
          >
            Hire Me
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg cursor-pointer transition-colors duration-200"
            style={{
              color: "var(--color-text-muted)",
              background: "rgba(255,255,255,0.05)",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="mt-2 max-w-5xl mx-auto rounded-2xl overflow-hidden glass"
          >
            <ul className="py-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-5 py-3 text-sm transition-colors duration-150 cursor-pointer"
                    style={{
                      color: activeSection === link.href.replace("#", "")
                        ? "var(--color-accent-cyan)"
                        : "var(--color-text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="px-5 py-3">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center items-center py-2 rounded-lg text-sm font-medium cursor-pointer"
                  style={{
                    background: "var(--gradient-accent)",
                    color: "#fff",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
