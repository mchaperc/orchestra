define(function() {
	return {
		routeClass: 'home-info',
		parentLinks: [
			{
				link: '#info/instruments',
				text: 'Instruments'
			},
			{
				link: '#info/handbook',
				text: 'Orchestra Handbook'
			},
			{
				link: '#info/calendar',
				text: '2015-2016 Calendar'
			},
			{
				link: '#info/stores',
				text: 'Music Stores'
			},
			{
				link: '#info/donors',
				text: 'Donors Choose'
			},
			{
				link: '#info/edmodo',
				text: 'Edmodo'
			},
			{
				link: '#info/remind',
				text: 'Remind'
			}
		],
		template: 'info-view-handbook.dust',
		className: 'handbook',
		title: 'Orchestra Handbook',
		titleSubText: 'The Orchestra Handbook has all the information that you need for the 2015-2016 school year in regards to your Orchestra class, including concert information, important dates, and grading policies. Parents/Guardians, please note that the last page of the Handbook (Handbook Contract) must be signed by you and your child and returned to Mrs. Chastain for your child to continue in Orchestra class.',
		additionalText: {
			heading: 'Have you misplaced your 2015-2016 Orchestra Handbook?',
			prompts: [
				{
					text: '<a href="https://www.dropbox.com/s/ot4j0no6fa93c7m/ES%20Handbook%201.pdf?dl=0">Click here</a> to view and print the 2015 Elementary School Handbook (5th grade).'
				},
				{
					text: '<a href="https://www.dropbox.com/s/1a32b3zwby252iz/MS%20Handbook.pdf?dl=0">Click here</a> to view and print the 2015 Middle School Handbook (6th-8th grades).'
				}
			]
		}
	}
})