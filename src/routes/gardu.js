const express = require('express');

const GarduController = require('../controller/gardu.js')

const router = express.Router();

// READE - GET
router.get('/', GarduController.getAllGardu);

// // CREATE - POST
// router.post('/', TowerController.createNewTower);

// // UPDATE - PATCH
// router.patch('/:idTower', TowerController.updateTower);

// // DELETE - DELETE
// router.delete('/:idTower', TowerController.deleteTower);

module.exports = router;