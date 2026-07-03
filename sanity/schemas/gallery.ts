import { defineType, defineField } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "alt", title: "Alt Text (untuk accessibility)", type: "string" }),
    defineField({ name: "captionId", title: "Caption (Bahasa Indonesia)", type: "string" }),
    defineField({ name: "captionEn", title: "Caption (English)", type: "string" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Professional", value: "professional" },
          { title: "Team", value: "team" },
          { title: "Event", value: "event" },
          { title: "Personal", value: "personal" },
        ],
      },
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: {
      title: "captionEn",
      subtitle: "category",
      media: "image",
    },
  },
});
