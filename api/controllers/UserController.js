/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function (req, res, next) {
		res.view();
	},
	
	create: function (req, res, next) {
		var userViewModel = {
			name: req.param('name'),
			email: req.param('email')	
		};	
		
		User.create(userViewModel).exec(function (err, userCreated) {
			if (err) return res.redirect('/user/new');
			res.redirect('/user/index');
		});
	},
	
	index: function (req, res, next) {
		User.find({}).exec(function (err, usersFound) {
			if (err) return next(err);
			res.view({users: usersFound});
		});	
	},
	
};

