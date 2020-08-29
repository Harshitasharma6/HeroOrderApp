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
		{ id: 'a0B9D000001HWiMUAW', name: 'Cash Discount Policy' },
		{ id: 'a0e1e00000007QKAAY', name: 'Bajaj Finserv Scheme'}
		
	],

	sourceEnquiryList: [],
	leadLostReasonsList: [],
	productsList: [],
	isCallModalVisible: false,
	callConnected: false,
	callDisconnected: false
}
