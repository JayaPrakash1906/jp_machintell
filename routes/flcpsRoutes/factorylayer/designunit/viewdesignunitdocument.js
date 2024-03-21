const express = require('express');
const router = express.Router();
const viewdesignunitdocumentController = require('../../controller/flcps-controller/factorylayer/designunit/ViewdesignunitdocumentController');
router.post('/', viewdesignunitdocumentController);

module.exports = router;