define(['marionette', 'backbone', 'views/welcome-view-nav-item'], 
	function(Marionette, Backbone, NavItemView) {
		var navItem = NavItemView;
		return app.NavView = Marionette.CollectionView.extend({
			template: 'welcome-view-nav.dust',
			className: 'welcome-view-nav',
			tagName: 'ul',
			childView: navItem,
			initialize: function() {
			},
		})
	})