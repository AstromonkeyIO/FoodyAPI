var express = require('express');
var router = express.Router();
var user = require('../models/user');

/* GET users listing. */
router
	.get('/', function(req, res, next) {

	    user.find(function(err, users) {
	        if (err) {
	            res.send(err);
	        } else {
	            res.send("callback(" + JSON.stringify(users) + ")");
	        }
	    });
	})
	.post('/', function(req, res, next) {

		var newUser = new user({
		    username: req.body.username,
		    password: req.body.password,
		});

		newUser.save(function(err, user) {
			if (err)
				res.send(err);
			res.json(user);
		});
	});

module.exports = router;
