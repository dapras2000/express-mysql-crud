const e = require('express');
const dbPool = require('../config/database')

const getAllDokumenTower = () => {
    const SQLQuery = `SELECT * FROM dokumentower`;    
    return dbPool.execute(SQLQuery);
}

const getDokumenTowerById = (idDokumenTower) => {
    const SQLQuery = `SELECT * FROM dokumentower WHERE id='${idDokumenTower}'`;    
    return dbPool.execute(SQLQuery);
}

const getDokumenTowerByTower = (kodetower) => {
    const SQLQuery = `SELECT * FROM dokumentower WHERE kode_tower='${kodetower}'`;    
    return dbPool.execute(SQLQuery);
}

// const getGroupDokumenTower = () => {
//     const SQLQuery = `SELECT * FROM dokumentower WHERE UNITPELAKSANA="UPT Makassar" ORDER BY KODETOWER ASC`;
//     // const SQLQuery = `SELECT *, GROUP_CONCAT('{kode:', KODETOWER, ', Nama:', NAMASUTT, '}') as Product FROM dokumentower GROUP BY NAMASUTT ORDER BY NAMASUTT, KODETOWER ASC`;
//     return dbPool.execute(SQLQuery);
// }

const createNewDokumenTower = (body) => {
    const SQLQuery = ` INSERT INTO dokumentower (nama, keterangan) 
                        VALUES ('${body.nama}', '${body.keterangan}')`;
    
    return dbPool.execute(SQLQuery);
}

const updateDokumenTower = (body, idDokumenTower) => {
    const SQLQuery = `  UPDATE dokumentower SET nama='${body.nama}', keterangan=  '${body.keterangan}'
                        WHERE id='${idDokumenTower}'`;                         
    
    return dbPool.execute(SQLQuery);
}

const deleteDokumenTower = (idDokumenTower) => {
    const SQLQuery = `DELETE FROM dokumentower WHERE id='${idDokumenTower}'`;                        
    
    return dbPool.execute(SQLQuery);
}

const createupdateDokumenTower = (body) => {
    if (`${body.statusdok}` === 'yes'){
        const SQLQuery = `  UPDATE dokumentower SET file_dokumen='${body.file_dokumen}'
                        WHERE kode_tower='${body.kode_tower}'
                        AND kode_dokumen='${body.kode_dokumen}'`;                         
    
        return dbPool.execute(SQLQuery);
    }
    if (`${body.statusdok}` === 'no'){
        const SQLQuery = ` INSERT INTO dokumentower (kode_tower, kode_dokumen, file_dokumen) 
                        VALUES ('${body.kode_tower}', '${body.kode_dokumen}', '${body.file_dokumen}')`;    
        return dbPool.execute(SQLQuery);
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