const express = require('express');
const router = express.Router();
const updatevendorunitdocumentController = require('../../controller/flcps-controller/factorylayer/vendormanagementunit/updatevendorunitdocumentController');
router.put('/:id', updatevendorunitdocumentController);

module.exports = router;