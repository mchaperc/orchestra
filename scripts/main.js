var app = window.app || {};

require(['marionette', 'backbone', 'dust', 'templates', 'router'], 
	function(Marionette, Backbone, dust, templates, router) {	
	app = new Marionette.Application();

	app.on('start', function() {
		if (Backbone.history) {
			Backbone.history.start();
		} else {
			console.log('no backbone router to start');
		}
	});

	$(document).ready(function(){
		app.start();
	});
})