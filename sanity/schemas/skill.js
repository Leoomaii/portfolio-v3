
export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      description: "Title of skill",
      type: "string",
    },
    {
      name: "progress",
      title: "Progress",
      type: "number",
      description: "Progress of skill",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
