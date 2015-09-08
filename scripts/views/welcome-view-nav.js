define(['marionette', 'backbone', 'views/welcome-view-nav-item'], 
	function(Marionette, Backbone, NavItemView) {
		var navItem = NavItemView;
		return NavView = Marionette.CollectionView.extend({
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
				$('.main-container').addClass('shift-left');
				this.router.navigate($(e.currentTarget).attr('href'), true);
			}
		})
	})