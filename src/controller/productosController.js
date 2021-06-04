const productosCtrl = {}
const productos = require('../models/productos.js')
const empresas = require('../models/empresas.js')

productosCtrl.getProducts = async (req, res) => {
    const productosF = await productos.find();
    res.json(productosF)
}

productosCtrl.deleteProducts = async (req, res) => {
    await productos.remove();
    res.send({msg: 'Productos eliminados'})
}

productosCtrl.createProduct = async (req, res) => {
    const newProduct = new productos(req.body);
    await newProduct.save();
    const empresaF = await empresas.findById(newProduct.proveedor);
    empresaF.productos.push(newProduct);
    empresaF.save(); 
    res.send({msg: 'Producto creado', newProduct})
}

productosCtrl.getProduct = async (req, res) => {
    const productoF = await productos.findById(req.params.id);
    res.send(productoF)
}

productosCtrl.deleteProduct = async (req, res) => {
    const productoF = await productos.findByIdAndDelete(req.params.id);
    res.send({msg: 'Producto eliminado:', productoF})
}

productosCtrl.updateProduct = async (req, res) => {
    const productoF = await productos.findByIdAndUpdate(req.params.id, req.body);
    res.send({msg: 'Producto modificado:', productoF})
}

module.exports = productosCtrl;