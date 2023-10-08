const DokumenModel = require('../models/dokumen')

const getAllDokumen = async (req, res) => {
    try {
        const [data] = await DokumenModel.getAllDokumen();
        res.json({
            message: 'GET all dokumen success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
}

const getDokumenById = async (req, res) => {
    const {idDokumen} = req.params;
    
    try {
        const [data] = await DokumenModel.getDokumenById(idDokumen);
        res.json({
            message: 'GET dokumen success',
            data: data
        })           
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
   
}

const createNewDokumen = async (req, res) => {    
    const {body} = req;

    if(!body.nama || !body.keterangan){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await DokumenModel.createNewDokumen(body);
        res.status(201).json({
            message: 'CREATE new dokumen success',
            data : body
        })        
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
   
}

const updateDokumen = async (req, res) => {
    const {idDokumen} = req.params;
    const {body} = req;
    
    try {
        await DokumenModel.updateDokumen(body,idDokumen);
        res.status(201).json({
            message: 'UPDATE dokumen success',
            data : {
                id: idDokumen,
                ...body
            }
        })        
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
   
}

const deleteDokumen = async (req, res) => {
    const {idDokumen} = req.params;
    try {
        await DokumenModel.deleteDokumen(idDokumen);
        res.json({
            message: 'DELETE dokumen success',           
            data: null
        })        
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllDokumen,
    createNewDokumen,
    getDokumenById,
    updateDokumen,
    deleteDokumen
}