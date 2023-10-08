const express = require('express');

const TowerController = require('../controller/tower.js')

const router = express.Router();

// READE - GET GROUP TOWER
router.get('/', TowerController.getGroupTower);

// READE - GET ALL TOWER BY GRUP
router.get('/getallgrouptower', TowerController.getAllGroupTower);


module.exports = router;