const express = require('express');
const router = express.Router();
const deletedesignunitteamController = require('../../controller/flcps-controller/factorylayer/designunit/deletedesignunitteamController');
router.delete('/:id', deletedesignunitteamController);

module.exports = router;