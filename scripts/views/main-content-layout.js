define(['backbone', 
		'marionette', 
		'backbone.marionette.dust', 
		'templates'
], 
	function(Backbone, Marionette, dustMarionette, templates) {
		return MainContentLayout = Marionette.LayoutView.extend({
			regions: {
				contentContainer: '.contentContainer'
			},
			events: {
				'click .home': 'goHome'
			},
			initialize: function(options) {
				this.router = options.router;
				this.key = options.key;
				this.template = this.model.get('template');
				this.className = this.model.get('className');
				var homeClass = Backbone.history.getFragment().split('/');
			},
			onRender: function() {
			},
			goHome: function(e) {
				e.preventDefault();
				$('.main-container').removeClass('shift-left');
				$('.main-container').addClass('shift-right');
				this.router.navigate('/', true);
			}
		})
	})