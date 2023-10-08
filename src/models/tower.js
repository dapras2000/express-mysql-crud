const dbPool = require('../config/database')

const getAllTower = () => {
    const SQLQuery = 'SELECT * FROM tower ORDER BY KODETOWER';
    // const SQLQuery = `SELECT * FROM tower WHERE UNITPELAKSANA="UPT Makassar" ORDER BY KODETOWER ASC`;
    // const SQLQuery = `SELECT *, GROUP_CONCAT('{kode:', KODETOWER, ', Nama:', NAMASUTT, '}') as Product FROM tower GROUP BY NAMASUTT ORDER BY NAMASUTT, KODETOWER ASC`;
    return dbPool.execute(SQLQuery);
}

const getTowerById = (idTower) => {
    const SQLQuery = `SELECT * FROM tower WHERE id='${idTower}'`;    
    return dbPool.execute(SQLQuery);
}

const getGroupTower = () => {
    // const SQLQuery = `SELECT SUBSTRING_INDEX( KODETOWER, ' ', 1 ) as KDTW FROM tower GROUP BY KDTW`
    const SQLQuery = `SELECT SUBSTRING_INDEX( KODETOWER, ' ', 1 ) as grouptower, 
                        JSON_ARRAYAGG(JSON_OBJECT(
                            'UNITINDUK',UNITINDUK,
                            'UNITPELAKSANA',UNITPELAKSANA,
                            'NAMASUTT',NAMASUTT,
                            'KODETOWER',KODETOWER,
                            'TEGANGAN', TEGANGAN,
                            'LAT',LAT,
                            'LNG',LNG
                        )) as detailtower
                        FROM tower WHERE SUBSTRING_INDEX( KODETOWER, ' ', 1 )="ANDLO-KPUTE"
                        GROUP BY grouptower 
                        ORDER BY grouptower, KODETOWER ASC
                        `;
    return dbPool.execute(SQLQuery);
    // WHERE SUBSTRING_INDEX( KODETOWER, ' ', 1 )="ANDLO-KPUTE"
}

const getAllGroupTower = () => {
    const SQLQuery = `SELECT *, SUBSTRING_INDEX( KODETOWER, ' ', 1 ) as KDTW FROM tower ORDER BY KODETOWER ASC`
    return dbPool.execute(SQLQuery);
}

const getSelectGroupTower = (idGroupTower) => {
    const SQLQuery = `  SELECT *, SUBSTRING_INDEX( KODETOWER, ' ', 1 ) as KDTW FROM tower 
                        WHERE SUBSTRING_INDEX( KODETOWER, ' ', 1 )='${idGroupTower}'
                        ORDER BY KODETOWER ASC`
    return dbPool.execute(SQLQuery);
}

// const createNewUser = (body) => {
//     const SQLQuery = `   INSERT INTO users (name, email, address)
//                          VALUES ('${body.name}', '${body.email}','${body.address}')`;
    
//     return dbPool.execute(SQLQuery);
// }

// const updateUser = (body, idUser) => {
//     const SQLQuery = `  UPDATE users SET name='${body.name}', email=  '${body.email}', address= '${body.address}'
//                         WHERE id='${idUser}'`;
                         
    
//     return dbPool.execute(SQLQuery);
// }

// const deleteUser = (idUser) => {
//     const SQLQuery = `DELETE FROM users WHERE id='${idUser}'`;                        
    
//     return dbPool.execute(SQLQuery);
// }

module.exports = {
    getAllTower,
    getTowerById,
    getGroupTower,
    getAllGroupTower,
    getSelectGroupTower
    // createNewUser,
    // updateUser,
    // deleteUser,
}