export const INITIAL_STATE = {
    selectedActionable: '1',
    selectedFollowUp: '1',
    hotLeads:[],
    bookingConfirmFinanceLeads: [],
    purchaseOverdue: [],
    openLeads: [],
    noAction: [],
    loaders: {
    	fetchHotLeadsLoader: false,
    	fetchBookingConfirmFinanceLeadsLoader: false,
    	fetchPurchaseOverdueLoader: false,
    	fetchOpenLeadsLoader: false,
    	fetchNoActionLoader: false,
    	markLeadLostLoader: false
    },

    leadLostForm: {},
    leadLostFormValidation: {
        invalid: false,
        invalid_field: ''
    },
}
