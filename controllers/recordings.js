// Require the model
const Recording = require('../models/recording');

// Setup up module.exports
module.exports = {
    index,
    show,
    new: newRecording,
    delete: deleteRecording,
    create,
    edit,
    update,
    category
};

// require db
require('../config/database');

//Require categories
const categories = require('../constants/categories');

// Define controller actions
function index(req, res) {
    Recording.find({}, function (err, recordings) {
        res.render('recordings/index', {
            recordings,
            categories
        })
    })
}

function show(req, res) {
    Recording.findById(req.params.id, function (err, recording) {
        res.render('recordings/show', {
            Recording: 'Recording Details',
            recording
        });
    });
}

function category(req, res) {
    // find all recordings 
    Recording.find({}, function (error, allRecordings) {
        // allRecordings is an array so here we can use normal javascript menthods and code to manipulate it. Think about how you could use .filter() or a loop to create a new array with the data that matches your parameters. 
        const filtered = allRecordings.filter(r => r.dropdown === req.params.category);
        res.render('recordings/category', {
            // render the page and pass in the data you want to use
            recordings: filtered || [],
            category: req.params.category
        })
    })
}


function newRecording(req, res) {
    res.render('recordings/new', {
        categories
    });
}

function deleteRecording(req, res) {
    Recording.findByIdAndDelete(req.params.id, function (err, deletedRecording) {
        res.redirect('/recordings');
    });
}

function update(req, res) {
    Recording.findByIdAndUpdate(req.params.id, req.body, function (err, updatedRecording) {
        res.redirect('/recordings')
    });
}

function create(req, res) {
    Recording.create(req.body, function (err, recording) {
        res.redirect('/recordings')
    });
}

function edit(req, res) {
    Recording.findById(req.params.id, function (err, recording) {
        res.render('recordings/edit', {
            recording
        });
    });
}