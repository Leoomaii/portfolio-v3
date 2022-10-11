import { Rule } from "postcss";

export default {
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    {
      name: "Title",
      title: "Title",
      description: "Platform of social",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
  ],
};
