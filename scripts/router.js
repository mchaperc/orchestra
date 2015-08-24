require(['marionette', 'backbone'], 
	function(Marionette, Backbone, _, $) {
		app.router = Marionette.AppRouter.extend({
			
			routes: {
				'': 'index'
			},

			index: function() {
				console.log('in index');
			}
		});
		var router = new app.router();
		return router;
	});