export const INITIAL_STATE = {
    selectedActionable: '1',
    selectedFollowUp: '1',
    hotLeads:[],
    bookingConfirmFinanceLeads: [],
    purchaseOverdue: [],
    openLeads: [],
    noAction: [],
    callLeads: [],
    allOpenLeads: [],
    loaders: {
    	fetchHotLeadsLoader: false,
    	fetchBookingConfirmFinanceLeadsLoader: false,
    	fetchPurchaseOverdueLoader: false,
    	fetchOpenLeadsLoader: false,
        fetchCallsLeadsLoader: false,
        fetchAllOpenLeadsLoader: false,
    	fetchNoActionLoader: false,
    	markLeadLostLoader: false
    },
    leadLostForm: {},
    leadLostFormValidation: {
        invalid: false,
        invalid_field: ''
    },
}