// const readline = require("readline");
import readline from "readline";

// Creamos una interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Preguntamos al usuario y esperamos por su respuesta
rl.question("Por favor ingrese el primer valor: ", (respuesta1) => {
  // Aquí se maneja el primer input
  console.log(`Primer valor ingresado: ${respuesta1}`);

  rl.question("Por favor ingrese el segundo valor: ", (respuesta2) => {
    // Aquí se maneja el segundo input
    console.log(`Segundo valor ingresado: ${respuesta2}`);

    // Se cierra la interfaz de lectura despues de introducir y leer los dos valores que el usuario ha puesto
    rl.close();
  });
});
