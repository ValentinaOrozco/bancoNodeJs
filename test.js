//importando el repositorio
const ClienteRepository = require('./app/repositories/CustomerRepository')
const AccountRepository = require('./app/repositories/AccountsRepository')
const CustomerService = require('./app/services/CustomerService')
const AccountService = require('./app/services/AccountService')
console.log('probando...')

/*ClienteRepository.create({
    name:'Juan',
    lastname:'ferrer',
    id:'4321',
    email:'juan@mail.com'
}).then(console.log) //para que el programa espere a que la operación termine...*/

/*async function probandoElBuscar() {
    const cliente = await ClienteRepository.findById('4321')
    console.log(cliente)
}

probandoElBuscar().then(console.log('OK')) //para que el programa espere a que la petición se haga*/

// async, siempre que haya un await dentro de una función, la función debe llevar async
/*async function probandoElEditar() {
    //await es para que nodejs espere que termine la ejecución antes
    //de pasar a la siguiente instrucción
    await ClienteRepository.edit('4321',{
        name:'Jose',
        lastname:'perez',
    })
}

probandoElEditar().then(console.log('OK')) //para que el programa espere a que la operación termine*/

/*async function probandoElliminar(){
    await ClienteRepository.delete('4321')
}

probandoElliminar().then(console.log('OK'))*/

/*async function probandoListarCuentas(){
    const list = await AccountRepository.listAccountsByCustomer('4321')
    console.log(list)
}

probandoListarCuentas().then(console.log('OK'))*/

/*AccountRepository.create({
    id:'12345',
    amount:50,
    customerid:'4321',
    openedat:'2020/02/01'
}).then(console.log('OK'))*/

/*async function probandoElliminar(){
    await AccountRepository.delete('12345')
}

probandoElliminar().then(console.log('OK'))*/

/*sync function probandoElEditar() {
    //await es para que nodejs espere que termine la ejecución antes
    //de pasar a la siguiente instrucción
    await AccountRepository.edit('1234',{
        openedat:'2019/07/01'
    })
}

probandoElEditar().then(console.log('OK')) //para que el programa espere a que la operación termine*/

/*async function pruebaServiceCrearCliente() {
    await CustomerService.create({
        id: '43210',
        name: 'Juan',
        lastname: 'Perez',
        email: 'juan@mail.com'
    })
}

pruebaServiceCrearCliente().then(console.log('ok'))*/

/*async function pruebaEditarService() {
    await CustomerService.edit('5678',{
        name: 'Alfonso'
    })
}

pruebaEditarService().then(console.log('ok'))*/

/*async function pruebaEliminarService(){
    await CustomerService.delete('4321')
}

pruebaEliminarService().then(console.log('ok'))*/

/*async function pruebaBuscarService(){
    const  customer = await CustomerService.findCustomer('4321')
    console.log(customer)
}

pruebaBuscarService().then(console.log('ok'))*/

/*async function prueba() {
    const result = await AccountService.listAccountByCustomer('4321')
    console.log(result)
}

prueba().then(console.log('ok'))*/

/*async function probar() {
    const result = await AccountService.create({
        id:'0987655',
        customerid: '4321'
    })
    console.log(result)
}

probar().then(console.log('ok'))*/



