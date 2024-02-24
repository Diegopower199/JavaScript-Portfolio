import { COLORES_TEXTOS_CONSOLA } from "../../utils/Estilos-Consola.mjs";
import {
  REGEX_DATE_YYYYMMDD,
  REGEX_DATE_DDMMYYYY,
  REGEX_DATE_MMDDYYYY,
} from "../../utils/Regex-Patterns.mjs";

function validarFechaYYYYMMDD(fecha) {
  return fecha.match(REGEX_DATE_YYYYMMDD);
}

function validarFechaDDMMYYYY(fecha) {
  return fecha.match(REGEX_DATE_DDMMYYYY);
}

function validarFechaMMDDYYYY(fecha) {
  return fecha.match(REGEX_DATE_MMDDYYYY);
}

function formatearFechaYYYYMMDD(fecha) {
  const formatoConGuiones = fecha.includes("-");
  if (formatoConGuiones) {
    const [dia, mes, year] = fecha.split("-");
    return `${year}-${mes}-${dia}`;
  } else {
    const [dia, mes, year] = fecha.split("/");
    return `${year}/${mes}/${dia}`;
  }
}

function formatearFechaDDMMYYYY(fecha) {
  const formatoConGuiones = fecha.includes("-");
  if (formatoConGuiones) {
    const [year, mes, dia] = fecha.split("-");
    return `${dia}-${mes}-${year}`;
  } else {
    const [year, mes, dia] = fecha.split("/");
    return `${dia}/${mes}/${year}`;
  }
}

function formatearFechaMMDDYYYY(fecha) {
  const formatoConGuiones = fecha.includes("-");
  if (formatoConGuiones) {
    const [year, mes, dia] = fecha.split("-");
    return `${mes}-${dia}-${year}`;
  } else {
    const [year, mes, dia] = fecha.split("/");
    return `${mes}/${dia}/${year}`;
  }
}

console.log(COLORES_TEXTOS_CONSOLA.rojo + "Resultados para validar el formato YYYY-MM-DD:" + COLORES_TEXTOS_CONSOLA.reset);
console.log("Fecha '2024-02-21' valida:", validarFechaYYYYMMDD("2024-02-21") ? "true" : "false");
console.log("Fecha '2024/02/21' valida:", validarFechaYYYYMMDD("2024/02/21") ? "true" : "false");
console.log("Fecha '21-02-2024' valida:", validarFechaYYYYMMDD("21-02-2024") ? "true" : "false");
console.log("Fecha '2024-02-21' formateada:", formatearFechaYYYYMMDD("2024-02-21"));
console.log("Fecha '2024/02/21' formateada:", formatearFechaYYYYMMDD("2024/02/21"), "\n");


console.log(COLORES_TEXTOS_CONSOLA.verde + "\nResultados para validar el formato DD/MM/YYYY:" + COLORES_TEXTOS_CONSOLA.reset);
console.log("Fecha '21-02-2024' valida:", validarFechaDDMMYYYY("21-02-2024") ? "true" : "false");
console.log("Fecha '21/02/2024' valida:", validarFechaDDMMYYYY("21/02/2024") ? "true" : "false");
console.log("Fecha '2024-02-21' valida:", validarFechaDDMMYYYY("2024-02-21") ? "true" : "false");
console.log("Fecha '21-02-2024' formateada:", formatearFechaDDMMYYYY("21-02-2024"));
console.log("Fecha '21/02/2024' formateada:", formatearFechaDDMMYYYY("21-02-2024"), "\n");


console.log(COLORES_TEXTOS_CONSOLA.azul + "\nResultados para validar el formato MM/DD/YYYY:" + COLORES_TEXTOS_CONSOLA.reset);
console.log("Fecha '02-21-2024' valida:", validarFechaMMDDYYYY("02-21-2024") ? "true" : "false");
console.log("Fecha '02/21/2024' valida:", validarFechaMMDDYYYY("02/21/2024") ? "true" : "false");
console.log("Fecha '2024-02-21' valida:", validarFechaMMDDYYYY("2024-02-21") ? "true" : "false");
console.log("Fecha '02-21-2024' formateada:", formatearFechaMMDDYYYY("02-21-2024"));
console.log("Fecha '02/21/2024' formateada:", formatearFechaMMDDYYYY("02-21-2024"), "\n");