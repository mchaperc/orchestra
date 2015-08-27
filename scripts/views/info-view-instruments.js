define(['backbone', 
		'marionette', 
		'templates'
		], 
	function(Backbone, Marionette, templates) {
		return app.InfoViewInstruments = Marionette.ItemView.extend({
			template: 'info-view-instruments.dust',
			className: 'instruments',
			tagName: 'section',
			events: {

			}
		})
	})