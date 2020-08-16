/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
	loaders: {
		searchCustomerLoader: false,
		registerCustomerLoader: false,
		createFeedbackLoader: false,
		getAllVisitsLoader: false,
		getFeedbacksLoader: false,
	},
	searchCustomerForm: {},
	registerCustomerForm: {},
	currentVisitorData: {},
	visitorSearchSuccessData: {},
	searchCustomerValidation: {
        invalid: false,
        invalid_field: ''
    },
    registerCustomerValidation: {
    	invalid: false,
        invalid_field: ''
    },
    createFeedbackValidation: {
    	invalid: false,
        invalid_field: ''
    },
    showOpenLeadPrompt: false,
    currentEnquiryId: 133,
    feedbackForm: {
		"model_name__c": "",
		"vehicle_no__c": "",
		"ride_comfort__c": 0,
		"responsiveness_of_the_vehicle__c": 0,
		"ease_of_handeling__c": 0,
		"overall_experience__c": 0
    },
    visitsMapping: {},
    feedbacksMapping: {}
}