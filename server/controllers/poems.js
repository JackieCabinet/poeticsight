var Poem = require('../models/poems.js');

module.exports = {
		// get: function(req,res){
		// 	Poem.find(function(err, poem){
		// 		if(err){
		// 			return handleError(err);
		// 		}
		// 		if(poem){
		// 			res.json(poem);
		// 		}
		// 	})
		// },
		post: function(req,res){
			console.log("in POSTTT")
			var poem = new Poem({
				username: req.body.username,
				line1: req.body.line1, 
				line2: req.body.line2,
				line3: req.body.line3,
				thumbnail: req.body.thumbnail})
			poem.save(function(err){
				if(err){
					throw(err);
				} else {
				console.log("this fires after the post hook")
				}
			}).then(function(arg){
				res.send("posted to db")
			})

		}



}
