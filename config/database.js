// require mongoose
const mongoose = require('mongoose');

// Setup a shortcut variable
const db =mongoose.connection;

// create a connectionURI variable and assign MongoDB Atlas URI
const connectionURI = 'mongodb+srv://admin:MrGoodbytes@cluster0.vzazw.mongodb.net/vogo?retryWrites=true&w=majority'

//connect to MongoDB
mongoose.connect(connectionURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// Setup a listner to alert us when we're connected
db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`)
})

// Setup an error alert
db.on('error', function(error ){
    console.log(`Enncountered the following error:  ${error.message}`);
});

