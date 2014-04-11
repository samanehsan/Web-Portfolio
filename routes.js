module.exports = function(app) {
	var handlers = require('./handlers');
	app.get('/', handlers.index);
	app.get('/watch', handlers.watch);
	app.get('/home', handlers.bootstrap);
	app.get('/about', handlers.bootstrap_about);
	app.get('/biochemistry', handlers.bootstrap_biochemistry);
	app.get('/computerscience', handlers.bootstrap_computerscience);
	app.get('/contact', handlers.bootstrap_contact);
	app.get('/pinterless', handlers.pinterless);

	// Posts
	app.post('/pinterless', handlers.createPin);
}