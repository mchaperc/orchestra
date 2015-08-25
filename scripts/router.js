define(['marionette', 'backbone', 'views/welcome-view', 'views/welcome-view-main', 'views/welcome-view-nav', 'collections/nav', 'models/welcome'], 
	function(Marionette, Backbone, WelcomeView, WelcomeMainView, NavView, NavColl, WelcomeText) {
		app.router = Marionette.AppRouter.extend({
			routes: {
				'': 'index'
			},
			index: function() {
				var stuff = new Backbone.Model({text: 'Some text', nav: 'a few links could go here'});
				var nav = new Backbone.Collection(_.each(NavColl.nav, function(item) {
					return item;
				}));
				var welcome = new Backbone.Model(WelcomeText);
				var welcomeView = new WelcomeView({model: nav});
				$('.app').append(welcomeView.render().el);
				welcomeView.showChildView('main', new WelcomeMainView({model: welcome}));
				welcomeView.showChildView('nav', new NavView({collection: nav}));
			}
		});
		var router = new app.router();
		return router;
	});