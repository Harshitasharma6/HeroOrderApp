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
		fetchLeadLostReasonsLoader: false,
		fetchLeadSourcesLoader: false
	},

	occupationList: [
		{ id: 'Business', name: 'Business' },
		{ id: 'Employee', name: 'Employee' },
		{ id: 'Student', name: 'Student' },
		{ id: 'Retired', name: 'Retired' },
		{ id: 'Others', name: 'Others' }
	],

	schemeApplicableList: [
		{ id: 'a0B9D000001HWnfUAG', name: 'a0B9D000001HWnfUAG' },
		
	],

	sourceEnquiryList: [],
	leadLostReasonsList: [],
	productsList: []
}
