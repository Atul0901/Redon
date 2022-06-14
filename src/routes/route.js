const express = require('express');
const externalModule = require('../logger/logger')
const myHelper = require('../util/helper')
const router = express.Router();

router.get('/test-me', function (req, res) {
   myHelper.printDate()
   myHelper.getcurrentMounth()
   myHelper.getBatchInfo()

    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason