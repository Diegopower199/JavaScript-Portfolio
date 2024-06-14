const persona1 = { nombre: "María", edad: 25 };

const mostrarNombreYEdad = ({ nombre, edad }) => {
  console.log(`Nombre: ${nombre}, Edad: ${edad}\n`);
};

mostrarNombreYEdad(persona1);

const persona2 = { nombre: "Pedro", edad: 40 };

const obtenerPersona = () => {
  const { nombre, edad } = persona2;

  return { nombre, edad };
};

const datosPersona = obtenerPersona();

const { nombre, edad } = datosPersona;

console.log(`Nombre: ${nombre}, Edad: ${edad}\n`);

let configuracionVisual = { color: "rojo", size: "grande" };

const obtenerConfiguracion = ({
  color = "azul",
  size = "pequeño",
  forma = "redondo",
}) => {
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

const obtenerDireccion = ({ nombre, edad, direccion: { calle, ciudad } }) => {
  console.log(
    `Nombre: ${nombre}, Edad: ${edad}, Calle: ${calle}, Ciudad: ${ciudad}\n`
  );
};

obtenerDireccion(personaConDireccion);

const imprimirNombreYEdad = ({ nombre = "Anónimo", edad = 0 }) => {
  console.log(`Nombre: ${nombre}, Edad: ${edad}\n`);
};

imprimirNombreYEdad({ nombre: "Juan" });

let numeros = [1, 2, 3, 4, 5];

const obtenerNumeros = ([primerNumero, segundoNumero, ...restoNumeros]) => {
  console.log(
    `PrimerNumero: ${primerNumero}, SegundoNumero: ${segundoNumero}, RestoNumeros: ${restoNumeros}`
  );
};

obtenerNumeros(numeros);
