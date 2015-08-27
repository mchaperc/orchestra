define(['backbone', 
		'marionette', 
		'backbone.marionette.dust', 
		'templates'
], 
	function(Backbone, Marionette, dustMarionette, templates) {
		return app.MainContentLayout = Marionette.LayoutView.extend({
			template: 'main-content-view.dust',
			className: 'main-content-container',
			regions: {
				upperContent: '.upperContent',
				lowerContent: '.lowerContent'
			}
		})
	})