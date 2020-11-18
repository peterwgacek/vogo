// Require modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const port = process.env.PORT || '3000';

// Set up express app
const app = express();

// Require router modules
const indexRouter = require('./routes/index');
const recordingsRouter = require('./routes/recordings');

// Contact DB with require()
require('./config/database');

// Configure app with app.set()
app.set('view engine', 'ejs');

// Mount middleware with app.use()
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Mount routes with app.use()
app.use('/', indexRouter);
app.use('/recordings', recordingsRouter );

// Tell App to listen
app.listen(port, function(){
    console.log(`Express is listening on port: ${port}`);
});