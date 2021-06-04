const empresasCtrl = {}
const empresas = require('../models/empresas.js')

empresasCtrl.getEmpresas = async (req, res) => {
    const empresaF = await empresas.find();
    res.json(empresaF)
}

empresasCtrl.deleteEmpresas = async (req, res) => {
    const empresaF = await empresas.remove();
    res.send({msg: 'Empresas eliminada:'})
}

empresasCtrl.createEmpresa = async (req, res) => {
    const newEmpresa = new empresas(req.body);
    await newEmpresa.save();
    res.send({msg: 'Empresa Creada!'})
}

empresasCtrl.getEmpresa = async (req, res) => {
    const empresaF = await empresas.find({ empresa_id: req.params.id });
    res.send(empresaF)
}

empresasCtrl.deleteEmpresa = async (req, res) => {
    const empresaF = await empresas.findByIdAndDelete(req.params.id);
    res.send({msg: 'Empresa eliminada:', empresaF})
}

empresasCtrl.updateEmpresa = async (req, res) => {
    const empresaF= await empresas.findByIdAndUpdate(req.params.id, req.body);
    res.send({msg: 'Empresa modificada:', empresaF})
}

module.exports = empresasCtrl;