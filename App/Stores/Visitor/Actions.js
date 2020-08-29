import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	searchCustomer: ['payload'],
	searchCustomerSuccess:  ['payload'],
	searchCustomerFailure: null,
	searchCustomerLoading: null,
	searchCustomerLoadingStop: null,
	clearSearchCustomerForm: null,
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
	setRegistrationForm: ['payload'],
	clearRegistrationForm: null,


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
	getFeedbacksLoadingStop: null,


	setCurrentEnquiry: ['payload'],
	clearCurrentEnquiry: null,


	registerCustomerCall: ['payload'],
	registerCustomerCallSuccess:  ['payload'],
	registerCustomerCallFailure: null,
	registerCustomerCallLoading: null,
	registerCustomerCallLoadingStop: null,
	changeRegisterCustomerCallForm: ['payload'],
	registerCustomerCallValidationFailed: ['payload'],


	registerCustomerOutgoingCall: ['payload'],
	registerCustomerOutgoingCallSuccess:  ['payload'],
	registerCustomerOutgoingCallFailure: null,
	registerCustomerOutgoingCallLoading: null,
	registerCustomerOutgoingCallLoadingStop: null,
	clearRegisterCustomerOutgoingCallForm: null,
	changeRegisterCustomerOutgoingCallForm: ['payload'],
	registerCustomerOutgoingCallValidationFailed: ['payload'],


	payBooking: ['payload'],
	payBookingSuccess:  ['payload'],
	payBookingFailure: null,
	payBookingLoading: null,
	payBookingLoadingStop: null,
	changePayBookingForm: ['payload'],
	clearPayBookingForm: ['payload'],
	payBookingValidationFailed: ['payload'],
});

export const VisitorTypes = Types
export default Creators
