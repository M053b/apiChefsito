const { Router } = require('express');
const router = Router();


const comidas = require('./data.json');

// Obtener todos los platillos (Todo el JSON)
router.get('/receta', (req,res) => {
    res.json(comidas);
});


// Obtener platillos filtrados por clase
router.get('/receta/:clase', (req,res) => {
    const {clase} = req.params;
    comidas.forEach(comida => {
        if (comida.clase.toUpperCase() == clase.toUpperCase()){
            res.json(comida)
        }
    });
    
    res.status(500).json({error:'Clase no encontrada'});
});


// Obtener platillo específico
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


// Obtener menu del día
router.get('/menu-del-dia/:numPersonas', (req,res) => {
    let menuDia = []
    const numPersonas = req.params.numPersonas;

    // Error si parámetro no es número entero 
    if (!(!isNaN(numPersonas) && Number.isInteger(parseFloat(numPersonas)))){
        res.status(500).json({error:'Parámetro no válido'});
    }

    // Error si número 0 o negativo
    if (numPersonas <= 0){
        res.status(500).json({error:'Parámetro no válido, numero debe de ser postivo'});
    }

    comidas.forEach(comida => {
        // Elección de platillo random
        let dictP = {};
        dictP.clase = comida.clase;

        platilloRandom = comida.platillo[Math.floor(Math.random() * comida.platillo.length)]

        // Cálculo de ingredientes
        let listI = []
        platilloRandom.ingrediente.forEach(ingrediente =>{
            let dictI = {};
            dictI.nombre = ingrediente.nombre;
            dictI.cantidad = (ingrediente.cantidad/platilloRandom.personas) * numPersonas;
            dictI.udm = ingrediente.udm;
            listI.push(dictI);
        })

        dictP.platillo = platilloRandom.nombre;
        dictP.ingredientes = listI;

        menuDia.push(dictP)
    });

    res.json(menuDia)
});


module.exports = router;