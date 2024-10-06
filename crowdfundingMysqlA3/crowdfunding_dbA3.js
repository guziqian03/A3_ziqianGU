const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Guziqian030121',
  database: 'crowdfunding_db'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to the database!');
});

// Add your database interaction code here

connection.end();