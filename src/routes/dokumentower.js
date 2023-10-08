const express = require('express');

const DokumenTowerController = require('../controller/dokumentower.js')

const router = express.Router();

// READE - GET
router.get('/', DokumenTowerController.getAllDokumenTower);

// READE - GET BY ID
router.get('/:idDokumenTower', DokumenTowerController.getDokumenTowerById);

// READE - GET BY TOWER
router.get('/kodetower/:kodetower', DokumenTowerController.getDokumenTowerByTower);

// CREATE - POST
router.post('/', DokumenTowerController.createNewDokumenTower);

// CREATE - POST
router.post('/dokumentowerpost', DokumenTowerController.createupdateDokumenTower);

// // UPDATE - PATCH
router.put('/:idDokumenTower', DokumenTowerController.updateDokumenTower);

// // DELETE - DELETE
router.delete('/:idDokumenTower', DokumenTowerController.deleteDokumenTower);

module.exports = router;