import { defineType, defineField } from "sanity";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "title", title: "Job Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "education", title: "Education", type: "string" }),
    defineField({ name: "bioId", title: "Bio (Bahasa Indonesia)", type: "text" }),
    defineField({ name: "bioEn", title: "Bio (English)", type: "text" }),
    defineField({ name: "profileImage", title: "Profile Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "cvFile", title: "CV File URL", type: "url" }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
    defineField({ name: "github", title: "GitHub URL", type: "url" }),
  ],
});
