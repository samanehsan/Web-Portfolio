var mongoose = require('mongoose'),
Pin = mongoose.model('Pin');


exports.index = function(req, res) {
	res.send("Welcome to CS1501");
}

exports.watch = function(req, res) {
	var video_id = req.query.v;
	res.render('watch', { id: video_id }, function(err, html) {
		res.send(html);
	})
}

exports.bootstrap = function(req, res) {
	res.render('bootstrap101', function(err, html) {
		res.send(html);
	})
}

exports.bootstrap_about = function(req, res) {
	res.render('about', function(err, html) {
		res.send(html);
	})
}

exports.bootstrap_biochemistry = function(req, res) {
	res.render('biochemistry', function(err, html) {
		res.send(html);
	})
}

exports.bootstrap_cs = function(req, res) {
	res.render('computerscience', function(err, html) {
		res.send(html);
	})
}

exports.bootstrap_contact = function(req, res) {
	res.render('contact', function(err, html) {
		res.send(html);
	})
}

exports.pinterless = function(req, res) {
	Pin.find({}, function(err, all_pins) {
		var output = "Pins: " + JSON.stringify(all_pins);
		console.log(output); 

		res.render('pinterless', {pins: all_pins}, function(err, html) {
			res.send(html); 	
		})
	});
}

exports.createPin = function(req, res) {
	var newPin = new Pin({
		title: req.body.title,
		description: req.body.description,
		image_url: req.body.image_url 
	});

newPin.save(function(err) {
		if (err) {
			console.log("Error saving pin");
		} else {
			res.redirect('/pinterless');
		};
	});	

	
}


