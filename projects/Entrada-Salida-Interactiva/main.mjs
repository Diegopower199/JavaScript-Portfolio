// Importamos el módulo readline de Node.js

// const readline = require("readline");
import readline from "readline";

// Creamos una interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin, // Usamos la entrada estándar (stdin)
  output: process.stdout, // Usamos la salida estándar (stdout)
});

// Preguntamos al usuario y esperamos por su respuesta
rl.question("Por favor ingrese el primer valor: ", (respuesta1) => {
  // Aquí puedes manejar la primera respuesta
  console.log(`Primer valor ingresado: ${respuesta1}`);

  rl.question("Por favor ingrese el segundo valor: ", (respuesta2) => {
    // Aquí puedes manejar la segunda respuesta
    console.log(`Segundo valor ingresado: ${respuesta2}`);

    // Cierras la interfaz de lectura después de haber obtenido ambos valores
    rl.close();
  });
});
