import { defineType, defineField } from "sanity";

export default defineType({
  name: "stat",
  title: "Stat Counter",
  type: "document",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "value", title: "Value", type: "string", description: "e.g. 138+, 175M, 49" }),
    defineField({ name: "context", title: "Context / Subtitle", type: "string" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
