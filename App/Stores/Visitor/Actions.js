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
	hideOpenLeadPrompt: null,


	updateVisitor: ['payload'],
	updateVisitorSuccess:  ['payload'],


	createFeedback: ['payload'],
	createFeedbackSuccess:  ['payload'],
	createFeedbackFailure: null,
	createFeedbackLoading: null,
	createFeedbackLoadingStop: null,
	changeCreateFeedbackForm: ['payload'],
	createFeedbackValidationFailed: ['payload'],


	getAllVisits: ['payload'],
	getAllVisitsSuccess:  ['payload'],
	getAllVisitsFailure: null,
	getAllVisitsLoading: null,
	getAllVisitsLoadingStop: null,


	getFeedbacks: ['payload'],
	getFeedbacksSuccess:  ['payload'],
	getFeedbacksFailure: null,
	getFeedbacksLoading: null,
	getFeedbacksLoadingStop: null
});

export const VisitorTypes = Types
export default Creators
