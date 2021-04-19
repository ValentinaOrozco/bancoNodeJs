const AccountService = module.exports
const AccountRepository = require ('../repositories/AccountsRepository')
const CustomerRepository = require ('../repositories/CustomerRepository')

//listar cuentas de un cliente
AccountService.listAccountByCustomer = async (customerId) => {
    //validar que el cliente exista
    const customerFound = await CustomerRepository.findById(customerId)

    if (customerFound.length === 0) {
        throw new Error ('Costumer does not exist')
    }

    return AccountRepository.listAccountsByCustomer(customerId)
}

//crear cuenta, siempre y cuando el cliente exista y no tenga más de 3 cuentas
AccountService.create = async (account) => {
    //validar existencia de cliente
    const customerFound = await CustomerRepository.findById(account.customerid)
    //si es =0 no exiets un cliente con esa cédula
    if (customerFound.length === 0) {
        throw new Error ('Customer does not exist')
    }
    //consultando cuentas del cliente
    const accountsByCustomer = await AccountRepository.listAccountsByCustomer(account.customerid)

    //verifinacndo que no tengo más de 3
    if (accountsByCustomer.length >= 3) {
        throw new Error ('A customer cannot have more than 3 accounts')
    }

    account.openedat = new Date();//colocando fecha de apertura
    account.amount = 0; //colocando el saldo inical
    await AccountRepository.create(account)
}

//Eliminar una cuenta, sólo si no tiene saldo
AccountService.delete = async (idAccount) => {
    /*consultar cuentas, se usa el await porque 
    hay que esperar el resultado para continuar*/
    const accounts = await AccountRepository.findById(idAccount)
    //si el la lista es > 0 es porque tiene cuentas
    //es necesario enviar una exception
    if (accounts.length === 0) {
        throw new Error ('This account does not exist')
    }

    if (accounts[0].amount !== 0) {
        throw new Error ('You cannot eliminate this account')
    }
    //se elimina el cliente
    await AccountRepository.delete(idAccount)
}

AccountService.removeAmountAccount = async (idAccount,amount) => {
    const account = await AccountRepository.findById(idAccount)
    //si el la lista es > 0 es porque tiene cuentas
    //es necesario enviar una exception
    if (account.length === 0) {
        throw new Error ('This account does not exist')
    }

    if (amount > account[0].amount) {
        throw new Error ('insufficient balance')
    }

    account[0].amount = account[0].amount - amount;

    await AccountRepository.edit(account[0].id, account[0])

}

AccountService.addAmountAccount = async (idAccount,amount) => {
    const account = await AccountRepository.findById(idAccount)
    //si el la lista es > 0 es porque tiene cuentas
    //es necesario enviar una exception
    if (account.length === 0) {
        throw new Error ('This account does not exist')
    }

    // No supe como sumar en javascript profe, que pena en todo caso D:
    var num1 = account[0].amount;
    var num2 = amount;
    var suma = num1 + num2;
    account[0].amount = suma;

    await AccountRepository.edit(account[0].id, account[0])

}



