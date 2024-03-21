const express = require('express');
const router = express.Router();
const viewmanfunitdocumentController = require('../../controller/flcps-controller/factorylayer/manufacturingunit/ViewmanfunitdocumentController');
router.post('/', viewmanfunitdocumentController);

module.exports = router;