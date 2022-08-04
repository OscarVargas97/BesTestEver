const express = require ('express');
const morgan = require('morgan');


require('dotenv').config();

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// Middleware
app.use(morgan('dev'));

// Routes
app.use(require('./routes/index'));

// Controller

// Models

// Public

//Starting the Server
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'))
});

//.connect({
//  host: process.env.DB_HOST,
//  username: process.env.DB_USER,
//  password: process.env.DB_PASS
//});