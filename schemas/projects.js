export default {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "project_name",
      type: "string",
      title: "Project Name",
    },
    {
      name: "project_logos",
      type: "array",
      title: "Project Logos",
      of: [{ type: "image" }],
    },
    {
      name: "project_desc",
      type: "text",
      title: "Project Description",
    },
    {
      name: "is_featured",
      type: "boolean",
      title: "Is Project featured?",
    },
    {
      name: "tech_stacks",
      type: "array",
      title: "Tech Stacks (icon url)",
      of: [{ type: "string" }],
    },
  ],
  initialValue: {
    is_featured: false,
  },
};
