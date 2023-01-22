var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./db');

var indexRouter = require('./routes/index');
var mainRouter = require('./routes/main');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', mainRouter);


app.listen(3000,console.log("listening on port 3000"))
module.exports = app;
