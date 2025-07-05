const fs = require('fs');
const Papa = require('papaparse');

// Replace with your CSV file path
const filePath = './data.csv';

// Read the CSV file as text
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading CSV file:', err);
        return;
    }

    // Parse CSV using PapaParse
    const result = Papa.parse(data, {
        header: true,        // Set to false if no header row
        skipEmptyLines: true,
    });

    console.log('Parsed CSV Data:', result.data);
});
