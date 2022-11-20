import { defineSchema, defineConfig } from "tinacms";

const customTemplates = [
  {
    name: "Button",
    label: "Button",
    type: "object",
    fields: [
      {
        name: "text",
        label: "Text",
        type: "string",
      },
      {
        name: "href",
        label: "URL",
        type: "string",
      },
    ],
  },
  {
    name: "RandomText",
    label: "Random Text",
    type: "object",
    fields: [
      {
        name: "bold",
        label: "Bold",
        type: "boolean",
      },
      {
        name: "italic",
        label: "Italic",
        type: "boolean",
      },
      {
        name: "text",
        label: "Text",
        type: "string",
        list: true,
      },
    ],
  },
];

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
          label: "Title",
          name: "title",
          type: "string",
        },
        {
          label: "Page Blocks",
          name: "blocks",
          type: "object",
          list: true,
          templates: [
            {
              label: "Content Area",
              name: "contentArea",
              fields: [
                {
                  label: "Content",
                  name: "content",
                  type: "rich-text",
                  templates: [],
                },
              ],
            },
            {
              label: "Hero Image",
              name: "heroImage",
              fields: [
                {
                  label: "Image",
                  name: "image",
                  type: "image",
                  templates: [],
                },
                {
                  label: "Image Style",
                  name: "imageStyle",
                  type: "object",
                  fields: [
                    {
                      label: "Filter",
                      name: "filter",
                      type: "string",
                      templates: [],
                    },
                    {
                      label: "Apply Theme Filter?",
                      name: "applyThemeFilter",
                      type: "boolean",
                      templates: [],
                    },
                    {
                      label: "Image Crop",
                      name: "crop",
                      type: "object",
                      fields: [
                        {
                          label: "Image Fit",
                          name: "fit",
                          type: "string",
                        },
                        {
                          label: "Image Position",
                          name: "position",
                          type: "string",
                        },
                      ],
                    },
                    {
                      label: "Image Size",
                      name: "size",
                      type: "object",
                      fields: [
                        {
                          label: "Height",
                          name: "height",
                          type: "number",
                          ui: {
                            validate: (val) => {
                              if (val < 0) {
                                return "N >= 0";
                              }
                            },
                          },
                        },
                        {
                          label: "Width",
                          name: "width",
                          type: "number",
                          ui: {
                            validate: (val) => {
                              if (val < 0) {
                                return "N >= 0";
                              }
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  label: "Content",
                  name: "content",
                  type: "rich-text",
                  templates: customTemplates,
                },
                {
                  label: "Content Style",
                  name: "contentStyle",
                  type: "object",
                  fields: [
                    {
                      label: "Content Color",
                      name: "color",
                      type: "string",
                      ui: {
                        component: "color",
                        colorFormat: "hex",
                      },
                    },
                    {
                      label: "Content Placement",
                      name: "placement",
                      type: "object",
                      fields: [
                        {
                          label: "Horizontal",
                          name: "horizontal",
                          type: "string",
                          options: [
                            {
                              value: "left",
                              label: "Left",
                            },
                            {
                              value: "center",
                              label: "Center",
                            },
                            {
                              value: "right",
                              label: "Right",
                            },
                          ],
                        },
                        {
                          label: "Vertical",
                          name: "vertical",
                          type: "string",
                          templates: [],
                          options: [
                            {
                              value: "top",
                              label: "Top",
                            },
                            {
                              value: "center",
                              label: "Center",
                            },
                            {
                              value: "bottom",
                              label: "Bottom",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: "Content Padding",
                      name: "padding",
                      type: "object",
                      fields: [
                        {
                          label: "Horizontal",
                          name: "horizontal",
                          type: "number",
                          ui: {
                            validate: (val) => {
                              if (val < 0) {
                                return "N >= 0";
                              }
                            },
                          },
                        },
                        {
                          label: "Vertical",
                          name: "vertical",
                          type: "number",
                          ui: {
                            validate: (val) => {
                              if (val < 0) {
                                return "N >= 0";
                              }
                            },
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
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
          type: "image",
          label: "Thumbnail Image",
          name: "thumbnail",
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
          templates: customTemplates,
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
