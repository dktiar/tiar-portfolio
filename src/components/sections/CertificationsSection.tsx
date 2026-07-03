"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { Certification, Skill } from "@/types";

interface CertificationsSectionProps {
  certifications: Certification[];
  skills: Skill[];
}

export default function CertificationsSection({ certifications, skills }: CertificationsSectionProps) {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-32 px-6 sm:px-12 lg:px-24" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="label-text mb-4">{t("Sertifikasi", "Certifications")}</p>
          <h2 className="heading-lg mb-16">
            {t("Sertifikasi & Keahlian", "Certifications & Skills")}<span style={{ color: "var(--text-muted)" }}>.</span>
          </h2>
        </motion.div>

        {/* Certifications */}
        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert._id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
              className="card-minimal flex items-start gap-5"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
                <svg className="w-5 h-5" style={{ color: "var(--text-accent)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium mb-1" style={{ color: "var(--text-primary)" }}>{cert.name}</h3>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{cert.issuer}</p>
                {cert.score && <p className="text-xs mt-2 font-mono" style={{ color: "var(--text-accent)" }}>{cert.score}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup._id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
            >
              <h3 className="font-medium mb-4 text-sm uppercase tracking-wider" style={{ color: "var(--text-primary)" }}>
                {skillGroup.categoryLabel}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full cursor-default transition-colors"
                    style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
