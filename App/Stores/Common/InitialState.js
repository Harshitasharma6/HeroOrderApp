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
		fetchLeadSourcesLoader: false,
		getAllStatesLoader:		false,
		getAllCitiesLoader:		false,
		uploadImageLoader: false,
		getCallOptionsLoader:   false,
		getBookingPicklistLoader:     false,
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

	financier_name: [],
    model_color:  [],
	payment_mode: [],
	
	purpose_of_call: [],
	outcome_purpose_of_call:[],
	reasons_for_not_Connected:[],

	sourceEnquiryList: [],
	leadLostReasonsList: [],
	productsList: [],
	statesList: [],
	citiesList: [],
	isCallModalVisible: false,
	callConnected: false,
	callDisconnected: false,
	uploadImageField: ''
}
