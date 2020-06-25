const db = require('./db');
class ImcDAO{
    constructor(){
        this.db = db;
    }

    listar(){
        return new Promise((resolve,reject) => {
            this.db.query('SELECT * FROM imc',[],(erro,resultados) => {
                if(erro)    return reject('Erro ao listar os IMCs: ' + erro);
                return resolve(resultados);
            });
        });
    }

    salvar(nome,peso,altura,imc,classificacao){
        return new Promise((resolve,reject) => {
            this.db.query('INSERT INTO imc(nome,peso,altura,imc,classificacao) VALUES(?,?,?,?,?)',
            [
                nome,
                peso,
                altura,
                imc,
                classificacao
            ],
            (erro) => {
                if(erro)    return reject('Erro ao salvar o IMC: ' + erro);
                return resolve();
            });
        });
    }
}

module.exports = ImcDAO;