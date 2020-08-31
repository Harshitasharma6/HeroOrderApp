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
		registerCustomerCallLoader: false,
        registerCustomerOutgoingCallLoader: false,
        payBookingLoader: false
	},
	searchCustomerForm: {},
	registerCustomerForm: {},
    registerCustomerCallForm:{},
	registerCustomerOutgoingCallForm: {
       "call_connected__c" : "",
       "reasons_for_not_connected__c" : "Call not picked",
       "purpose_of_call__c" : "For Test Drive",
       "outcome_of_the_call__c" : "Customer Not Interested",
       "dealer_id" : "",
       "dealers_sales_person_login_info_id" : "",
       "follow_up__c": "no",
       "follow_up_date__c" : ""
    },
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
    registerCustomerCallValidation: {
    	invalid: false,
        invalid_field: ''
    },
    registerCustomerOutgoingCallValidation: {
        invalid: false,
        invalid_field: ''
    },
    payBookingFormValidation: {
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
    feedbacksMapping: {},

    payBookingForm: {}
}