const express = require('express');
const router = express.Router();
const updatevendorunitteamController = require('../../controller/flcps-controller/factorylayer/vendormanagementunit/updatevendorunitteamController');
router.put('/:id', updatevendorunitteamController);

module.exports = router;