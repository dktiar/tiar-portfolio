"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

const navItems = [
  { href: "#about", id: "about", labelId: "Tentang", labelEn: "About" },
  { href: "#experience", id: "experience", labelId: "Pengalaman", labelEn: "Experience" },
  { href: "#projects", id: "projects", labelId: "Proyek", labelEn: "Projects" },
  { href: "#certifications", id: "certifications", labelId: "Sertifikasi", labelEn: "Certifications" },
  { href: "#gallery", id: "gallery", labelId: "Galeri", labelEn: "Gallery" },
  { href: "#contact", id: "contact", labelId: "Kontak", labelEn: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { locale, toggleLocale, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {/* Skip navigation for keyboard/screen reader users */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
        style={{ background: "var(--text-primary)", color: "var(--bg-primary)" }}
      >
        Skip to main content
      </a>

      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{
          background: "color-mix(in srgb, var(--bg-primary) 85%, transparent)",
          borderBottom: "1px solid var(--border)",
        }}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 h-16 flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="#" className="font-bold text-xl tracking-tighter" style={{ color: "var(--text-primary)" }} aria-label="Go to top">
            TDK<span style={{ color: "var(--text-muted)" }}>.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8" role="list">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  role="listitem"
                  className="text-sm transition-all duration-200 relative"
                  style={{
                    color: isActive ? "var(--text-primary)" : "var(--text-muted)",
                    fontWeight: isActive ? 500 : 400,
                  }}
                  aria-current={isActive ? "location" : undefined}
                >
                  {t(item.labelId, item.labelEn)}
                  {/* Active underline */}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ background: "var(--text-accent)" }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
                outlineColor: "var(--text-accent)",
              }}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Language toggle */}
            <button
              onClick={toggleLocale}
              className="text-xs font-medium tracking-wider uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm"
              style={{ color: "var(--text-muted)", outlineColor: "var(--text-accent)" }}
              aria-label={locale === "en" ? "Switch to Bahasa Indonesia" : "Switch to English"}
            >
              {locale === "en" ? "ID" : "EN"}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm"
              style={{ color: "var(--text-secondary)", outlineColor: "var(--text-accent)" }}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
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
          <div
            id="mobile-nav"
            className="md:hidden px-6 pb-6"
            style={{ borderTop: "1px solid var(--border)" }}
            role="menu"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm transition-colors"
                style={{
                  color: activeSection === item.id ? "var(--text-primary)" : "var(--text-secondary)",
                }}
                role="menuitem"
              >
                {t(item.labelId, item.labelEn)}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
