function generarArrayAleatorio(array) {
  // Creamos una copia del array
  const arrayAleatorio = array.slice();

  for (let i = arrayAleatorio.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayAleatorio[i], arrayAleatorio[j]] = [
      arrayAleatorio[j],
      arrayAleatorio[i],
    ];
  }

  return arrayAleatorio;
}

const intsArray = [1, 2, 3, 4, 5];

const objetosArray = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Carlos", edad: 28 },
];

const stringsArray = ["manzana", "banana", "cereza", "dátil", "uva"];

const floatsArray = [3.14, 1.618, 2.718, 0.577, 1.414];

const intsAleatorios = generarArrayAleatorio(intsArray);
const objetosAleatorios = generarArrayAleatorio(objetosArray);
const stringsAleatorias = generarArrayAleatorio(stringsArray);
const floatsAleatorios = generarArrayAleatorio(floatsArray);

console.log("Array de int:", intsArray);
console.log("Nuevo array de int con ordenación aleatoria:", intsAleatorios);

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
