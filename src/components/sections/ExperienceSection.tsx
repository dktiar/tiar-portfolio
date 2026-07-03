"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { Experience } from "@/types";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6 sm:px-12 lg:px-24" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="label-text mb-4">{t("Pengalaman", "Experience")}</p>
          <h2 className="heading-lg mb-16">
            {t("Perjalanan Karir", "Career Journey")}<span style={{ color: "var(--text-muted)" }}>.</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp._id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
              className="group py-12"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <div className="grid lg:grid-cols-[200px_1fr] gap-8">
                {/* Date */}
                <div>
                  <p className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>
                    {exp.startDate} — {exp.isCurrent ? t("Sekarang", "Present") : exp.endDate}
                  </p>
                  {exp.isCurrent && (
                    <span className="inline-block mt-2 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                    {exp.title}
                  </h3>
                  <p className="mb-1" style={{ color: "var(--text-muted)" }}>{exp.company}</p>
                  <p className="text-sm mb-6" style={{ color: "var(--text-muted)", opacity: 0.6 }}>{exp.location}</p>

                  <p className="text-sm mb-6 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
                    {t(exp.descriptionId, exp.descriptionEn)}
                  </p>

                  {/* Achievements */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {exp.achievements?.map((achievement, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-3 text-sm">
                        <span style={{ color: "var(--text-accent)" }}>→</span>
                        <span style={{ color: "var(--text-secondary)" }}>{t(achievement.textId, achievement.textEn)}</span>
                      </div>
                    ))}
                  </div>

                  {exp.stack && (
                    <div className="flex flex-wrap gap-2 mt-6">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="badge-minimal">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
