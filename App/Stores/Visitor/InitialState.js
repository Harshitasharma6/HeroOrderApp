/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
	loaders: {
		searchCustomerLoader: false,
		registerCustomerLoader: false
	},
	searchCustomerForm: {},
	registerCustomerForm: {},
	visitorSearchSuccessData: {},
	searchCustomerValidation: {
        invalid: false,
        invalid_field: ''
    },

    registerCustomerValidation: {
    	invalid: false,
        invalid_field: ''
    },
    showOpenLeadPrompt: false
}
