const express = require('express');
const router = express.Router();
const updatemanfunitteamController = require('../../controller/flcps-controller/factorylayer/manufacturingunit/updatemanfunitteamController');
router.put('/:id', updatemanfunitteamController);

module.exports = router;