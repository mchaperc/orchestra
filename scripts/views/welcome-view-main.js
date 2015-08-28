define(['marionette', 'backbone'],
	function(Marionette, Backbone) {
		return WelcomeViewMain = Marionette.ItemView.extend({
			template: 'welcome-view-main.dust',
			className: 'welcome-content col-md-11',
			events: {
				'click .welcome-video-button': 'showVideo'
			},
			initialize: function() {
				
			},
			showVideo: function(e) {
				e.preventDefault();
				$('.welcome-content').hide();
				$('.welcome-text').append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ctfjP3e7Qcw" frameborder="0" allowfullscreen></iframe>');
			}
		})
	})