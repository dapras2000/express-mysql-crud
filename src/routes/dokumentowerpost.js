const express = require('express');

const DokumenTowerController = require('../controller/dokumentower.js')

const router = express.Router();



// CREATE - POST
router.post('/', DokumenTowerController.createupdateDokumenTower);

// // DELETE - DELETE
router.delete('/:idDokumenTower', DokumenTowerController.deleteDokumenTower);

module.exports = router;