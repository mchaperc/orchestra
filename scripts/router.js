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
		'models/instruments',
		'models/handbook',
		'models/resources',
		'models/contact',
		'models/7&8',
		'models/six',
		'models/five',
		'models/four'
		], 
	function(Marionette, Backbone, WelcomeView, WelcomeMainView, NavView, InfoNav, MainContentView, InstrumentView, NavColl, WelcomeText, Info, Instruments, Handbook, Resources, Contact, SevenEight, Six, Five, Four) {
		return router = Marionette.AppRouter.extend({
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

			initialize: function(app) {
				this.nav = new Backbone.Collection(_.each(NavColl.nav, function(item) {
					return item;
				}));
				this.app = app;
				this.welcome = new Backbone.Model(WelcomeText);
				this.info = new Backbone.Model(Info);
				console.log('has new changes');
				this.welcomeView = new WelcomeView({model: this.nav});
			},

			index: function() {
				if (this.app.getRegion('main').hasView()) {
					$('.main-container').animate({'right': '0%'}, 500);
				} else {
					this.app.getRegion('main').show(this.welcomeView);
					this.welcomeView.showChildView('main', new WelcomeMainView({model: this.welcome}));
					this.welcomeView.showChildView('nav', new NavView({collection: this.nav, router: this}));
				}
				if ($('.welcome-content:hidden')) {
					$('iframe').remove();
					$('.welcome-content').show();
				}
			},
			info: function() {
				this.checkContent();
				$('.app').attr('class', 'app info');
				var contentView = new MainContentView({model: this.info, router: this, key: 'Info'});
				this.welcomeView.showChildView('mainContent', contentView);
			},
			instruments: function() {
				this.checkContent();
				$('.app').attr('class', 'app info');
				var instruments = new Backbone.Model({Instruments});
				var contentView = new MainContentView({model: instruments, router: this, key: 'Instruments'});
				this.welcomeView.showChildView('mainContent', contentView);
				this.cleanUpInfo();
			},
			handbook: function() {
				this.checkContent();
				$('.app').attr('class', 'app info');
				var handbook = new Backbone.Model({Handbook});
				var contentView = new MainContentView({model: handbook, router: this, key: 'Handbook'});
				this.welcomeView.showChildView('mainContent', contentView);
			},
			calendar: function() {
				this.checkContent();
				this.cleanUpInfo();
			},
			stores: function() {
				this.checkContent();
				this.cleanUpInfo();
			},
			donors: function() {
				this.checkContent();
				this.cleanUpInfo();
			},
			edmodo: function() {
				this.checkContent();
				this.cleanUpInfo();
			},
			remind: function() {
				this.checkContent();
				this.cleanUpInfo();
			},
			resources: function() {
				this.checkContent();
				$('.app').attr('class', 'app resources');
				var resources = new Backbone.Model({Resources});
				var contentView = new MainContentView({model: resources, router: this, key: 'Resources'});
				this.welcomeView.showChildView('mainContent', contentView);
			},
			contact: function() {
				this.checkContent();
				$('.app').attr('class', 'app contact');
				var contact = new Backbone.Model({Contact});
				var contentView = new MainContentView({model: contact, router: this, key: 'Contact'});
				this.welcomeView.showChildView('mainContent', contentView);
			},
			sevenEight: function() {
				this.checkContent();
				$('.app').attr('class', 'app sevenEight');
				var sevenEight = new Backbone.Model({SevenEight});
				var contentView = new MainContentView({model: sevenEight, router: this, key: 'SevenEight'});
				this.welcomeView.showChildView('mainContent', contentView);
			},
			six: function() {
				this.checkContent();
				$('.app').attr('class', 'app six');
				var six = new Backbone.Model({Six});
				var contentView = new MainContentView({model: six, router: this, key: 'Six'});
				this.welcomeView.showChildView('mainContent', contentView);
			},
			five: function() {
				this.checkContent();
				$('.app').attr('class', 'app five');
				var five = new Backbone.Model({Five});
				var contentView = new MainContentView({model: five, router: this, key: 'Five'});
				this.welcomeView.showChildView('mainContent', contentView);
			},
			four: function() {
				this.checkContent();
				$('.app').attr('class', 'app four');
				var four = new Backbone.Model({Four});
				var contentView = new MainContentView({model: four, router: this, key: 'Four'});
				this.welcomeView.showChildView('mainContent', contentView);
			},
			cleanUpInfo: function() {
				if ($('.parent-info-text')) {
					$('.parent-info-text').remove();
				}
				$('.parent-info-links li').each(function(index, value) {
					if ($(value).hasClass('selected')) {
						$(value).removeClass('selected');
					}
				})
				$('a[href="'+ '#' + Backbone.history.getFragment() + '"] li').addClass('selected');
			},
			checkContent: function() {
				if (!this.app.getRegion('main').hasView()) {
					this.app.getRegion('main').show(this.welcomeView);
					this.welcomeView.showChildView('main', new WelcomeMainView({model: this.welcome}));
					this.welcomeView.showChildView('nav', new NavView({collection: this.nav, router: this}));	
				}
				if ($('.main-container').css('position') !== 'absolute') {
					$('.main-container').animate({'position': 'absolute', 'right': '94.5%'}, 500);
				}
			}
		});
	});