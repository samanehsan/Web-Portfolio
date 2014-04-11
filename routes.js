module.exports = function(app) {
	var handlers = require('./handlers');
	app.get('/', handlers.index);
	app.get('/watch', handlers.watch);
	app.get('/home', handlers.bootstrap);
	app.get('/about', handlers.about);
	app.get('/biochemistry', handlers.biochemistry);
	app.get('/computerscience', handlers.cs);
	app.get('/contact', handlers.contact);
	app.get('/pinterless', handlers.pinterless);

	// Posts
	app.post('/pinterless', handlers.createPin);
}