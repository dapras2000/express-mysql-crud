const express = require('express');

const TowerController = require('../controller/tower.js')

const router = express.Router();

// READE - GET
router.get('/', TowerController.getAllTower);

// READE - GET BY ID
router.get('/:idTower', TowerController.getTowerById);

// READE - GET GROUP TOWER
router.get('/grouptower', TowerController.getGroupTower);

// READE - GET ALL TOWER BY GRUP
router.get('/getallgrouptower', TowerController.getAllGroupTower);

// READE - GET TOWER BY SELECT GRUP
router.get('/selectgrouptower/:idGroupTower', TowerController.getSelectGroupTower);


// // CREATE - POST
// router.post('/', TowerController.createNewTower);

// // UPDATE - PATCH
// router.patch('/:idTower', TowerController.updateTower);

// // DELETE - DELETE
// router.delete('/:idTower', TowerController.deleteTower);

module.exports = router;