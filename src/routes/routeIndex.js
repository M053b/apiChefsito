const { Router } = require('express');
const router = Router();

//Variante
//const express = require(express);
//const router = express.Router();

const juegos = require('./data.json');
console.log(juegos);
//Json
router.get('/', (req,res) => {
    res.json(juegos);
});

router.get('/:id', (req,res) => {
    const {id} = req.params;
    juegos.forEach(juego => {
        if (juego.id == id){
            res.json(juego)
        }
    });
    
    res.json(juegos);
});

router.post('/', (req,res) => {
    const {title, version, genre} = req.body

    if (title && version && genre){
        const id = juegos.length + 1;
        const nuevojuego = {...req.body, id};
        juegos.push(nuevojuego);
        res.status(200).json(juegos);
    }else{
        res.status(500).json({error:'no data'});
        res.send("Err32L No data");
    }
});


module.exports = router;