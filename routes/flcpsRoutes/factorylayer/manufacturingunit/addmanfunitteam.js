const express = require('express');
const router = express.Router();
const addmanfunitteamController = require('../../controller/flcps-controller/factorylayer/manufacturingunit/addmanfunitteamController');
router.post('/', addmanfunitteamController);

module.exports = router;