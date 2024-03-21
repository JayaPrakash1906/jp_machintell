const express = require('express');
const router = express.Router();
const viewassmunitdocumentController = require('../../controller/flcps-controller/factorylayer/assemblyunit/ViewassmunitdocumentController');
router.post('/', viewassmunitdocumentController);

module.exports = router;