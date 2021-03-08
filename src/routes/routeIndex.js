const { Router } = require('express');
const router = Router();

const juegos = require('./data.json')

//Variante
//const express = require(express);
//const router = express.Router();

//Rutas
router.get('/', (req,res) => {
    res.json(juegos);
});

//get con parametro
router.get('/:id', (req,res) => {
    //const id = req.params.id;
    const {id} = req.params;
    juegos.forEach(juego =>{
        if(juego.id == id){
            res.json(juego);
        }
    });
});

router.post('/', (req,res) => {
    //Guardado de cuerpo de request
    const {title, version, genre} = req.body;
    console.log(req.body);
    
    //Validacion de existencia de datos
    if(title && version && genre){
        //Genera id para entrada mas reciente
        const id = juegos.length + 1;
        const newJuego = {...req.body, id};
        //console.log(newJuego);
        juegos.push(newJuego);
        res.status(200).json(juegos);
    } else {
        res.status(500).json({error:'Mal formato !title && version && genre!'});
    }    
});

/*
//Texto plano
router.get('/', (req,res) => {
    res.send('Ruta root funcional');
});

//Json
router.get('/john', (req,res) => {
     const data = {
        "name":"John Doe",
        "id":"1234"
    };
    res.json({"name":"John Doe"});
});
*/
module.exports = router;