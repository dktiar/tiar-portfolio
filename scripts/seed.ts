/**
 * Seed script — uploads all initial content to Sanity CMS
 * Run: npx tsx scripts/seed.ts
 */
import { createClient } from "@sanity/client";
import {
  fallbackProfile,
  fallbackExperiences,
  fallbackProjects,
  fallbackCertifications,
  fallbackSkills,
  fallbackStats,
} from "../src/lib/utils/data";

const client = createClient({
  projectId: "hrlsx03y",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // Needs a token with write access
});

async function seed() {
  console.log("🌱 Seeding Sanity CMS...\n");

  // 1. Profile
  console.log("📝 Creating Profile...");
  await client.createOrReplace({
    _id: "profile-main",
    _type: "profile",
    ...fallbackProfile,
  });
  console.log("   ✓ Profile created\n");

  // 2. Experiences
  console.log("💼 Creating Experiences...");
  for (const exp of fallbackExperiences) {
    await client.createOrReplace({
      _id: exp._id,
      _type: "experience",
      company: exp.company,
      title: exp.title,
      location: exp.location,
      startDate: exp.startDate,
      endDate: exp.endDate || undefined,
      isCurrent: exp.isCurrent,
      descriptionId: exp.descriptionId,
      descriptionEn: exp.descriptionEn,
      achievements: exp.achievements,
      stack: exp.stack,
      order: exp.order,
    });
    console.log(`   ✓ ${exp.company}`);
  }

  // 3. Projects
  console.log("\n🚀 Creating Projects...");
  for (const proj of fallbackProjects) {
    await client.createOrReplace({
      _id: proj._id,
      _type: "project",
      title: proj.title,
      category: proj.category,
      descriptionId: proj.descriptionId,
      descriptionEn: proj.descriptionEn,
      technologies: proj.technologies,
      impact: proj.impact,
      order: proj.order,
    });
    console.log(`   ✓ ${proj.title}`);
  }

  // 4. Certifications
  console.log("\n🎓 Creating Certifications...");
  for (const cert of fallbackCertifications) {
    await client.createOrReplace({
      _id: cert._id,
      _type: "certification",
      name: cert.name,
      issuer: cert.issuer,
      score: cert.score,
      order: cert.order,
    });
    console.log(`   ✓ ${cert.name}`);
  }

  // 5. Skills
  console.log("\n🛠️  Creating Skills...");
  for (const skill of fallbackSkills) {
    await client.createOrReplace({
      _id: skill._id,
      _type: "skill",
      category: skill.category,
      categoryLabel: skill.categoryLabel,
      items: skill.items,
      order: skill.order,
    });
    console.log(`   ✓ ${skill.categoryLabel}`);
  }

  // 6. Stats
  console.log("\n📊 Creating Stats...");
  for (const stat of fallbackStats) {
    await client.createOrReplace({
      _id: stat._id,
      _type: "stat",
      label: stat.label,
      value: stat.value,
      context: stat.context,
      order: stat.order,
    });
    console.log(`   ✓ ${stat.label}`);
  }

  console.log("\n✅ Seed complete! All content is now in Sanity CMS.");
  console.log("   Open http://localhost:3000/studio to view and edit.");
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err.message);
  process.exit(1);
});
