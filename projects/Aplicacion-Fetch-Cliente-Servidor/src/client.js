async function fetchData() {
  // URL del backend
  const backendURL = "http://localhost:3000"; // Cambia esto si tu backend está escuchando en un puerto diferente

  try {
    const response = await fetch(backendURL);
    if (!response.ok) {
      throw new Error("Error en la solicitud al backend");
    }
    const data = await response.text();
    console.log("Respuesta del backend:", data);
  } catch (error) {
    console.error("Error al hacer la solicitud al backend:", error);
  }
}

// Llamar a la función asíncrona para iniciar la solicitud
fetchData();
