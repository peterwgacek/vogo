// Require the model
const Recording = require('../models/recording');

// Setup up module.exports
module.exports = {
    index,
    new: newRecording,
    create,

};

// require db
require('../config/database');

// Define controller actions
function index(req,res) {
    Recording.find({}, function(err, recordings){
        res.render('recordings/index', {recordings})
    })
};

function newRecording(req, res) {
    res.render('recordings/new');
}

function create(req,res){
    Recording.create(req.body, function(err, recording){
        res.redirect('/recordings')
    });
}