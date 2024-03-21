const express = require('express');
const router = express.Router();
const addvendorunitteamController = require('../../controller/flcps-controller/factorylayer/vendormanagementunit/addvendorunitteamController');
router.post('/', addvendorunitteamController);

module.exports = router;