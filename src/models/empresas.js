const mongoose = require('mongoose')

const EmpresaSchema = mongoose.Schema({
    nombre_empresa: {type: String, requested:true},
    empresa_id: {type: String, requested:true},
    eslogan: {type: String, requested:true},
    descripcion: {type: String, requested:true},
    servicio: {type: String, requested:true},
    instagram: {type: Boolean, requested:true},
    facebook: {type: Boolean, requested:true},
    direccion: {type: String, requested:true},
    estrellas: {type: Number, requested:true},
    lng: {type: Number, requested:true},
    lat: {type: Number, requested:true},
    productos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'producto' }]
},{
    timestamps:true,
    versionkey:false
})

module.exports = mongoose.model('empresa', EmpresaSchema)