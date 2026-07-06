import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import LayoutShell from "@/components/layout/LayoutShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiar Dwi Krisnanto | IT Section Head — Portfolio",
  description:
    "Professional portfolio of Tiar Dwi Krisnanto — IT Section Head / Senior Supervisor at PT Modernland Realty Tbk. Infrastructure, Security, ISO 27001, Property Tech.",
  keywords: [
    "Tiar Dwi Krisnanto",
    "IT Section Head",
    "Portfolio",
    "Infrastructure",
    "ISO 27001",
    "CrowdStrike",
    "Modernland",
  ],
  authors: [{ name: "Tiar Dwi Krisnanto" }],
  openGraph: {
    title: "Tiar Dwi Krisnanto | IT Section Head",
    description: "IT Leader | Infrastructure & Security | ISO 27001 | Property Tech",
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tiar Dwi Krisnanto — IT Section Head Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiar Dwi Krisnanto | IT Section Head",
    description: "IT Leader | Infrastructure & Security | ISO 27001 | Property Tech",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <LayoutShell>{children}</LayoutShell>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
