Para crear el proyecto desde 0 hay que seguir estos pasos:

1. Iniciar el proyecto: `npm init -y`

2. Instalar esto: `- npm install express cors body-parser dotenv nodemailer`

3. Iniciar el servidor: `node server.js`


## Ejecutar el proyecto ⚙️

Antes de ejecutarlo, asegúrate de tener las dependencias instaladas con el comando `npm install`.

```
npm run dev
```

Despues en Postman debemos hacer los siguientes pasos:

1. Nos creamos una peticion

2. El tipo de metodo pones "POST"

3. Copiamos la siguiente url: `http://localhost:3001/send-email`

4. Hacemos click en la opcion "Body" abajo de donde ponemos la URL, hacemos click en raw y ponemos "JSON

5. Le pasamos un JSON con dos campos to y verificationCode. Esto es porque nos falta el front-end

```
{
    "to": "example@gmail.com",
    "verificationCode": "123456"
}
```

6. Hacemos click en Send

7. Comprobamos que el mensaje devuelta en el body sea "Mensaje enviado" y si es asi esta correcto
