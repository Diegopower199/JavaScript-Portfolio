// Convierte los componentes RGB a hexadecimal
const convertRGBToHex = (red, green, blue) => {
  let redHex = red.toString(16).padStart(2, "0");
  let greenHex = green.toString(16).padStart(2, "0");
  let blueHex = blue.toString(16).padStart(2, "0");

  let hexColor = `#${redHex}${greenHex}${blueHex}`;

  return hexColor;
};

// Convierte los componentes hexadecimal a RGB
const convertHexToRGB = (hexColor) => {
  hexColor = hexColor.replace(/^#/, "");

  let red = parseInt(hexColor.substring(0, 2), 16);
  let green = parseInt(hexColor.substring(2, 4), 16);
  let blue = parseInt(hexColor.substring(4, 6), 16);

  return [red, green, blue];
};

let hexColor = "#ff0000";
let rgbArray = convertHexToRGB(hexColor);
console.log("RGB:", rgbArray);

let red = 255;
let green = 0;
let blue = 0;
let hexadecimalColor = convertRGBToHex(red, green, blue);
console.log("Hexadecimal:", hexadecimalColor);
