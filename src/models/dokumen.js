const dbPool = require('../config/database')

const getAllDokumen = () => {
    const SQLQuery = `SELECT * FROM dokumen`;    
    return dbPool.execute(SQLQuery);
}

const getDokumenById = (idDokumen) => {
    const SQLQuery = `SELECT * FROM dokumen WHERE id='${idDokumen}'`;    
    return dbPool.execute(SQLQuery);
}

// const getGroupDokumen = () => {
//     const SQLQuery = `SELECT * FROM dokumen WHERE UNITPELAKSANA="UPT Makassar" ORDER BY KODETOWER ASC`;
//     // const SQLQuery = `SELECT *, GROUP_CONCAT('{kode:', KODETOWER, ', Nama:', NAMASUTT, '}') as Product FROM dokumen GROUP BY NAMASUTT ORDER BY NAMASUTT, KODETOWER ASC`;
//     return dbPool.execute(SQLQuery);
// }

const createNewDokumen = (body) => {
    const SQLQuery = ` INSERT INTO dokumen (nama, keterangan) 
                        VALUES ('${body.nama}', '${body.keterangan}')`;
    
    return dbPool.execute(SQLQuery);
}

const updateDokumen = (body, idDokumen) => {
    const SQLQuery = `  UPDATE dokumen SET nama='${body.nama}', keterangan=  '${body.keterangan}'
                        WHERE id='${idDokumen}'`;
                         
    
    return dbPool.execute(SQLQuery);
}

const deleteDokumen = (idDokumen) => {
    const SQLQuery = `DELETE FROM dokumen WHERE id='${idDokumen}'`;                        
    
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllDokumen,
    createNewDokumen,
    getDokumenById,
    updateDokumen,
    deleteDokumen
}