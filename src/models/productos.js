const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    nombre_producto: {type: String, requested:true},
    producto_id: {type: String, requested:true},
    proveedor: {type: String, ref: 'empresa.nombre_empresa' },
    imgPath: {type: String, requested:true},
    categoria: {type: String, requested:true},
    descripcion: {type: String, requested:true},
    costo: {type: Number, requested:true}
},{
    timestamps:true,
    versionkey:false
})

module.exports = mongoose.model('producto', ProductSchema)