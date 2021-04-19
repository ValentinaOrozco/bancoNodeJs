const express = require('express');

const router = express.Router();

module.exports = router;

const CustomerController = module.exports
//importando el módulo de la lógica
const CustomerService = require('../services/CustomerService')

//Los parámetros req, res y next siempre son requeridos
//para el cprrecto funcionamiento del controlador,
//acá no va definido el path, se hace en otra parte.
CustomerController.delete = async (req, res, next) => {
    //extrayendo los pathParams de la petición
    const params = req.params;

    try {
        //se supone que el id llega así /customers/:id (acá no es con {} sino con : )
        //await (ya que el método es async) para esperar a que termine.
        await CustomerService.delete(params.id)

        //enviando respuesta al cliente (postman por ejemplo)
        res.send({message: 'customer deleted'})
        //------------------------------------------
    } catch(error) {//manejando las excepciones
        console.log({error});
        //retornando al cliente (postman por ejemplo) el error
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

//PUT /customers/:id Body: datos a editar
CustomerController.edit = async (req, res, next) => {
    const params = req.params;
    //extrayendo el body de la petición
    const body = req.body;

    try {
        await CustomerService.edit(params.id, body)

        res.send({message: 'customer updated'})
        //-------------------------------------------
    }catch(error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}