const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const app = express();

// Middleware para analizar el cuerpo de las solicitudes POST
app.use(bodyParser.json());

// Configurar CORS
app.use(cors());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.TRANSPORTER_USER,
    pass: process.env.TRANSPORTER_PASSWORD,
  },
});

transporter
  .verify()
  .then(() => console.log("Listo para enviar correo electronico"));

app.post("/send-email", async (req, res) => {
  try {
    const { body } = req;

    const subject = body.subject;
    const content = `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>Código de Verificación</h2>
        <p>Estimado Usuario,</p>
        <p>Aquí tienes tu código de verificación:</p>
        <h1 style="font-size: 2em; background-color: #f0f0f0; padding: 10px; border-radius: 5px;">${body.verificationCode}</h1>
        <p>Por favor, utiliza este código para completar tu proceso de verificación.</p>
        <p>Gracias,<br>Equipo de Soporte</p>
      </div>
    `;

    const info = await transporter.sendMail({
      from: "TechSoluciones Informáticas S.L <soporte@techsoluciones.com>",
      to: ["diegogs2323@gmail.com", "dgonzalezs2@alumnos.nebrija.es"],
      subject: subject,
      html: content,
    });

    if (!info.error) {
      res.send("Mensaje enviado");
    } else {
      console.log(info.error);
      res.send(info.error);
    }
    // res.send("NICE");
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(3001, () => console.log("Escuchando desde http://localhost:3001"));
