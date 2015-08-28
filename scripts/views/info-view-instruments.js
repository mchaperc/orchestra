define(['backbone', 
		'marionette', 
		'templates'
		], 
	function(Backbone, Marionette, templates) {
		return InfoViewInstruments = Marionette.ItemView.extend({
			template: 'info-view-instruments.dust',
			className: 'instruments',
			tagName: 'section',
			events: {

			}
		})
	})