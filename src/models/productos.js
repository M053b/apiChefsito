const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    id: {type: String, required: true},
    nombre_empresa: {type: String, required: true},
    eslogan: {type: String, required: true},
    descripcion: {type: String, required: true},
    servicio: {type: String, required: true},
    categoria: {type: String, required: true},
    instagram: {type: Boolean, required: true},
    facebook: {type: Boolean, required: true},
    estrellas: {type: Number, required: true},
    lng: {type: Number, required: true},
    lat: {type: Number, required: true},
},{
    timestamps:true,
    versionkey:false
})

module.exports = mongoose.model('producto', ProductSchema)