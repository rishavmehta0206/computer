export default {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 90,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
  ],
};