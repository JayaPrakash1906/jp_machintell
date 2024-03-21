const express = require('express');
const router = express.Router();
const addvendorunitdocumentController = require('../../controller/flcps-controller/factorylayer/vendormanagementunit/addvendorunitdocumentController');
router.post('/', addvendorunitdocumentController);

module.exports = router;
