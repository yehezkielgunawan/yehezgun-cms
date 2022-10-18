export default {
  name: "articles",
  type: "document",
  title: "Articles",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "cover",
      type: "image",
      title: "Cover",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { value: "random", title: "Random" },
          { value: "explicit", title: "Explicit" },
          { value: "tutorial", title: "Tutorial" },
        ],
      },
    },
    {
      name: "content",
      title: "Content",
      description: "Write your blog content here",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },
  ],
};
