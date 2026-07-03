import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Project Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Security", value: "security" },
          { title: "Infrastructure", value: "infrastructure" },
          { title: "Development", value: "development" },
          { title: "Compliance", value: "compliance" },
          { title: "Event IT", value: "event-it" },
          { title: "Governance", value: "governance" },
        ],
      },
    }),
    defineField({ name: "descriptionId", title: "Description (Bahasa Indonesia)", type: "text" }),
    defineField({ name: "descriptionEn", title: "Description (English)", type: "text" }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "impact", title: "Business Impact", type: "string" }),
    defineField({ name: "status", title: "Status", type: "string" }),
    defineField({ name: "image", title: "Project Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
});
