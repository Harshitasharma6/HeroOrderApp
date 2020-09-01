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
		uploadImageLoader: false
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

	financier_name: [
           {id: "Bajaj Finance",name: "Bajaj Finance"},
           {id:  "Loan Tap",name:  "Loan Tap"},
           {id: "HDFC",name: "HDFC"},
           {id: "IDFC Bank",name: "IDFC Bank"},
           {id: "Wheels EMI",name: "Wheels EMI"},
           {id: "Pine Lab",name: "Pine Lab"},
           {id: "Reds Money",name: "Reds Money"},
           {id: "Others",name: "Others"}
       ],
       model_color: [
       	   {id: "Red",name: "Red"},
           {id:  "Green",name:  "Green"},
           {id: "Blue",name: "Blue"},
           {id: "Silver",name: "Silver"},
           {id: "Black",name: "Black"},
           {id: "White",name: "White"},
           {id: "Grey",name: "Grey"},
           {id: "Burgandy",name: "Burgandy"},
           {id: "Bedge-Brown",name: "Bedge-Brown"}
       ],
       payment_mode: [
       	  {id: "Digital",name: "Digital"},
           {id:  "Cash",name:  "Cash"},
           {id: "Cheque",name: "Cheque"}
       ],

	sourceEnquiryList: [],
	leadLostReasonsList: [],
	productsList: [],
	statesList: [],
	citiesList: [],
	isCallModalVisible: false,
	callConnected: false,
	callDisconnected: false
}
