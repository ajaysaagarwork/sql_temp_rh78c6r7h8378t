// update-accused-nick-name.js

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const mysql = require('mysql2/promise');

// ─── Configuration ────────────────────────────────
const DB_CONFIG = {
    host: 'localhost',
    user: 'ajaysaagar',
    password: 'aass209c',
    database: 'crimeanalysisdashboardsystem',
};

async function GET() {
    const connection = await mysql.createConnection(DB_CONFIG);

    try {

        let num = 0;
        let data = new Set();

        const [results] = await connection.query('SELECT * FROM accused');

        for (const i of results) {
            if (data.has(i.district)) continue;
            console.log(i.district);
            data.add(i.district);
            num += 1;
        }

        console.log('Total :', num - 1);

    } catch (error) {
        console.log('ERROR : ', error);
    }

}

GET();
