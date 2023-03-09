const mariadb = require('mariadb');
const pool = mariadb.createPool({host: "localhost",
    user: "admin",
    database: "test",
    connectionLimit: 10,
    password: "password"
});


module.exports = {pool}
