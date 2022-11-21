export const cleanupStyle = (object) => {
  var style = structuredClone(object);
  delete style?.__typename;
  for (const property in style) {
    delete style?.[property]?.__typename;
  }
  return style;
};
