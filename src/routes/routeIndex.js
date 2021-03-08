const { Router } = require('express');
const router = Router();


const comidas = require('./data.json');


router.get('/receta', (req,res) => {
    res.json(comidas);
});


router.get('/receta/:clase', (req,res) => {
    const {clase} = req.params;
    comidas.forEach(comida => {
        console.log(comida.clase);
        if (comida.clase.toUpperCase() == clase.toUpperCase()){
            res.json(comida)
        }
    });
    
    res.status(500).json({error:'Clase no encontrada'});
});


//Rutas clase/platillo
router.get('/receta/:clase/:nombre', (req, res) =>{
    const nombre = req.params.nombre;
    const clase = req.params.clase;

    comidas.forEach(comida => {
        if (comida.clase.toUpperCase() == clase.toUpperCase()){
            const platillos = comida.platillo;

            platillos.forEach(platillo => {
                if(platillo.nombre.toUpperCase() == nombre.toUpperCase()){
                    res.json(platillo)
                }
            });

            res.status(500).json({error:'Platillo no encontrado'});

        }
    });
    res.status(500).json({error:'Clase no encontrada'});
});

module.exports = router;