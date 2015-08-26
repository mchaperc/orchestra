define(['marionette', 'backbone', 'views/welcome-view', 'views/welcome-view-main', 'views/welcome-view-nav', 'collections/nav', 'models/welcome'], 
	function(Marionette, Backbone, WelcomeView, WelcomeMainView, NavView, NavColl, WelcomeText) {
		app.router = Marionette.AppRouter.extend({
			routes: {
				'': 'index',
				'info': 'info',
				'resources': 'resources',
				'contact': 'contact',
				'7&8': 'sevenEight',
				'6' : 'six',
				'5': 'five',
				'4': 'four'
			},
			index: function() {
				var stuff = new Backbone.Model({text: 'Some text', nav: 'a few links could go here'});
				var nav = new Backbone.Collection(_.each(NavColl.nav, function(item) {
					return item;
				}));
				var welcome = new Backbone.Model(WelcomeText);
				var welcomeView = new WelcomeView({model: nav});
				if ($('.app').html()) {
					$('.main-container').animate({'right': '0%'}, 500)
				} else {
					$('.app').append(welcomeView.render().el);
					welcomeView.showChildView('main', new WelcomeMainView({model: welcome}));
					welcomeView.showChildView('nav', new NavView({collection: nav, router: this}));
				}
			},
			info: function() {
				console.log('info');
				$('.app').css({'background-color': '#F2B701'});
			},
			resources: function() {
				$('.app').css({'background-color': '#E57D04'});
			},
			contact: function() {
				$('.app').css({'background-color': '#DC0030'});
			},
			sevenEight: function() {
				$('.app').css({'background-color': '#B10058'});
			},
			six: function() {
				$('.app').css({'background-color': '#7C378A'});
			},
			five: function() {
				$('.app').css({'background-color': '#09A275'});
			},
			four: function() {
				$('.app').css({'background-color': '#7CB854'});
			}
		});
		var router = new app.router();
		return router;
	});