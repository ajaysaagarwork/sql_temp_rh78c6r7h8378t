

const MYSQL = require('mysql2');

const connection = MYSQL.createConnection({
    user: "ajaysaagar",
    host: "localhost",
    password: "aass209c",
    port: 3306,
    database: "crimeanalysisdashboardsystem"
});

function QUERY(query) {
    connection.query(query, (err, results) => {
        if (err) {
            console.log("ERROR :", err);
        }
        // MAIN
        console.log(results);
    });
}

QUERY('DELETE FROM police_sdo');