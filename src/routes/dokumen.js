const express = require('express');

const DokumenController = require('../controller/dokumen.js')

const router = express.Router();

// READE - GET
router.get('/', DokumenController.getAllDokumen);

// READE - GET BY ID
router.get('/:idDokumen', DokumenController.getDokumenById);

// CREATE - POST
router.post('/', DokumenController.createNewDokumen);

// // UPDATE - PATCH
router.put('/:idDokumen', DokumenController.updateDokumen);

// // DELETE - DELETE
router.delete('/:idDokumen', DokumenController.deleteDokumen);

module.exports = router;