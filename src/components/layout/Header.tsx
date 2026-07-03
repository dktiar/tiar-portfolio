"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

const navItems = [
  { href: "#about", labelId: "Tentang", labelEn: "About" },
  { href: "#experience", labelId: "Pengalaman", labelEn: "Experience" },
  { href: "#projects", labelId: "Proyek", labelEn: "Projects" },
  { href: "#certifications", labelId: "Sertifikasi", labelEn: "Certifications" },
  { href: "#gallery", labelId: "Galeri", labelEn: "Gallery" },
  { href: "#contact", labelId: "Kontak", labelEn: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, toggleLocale, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{ background: "color-mix(in srgb, var(--bg-primary) 85%, transparent)", borderBottom: "1px solid var(--border)" }}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bold text-xl tracking-tighter" style={{ color: "var(--text-primary)" }}>
          TDK<span style={{ color: "var(--text-muted)" }}>.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm transition-colors hover:opacity-100"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {t(item.labelId, item.labelEn)}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLocale}
            className="text-xs font-medium tracking-wider uppercase transition-colors"
            style={{ color: "var(--text-muted)" }}
            aria-label="Toggle language"
          >
            {locale === "en" ? "ID" : "EN"}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center"
            style={{ color: "var(--text-secondary)" }}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6" style={{ borderTop: "1px solid var(--border)" }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              {t(item.labelId, item.labelEn)}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
