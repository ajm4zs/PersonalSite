const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const config = require('../config/config');
const errors = require('./errors');
const logger = require('morgan');
const path = require('path');

const cookieparser = require('cookie-parser');
const session = require('express-session');

function shutdown (callback) {
	callback();
}

app.use(cors());
app.use(bodyParser.urlencoded({	extended: true }));
app.use(bodyParser.json());
app.use(cookieparser());

// Express Session Middleware
app.use(session({
	secret: 'personalsite-key',
	key: 'personalsite-secret',
	resave: true,
	saveUninitialized: true,
	cookie: { maxAge: 6000000 }
}));

app.use(logger('dev'));

const routes = [
	require('./../routes/home')
];

for (const router of routes) {
	app.use(router);
}

const views = [
	path.join(__dirname, './../views')
];

const statics = [
	path.join(__dirname, './../public')
];

for (const static of statics) {
	app.use(express.static(static));
}

// setup view engine

app.set('views', views);
app.set('view engine', 'ejs');

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(new errors.NotFoundError());
});

app.use(function (error, req, res, next) {
	if (!res.headersSent) {
		const err = error || new errors.InternalServerError();
		const name = err.name || 'Error';
		const status = err.status || 500;
		const message = err.message || err;

		res.status(status);
		res.json({
			error: name,
			error_description: message
		});
	}
});

module.exports = app;