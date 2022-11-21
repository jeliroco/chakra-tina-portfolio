export const responsiveStyleFields = [
  {
    label: "Base",
    name: "base",
    type: "string",
  },
  {
    label: "SM",
    name: "sm",
    type: "string",
  },
  {
    label: "MD",
    name: "md",
    type: "string",
  },
  {
    label: "LG",
    name: "lg",
    type: "string",
  },
  {
    label: "XL",
    name: "xl",
    type: "string",
  },
];

export const styleField = {
  name: "style",
  label: "Style",
  type: "object",
  fields: [
    {
      label: "Height",
      name: "height",
      type: "object",
      fields: responsiveStyleFields,
    },
    {
      label: "Width",
      name: "width",
      type: "object",
      fields: responsiveStyleFields,
    },
    {
      label: "Padding",
      name: "padding",
      type: "object",
      fields: responsiveStyleFields,
    },
    {
      label: "Margin",
      name: "margin",
      type: "object",
      fields: responsiveStyleFields,
    },
    {
      label: "Display",
      name: "display",
      type: "object",
      fields: responsiveStyleFields,
    },
    {
      label: "Align Items",
      name: "alignItems",
      type: "object",
      fields: responsiveStyleFields,
    },
    {
      label: "JustifyContent",
      name: "justifyContent",
      type: "object",
      fields: responsiveStyleFields,
    },
    {
      label: "TextAlign",
      name: "textAlign",
      type: "object",
      fields: responsiveStyleFields,
    },
    {
      label: "Color",
      name: "color",
      type: "object",
      fields: responsiveStyleFields,
      ui: {
        component: "color",
        colorFormat: "hex",
      },
    },
    {
      label: "Background Color",
      name: "bg",
      type: "string",
      ui: {
        component: "color",
        colorFormat: "hex",
      },
    },
    {
      label: "Font Family",
      name: "fontFamily",
      type: "string",
    },
    {
      label: "Font Weight",
      name: "fontWeight",
      type: "object",
      fields: responsiveStyleFields,
    },
    {
      label: "Font Style",
      name: "fontStyle",
      type: "object",
      fields: responsiveStyleFields,
    },
    {
      label: "Text Decoration",
      name: "textDecoration",
      type: "object",
      fields: responsiveStyleFields,
    },
  ],
};