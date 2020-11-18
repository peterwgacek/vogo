// require mongoose
const mongoose = require('mongoose');

// create a shortcut varibale for Schema
const Schema = mongoose.Schema;

// recordingSchema
const recordingSchema = new Schema({
    recording: String,
    title: {
        type: String,
        default: 'New Recording'
    },
    date: {
        type: Date,
        default: Date.Now
    },
    // time: {
    //     type: 
    // },
    dropdown: {type: String},
    intake:  {type: String},
    notes:  {type: String},
}, {
    timesstamps: true
});


// export the result of compiling schema into a model
module.exports = mongoose.model('Recording', recordingSchema);