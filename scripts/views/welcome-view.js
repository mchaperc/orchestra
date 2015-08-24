define('welcomeView', [
	'underscore',
	'backbone', 
	'marionette', 
	'dust', 
	'backbone.marionette.dust'
], 
	function(_, Backbone, Marionette, dust, dustMarionette) {
		console.log(dust);
		return app.WelcomeView = Marionette.CompositeView.extend({
			template: '../../templates/welcome-page',
			className: 'main-container',
			initialize: function() {
				this.model = {text: 'Some text', nav: 'a few links could go here'};
				console.log(this.template);
			}
		});
});