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
      name: "project_screenshot",
      type: "image",
      title: "Project Screenshot",
    },
    {
      name: "project_logo",
      type: "image",
      title: "Project Logo",
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
