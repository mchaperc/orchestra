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
				console.log(this.model);
				this.template = this.model.get('template');
				this.className = this.model.get('className');
				var homeClass = Backbone.history.getFragment().split('/');
			},
			onRender: function() {
			},
			goHome: function(e) {
				e.preventDefault();
				$('.main-container').animate({'right': '0%'}, 200);
				this.router.navigate('/', true);
			}
		})
	})