

const mysql = require('mysql2');


const conn = mysql.createConnection({
    user: "ajaysaagar",
    password: "aass209c",
    port: 3306,
    host: "localhost",
    database: "crimeanalysisdashboardsystem"
});

conn.query(`
        SHOW TABLES
    `, (err, results) => {
    console.log(results);
});