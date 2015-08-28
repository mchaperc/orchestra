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
				this.template = this.model.get(this.key).template;
				this.className = this.model.get(this.key).className;
				var homeClass = Backbone.history.getFragment().split('/');
				// $('div.home a').attr('class', 'home home-'+homeClass[0]); 
			},
			onRender: function() {
				console.log($('.home'))
				console.log($('.main-content'));
				console.log($('.nav-bar'));
			},
			goHome: function(e) {
				e.preventDefault();
				$('.main-container').animate({'right': '0%'}, 200);
				this.router.navigate('/', true);
			}
		})
	})