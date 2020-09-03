import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
	selectActionable: ['payload'],
	selectFollowUp: ['payload'],


	fetchHotLeads: ['payload'],
	fetchHotLeadsSuccess: ['payload'],
	fetchHotLeadsFailure: null,
	fetchHotLeadsLoading: null,
	fetchHotLeadsLoadingStop: null,


	fetchBookingConfirmFinanceLeads: ['payload'],
	fetchBookingConfirmFinanceLeadsSuccess: ['payload'],
	fetchBookingConfirmFinanceLeadsFailure: null,
	fetchBookingConfirmFinanceLeadsLoading: null,
	fetchBookingConfirmFinanceLeadsLoadingStop: null,


	fetchPurchaseOverdue: ['payload'],
	fetchPurchaseOverdueSuccess: ['payload'],
	fetchPurchaseOverdueFailure: null,
	fetchPurchaseOverdueLoading: null,
	fetchPurchaseOverdueLoadingStop: null,


	fetchOpenLeads: ['payload'],
	fetchOpenLeadsSuccess: ['payload'],
	fetchOpenLeadsFailure: null,
	fetchOpenLeadsLoading: null,
	fetchOpenLeadsLoadingStop: null,


	fetchCallLeads: ['payload'],
	fetchCallLeadsSuccess: ['payload'],
	fetchCallLeadsFailure: null,
	fetchCallLeadsLoading: null,
	fetchCallLeadsLoadingStop: null,


	
	fetchAllOpenLeads: ['payload'],
	fetchAllOpenLeadsSuccess: ['payload'],
	fetchAllOpenLeadsFailure: null,
	fetchAllOpenLeadsLoading: null,
	fetchAllOpenLeadsLoadingStop: null,

	
	fetchNoAction: ['payload'],
	fetchNoActionSuccess: ['payload'],
	fetchNoActionFailure: null,
	fetchNoActionLoading: null,
	fetchNoActionLoadingStop: null,


	markLeadLost: ['payload'],
	markLeadLostSuccess: ['payload'],
	markLeadLostFailure: null,
	markLeadLostLoading: null,
	markLeadLostLoadingStop: null,
	changeLeadLostForm: ['payload'],
	clearLeadLostForm: null,

	markLeadWon: ['payload'],
	markLeadWonSuccess: ['payload'],
	markLeadWonFailure: null,
	markLeadWonLoading: ['payload'],
	markLeadWonLoadingStop: null,
	
	

	fetchTodayFollowUp: ['payload'],
	fetchTodayFollowUpSuccess: ['payload'],
	fetchTodayFollowUpFailure: null,
	fetchTodayFollowUpLoading: null,
	fetchTodayFollowUpLoadingStop: null,


	fetchConfirmedBooking: ['payload'],
	fetchConfirmedBookingSuccess: ['payload'],
	fetchConfirmedBookingFailure: null,
	fetchConfirmedBookingLoading: null,
	fetchConfirmedBookingLoadingStop: null,

	updateBookingSearchFilters: ['payload']

	

});

export const LeadAlertTypes = Types
export default Creators


