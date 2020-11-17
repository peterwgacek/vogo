// require the express module
const express = require('express');

// set up router object
const router = express.Router();

// require the controller module (index controller)
const indexCtrl = require('../controllers/index');

// define our routes
router.get('/', indexCtrl.index);

// export the router object
module.exports = router;