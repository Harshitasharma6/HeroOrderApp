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
    todayFollowUp: [],
    confirmedBooking: [],
    loaders: {
    	fetchHotLeadsLoader: false,
    	fetchBookingConfirmFinanceLeadsLoader: false,
    	fetchPurchaseOverdueLoader: false,
    	fetchOpenLeadsLoader: false,
        fetchCallsLeadsLoader: false,
        fetchAllOpenLeadsLoader: false,
    	fetchNoActionLoader: false,
        markLeadLostLoader: false,
        fetchtodayFollowUpLoader: false,
        fetchConfirmedBookingLoader:  false,
    },
    leadLostForm: {},
    leadLostFormValidation: {
        invalid: false,
        invalid_field: ''
    },

    bookingSearchFilters: {
        area: '',
        type: '',
        sortType: 'ASC',
        sortBy: '',
        searchBy: 'contact_number__c',
        searchValue: '',
       
	},

}