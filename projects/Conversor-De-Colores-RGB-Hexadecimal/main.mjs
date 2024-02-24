// Convierte los componentes RGB a hexadecimal
const convertRGBToHex = (red, green, blue) => {
    let redHex = red.toString(16).padStart(2, "0");
    let greenHex = green.toString(16).padStart(2, "0");
    let blueHex = blue.toString(16).padStart(2, "0");
  
    // Devuelve el valor hexadecimal completo
    return `#${redHex}${greenHex}${blueHex}`;
  };
  
  // Convierte los componentes hexadecimal a RGB
  const convertHexToRGB = (hexColor) => {
    // Elimina el caracter '#' del comienzo si está presente
    hexColor = hexColor.replace(/^#/, "");
  
    // Parsea los valores hexadecimales de R, G y B
    let red = parseInt(hexColor.substring(0, 2), 16);
    let green = parseInt(hexColor.substring(2, 4), 16);
    let blue = parseInt(hexColor.substring(4, 6), 16);
  
    return [red, green, blue];
  };
  
  // Ejemplo de uso para convertir hexadecimal a RGB
  let hexColor = "#ff0000";
  let rgbArray = convertHexToRGB(hexColor);
  console.log("RGB:", rgbArray);
  
  // Ejemplo de uso para convertir RGB a hexadecimal
  let red = 255;
  let green = 0;
  let blue = 0;
  let hexadecimalColor = convertRGBToHex(red, green, blue);
  console.log("Hexadecimal:", hexadecimalColor);
  