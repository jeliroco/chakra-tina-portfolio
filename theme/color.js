export const themeColors = {
  neutral: {
    100: "#E1E1E1",
    200: "#C8C8C8",
    300: "#AFAFAF",
    400: "#969696",
    500: "#7D7D7D",
    600: "#646464",
    700: "#4B4B4B",
    800: "#323232",
    900: "#191919",
  },
};

export const colors = [
  "neutral",
  "red",
  "orange",
  "yellow",
  "green",
  "cyan",
  "teal",
  "blue",
  "purple",
  "pink",
];

export function invertColor(hex) {
  if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
  }
  // invert color components
  var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
      g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
      b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}