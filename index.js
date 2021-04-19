const express = require('express'); //importando librería

const app = express(); //creando servidor
const routes = require('./app/controllers/routes') //definición de path inicial de los endpoints
app.use(express.json()) //configurado el servidor para envío y recepción de json

const PORT = 3000;

app.use('/banco', routes);

//corriendo el servidor
app.listen(PORT, () => {
    console.log('Escuchando puerto:', PORT);
});

