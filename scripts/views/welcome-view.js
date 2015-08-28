define([
	'backbone', 
	'marionette', 
	'backbone.marionette.dust',
	'templates'
], 
	function(Backbone, Marionette, dustMarionette, templates) {
		return WelcomeView = Marionette.LayoutView.extend({
			template: 'welcome-page.dust',
			className: 'main-container',

			regions: {
				main: '.welcome-text',
				nav: '.welcome-nav',
				mainContent: '.main-content'
			}

		});
});