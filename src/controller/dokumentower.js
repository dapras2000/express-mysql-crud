const DokumenTowerModel = require('../models/dokumentower')

const getAllDokumenTower = async (req, res) => {
    try {
        const [data] = await DokumenTowerModel.getAllDokumenTower();
        res.json({
            message: 'GET all dokumentower success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
}

const getDokumenTowerById = async (req, res) => {
    const {idDokumenTower} = req.params;
    
    try {
        const [data] = await DokumenTowerModel.getDokumenTowerById(idDokumenTower);
        res.json({
            message: 'GET dokumentower success',
            data: data
        })           
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
   
}

const getDokumenTowerByTower = async (req, res) => {
    const {kodetower} = req.params;
    
    try {
        const [data] = await DokumenTowerModel.getDokumenTowerByTower(kodetower);
        res.json({
            message: 'GET dokumentower success',
            data: data
        })           
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
   
}

const createNewDokumenTower = async (req, res) => {    
    const {body} = req;

    if(!body.nama || !body.keterangan){
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data: null,
        })
    }

    try {
        await DokumenTowerModel.createNewDokumenTower(body);
        res.status(201).json({
            message: 'CREATE new dokumentower success',
            data : body
        })        
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
   
}

const createupdateDokumenTower = async (req, res) => {    
    const {body} = req;
    try {
        await DokumenTowerModel.createupdateDokumenTower(body);
        res.status(201).json({
            message: 'Data berhasil di perbaharui',           
            data: null
        })        
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }   
}

const updateDokumenTower = async (req, res) => {
    const {idDokumenTower} = req.params;
    const {body} = req;
    
    try {
        await DokumenTowerModel.updateDokumenTower(body,idDokumenTower);
        res.status(201).json({
            message: 'UPDATE dokumentower success',
            data : {
                id: idDokumenTower,
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

const deleteDokumenTower = async (req, res) => {
    const {idDokumenTower} = req.params;
    try {
        await DokumenTowerModel.deleteDokumenTower(idDokumenTower);
        res.json({
            message: 'DELETE dokumentower success',           
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
    getAllDokumenTower,
    createNewDokumenTower,
    getDokumenTowerById,
    updateDokumenTower,
    deleteDokumenTower,
    getDokumenTowerByTower,
    createupdateDokumenTower
}