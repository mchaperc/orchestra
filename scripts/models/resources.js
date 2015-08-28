define(function() {
	return {
		template: 'resources-view.dust',
		className: 'resources',
		routeClass: 'home-resources',
		title: 'Check out these music resources!',
		resources: [
			{
				link: 'https://www.youtube.com/channel/UC09rf4w7WYeRazpNPKdVZWA',
				text: 'Click here to visit Mrs. Chastain\'s YouTube channel, with instructional videos and extra help on topics we work on in class.'
			},
			{
				link: 'http://www.musictheory.net/exercises',
				text: ' Visit this Music Theory site for trainers to get better at reading notes, identifying key signatures, and learning new concepts! (Click the "Note Trainer" for note-reading drills. Click "Customize" at the top right of the screen to choose a different clef or a different range of notes!)'
			},
			{
				link: 'http://www.metronomeonline.org/',
				text: 'Online Metronome: Don\'t have a metronome at home? No trouble, just visit this website for an online metronome!'
			},
			{
				link: 'http://www.sfskids.org/',
				text: 'San Francisco Symphony Orchestra KIDS: Music, fun, games, exploring... What\'s not to love?'
			},
			{
				link: 'http://www.dsokids.com/',
				text: 'DSO Kids: The Dallas Symphony Orchestra website, filled with games, activities, composers- their biographies and their music!'
			},
			{
				link: 'https://www.edmodo.com/',
				text: 'Edmodo: Link up with your class! Complete assignments, quizzes, polls, and get in touch with Mrs. Chastain... It\'s like Facebook for school!'
			},
			{
				games: [

					{
						link: 'http://www.musicracer.com/',
						text: 'Musicracer.com'
					},
					{
						link: 'http://artsedge.kennedy-center.org/interactives/steprightup/whackanote/whackanote.html',
						text: 'Whack-A-Note'
					},
					{
						link: 'http://artsedge.kennedy-center.org/multimedia/Interactives/quack-and-whack/quackin-rhythms',
						text: 'Quackin\' Rhythms'
					}
				]
			},
		],
		apps: [
			{
				text: 'Edmodo'
			},
			{
				text: 'MelodyMelody matching game'
			},
			{
				text: 'NoteWorks (Munchie Game)'
			},
			{
				text: 'The Orchestra App'
			},
			{
				text: 'Musictheory App'
			},
			{
				text: 'ClearTune tuner'
			},
			{
				text: 'ProMetronome'
			},
			{
				text: 'GarageBand'
			},
			{
				text: 'Read Music'
			},
			{
				text: 'SpeakBeat Metronome'
			},
			{
				text: 'Zondle'
			}
		]
	}
})