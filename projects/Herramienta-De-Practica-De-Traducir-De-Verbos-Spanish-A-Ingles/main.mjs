// const readline = require("readline");
import readline from "readline";
import { COLORES_TEXTOS_CONSOLA } from "../../utils/Estilos-Consola.mjs";
import { CONJUGACIONES_INGLES_SPANISH } from "../../utils/Conjugaciones-Ingles-Spanish.mjs";

// Creamos una interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin, // Usamos la entrada estándar (stdin)
  output: process.stdout, // Usamos la salida estándar (stdout)
});

// Array para almacenar los resultados de las verificaciones
const resultadosVerificacion = [];

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

const arrayAleatorioVerbosSpanishEnglish = generarArrayAleatorio(
  CONJUGACIONES_INGLES_SPANISH
);

// Función para hacer una pregunta y manejar errores
function preguntaAsync(pregunta) {
  return new Promise((resolve, reject) => {
    rl.question(pregunta, (respuesta) => {
      if (respuesta.trim() !== "") {
        resolve(respuesta.trim());
      } else {
        console.log(
          "La respuesta no puede estar vacía. Por favor, inténtelo de nuevo."
        );
        preguntaAsync(pregunta).then(resolve).catch(reject); // Pregunta nuevamente
      }
    });
  });
}

// Función para realizar una pregunta
function hacerPregunta(indice) {
  const elemento = arrayAleatorioVerbosSpanishEnglish[indice];
  console.log(
    `\nVerbo en español: ${
      COLORES_TEXTOS_CONSOLA.azul
    }${elemento.verboEspanol.toUpperCase()} ${COLORES_TEXTOS_CONSOLA.reset}`
  );

  return new Promise(async (resolve, reject) => {
    try {
      const traduccionVerboIngles = await preguntaAsync(
        "Traducción del verbo a ingles: "
      );

      resultadosVerificacion.push({
        verboSpanish: elemento.verboEspanol,
        traduccionVerboEnglishCorrecta: elemento.formasVerbalesIngles.verbo,
        traduccionVerboEnglishUsuario: traduccionVerboIngles,
      });

      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

// Función para iterar sobre los verbos y hacer preguntas
async function iterarVerbos() {
  console.log("Verbos Español a Ingles");
  for (let i = 0; i < arrayAleatorioVerbosSpanishEnglish.length; i++) {
    try {
      await hacerPregunta(i); // Esperar a que se complete la pregunta antes de pasar al siguiente verbo
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  rl.close(); // Cerrar la interfaz de lectura cuando se completan todas las preguntas

  // Verificar respuestas y mostrar resultados
  console.log(
    `\n${COLORES_TEXTOS_CONSOLA.magenta}Resultados de la verificación:${COLORES_TEXTOS_CONSOLA.reset}`
  );
  resultadosVerificacion.forEach((resultado) => {
    console.log(
      `${COLORES_TEXTOS_CONSOLA.azul}Verbo en español: ${resultado.verboSpanish}${COLORES_TEXTOS_CONSOLA.reset}`
    );

    // Traducción
    if (
      resultado.traduccionVerboEnglishUsuario ===
      resultado.traduccionVerboEnglishCorrecta
    ) {
      console.log(
        `Traducción : ${COLORES_TEXTOS_CONSOLA.verde}${resultado.traduccionVerboEnglishUsuario}${COLORES_TEXTOS_CONSOLA.reset} (Correcta)`
      );
    } else {
      console.log(
        `Traducción : ${COLORES_TEXTOS_CONSOLA.rojo}${resultado.traduccionVerboEnglishUsuario}${COLORES_TEXTOS_CONSOLA.reset} (Incorrecta, es "${COLORES_TEXTOS_CONSOLA.amarillo}${resultado.traduccionVerboEnglishCorrecta}${COLORES_TEXTOS_CONSOLA.reset}")`
      );
    }

    console.log("\n---");
  });
}

// Llamar a la función para comenzar el proceso
iterarVerbos();
