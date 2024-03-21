const express = require('express');
const router = express.Router();
const addmanfunitdocumentController = require('../../controller/flcps-controller/factorylayer/assemblyunit/addassmunitdocumentController');
router.post('/', addmanfunitdocumentController);

module.exports = router;
