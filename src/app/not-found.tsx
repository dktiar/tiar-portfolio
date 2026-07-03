import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>404</h1>
        <p className="text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
          Halaman tidak ditemukan.
        </p>
        <Link href="/" className="btn-primary">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
