// Require the model
const Recording = require('../models/recording');

// Setup up module.exports
module.exports = {
    index,
    new: newRecording,
    delete: deleteRecording,
    create,
    edit,
    update,

};

// require db
require('../config/database');

// Define controller actions
function index(req,res) {
    Recording.find({}, function(err, recordings){
        res.render('recordings/index', {recordings})
    })
};

function deleteRecording(req, res){
    Recording.findByIdAndDelete(req.params.id, function(err, deletedRecording){
        res.redirect('/recordings');
    });
}

function newRecording(req, res) {
    res.render('recordings/new');
}

function update(req, res) {
    Recording.findByIdAndUpdate(req.params.id, req.body, function(err, updatedRecording){
            res.redirect('/recordings')
    });
}

function create(req,res){
    Recording.create(req.body, function(err, recording){
        res.redirect('/recordings')
    });
}

function edit(req,res){
    Recording.findById(req.params.id, function(err, recording){
        res.render('recordings/edit', { recording });
    });
}
