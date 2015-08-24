define(['backbone', 'marionette'], function(Backbone, Marionette) {
	return app.WelcomeView = Marionette.CompositeView.extend({
		template: 'welcome-page',
		className: 'main-container',
		initialize: function() {
			this.render();
		}
	})
})