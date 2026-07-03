import { sanityClient } from "./client";
import {
  profileQuery,
  experiencesQuery,
  projectsQuery,
  certificationsQuery,
  skillsQuery,
  statsQuery,
  galleryQuery,
  showcaseQuery,
} from "./queries";
import {
  fallbackProfile,
  fallbackExperiences,
  fallbackProjects,
  fallbackCertifications,
  fallbackSkills,
  fallbackStats,
} from "../utils/data";
import type { Profile, Experience, Project, Certification, Skill, Stat } from "@/types";

const isSanityConfigured =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "your-project-id";

export async function getProfile(): Promise<Profile> {
  if (!isSanityConfigured) return fallbackProfile;
  try {
    const data = await sanityClient.fetch(profileQuery);
    return data || fallbackProfile;
  } catch {
    return fallbackProfile;
  }
}

export async function getExperiences(): Promise<Experience[]> {
  if (!isSanityConfigured) return fallbackExperiences;
  try {
    const data = await sanityClient.fetch(experiencesQuery);
    return data?.length ? data : fallbackExperiences;
  } catch {
    return fallbackExperiences;
  }
}

export async function getProjects(): Promise<Project[]> {
  if (!isSanityConfigured) return fallbackProjects;
  try {
    const data = await sanityClient.fetch(projectsQuery);
    return data?.length ? data : fallbackProjects;
  } catch {
    return fallbackProjects;
  }
}

export async function getCertifications(): Promise<Certification[]> {
  if (!isSanityConfigured) return fallbackCertifications;
  try {
    const data = await sanityClient.fetch(certificationsQuery);
    return data?.length ? data : fallbackCertifications;
  } catch {
    return fallbackCertifications;
  }
}

export async function getSkills(): Promise<Skill[]> {
  if (!isSanityConfigured) return fallbackSkills;
  try {
    const data = await sanityClient.fetch(skillsQuery);
    return data?.length ? data : fallbackSkills;
  } catch {
    return fallbackSkills;
  }
}

export async function getStats(): Promise<Stat[]> {
  if (!isSanityConfigured) return fallbackStats;
  try {
    const data = await sanityClient.fetch(statsQuery);
    return data?.length ? data : fallbackStats;
  } catch {
    return fallbackStats;
  }
}

export interface GalleryItem {
  _id: string;
  image: { asset: { _ref: string } };
  alt: string;
  captionId: string;
  captionEn: string;
  category: "professional" | "team" | "event" | "personal";
  order: number;
}

export async function getGallery(): Promise<GalleryItem[]> {
  if (!isSanityConfigured) return [];
  try {
    const data = await sanityClient.fetch(galleryQuery);
    return data || [];
  } catch {
    return [];
  }
}

export interface ShowcaseItem {
  _id: string;
  image: { asset: { _ref: string } };
  alt: string;
  captionId: string;
  captionEn: string;
  order: number;
}

export async function getShowcase(): Promise<ShowcaseItem[]> {
  if (!isSanityConfigured) return [];
  try {
    const data = await sanityClient.fetch(showcaseQuery);
    return data || [];
  } catch {
    return [];
  }
}
