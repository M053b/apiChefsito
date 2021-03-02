const { Router } = require('express');
const router = Router();

//Variante
//const express = require(express);
//const router = express.Router();

//Texto plano
router.get('/', (req,res) => {
    res.send('Ruta root funcional');
});
//Json
router.get('/john', (req,res) => {
    res.json({"name":"John Doe"});
});

module.exports = router;