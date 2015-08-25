define(['marionette', 'backbone'],
	function(Marionette, Backbone) {
		return app.WelcomeViewMain = Marionette.ItemView.extend({
			template: 'welcome-view-main.dust',
			className: 'welcome-content col-md-11'
		})
	})