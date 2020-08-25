export const INITIAL_STATE = {
    selectedActionable: '1',
    selectedFollowUp: '1',
    hotLeads:[],
    bookingConfirmFinanceLeads: [],
    purchaseOverdue: [],
    openLeads: [],
    noAction: [],
    callLeads: [],
    loaders: {
    	fetchHotLeadsLoader: false,
    	fetchBookingConfirmFinanceLeadsLoader: false,
    	fetchPurchaseOverdueLoader: false,
    	fetchOpenLeadsLoader: false,
        fetchCallsLeadsLoader: false,
    	fetchNoActionLoader: false,
    	markLeadLostLoader: false
    },
    leadLostForm: {},
    leadLostFormValidation: {
        invalid: false,
        invalid_field: ''
    },
}
