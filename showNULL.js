const mysql = require('mysql2/promise');

async function getRowsWithNullStation() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'ajaysaagar',
        password: 'aass209c',
        database: 'crimeanalysisdashboardsystem'
    });

    try {
        const [rows] = await connection.execute(`
      SELECT r.id, r.Police_Station
      FROM rawtable r
      LEFT JOIN child_stations c ON r.Police_Station = c.child_station_name
      WHERE c.id IS NULL
    `);

        console.log('Rows with no matching child_station (station_id=NULL):');
        rows.forEach(row => {
            console.log(`id: ${row.id}, Police_Station: ${row.Police_Station}`);
        });

    } catch (err) {
        console.error('Error fetching rows with NULL station:', err);
    } finally {
        await connection.end();
    }
}

getRowsWithNullStation();
