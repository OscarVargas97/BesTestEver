const express = require('express');
const morgan = require('morgan');
const db = require('./database')
require('dotenv').config();

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(require('./routes/index'));

//Starting the Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
