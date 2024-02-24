// Definimos la función para obtener los pares clave-valor de un objeto
const obtenerClaveValor = (objeto) => {
    const claveValor = Object.entries(objeto);
    return claveValor;
  };
  
  // Definimos la función para obtener las claves de un objeto
  const obtenerClaves = (objeto) => {
    const claves = Object.keys(objeto);
    return claves;
  };
  
  // Definimos la función para obtener los valores de un objeto
  const obtenerValores = (objeto) => {
    const values = Object.values(objeto);
    return values;
  };
  
  // Definimos la función para copiar propiedades de un objeto a otro
  const copiarPropiedades = (objetoDestino, ...fuentes) => {
    return Object.assign(objetoDestino, ...fuentes);
  };
  
  // Definimos la función para definir una nueva propiedad en un objeto
  const definirPropiedad = (objeto, prop, descriptor) => {
    Object.defineProperty(objeto, prop, descriptor);
  };
  
  const objetoPersona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    genero: "masculino",
    direccion: {
      calle: "Calle Principal",
      numero: 123,
      ciudad: "Ciudad",
      pais: "País",
    },
  };
  
  // Muestra el objeto sin formatear
  console.log("\nClave-Valor sin formatear: ", objetoPersona);
  
  console.log("\n-------------------------------------------------------------");
  
  // Utiliza obtenerClaveValor para mostrar pares clave-valor
  console.log("\nClave-Valor:");
  const arrayClaveValorObjeto = obtenerClaveValor(objetoPersona);
  console.log("[");
  arrayClaveValorObjeto.forEach((value) => {
    console.log(" ", value);
  });
  console.log("]");
  
  console.log("\n-------------------------------------------------------------");
  
  // Utiliza obtenerClaves para mostrar las claves del objeto
  console.log("\nClaves:");
  const arrayClavesObjeto = obtenerClaves(objetoPersona);
  console.log("[");
  arrayClavesObjeto.forEach((value) => {
    console.log(" ", value);
  });
  console.log("]");
  
  console.log("\n-------------------------------------------------------------");
  
  // Utiliza obtenerValores para mostrar los valores del objeto
  console.log("\nValores:");
  const arrayValoresObjeto = obtenerValores(objetoPersona);
  console.log("[");
  arrayValoresObjeto.forEach((value) => {
    console.log(" ", value);
  });
  console.log("]");
  
  console.log("\n-------------------------------------------------------------");
  
  const objetoDestino = {
    numeroHorasTrabajadas: 40,
  };
  
  // Copiamos las propiedades del objeto miObjeto al objeto destino
  copiarPropiedades(objetoDestino, objetoPersona);
  
  console.log("\nObjeto destino después de copiar propiedades:", objetoDestino);
  
  console.log("\n-------------------------------------------------------------");
  
  // Definimos una nueva propiedad en el objeto destino
  definirPropiedad(objetoPersona, "nuevaPropiedad", {
    value: "Hola, soy una nueva propiedad",
    writable: true,
    enumerable: true,
    configurable: true,
  });
  
  console.log(
    "\nObjeto persona después de definir una nueva propiedad:",
    objetoPersona
  );
  