const CustomerService = module.exports
const CustomerRepository = require('../repositories/CustomerRepository')
const AccountRepository = require('../repositories/AccountsRepository')

//Crear clientes, asegurándose que no exista ya
CustomerService.create = async (customer) => {
    //buscamos el cliente por id para verificar existencia
    const customerFound = await CustomerRepository.findById(customer.id)

    //si el tamaño de la lista es mayor que cero es porque el cliente existe
    if(customerFound.length > 0) {
        throw new Error('customer already exists')
    }

    //si no es así, se crea el cliente
    await CustomerRepository.create(customer)
}

//Editar cliente, solo si éste existe
CustomerService.edit = async (id, customer) => {
    //buscar el cliente para verfificar existencia
    const customerFound = await CustomerRepository.findById(id)

    //si el tamaño de la lista de resultados es = 0, entonces no existe esa cédula en la BD
    if(customerFound.length === 0) {
        throw new Error('customer does not exist')
    }

    //se actualiza el cliente
    await CustomerRepository.edit(id, customer)
}

//Eliminar un cliente, sólo si no tiene cuentas asociadas
CustomerService.delete = async (idCustomer) => {
    /*consultar cuentas, se usa el await porque 
    hay que esperar el resultado para continuar*/
    const customerAccounts = await AccountRepository.listAccountsByCustomer(idCustomer)
    //si el la llista es > 0 es porque tiene cuentas
    //es necesario enviar una exception
    if(customerAccounts.length > 0) {
        throw new Error ('Customers with associated accounts cannot be eliminated')
    }

    //se elimina el cliente
    await CustomerRepository.delete(idCustomer)
}

//Buscar cliente
CustomerService.findCustomer = async(idCustomer) => {
    const customers = await CustomerRepository.findById(idCustomer)

    if (customers.length === 0) return undefined;

    return customers[0];
}


