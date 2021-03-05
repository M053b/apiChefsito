//Const config
const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('./routes/routeIndex');

//Port Config
app.set('port',3000)
app.set('json spaces',2)

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Rutas config
app.use("/api-juegos", require('./routes/routeIndex'));

//Emepzando el server
app.listen(app.get('port'));
console.log("Mi primer servidor");