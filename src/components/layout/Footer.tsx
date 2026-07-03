"use client";

import { useLanguage } from "@/context/LanguageContext";
import { fallbackProfile } from "@/lib/utils/data";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 sm:px-12 lg:px-24" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="font-bold text-lg tracking-tighter" style={{ color: "var(--text-primary)" }}>
            TDK<span style={{ color: "var(--text-muted)" }}>.</span>
          </span>
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {currentYear} {fallbackProfile.name}
          </span>
        </div>

        <div className="flex items-center gap-6">
          {fallbackProfile.linkedin && (
            <a href={fallbackProfile.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider transition-colors"
              style={{ color: "var(--text-muted)" }}>
              LinkedIn
            </a>
          )}
          {fallbackProfile.github && (
            <a href={fallbackProfile.github} target="_blank" rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider transition-colors"
              style={{ color: "var(--text-muted)" }}>
              GitHub
            </a>
          )}
          <a href={`mailto:${fallbackProfile.email}`}
            className="text-xs uppercase tracking-wider transition-colors"
            style={{ color: "var(--text-muted)" }}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
