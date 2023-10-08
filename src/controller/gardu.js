const GarduModel = require('../models/gardu')

const getAllGardu = async (req, res) => {
    try {
        const [data] = await GarduModel.getAllGardu();
        res.json({
            message: 'GET all gardu success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'server error',
            serverMessage: error,
        })
    }
}

// const createNewUser = async (req, res) => {    
//     const {body} = req;

//     if(!body.email || !body.name || !body.address){
//         return res.status(400).json({
//             message: 'Anda mengirimkan data yang salah',
//             data: null,
//         })
//     }

//     try {
//         await UsersModel.createNewUser(body);
//         res.status(201).json({
//             message: 'CREATE new user success',
//             data : body
//         })        
//     } catch (error) {
//         res.status(500).json({
//             message: 'server error',
//             serverMessage: error,
//         })
//     }
   
// }

// const updateUser = async (req, res) => {
//     const {idUser} = req.params;
//     const {body} = req;
    
//     try {
//         await UsersModel.updateUser(body,idUser);
//         res.status(201).json({
//             message: 'UPDATE user success',
//             data : {
//                 id: idUser,
//                 ...body
//             }
//         })        
//     } catch (error) {
//         res.status(500).json({
//             message: 'server error',
//             serverMessage: error,
//         })
//     }
   
// }

// const deleteUser = async (req, res) => {
//     const {idUser} = req.params;
//     try {
//         await UsersModel.deleteUser(idUser);
//         res.json({
//             message: 'DELETE user success',           
//             data: null
//         })        
//     } catch (error) {
//         res.status(500).json({
//             message: 'server error',
//             serverMessage: error,
//         })
//     }
// }

module.exports = {
    getAllGardu,
    // createNewUser,
    // updateUser,
    // deleteUser
}