import { defineType, defineField } from "sanity";

export default defineType({
  name: "showcase",
  title: "Showcase",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "alt", title: "Alt Text", type: "string" }),
    defineField({ name: "captionId", title: "Caption (Bahasa Indonesia)", type: "string" }),
    defineField({ name: "captionEn", title: "Caption (English)", type: "string" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "captionEn", subtitle: "captionId", media: "image" },
  },
});
