const async = require('async');
const http = require('http');

const config = require('./config/config');

function shutdown (callback) {
	callback();
}

console.log('Server is starting up.');

async.series([
	function (next) {
		console.log('Creating app.');
		const app = require('./lib/app');
		console.log('Created app.');

		console.log('Creating server.');
		const server = http.createServer(app);
		const port = process.env.PORT || config.port;
		server.listen(process.env.PORT || config.port, function () {
			console.log(`Created server, listening on port: ${port}.`);
			next();
		});
	}
], function (error) {
	if (error) {
		console.log(error);
		return void shutdown(process.exit);
	}

	console.log('Server is ready.');
});

process.on('SIGINT', function () {
	console.log('\nSIGINT --- EXITING');
	shutdown(process.exit);
});

process.on('SIGTERM', function () {
	console.log('\nSIGTERM --- EXITING');
	shutdown(process.exit);
});