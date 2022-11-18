import { defineSchema, defineConfig } from "tinacms";

const schema = defineSchema({
  config: {
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    branch:
      process.env.NEXT_PUBLIC_TINA_BRANCH ||
      process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
      process.env.HEAD,
    token: process.env.TINA_TOKEN,
    media: {
      tina: {
        mediaRoot: "uploads",
        publicFolder: "public",
      },
    },
  },
  collections: [
    {
      label: "Page Content",
      name: "page",
      path: "content/page",
      format: "mdx",
      fields: [
        {
          name: "body",
          label: "Main Content",
          type: "rich-text",
          isBody: true,
        },
      ],
      ui: {
        router: ({ document }) => {
          if (document._sys.filename === "home") {
            return `/`;
          }
          return undefined;
        },
      },
    },
    {
      label: "Blog Posts",
      name: "post",
      path: "content/post",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          label: "Metadata",
          name: "metadata",
          type: "object",
          fields: [
            {
              label: "Created At",
              name: "createdAt",
              type: "datetime",
              ui: {
                dateFormat: "YYYY.MM.DD @h:mma",
              },
            },
            {
              label: "Edited At",
              name: "editedAt",
              type: "datetime",
              ui: {
                dateFormat: "YYYY.MM.DD @h:mma",
              },
            },
          ],
        },
        {
          label: "Tags",
          name: "tags",
          type: "object",
          list: true,
          ui: {
            // This allows the customization of the list item UI
            // Data can be accessed by item?.<Name of field>
            itemProps: (item) => {
              return { label: item?.tag };
            },
            // Setting a default will auto-populate new items with the given values
            defaultItem: {
              tag: "tag",
            },
          },
          fields: [
            {
              type: "string",
              label: "Tag",
              name: "tag",
            },
          ],
        },
        {
          label: "Blog Post Body",
          name: "body",
          isBody: true,
          // ui: {
          //   component: "textarea",
          // },
          type: "rich-text",
          templates: [
            // {
            //   name: "Callout",
            //   label: "Callout",
            //   fields: [
            //     {
            //       name: "message",
            //       label: "Message",
            //       type: "string",
            //     },
            //   ],
            // },
          ],
        },
      ],
      ui: {
        router: ({ document }) => {
          return `/posts/${document._sys.filename}`;
        },
      },
    },
  ],
});

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD, // Netlify branch env
  token: process.env.TINA_TOKEN,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
  build: {
    publicFolder: "public", // The public asset folder for your framework
    outputFolder: "admin", // within the public folder
  },
  schema,
});

export default config;
