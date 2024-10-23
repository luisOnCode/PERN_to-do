const Pool = require("pg").Pool;

const pool = new Pool({
    user: "todouser",
    password: "todouser",
    host: "localhost",
    port: 5432,
    database: "pern_todo"
})

module.exports = pool;