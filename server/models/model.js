// models/db.js
const sql = require('mssql');

const dbConfig = {
    user: 'dbproject',
    password: '1234',
    server: 'DESKTOP-OCDCQJ1\\SQLEXPRESS', 
    database: 'dbmsproject',
    options: {
      encrypt: true, 
      trustServerCertificate: true, 
    }
  };


async function connectToDatabase() {
    try {
        await sql.connect(dbConfig);
        console.log('Connected to SQL Server');
    } catch (err) {
        console.error('SQL connection error:', err);
        throw err;
    }
}

module.exports = {
    connectToDatabase,
    sql
};
