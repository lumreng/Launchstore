const { Pool } = require("pg");

module.exports = new Pool({
    user: "postgres",
    password: "lumera78",
    host: "localhost",
    port: 5432,
    database: "launchstoredb"
});