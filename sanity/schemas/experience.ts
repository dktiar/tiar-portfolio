import { defineType, defineField } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "company", title: "Company", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "title", title: "Job Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "startDate", title: "Start Date", type: "string", description: "Format: YYYY-MM" }),
    defineField({ name: "endDate", title: "End Date", type: "string", description: "Format: YYYY-MM (leave empty if current)" }),
    defineField({ name: "isCurrent", title: "Is Current Position?", type: "boolean", initialValue: false }),
    defineField({ name: "descriptionId", title: "Description (Bahasa Indonesia)", type: "text" }),
    defineField({ name: "descriptionEn", title: "Description (English)", type: "text" }),
    defineField({
      name: "achievements",
      title: "Key Achievements",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "textId", title: "Achievement (ID)", type: "string" }),
            defineField({ name: "textEn", title: "Achievement (EN)", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "stack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
});
