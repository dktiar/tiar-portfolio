import {
  getProfile,
  getExperiences,
  getProjects,
  getCertifications,
  getSkills,
  getStats,
  getGallery,
  getShowcase,
} from "@/lib/sanity/fetch";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";

export const revalidate = 60;

export default async function Home() {
  const [profile, experiences, projects, certifications, skills, stats, gallery, showcase] =
    await Promise.all([
      getProfile(),
      getExperiences(),
      getProjects(),
      getCertifications(),
      getSkills(),
      getStats(),
      getGallery(),
      getShowcase(),
    ]);

  return (
    <>
      <HeroSection profile={profile} stats={stats} />
      <AboutSection profile={profile} stats={stats} />
      <ShowcaseSection showcase={showcase} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <CertificationsSection certifications={certifications} skills={skills} />
      <GallerySection gallery={gallery} />
      <ContactSection profile={profile} />
    </>
  );
}
