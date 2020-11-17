// Require the model
const Recording = require('../models/recording');

// Setup up module.exports
module.exports = {};

// require db
require('../config/database');


// Define controller actions

Recording.create({
    recording: '',
    title: 'First Recording',
    categpry: "Commercial",
    date: '',
    intake: 'Drank tea 1/2 ago',
    notes: 'I recorded this today'
},
function(err, doc) {
    if(err) {console.log(err)
    } else {
    console.log(doc);
    }
})

