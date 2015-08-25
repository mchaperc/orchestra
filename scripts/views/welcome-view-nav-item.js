define(['marionette', 'backbone'], 
	function(Marionette, Backbone) {
		return app.navItemView = Marionette.ItemView.extend({
			template: 'welcome-view-nav-item.dust',
			className: 'nav-item',
			tagName: 'li'
		})
	})