define(function() {
	return {
		template: 'contact-view.dust',
		className: 'contact',
		routeClass: 'home-contact',
		title: 'Do you have any questions or concerns?',
		titleSubText: 'Please fill out the contact form below and I\'ll get in touch with you as soon as possible. You may also email me or call any of the schools that I have listed below. Thank you!',
		form: [
			{
				infoType: 'Parent Name',
				inputs: [
					{
						required: true,
						type: 'text',
						label: 'First'
					},
					{
						required: true,
						type: 'text',
						label: 'Last'
					}
				]	
			},
			{
				infoType: 'Student Name',
				inputs: [
					{
						required: true,
						type: 'text',
						label: 'First'	
					},
					{
						required: true,
						type: 'text',
						label: 'Last'
					}
				]
			},
			{
				infoType: 'Phone Number',
				inputs: [
					{
						required: true,
						type: 'tel'
					}
				]
			},
			{
				infoType: 'Email',
				inputs: [
					{
						required: false,
						type: 'email'
					}
				]
			},
			{
				infoType: 'Comment',
				textarea: [
					{
						required: true,
						type: 'textarea'
					}
				]
			},
			{
				infoType: '',
				inputs: [
					{
						action: 'mailto:mchaperc@yahoo.com',
						type: 'submit'
					}
				]
			},
		],
		footer: {
			heading: 'Contact Mrs. C',
			email: 'ejchastain@union.k12.sc.us',
			numbers: [
				{
					num: '(864) 429-175,  ext. 46 (Orchestra Office)'
				},
				{
					num: '(864) 674-5518 (Jonesville Elementary/Middle)'
				},
				{
					num: '(864) 429-1737 (Foster Park Elementary)'
				},
				{
					num: '(864) 545-6501 (Lockhart Middle/Elementary)'
				}
			]
		}
	}
}) 