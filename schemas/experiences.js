export default {
  name: "experiences",
  type: "document",
  title: "Experiences",
  fields: [
    {
      name: "experience_name",
      title: "Experience Name",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "start_date",
      title: "Start Date",
      type: "date",
    },
    {
      name: "end_date",
      title: "End Date",
      type: "date",
    },
    {
      name: "is_currently_here",
      title: "Still working here?",
      type: "boolean",
    },
  ],
};
