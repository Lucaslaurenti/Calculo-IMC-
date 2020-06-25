const ImcDAO = require('../dao/imc-dao');
const imcDAO = new ImcDAO();

class ImcController{
    listar(){
        return function(req,res){
            imcDAO.listar()
            .then(resultados => {
                res.render('imc',{resultados : resultados});
            }).catch(erro => {
                req.flash('error',erro);
                res.redirect('/imc');
            });
        }
    }

    salvar(){
        return function(req,res){
   
            let nome =  req.body.nome;
            let peso  =  req.body.peso.replace(/,/, '.');
            let altura  =  req.body.altura.replace(/,/, '.');
            let imc  =  (peso / (altura * altura));
            let classificacao = '';

            if(imc < 18.5)
                classificacao = 'MAGREZA';
            else if(imc < 25)
                classificacao = 'NORMAL';
            else if(imc < 30)
                classificacao = 'SOBREPESO';
            else if(imc < 40)
                classificacao = 'OBESIDADE';
            else
                classificacao = 'OBESIDADE GRAVE';

            imcDAO.salvar(nome,peso,altura,imc,classificacao)
            .then(() => {
                req.flash('success',`Olá, ${nome}. Seu IMC é ${imc} - ${classificacao}`);
                res.redirect('/imc');
            }).catch(erro => {
                req.flash('error', erro);
                res.redirect('/imc');
            });
        }
    }
}

module.exports = ImcController;