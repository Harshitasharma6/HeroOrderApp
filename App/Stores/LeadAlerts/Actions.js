import { createActions } from 'reduxsauce'


// hotLeads:[],
//     bookingConfirmFinanceLead: [],
//     purchaseOverdue: [],
//     openLeads: [],
//     noAction: [],

//      fetchHotLeadsLoader: false,
//     	fetchBookingConfirmFinanceLeadsLoader: false,
//     	fetchPurchaseOverdueLoader: false,
//     	fetchOpenLeadsLoader: false,
//     	fetchNoActionLoader: false

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


	fetchNoAction: ['payload'],
	fetchNoActionSuccess: ['payload'],
	fetchNoActionFailure: null,
	fetchNoActionLoading: null,
	fetchNoActionLoadingStop: null,

});

export const LeadAlertTypes = Types
export default Creators


