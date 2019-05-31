const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root', //user por defecto
    password: 'lima',
    database: 'irso_2019',
    multipleStatements: true
});

//Verifico si me conecte correctamente a la base de datos
mysqlConnection.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('base de datos conectado');
    }
});

module.exports = mysqlConnection;