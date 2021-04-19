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




