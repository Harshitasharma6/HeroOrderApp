export const Config = {
	API_URL: 'https://herodealersapp.herokuapp.com/',

	USER_SERVICE: {
		LOGIN: 'login/login'
	},

	VISITOR_SERVICE: {
		SEARCH_CUSTOMER  : 'customers/search',
		REGISTER_CUSTOMER: 'visitors/create',
		UPDATE_VISITOR   : 'visitors/update',
		CREATE_FEEDBACK  : 'feedback/create',
		GET_ALL_VISITS   : 'visit/getAll',
		GET_FEEDBACKS    : 'feedback/get'
	}, 


	COMMON_SERVICE: {
		FETCH_LEAD_SOURCES: 'visitors/getLeadSource',
		FETCH_LEAD_LOST_REASONS: 'visitors/getLostReason'
	},


	PRODUCTS_SERVICE: {
		FETCH_PRODUCTS: 'products/getAll',
		FETCH_SCHEMES: 'products/getScheme',
	},

	DEALER_SERVICE:{
		FETCH_ALL_DEALER_SALES_INFO: 'dealers/getDealerSalesPersonInfo?dealer_id=0019D000009zum3QAA',
		GET_DEALER_CLAIM: 'dealers/getDealerClaims'
	},

	SUB_DEALER_SERVICE:{
		GET_SUB_DEALER: 'dealers/getSubDealers?dealer_id=0019D000009zum3QAA',
		CREATE_SUB_DEALER: 'dealers/createSubDealers'
	},

	LEAD_ALERT_SERVICE: {
		FETCH_HOT_LEADS                     : 'visitors/hotLeads',
    	FETCH_BOOKING_CONFIRM_FINANCE_LEADS : 'visitors/bookingConfirmFinanceLead',
    	FETCH_PURCHASE_OVERDUE              : 'visitors/purchaseOverDue',
    	FETCH_OPEN_LEADS                    : 'visitors/openHOLeads',
    	FETCH_NO_ACTION                     : 'visitors/noAction',
    	MARK_LEAD_LOST                      : 'visitors/lost'
	},
	DASHBOARD_SERVICE:{
		GET_DASHBOARD_SUMMARY					: 'dashboard/summary',
		GET_DASHBOARD_TRENDS_SOLD_PRODUCTS      : 'trends/getSoldProducts',
		GET_DASHBOARD_TRENDS_REVENUE      		: 'trends/getRevenue',

	},
}
