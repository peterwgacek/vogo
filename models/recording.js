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
    category: String,
    intake: String,
    notes: String,
}, {
    timesstamps: true
});


// export the result of compiliong schema into a model
mongoose.model('Recording', recordingSchema);