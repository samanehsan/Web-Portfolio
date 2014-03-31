var express = require("express")
, path = require('path')
, mongoose = require('mongoose')
, models = require('./models'); 

var app = express();


// Points Express to a folder where you keep static files
// e.g. css or client side js files
app.use(express.static(path.normalize(__dirname) + '/public'))

var uristring = process.env.MONGOLAB_URI || 
"mongodb://heroku_app22300670:59hgg2hjinnu21dmkmj9rp1a12@ds035907.mongolab.com:35907/heroku_app22300670"


// These 3 lines tell express that we are going to be rendering html files
// held in the public directory which should be in the same directory as this file
app.set('views', path.normalize(__dirname) + '/public');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Tell express to use its built in error handler
app.use(express.logger('dev'));
app.use(express.errorHandler());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

require('./routes')(app);

mongoose.connect(uristring, function(err, res) {
	if (err) {
		console.log("Error" + err);
	} else {
		console.log("Successfully connected to mongodb at the url: " + uristring);
	var port = Number(process.env.PORT || 8000);
	app.listen(port); 
	console.log("Express app listening on port: " + port); 
}
});




