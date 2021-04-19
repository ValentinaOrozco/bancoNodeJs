const knex = require('knex');

module.exports = knex({
    client: 'pg', //indica que se usará postgress como motor  de BD
    connection: 'postgres://postgres:1234@localhost:5432/mibanco2', //cadena de conexión
    pool: { min: 1, max: 2 },
    acquireConnectionTimeout: 5000,
});