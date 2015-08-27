define(['marionette', 
		'backbone', 
		'views/welcome-view', 
		'views/welcome-view-main', 
		'views/welcome-view-nav', 
		'views/info-nav',
		'views/main-content-layout',
		'views/info-view-instruments',
		'collections/nav', 
		'models/welcome', 
		'models/info', 
		'models/instruments'
		], 
	function(Marionette, Backbone, WelcomeView, WelcomeMainView, NavView, InfoNav, MainContentView, InstrumentView, NavColl, WelcomeText, Info, Instruments) {
		app.router = Marionette.AppRouter.extend({
			routes: {
				'': 'index',
				'info': 'info',
				'info/instruments': 'instruments',
				'info/handbook': 'handbook',
				'info/calendar': 'calendar',
				'info/stores': 'stores',
				'info/donors': 'donors',
				'info/edmodo': 'edmodo',
				'info/remind': 'remind',
				'resources': 'resources',
				'contact': 'contact',
				'7&8': 'sevenEight',
				'6' : 'six',
				'5': 'five',
				'4': 'four'
			},

			initialize: function() {
				this.nav = new Backbone.Collection(_.each(NavColl.nav, function(item) {
					return item;
				}));
				this.welcome = new Backbone.Model(WelcomeText);
				this.info = new Backbone.Model({Info});
				this.welcomeView = new WelcomeView({model: this.nav}); 
				this.contentView = new MainContentView();
			},

			index: function() {
				if ($('.app').html()) {
					$('.main-container').animate({'right': '0%'}, 500)
				} else {
					$('.app').append(this.welcomeView.render().el);
					this.welcomeView.showChildView('main', new WelcomeMainView({model: this.welcome}));
					this.welcomeView.showChildView('nav', new NavView({collection: this.nav, router: this}));
				}
			},
			info: function() {
				this.checkContent();
				$('.app').attr('class', 'app info');
				this.welcomeView.showChildView('mainContent', this.contentView);
				this.contentView.showChildView('upperContent', new InfoNav({model: this.info}));

			},
			instruments: function() {
				this.checkContent();
				$('.app').attr('class', 'app info');
				var instruments = new Backbone.Model({Instruments});
				this.welcomeView.showChildView('mainContent', this.contentView);
				this.contentView.showChildView('upperContent', new InfoNav({model: this.info}));
				this.contentView.showChildView('lowerContent', new InstrumentView({model: instruments}))
				console.log('instruments');
			},
			handbook: function() {

			},
			calendar: function() {

			},
			stores: function() {

			},
			donors: function() {

			},
			edmodo: function() {

			},
			remind: function() {

			},
			resources: function() {
				this.checkContent();
				$('.app').attr('class', 'app resources');
			},
			contact: function() {
				this.checkContent();
				$('.app').attr('class', 'app contact');
			},
			sevenEight: function() {
				this.checkContent();
				$('.app').attr('class', 'app sevenEight');
			},
			six: function() {
				this.checkContent();
				$('.app').attr('class', 'app six');
			},
			five: function() {
				this.checkContent();
				$('.app').attr('class', 'app five');
			},
			four: function() {
				this.checkContent();
				$('.app').attr('class', 'app four');
			},

			checkContent: function() {
				if (!$('.app').html()) {
					$('.app').append(this.welcomeView.render().el);
					this.welcomeView.showChildView('main', new WelcomeMainView({model: this.welcome}));
					this.welcomeView.showChildView('nav', new NavView({collection: this.nav, router: this}));
					$('.main-container').animate({'position': 'absolute', 'right': '94.5%'});
				}
			}
		});
		var router = new app.router();
		return router;
	});