const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors());

// Ruta de ejemplo en tu backend
app.get("/", (req, res) => {
  res.send("¡Hola desde el backend!");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});