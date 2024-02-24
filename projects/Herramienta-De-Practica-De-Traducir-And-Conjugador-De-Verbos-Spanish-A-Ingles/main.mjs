// const readline = require("readline");
import readline from "readline";
import { COLORES_TEXTOS_CONSOLA } from "../../utils/Estilos-Consola.mjs";

// Creamos una interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin, // Usamos la entrada estándar (stdin)
  output: process.stdout, // Usamos la salida estándar (stdout)
});

const verbosSpanishEnglish = [
  {
    verboEspanol: "ser/estar",
    formasVerbalesIngles: {
      verbo: "to be",
      presente: "am/are/is",
      pasadoSimple: "was/were",
      pasadoParticipio: "been",
    },
  },
  {
    verboEspanol: "tener",
    formasVerbalesIngles: {
      verbo: "have",
      presente: "have/has",
      pasadoSimple: "had",
      pasadoParticipio: "had",
    },
  },
  {
    verboEspanol: "ir",
    formasVerbalesIngles: {
      verbo: "go",
      presente: "go/goes",
      pasadoSimple: "went",
      pasadoParticipio: "gone",
    },
  },
];

// Array para almacenar los resultados de las verificaciones
const resultadosVerificacion = [];

console.log("Verbos Español a Ingles");

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
  const elemento = verbosSpanishEnglish[indice];
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
      const presente = await preguntaAsync("Presente del verbo en inglés: ");
      const pasado = await preguntaAsync("Pasado del verbo en inglés: ");
      const participio = await preguntaAsync(
        "Participio pasado del verbo en inglés: "
      );

      resultadosVerificacion.push({
        verboSpanish: elemento.verboEspanol,
        traduccionVerboEnglishCorrecta: elemento.formasVerbalesIngles.verbo,
        conjugacionPresenteCorrecto: elemento.formasVerbalesIngles.presente,
        conjugacionPasadoCorrecto: elemento.formasVerbalesIngles.pasadoSimple,
        conjugacionPastParticipioCorrecto:
          elemento.formasVerbalesIngles.pasadoParticipio,
        traduccionVerboEnglishUsuario: traduccionVerboIngles,
        conjugacionPresenteUsuario: presente,
        conjugacionPasadoUsuario: pasado,
        conjugacionPastParticipioUsuario: participio,
      });

      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

// Función para iterar sobre los verbos y hacer preguntas
async function iterarVerbos() {
  for (let i = 0; i < verbosSpanishEnglish.length; i++) {
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

    // Presente
    if (
      resultado.conjugacionPresenteUsuario ===
      resultado.conjugacionPresenteCorrecto
    ) {
      console.log(
        `Presente: ${COLORES_TEXTOS_CONSOLA.verde}${resultado.conjugacionPresenteUsuario}${COLORES_TEXTOS_CONSOLA.reset}[0m (Correcto)`
      );
    } else {
      console.log(
        `Presente: ${COLORES_TEXTOS_CONSOLA.rojo}${resultado.conjugacionPresenteUsuario}${COLORES_TEXTOS_CONSOLA.reset} (Incorrecto, es "${COLORES_TEXTOS_CONSOLA.amarillo}${resultado.conjugacionPresenteCorrecto}${COLORES_TEXTOS_CONSOLA.reset}")`
      );
    }

    // Pasado
    if (
      resultado.conjugacionPasadoUsuario === resultado.conjugacionPasadoCorrecto
    ) {
      console.log(
        `Pasado: ${COLORES_TEXTOS_CONSOLA.verde}${resultado.conjugacionPasadoUsuario}${COLORES_TEXTOS_CONSOLA.reset} (Correcto)`
      );
    } else {
      console.log(
        `Pasado: ${COLORES_TEXTOS_CONSOLA.rojo}${resultado.conjugacionPasadoUsuario}${COLORES_TEXTOS_CONSOLA.reset} (Incorrecto, es "${COLORES_TEXTOS_CONSOLA.amarillo}${resultado.conjugacionPasadoCorrecto}${COLORES_TEXTOS_CONSOLA.reset}")`
      );
    }

    // Participio
    if (
      resultado.conjugacionPastParticipioUsuario ===
      resultado.conjugacionPastParticipioCorrecto
    ) {
      console.log(
        `Participio: ${COLORES_TEXTOS_CONSOLA.verde}${resultado.conjugacionPastParticipioUsuario}${COLORES_TEXTOS_CONSOLA.reset} (Correcto)`
      );
    } else {
      console.log(
        `Participio: ${COLORES_TEXTOS_CONSOLA.rojo}${resultado.conjugacionPastParticipioUsuario}${COLORES_TEXTOS_CONSOLA.reset} (Incorrecto, es "${COLORES_TEXTOS_CONSOLA.amarillo}${resultado.conjugacionPastParticipioCorrecto}${COLORES_TEXTOS_CONSOLA.reset}")`
      );
    }

    console.log("\n---");
  });
}

// Llamar a la función para comenzar el proceso
iterarVerbos();
