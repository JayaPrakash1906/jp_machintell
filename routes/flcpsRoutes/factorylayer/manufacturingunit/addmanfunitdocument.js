const express = require('express');
const router = express.Router();
const addassmunitdocumentController = require('../../controller/flcps-controller/factorylayer/assemblyunit/addassmunitdocumentController');
router.post('/', addassmunitdocumentController);

module.exports = router;
