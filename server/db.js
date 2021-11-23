const Pool = require('pg').Pool
const pool = new Pool({
    user: "docker",
    password: '123456',
    host: 'db',
    // port: 4321,
    database: 'docker'
})



module.exports = pool