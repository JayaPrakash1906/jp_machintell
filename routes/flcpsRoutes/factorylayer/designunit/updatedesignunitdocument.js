const express = require('express');
const router = express.Router();
const updatedesignunitdocumentController = require('../../controller/flcps-controller/factorylayer/designunit/updatedesignunitdocumentController');
router.put('/:id', updatedesignunitdocumentController);

module.exports = router;