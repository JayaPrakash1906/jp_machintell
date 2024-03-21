const express = require('express');
const router = express.Router();
const deletemanfunitteamController = require('../../controller/flcps-controller/factorylayer/manufacturingunit/deletemanfunitteamController');
router.delete('/:id', deletemanfunitteamController);

module.exports = router;