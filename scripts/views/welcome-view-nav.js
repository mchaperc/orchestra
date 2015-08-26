define(['marionette', 'backbone', 'views/welcome-view-nav-item'], 
	function(Marionette, Backbone, NavItemView) {
		var navItem = NavItemView;
		return app.NavView = Marionette.CollectionView.extend({
			template: 'welcome-view-nav.dust',
			className: 'welcome-view-nav',
			tagName: 'ul',
			childView: navItem,
			events: {
				'click .nav-item > a': 'showContent'
			},
			initialize: function(options) {
				this.router = options.router
			},
			showContent: function(e) {
				e.preventDefault();
				$('.main-container').animate({'position': 'absolute','right': '94.5%'}, 500)
				this.router.navigate($(e.currentTarget).attr('href'), true);
			}
		})
	})