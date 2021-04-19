const AccountRepository = module.exports
const DB = require('../config/database')

AccountRepository.create = (account) => {
    return DB('accounts').insert(account)
}

AccountRepository.delete = (account) => {
    return DB('accounts').where( { id: account }).del()
}

AccountRepository.edit = (id, account) => {
    return DB('accounts').where( { id: id }).update(account)
}

AccountRepository.listAccountsByCustomer = (customerId) => {
    return DB('accounts').where({customerid : customerId}).select('*')
}

AccountRepository.findById = (idCuenta) => {
    return DB('accounts').where({ id: idCuenta }).select('*')
}

