"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { Profile } from "@/types";

interface ContactSectionProps {
  profile: Profile;
}

export default function ContactSection({ profile }: ContactSectionProps) {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Form ID hardcoded as fallback supaya tidak bergantung pada env var
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "mbdvayzq";
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _replyto: formState.email,
        }),
      });
      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        console.error("Formspree error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
    }
  };

  const inputStyle = {
    color: "var(--text-primary)",
    borderBottom: "1px solid var(--border)",
    background: "transparent",
  };

  return (
    <section id="contact" className="section-fullscreen" style={{ background: "var(--bg-section-alt)" }} ref={ref}>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="label-text mb-4">{t("Kontak", "Contact")}</p>
          <h2 className="heading-lg mb-4">
            {t("Mari Terhubung", "Let's Connect")}<span style={{ color: "var(--text-muted)" }}>.</span>
          </h2>
          <p className="body-text mb-16">
            {t(
              "Tertarik untuk berdiskusi? Jangan ragu untuk menghubungi saya.",
              "Interested in a conversation? Feel free to reach out."
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <p className="label-text mb-2">Email</p>
              <a href={`mailto:${profile.email}`} className="text-xl transition-colors" style={{ color: "var(--text-primary)" }}>
                {profile.email}
              </a>
            </div>
            <div>
              <p className="label-text mb-2">{t("Lokasi", "Location")}</p>
              <p className="text-xl" style={{ color: "var(--text-primary)" }}>{profile.location}</p>
            </div>
            <div>
              <p className="label-text mb-2">{t("Posisi", "Position")}</p>
              <p style={{ color: "var(--text-primary)" }}>{profile.title}</p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>{profile.company}</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="label-text mb-2 block">{t("Nama", "Name")}</label>
                <input
                  type="text" id="name" name="name" required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-0 py-3 border-0 outline-none transition-colors"
                  style={{ ...inputStyle }}
                  placeholder={t("Nama lengkap", "Full name")}
                />
              </div>
              <div>
                <label htmlFor="email" className="label-text mb-2 block">Email</label>
                <input
                  type="email" id="email" name="email" required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-0 py-3 border-0 outline-none transition-colors"
                  style={{ ...inputStyle }}
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="label-text mb-2 block">{t("Pesan", "Message")}</label>
                <textarea
                  id="message" name="message" required rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-0 py-3 border-0 outline-none transition-colors resize-none"
                  style={{ ...inputStyle }}
                  placeholder={t("Tulis pesan Anda...", "Write your message...")}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="btn-primary mt-4 disabled:opacity-50">
                {status === "sending" ? t("Mengirim...", "Sending...") : t("Kirim Pesan", "Send Message")}
              </button>
              {status === "success" && <p className="text-green-500 text-sm mt-4">{t("Pesan terkirim!", "Message sent!")}</p>}
              {status === "error" && <p className="text-red-500 text-sm mt-4">{t("Gagal mengirim.", "Failed to send.")}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
