"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { Profile, Stat } from "@/types";

interface AboutSectionProps {
  profile: Profile;
  stats: Stat[];
}

export default function AboutSection({ profile, stats }: AboutSectionProps) {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-fullscreen" ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="label-text mb-4">{t("Tentang", "About")}</p>
          <h2 className="heading-lg mb-8">
            {t("Tentang Saya", "About Me")}<span style={{ color: "var(--text-muted)" }}>.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="body-text mb-8">
              {t(profile.bioId, profile.bioEn)}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: "var(--bg-secondary)" }}>🎓</span>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{profile.education}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: "var(--bg-secondary)" }}>📍</span>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{profile.location}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: "var(--bg-secondary)" }}>🏢</span>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{profile.company}</span>
              </div>
            </div>
          </motion.div>

          {/* Tagline / Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center"
          >
            <blockquote className="pl-8" style={{ borderLeft: "2px solid var(--border)" }}>
              <p className="text-2xl sm:text-3xl font-light italic leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                &ldquo;{profile.tagline}&rdquo;
              </p>
              <cite className="text-sm mt-4 block not-italic" style={{ color: "var(--text-muted)" }}>— {profile.name}</cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
