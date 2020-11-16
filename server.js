//require modules
const express = require('express');
const morgan = require('morgan');
const port = 3000;

// Set up express app
const app = express();

//Contact to the DB

// Configure the app with app.set()
app.set('view engine', 'ejs');

// Mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlendcoded({ extended: false}));

// Mount routes with app.use()

// Tell App to listen
app.listen(port, function(){
    console.loog('Express is listeninging on portt: ${port}');
})