module.exports = function(app) {
	var handlers = require('./handlers');
	app.get('/', handlers.index);
	app.get('/watch', handlers.watch);
	app.get('/home.html', handlers.bootstrap);
	app.get('/about.html', handlers.about);
	app.get('/biochemistry.html', handlers.biochemistry);
	app.get('/computerscience.html', handlers.cs);
	app.get('/contact.html', handlers.contact);
	app.get('/pinterless', handlers.pinterless);

	// Posts
	app.post('/pinterless', handlers.createPin);
}