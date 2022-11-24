import { styleField, responsiveStyleFields } from "./style";

export const customTemplates = [
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
        name: "texts",
        label: "Texts",
        type: "string",
        list: true,
      },
    ],
  },
  {
    name: "image",
    label: "Image",
    type: "object",
    fields: [
      {
        name: "url",
        label: "URL",
        type: "image",
      },
      {
        name: "caption",
        label: "Caption",
        type: "string",
        ui: {
          component: "textarea",
        },
      },
    ],
  },
  {
    name: "video",
    label: "Video",
    type: "object",
    fields: [
      {
        name: "src",
        label: "URL",
        type: "string",
      },
      {
        name: "description",
        label: "Description",
        type: "object",
        fields: [
          {
            name: "text",
            label: "Text",
            type: "string",
          },
          styleField,
        ],
      },
      {
        name: "link",
        label: "Link",
        type: "object",
        fields: [
          {
            name: "text",
            label: "Text",
            type: "string",
          },
          {
            name: "url",
            label: "URL",
            type: "string",
          },
        ],
      },
    ],
  },
  {
    name: "textArea",
    label: "TextArea",
    type: "object",
    fields: [
      {
        name: "text",
        label: "Text",
        type: "string",
        ui: {
          component: "textarea",
        },
      },
      styleField,
    ],
  },
];

export const Grid = {
  name: "grid",
  label: "Grid",
  type: "object",
  fields: [
    {
      name: "style",
      label: "Style",
      type: "object",
      fields: [
        {
          name: "gridTemplateColumns",
          label: "Grid Template Columns",
          type: "object",
          fields: responsiveStyleFields,
        },
        {
          name: "gridTemplateRows",
          label: "Grid Template Rows",
          type: "object",
          fields: responsiveStyleFields,
        },
        {
          name: "numItems",
          label: "Number Of Items",
          type: "object",
          fields: responsiveStyleFields,
        },
      ],
    },
    {
      name: "gridItems",
      label: "Grid Items",
      type: "object",
      list: true,
      templates: customTemplates,
    },
  ],
};
