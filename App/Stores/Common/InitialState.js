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

	loaders: {
		getAllProductsLoader: false,
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
		{ id: 'Reference', name: 'Reference' },
		{ id: 'Event', name: 'Event' }
	],

	productsList: []
}
