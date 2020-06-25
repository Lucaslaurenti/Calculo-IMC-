var express = require('express');
var router = express.Router();

const ImcController = require('../controller/imc-controller');
const imcController = new ImcController();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/imc',imcController.listar());
router.post('/imc',imcController.salvar());

module.exports = router;
