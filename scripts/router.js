define(['marionette', 'backbone', './views/welcome-view'], 
	function(Marionette, Backbone, WelcomeView) {
		app.router = Marionette.AppRouter.extend({
			routes: {
				'': 'index'
			},
			index: function() {
				console.log('in index');
				var welcomeView = new WelcomeView();
				$('app').html(welcomeView.el);
			}
		})
		var router = new app.router();
		return router;
	})

// require(['marionette', 'backbone', './views/welcome-view'], 
// 	function(Marionette, Backbone, _, $, WelcomeView) {
// 		app.router = Marionette.AppRouter.extend({

// 			routes: {
// 				'': 'index'
// 			},

// 			index: function() {
// 				console.log('in index');
// 				var welcomeView = new WelcomeView();
// 				$('app').html(welcomeView.el);
// 			}
// 		});
// 		var router = new app.router();
// 		return router;
// 	});