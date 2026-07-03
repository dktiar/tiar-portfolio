import { defineType, defineField } from "sanity";

export default defineType({
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Certification Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "issuer", title: "Issuer / Organization", type: "string" }),
    defineField({ name: "score", title: "Score", type: "string" }),
    defineField({ name: "date", title: "Date Obtained", type: "string" }),
    defineField({ name: "badge", title: "Badge Image", type: "image" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "order", by: [{ field: "order", direction: "asc" }] }],
});
