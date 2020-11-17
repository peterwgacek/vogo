// Require the model
const Recording = require('../models/recording');

// Setup up module.exports
module.exports = {
    index
};

// require db
require('../config/database');

// Define controller actions
function index(req,res) {
    Recording.find({}, function(err, recordings){
        res.render('recordings/index', {recordings})
    })
};