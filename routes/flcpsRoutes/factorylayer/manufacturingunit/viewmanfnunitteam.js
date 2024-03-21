const express = require('express');
const router = express.Router();
const viewmanfunitteamController = require('../../controller/flcps-controller/factorylayer/manufacturingunit/ViewmanfunitteamController');
router.post('/', viewmanfunitteamController);

module.exports = router;