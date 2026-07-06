import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <p className="text-8xl font-bold mb-4" style={{ color: "var(--text-primary)", opacity: 0.15 }}>
        404
      </p>
      <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
        Halaman tidak ditemukan
      </h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        Page not found
      </p>
      <Link
        href="/"
        className="btn-outline text-sm"
      >
        ← Kembali ke beranda
      </Link>
    </div>
  );
}
