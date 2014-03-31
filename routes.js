module.exports = function(app) {
	var handlers = require('./handlers');
	app.get('/', handlers.index);
	app.get('/', handlers.watch);
	app.get('/bootstrap', handlers.bootstrap);
	app.get('/pinterless', handlers.pinterless);

	// Posts
	app.post('/pinterless', handlers.createPin);
}