define(function() {
	return {
		template: 'five-view.dust',
		className: 'five',
		routeClass: 'home-five',
		about: {
			title: 'About Mrs. C',
			img: 'http://mrschastainsorchestra.weebly.com/uploads/3/1/1/0/31108723/2456707.jpg?134',
			aboutText: 'Mrs. C is an Orchestra/Music teacher at Jonesville Elementary/Middle, Lockhart Schools, and Foster Park Elementary. She loves coffee, sewing, all things Disney, teaching private lessons,  & hiking with her husband (Mr. Chastain) and their puppy, Coda. Mrs. C is a graduate of Converse College and the Fine Arts Center.',
			posts: [
				{
					postTitle: 'Need Some Review On Positioning or Your Open Strings?',
					date: '8/27/2015',
					content: [
						{
							contentTitle: 'How To Find Great Cello Positioning',
							video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/D58DRwwQGo0" frameborder="0" allowfullscreen></iframe>'
						},
						{
							contentTitle: 'How To Get To "Play" Position for Violins & Violas',
							video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/PFFL2Hezs9M" frameborder="0" allowfullscreen></iframe>'
						},
						{
							contentTitle: '"Ants Song" for Violins & Basses',
							video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/O5_uZCmEHuM" frameborder="0" allowfullscreen></iframe>'
						},
						{
							contentTitle: '"Ants Song" for Violas Cellos',
							video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/wXvia6pYU8c" frameborder="0" allowfullscreen></iframe>'
						}
					]
				},
				{
					postTitle: 'Start the Year with a BANG!',
					date: '8/15/2015',
					content: {
						text: 'Because I\'m so THUNDERSTRUCK by how amazing you are- the secret word is "THUNDERSTRUCK!" Tell Mrs. C during the next class and earn something extra special. :) (By the way, I hope you\'re a LOT nicer to your bows & instruments than these guys...) This group is called "2Cellos:" Luka Sulic and Stjepan Hauser are their names. They both went to college at two of the top music schools in the world and won many international music competitions- playing classical music! They\'ve played with Elton John, appeared on TV shows like the Tonight Show, GLEE, and Ellen Degeneres Show, among others. They are just as happy playing classical music as they are playing rock music.  Click here to check out their website!',
						video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/uT3SBzmDxGk" frameborder="0" allowfullscreen></iframe>'
					}
				}
			]
		}
	}
})