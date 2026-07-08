"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { urlFor } from "@/lib/sanity/client";
import type { Project } from "@/types";

const categories = [
  { value: "all", labelId: "Semua", labelEn: "All" },
  { value: "security", labelId: "Security", labelEn: "Security" },
  { value: "development", labelId: "Dev", labelEn: "Dev" },
  { value: "compliance", labelId: "Compliance", labelEn: "Compliance" },
  { value: "event-it", labelId: "Event", labelEn: "Event" },
  { value: "governance", labelId: "Governance", labelEn: "Governance" },
];

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 px-6 sm:px-12 lg:px-24" style={{ background: "var(--bg-section-alt)" }} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="label-text mb-4">{t("Proyek", "Projects")}</p>
          <h2 className="heading-lg mb-8">
            {t("Proyek Unggulan", "Featured Projects")}<span style={{ color: "var(--text-muted)" }}>.</span>
          </h2>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className="text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300"
              style={{
                border: `1px solid ${activeFilter === cat.value ? "var(--text-primary)" : "var(--border)"}`,
                color: activeFilter === cat.value ? "var(--text-primary)" : "var(--text-muted)",
                background: activeFilter === cat.value ? "var(--bg-card)" : "transparent",
              }}
            >
              {t(cat.labelId, cat.labelEn)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
              layout
              className="card-minimal group overflow-hidden"
            >
              {/* Project image if available from Sanity */}
              {project.image?.asset?._ref && (
                <div className="relative w-full h-44 -mx-8 -mt-8 mb-6 overflow-hidden" style={{ width: "calc(100% + 4rem)" }}>
                  <Image
                    src={urlFor(project.image)}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent, var(--bg-card))" }} />
                </div>
              )}

              <div className="flex items-center justify-between mb-6">
                <span className="badge-minimal">{project.category.replace("-", " ")}</span>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>→</span>
              </div>

              <h3 className="text-xl font-bold transition-colors mb-3" style={{ color: "var(--text-primary)" }}>
                {project.title}
              </h3>

              <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {t(project.descriptionId, project.descriptionEn)}
              </p>

              {/* Bilingual impact */}
              <p className="text-xs uppercase tracking-wider mb-4" style={{ color: "var(--text-accent)" }}>
                📊 {t(project.impactId || project.impact, project.impactEn || project.impact)}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs pb-0.5" style={{ color: "var(--text-muted)", borderBottom: "1px solid var(--border)" }}>
                    {tech}
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
