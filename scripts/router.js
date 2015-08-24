define('appRouter', ['marionette', 'backbone', 'welcomeView', 'dust'], 
	function(Marionette, Backbone, WelcomeView) {
		app.router = Marionette.AppRouter.extend({
			routes: {
				'': 'index'
			},
			index: function() {
				console.log('in index');
				var welcomeView = new WelcomeView();
				$('.app').append(welcomeView.el);
			}
		});
		var router = new app.router();
		return router;
	});