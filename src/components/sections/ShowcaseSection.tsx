"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { urlFor } from "@/lib/sanity/client";
import type { ShowcaseItem } from "@/lib/sanity/fetch";

interface ShowcaseSectionProps {
  showcase: ShowcaseItem[];
}

function ParallaxCard({ item, index }: { item: ShowcaseItem; index: number }) {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, rotateX, perspective: 1000 }}
      className={`relative ${index % 2 === 0 ? "lg:pr-24" : "lg:pl-24"}`}
    >
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
        <motion.div style={{ y }} className="relative w-full h-[120%] -top-[10%]">
          <Image
            src={urlFor(item.image)}
            alt={item.alt || item.captionEn || "Showcase"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 70vw"
          />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[var(--bg-primary)]/80 to-transparent">
          <p className="text-sm font-light" style={{ color: "var(--text-primary)" }}>
            {t(item.captionId || "", item.captionEn || "")}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ShowcaseSection({ showcase }: ShowcaseSectionProps) {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Don't render if no showcase items
  if (!showcase || showcase.length === 0) return null;

  return (
    <section className="py-32 px-6 sm:px-12 lg:px-24 relative" ref={containerRef}>
      {/* Animated vertical line */}
      <div className="absolute left-12 lg:left-24 top-0 bottom-0 w-px" style={{ background: "var(--border)" }}>
        <motion.div style={{ height: lineHeight }} className="w-full">
          <div className="w-full h-full" style={{ background: "var(--text-accent)" }} />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-text mb-4"
        >
          {t("Sorotan", "Highlights")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-lg mb-20"
        >
          {t("Momen Profesional", "Professional Moments")}<span style={{ color: "var(--text-muted)" }}>.</span>
        </motion.h2>

        <div className="space-y-32">
          {showcase.map((item, idx) => (
            <ParallaxCard key={item._id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
