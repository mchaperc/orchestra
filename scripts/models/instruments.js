define(function() {
	return {
		routeClass: 'home-info',
		template: 'info-view-instruments.dust',
		className: 'instruments',
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
		title: 'Instruments',
		titleSubText: 'You have several options when obtaining an instrument for your child: renting from the school, renting from a company, or purchasing an instrument to own. Please continue reading below for more information on each option.',
		content: [
			{
				subTitle1: 'How do I...',
				subTitle2: 'rent an instrument?',
				bullets: [
					{
						text: 'You can rent an instrument from your school or from another company. Renting an instrument from your school costs $50 for the year for 5th Graders, and $75 for the year for Grades 6-12 no matter what instrument you choose! Many students who play large instruments (cello and bass) rent one instrument to keep at home and another to keep at school, in order to prevent damages carrying the instrument back and forth to school. (Please note, some rent two instruments so that students don\'t run into issues with instruments on buses- we have had situations where large instruments are not allowed on the buses because there is no room.) Renting from the school is a cheaper and safer option, as you are only responsible for up to $225.00 in damages when renting with the school. In order for your child to receive a school instrument, you must return an Instrument Rental Agreement  (given to your child on the first day of school, also available for download below) that is signed by a parent/guardian and filled out completely to get an instrument from the school. These instruments are first come, first serve.'
					},
					{
						text: 'If you want to rent from a music company, we highly recommend Music and Arts. If you are interested in renting from Music and Arts, please come to our Instrument Rental Night on August 26 from 6-8 pm at Sims Middle School and meet with a Music and Arts representative. The cost to rent a violin from Music & Arts could be $234 for the year, and larger instruments are more expensive.  When renting from a company, you are responsible for any and all damages.'
					}
				],
			},
			{
				subTitle1: 'Should I...',
				subTitle2: 'buy an instrument?',
				bullets: [
					{
						text: 'SCAM ALERT! We recommend that you purchase an instrument with the help of your teachers. There are many scam artists on the Internet that are more than happy to sell you an instrument, and some may look really cool! (Cool colors or designs) But these usually turn out to be violin-shaped objects... Not real instruments. Your teacher can help you determine if the instrument you want to buy is a quality instrument.'

					},
					{
						text: 'Why does it matter? If you purchase a scam instrument, you can pay MUCH more than the instrument is worth (and what you paid for it) just to get it to work!'
					},
					{
						text: 'Below is a document to help you decide if the instrument is just a violin-shaped object or a real instrument. However, please contact your teacher if you are interested in purchasing an instrument- they know lots about instruments and can help you find the perfect instrument for your budget!'
					}
				]
			}
		]	
	}
})