const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
	res.render('home', {
		title: 'Alex Mulchandani'
	});
});

router.get('/about', function (req, res, next) {
	res.render('about', {
		title: 'Alex Mulchandani'
	});
});

router.get('/portfolio', function (req, res, next) {
	res.render('portfolio', {
		title: 'Alex Mulchandani'
	});
});

router.get('/resume', function (req, res, next) {
	res.render('resume', {
		title: 'Alex Mulchandani'
	});
});

router.get('/2048', function (req, res, next) {
	res.render('2048', {
		title: 'Alex Mulchandani'
	});
});

router.get('/simba', function (req, res, next) {
	res.render('simba', {
		title: 'Alex Mulchandani'
	});
});

module.exports = router;