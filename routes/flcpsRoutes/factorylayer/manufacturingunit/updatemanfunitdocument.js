const express = require('express');
const router = express.Router();
const updatemanfunitdocumentController = require('../../controller/flcps-controller/factorylayer/manufacturingunit/updatemanfunitdocumentController');
router.put('/:id', updatemanfunitdocumentController);

module.exports = router;