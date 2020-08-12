import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	searchCustomer: ['payload'],
	searchCustomerSuccess:  ['payload'],
	searchCustomerFailure: null,
	searchCustomerLoading: null,
	searchCustomerLoadingStop: null,
	changeSearchCustomerForm: ['payload'],
	searchCustomerValidationFailed: ['payload'],



	registerCustomer: ['payload'],
	registerCustomerSuccess:  ['payload'],
	registerCustomerFailure: null,
	registerCustomerLoading: null,
	registerCustomerLoadingStop: null,
	changeRegisterCustomerForm: ['payload'],
	registerCustomerValidationFailed: ['payload'],
	showOpenLeadPrompt: null,
	hideOpenLeadPrompt: null
});

export const VisitorTypes = Types
export default Creators
