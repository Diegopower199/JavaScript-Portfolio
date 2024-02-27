// Función para generar un nuevo array con ordenación aleatoria
function generarArrayAleatorio(array) {
  // Creamos una copia del array para no modificar el original
  const arrayAleatorio = array.slice();

  // Algoritmo de Fisher-Yates para mezclar el array
  for (let i = arrayAleatorio.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayAleatorio[i], arrayAleatorio[j]] = [
      arrayAleatorio[j],
      arrayAleatorio[i],
    ];
  }

  return arrayAleatorio;
}

// Array existente
const originalArray = [1, 2, 3, 4, 5];

// Array con objetos
const objetosArray = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Carlos", edad: 28 },
];

// Array con strings
const stringsArray = ["manzana", "banana", "cereza", "dátil", "uva"];

// Array con floats
const floatsArray = [3.14, 1.618, 2.718, 0.577, 1.414];

// Generar un nuevo array con ordenación aleatoria
const newArray = generarArrayAleatorio(originalArray);

// Aplicar el algoritmo de Fisher-Yates a cada array
const objetosAleatorios = generarArrayAleatorio(objetosArray);
const stringsAleatorias = generarArrayAleatorio(stringsArray);
const floatsAleatorios = generarArrayAleatorio(floatsArray);

// Mostrar el nuevo array
console.log("Array original:", originalArray);
console.log("Nuevo array con ordenación aleatoria:", newArray);

// Mostrar los resultados
console.log("\nArray original de objetos:", objetosArray);
console.log(
  "Nuevo array de objetos con ordenación aleatoria:",
  objetosAleatorios
);

console.log("\nArray original de strings:", stringsArray);
console.log(
  "Nuevo array de strings con ordenación aleatoria:",
  stringsAleatorias
);

console.log("\nArray original de floats:", floatsArray);
console.log(
  "Nuevo array de floats con ordenación aleatoria:",
  floatsAleatorios
);
