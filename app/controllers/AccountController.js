const AccountController = module.exports
//importando el módulo de la lógica
const AccountService = require('../services/AccountService')

AccountController.listAccountsByCustomer = async (req, res, next) => {
    const params = req.params;

    try {
        const response = await AccountService.listAccountByCustomer(params.id)

        //enviando respuesta al cliente que retorna la lógica
        res.send(response)
        //------------------------------
    }catch(error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.createAccount = async (req, res, next) => {
    const body = req.body;

    try {
        await AccountService.create(body)
        res.send({message: 'account created'})
        //-------------------------------------------
    } catch(error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.delete = async (req, res, next) => {
    //extrayendo los pathParams de la petición
    const params = req.params;

    try {
        //se supone que el id llega así /customers/:id (acá no es con {} sino con : )
        //await (ya que el método es async) para esperar a que termine.
        await AccountService.delete(params.id)

        //enviando respuesta al cliente (postman por ejemplo)
        res.send({message: 'account deleted'})
        //------------------------------------------
    } catch(error) {//manejando las excepciones
        console.log({error});
        //retornando al cliente (postman por ejemplo) el error
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.removeAmountAccount = async (req, res, next) => {
    const params = req.params;
    //extrayendo el body de la petición
    const body = req.body;

    try {
        await AccountService.removeAmountAccount(params.id, params.amount)

        res.send({message: 'account updated'})
        //-------------------------------------------
    }catch(error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}

AccountController.addAmountAccount = async (req, res, next) => {
    const params = req.params;
    //extrayendo el body de la petición
    const body = req.body;

    try {
        await AccountService.addAmountAccount(params.id, params.amount)

        res.send({message: 'account updated'})
        //-------------------------------------------
    }catch(error) {
        console.log({error});
        res.status(500).send({error: error.message}).end();
        next(error);
    }
}
//eliminar cliente
//editar cliente
//listar cuentas de clientes
//crear cuenta