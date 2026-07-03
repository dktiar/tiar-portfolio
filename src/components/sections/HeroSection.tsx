"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import type { Profile, Stat } from "@/types";
import { urlFor } from "@/lib/sanity/client";

const Scene3D = dynamic(() => import("@/components/ui/Scene3D"), { ssr: false });

interface HeroSectionProps {
  profile: Profile;
  stats: Stat[];
}

export default function HeroSection({ profile, stats }: HeroSectionProps) {
  const { t } = useLanguage();

  const profileImageSrc = profile.profileImage?.asset?._ref
    ? urlFor(profile.profileImage)
    : "/images/profile.jpg";

  return (
    <section className="section-fullscreen relative overflow-hidden">
      {/* 3D Background */}
      <Scene3D />

      {/* Gradient overlays — adapts to theme */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(to bottom, color-mix(in srgb, var(--bg-primary) 80%, transparent), color-mix(in srgb, var(--bg-primary) 50%, transparent), color-mix(in srgb, var(--bg-primary) 90%, transparent))" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="label-text mb-6">{profile.location}</p>

          <h1 className="heading-xl mb-6">
            {profile.name.split(" ")[0]}
            <br />
            <span style={{ color: "var(--text-muted)" }}>{profile.name.split(" ").slice(1).join(" ")}</span>
          </h1>

          <p className="text-xl sm:text-2xl font-light mb-4" style={{ color: "var(--text-secondary)" }}>
            {profile.title}
          </p>

          <p className="body-text mb-10">
            {t(profile.bioId, profile.bioEn)}
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a href="/cv/tiar-cv.pdf" download className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t("Unduh CV", "Download CV")}
            </a>
            <a href="#contact" className="btn-outline">
              {t("Hubungi Saya", "Contact Me")}
            </a>
          </div>
        </motion.div>

        {/* Right — Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            <motion.div
              className="relative w-full h-full"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={profileImageSrc}
                alt={profile.name}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 288px, 384px"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/40 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Stats bar at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto w-full mt-16 pt-8"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
          {stats.map((stat) => (
            <div key={stat._id}>
              <p className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--text-primary)" }}>{stat.value}</p>
              <p className="text-xs mt-1 uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <p className="label-text animate-pulse">Scroll</p>
      </motion.div>
    </section>
  );
}
