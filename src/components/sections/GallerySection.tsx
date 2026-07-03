"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { urlFor } from "@/lib/sanity/client";
import type { GalleryItem } from "@/lib/sanity/fetch";

interface GallerySectionProps {
  gallery?: GalleryItem[];
}

export default function GallerySection({ gallery = [] }: GallerySectionProps) {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  if (gallery.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="py-32 px-6 sm:px-12 lg:px-24" style={{ background: "var(--bg-section-alt)" }} ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="label-text mb-4">{t("Galeri", "Gallery")}</p>
          <h2 className="heading-lg mb-16">
            {t("Kegiatan", "Activities")}<span style={{ color: "var(--text-muted)" }}>.</span>
          </h2>
        </motion.div>

        {/* Masonry-like grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((item, idx) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.05 }}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-neutral-800/50 hover:border-neutral-700 transition-colors"
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={urlFor(item.image)}
                alt={item.alt || item.captionEn || "Gallery"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white text-sm font-light">
                  {t(item.captionId || "", item.captionEn || "")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] bg-neutral-950/98 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[75vh] rounded-2xl overflow-hidden">
                <Image
                  src={urlFor(selectedImage.image)}
                  alt={selectedImage.alt || ""}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <p className="text-neutral-400 text-center mt-6 text-sm font-light">
                {t(selectedImage.captionId || "", selectedImage.captionEn || "")}
              </p>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
