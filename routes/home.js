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

router.get('/tetris', function (req, res, next) {
	res.render('tetris', {
		title: 'Alex Mulchandani'
	});
});

router.get('/contact', function (req, res, next) {
	res.render('contact', {
		title: 'Alex Mulchandani'
	});
});

router.get('/simba', function (req, res, next) {
	res.render('simba', {
		title: 'Alex Mulchandani'
	});
});

module.exports = router;