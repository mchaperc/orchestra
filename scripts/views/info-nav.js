define(['backbone', 'marionette', 'templates'], 
	function(Backbone, Marionette, templates) {
		return infoView = Marionette.ItemView.extend({
			template: 'info-view.dust',
			tagName: 'section',
			className: 'content info-container',
			events: {
			},
			initialize: function() {
				console.log('hello');
			},
		})
	})