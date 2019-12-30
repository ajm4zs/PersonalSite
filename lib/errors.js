// const errors = require('careerscrimmage-backend-utils').errors;

// class DBError extends errors.BaseError {

// 	constructor (error) {
// 		if (!error) super('DB Error', 500);
// 		else if (error && error.status === 404) super(error.message || 'Not Found', 404);
// 		else if (error && error.name === 'ValidationError') super(error.message || 'Validation Error', 400);
// 		else super(error.message || 'DB Error', error.status || 500, error);
// 	}

// }

// module.exports = errors;
// module.exports.DBError = DBError;