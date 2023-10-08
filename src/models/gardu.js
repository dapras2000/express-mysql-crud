const dbPool = require('../config/database')

const getAllGardu = () => {
    const SQLQuery = 'SELECT * FROM gardu';
    
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
    getAllGardu
    // createNewUser,
    // updateUser,
    // deleteUser,
}