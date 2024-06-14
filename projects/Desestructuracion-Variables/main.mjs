const persona1 = { nombre: "Juan", edad: 30 };

const obtenerNombreYEdad = (objeto) => {
  const { nombre, edad } = objeto;
  console.log(`Nombre: ${nombre}, Edad: ${edad}\n`);
};

obtenerNombreYEdad(persona1);

const persona2 = { nombre: "Pedro", edad: 40 };

const obtenerPersona = () => {
  const { nombre, edad } = persona2;

  return { nombre, edad };
};

const { nombre, edad } = obtenerPersona();

console.log(`Nombre: ${nombre}, Edad: ${edad}\n`);

let configuracionVisual = { color: "rojo", size: "grande" };

const obtenerConfiguracion = (config) => {
  const { color = "azul", size = "pequeño", forma = "redondo" } = config;
  console.log(`Color: ${color}, Size: ${size}, Forma: ${forma}\n`);
};

obtenerConfiguracion(configuracionVisual);

let personaConDireccion = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle Principal",
    ciudad: "Ciudad Principal",
  },
};

const obtenerDireccion = (objeto) => {
  const {
    nombre,
    edad,
    direccion: { calle, ciudad },
  } = objeto;

  console.log(
    `Nombre: ${nombre}, Edad: ${edad}, Calle: ${calle}, Ciudad: ${ciudad}\n`
  );
};

obtenerDireccion(personaConDireccion);

const imprimirNombreYEdad = (objeto) => {
  const { nombre = "Anónimo", edad = 0 } = objeto;

  console.log(`Nombre: ${nombre}, Edad: ${edad}\n`);
};

imprimirNombreYEdad({ nombre: "Juan" });

let numeros = [1, 2, 3, 4, 5];

const obtenerNumeros = (arr) => {
  const [primerNumero, segundoNumero, ...restoNumeros] = arr;

  console.log(
    `PrimerNumero: ${primerNumero}, SegundoNumero: ${segundoNumero}, RestoNumeros: ${restoNumeros}`
  );
};

obtenerNumeros(numeros);
