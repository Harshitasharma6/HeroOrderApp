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
    	"model_sfid": '',
    	"vehicle_number": '',
		"ride_comfort": 0,
		"responsiveness_of_vehicle": 0,
		"ease_of_handling": 0,
		"overall_experience": 0,
		"enquiry_id": 0
    },
    visitsMapping: {},
    feedbacksMapping: {}
}