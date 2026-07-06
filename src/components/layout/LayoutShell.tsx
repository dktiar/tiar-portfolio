"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "./Header";
import Footer from "./Footer";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import BackToTop from "@/components/ui/BackToTop";

const PageLoader = dynamic(() => import("@/components/ui/PageLoader"), { ssr: false });

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <PageLoader />
      <ScrollProgressBar />
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
