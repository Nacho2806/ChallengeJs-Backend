const express = require('express')
const cors = require('cors');
const session = require('express-session');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(cors());
app.use(express.json());
app.use(session(
    {secret: 'my-token-secret', 
    resave: true, 
    saveUninitialized: true}));

// routes
app.use('/api/registers', require('./routes/registers'))
app.use('/api/users', require('./routes/users'))

module.exports = app;