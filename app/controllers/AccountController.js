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


//eliminar cliente
//editar cliente
//listar cuentas de clientes
//crear cuenta