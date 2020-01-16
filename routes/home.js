const express = require('express');
const router = express.Router();
const async = require('async');

const simbaPics = require('./../utils/simbaImages');

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

	const imgGroupings = {
		family: [],
		good: [],
		bad: [],
		adventure: [],
		beach: [],
		model: [],
		needy: [],
		sleepy: [],
		play: []
	};

	async.forEachOf(simbaPics, function (pic, index, callback) {
		imgGroupings[pic.class].push(pic);
		callback();
	}, function (err) {
		if (err) return void next(err);
		res.render('simba', {
			title: 'Alex Mulchandani',
			family: imgGroupings.family,
			good: imgGroupings.good,
			bad: imgGroupings.bad,
			adventure: imgGroupings.adventure,
			beach: imgGroupings.beach,
			model: imgGroupings.model,
			needy: imgGroupings.needy,
			sleepy: imgGroupings.sleepy,
			play: imgGroupings.play,
			data: simbaPics
		});
	});

});

module.exports = router;