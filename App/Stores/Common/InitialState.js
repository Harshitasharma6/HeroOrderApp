export const INITIAL_STATE = {
	isNetworkBannerVisible: false,
	currentScreen: 'SplashScreen',
	
	genericActionModal: {
		visible: false,
		content: [],
		heading: '',
		bodyFlexHeight: '',
		disable: false
	},

	occupationList: [
		{ id: 'Business', name: 'Business' },
		{ id: 'Employee', name: 'Employee' },
		{ id: 'Student', name: 'Student' },
		{ id: 'Retired', name: 'Retired' },
		{ id: 'Others', name: 'Others' }
	],


	sourceEnquiryList: [
		{ id: 'Showroom', name: 'Showroom' },
		{ id: 'Website', name: 'Website' },
		{ id: 'Reference', name: 'Event' },
		{ id: 'Event', name: 'Event' }
	],

	productsList: [
		{ id: 'Flash LA', name: 'Flash LA' },
		{ id: 'Optima LA', name: 'Optima LA' },
		{ id: 'Flash LI', name: 'Flash LI' },
		{ id: 'Optima LI', name: 'Optima LI' }
	],
}
