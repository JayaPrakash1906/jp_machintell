const express = require('express');
const router = express.Router();
const adddesignunitdocumentController = require('../../controller/flcps-controller/factorylayer/designunit/adddesignunitdocumentController');
router.post('/', adddesignunitdocumentController);

module.exports = router;
