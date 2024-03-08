const axios = require("axios");

// import axios from 'axios';

// Definir una función asíncrona para envolver el código
async function fetchData() {
  // URL del backend
  const backendURL = 'http://localhost:3000'; // Cambia esto si tu backend está escuchando en un puerto diferente

  try {
    const response = await axios.get(backendURL);
    console.log('Respuesta del backend:', response.data);
  } catch (error) {
    console.error('Error al hacer la solicitud al backend:', error);
  }
}

// Llamar a la función asíncrona para iniciar la solicitud
fetchData();