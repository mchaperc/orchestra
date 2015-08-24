require.config({
	baseUrl: "scripts",
	paths: {
		jquery: '../bower_components/jquery/dist/jquery',
    templates: '../dist/scripts/templates',
		underscore: '../bower_components/underscore/underscore',
		backbone: '../bower_components/backbone/backbone',
		'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
		'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
		bootstrap: '../node_modules/bootstrap/dist/js/bootstrap',
		dust: '../bower_components/dustjs-linkedin/dist/dust-core',
		marionette: '../bower_components/marionette/lib/core/backbone.marionette',
		'backbone.marionette.dust': '../node_modules/backbone.marionette.dust/src/backbone.marionette.dust'
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		'dust': {
			exports: 'dust'
		},
		'bootstrap': {
			deps: ['jquery'],
			exports: 'jQuery.fn.popover'
		},
		'marionette': {
			deps: ['backbone', 'backbone.wreqr', 'backbone.babysitter'],
			exports: 'Marionette'
		}
	},
  map: {
    '*': {'dust': 'dust'}
  }
});

require(['templates']);