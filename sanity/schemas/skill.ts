import { defineType, defineField } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill Group",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Infrastructure & Security", value: "infrastructure" },
          { title: "Development & Tools", value: "development" },
          { title: "Management & Governance", value: "management" },
        ],
      },
    }),
    defineField({ name: "categoryLabel", title: "Display Label", type: "string" }),
    defineField({
      name: "items",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
