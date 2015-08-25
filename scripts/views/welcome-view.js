define([
	'underscore',
	'backbone', 
	'marionette', 
	'backbone.marionette.dust',
	'templates'
], 
	function(_, Backbone, Marionette, dustMarionette, templates) {
		return app.WelcomeView = Marionette.LayoutView.extend({
			template: 'welcome-page.dust',
			className: 'main-container',

			regions: {
				main: '.welcome-text',
				nav: '.welcome-nav'
			},

			initialize: function() {
				var NavView = Marionette.CollectionView.extend(this.collection);
			},
			onRender: function() {
				
			},

		});
});