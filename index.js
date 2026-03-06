// crea un servidor express basico      
// carge las variables desde el archivo .env

const unusedVar = 42;

const express = require('express');
// cargue las variables desde el archivo .env
require('dotenv').config();
const app = express();
// agrega logica a esta variable port para que use la variable de entorno
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Mibancov3');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
}

module.exports = app;
