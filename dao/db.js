
const mysql = require('mysql');

const banco = 'prova';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: banco,
    multipleStatements: true
});

db.connect( (erro) => {
    if(erro){
        throw erro;
    }
    console.log("Conectado ao banco de dados [" + banco +"]");
});

global.db = db;

module.exports = db;


