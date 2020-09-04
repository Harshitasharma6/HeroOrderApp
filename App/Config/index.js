export const Config = {
	API_URL: 'https://herodealersapp.herokuapp.com/',

	USER_SERVICE: {
		LOGIN: 'login/login',
		LOGOUT: 'login/logout',
	},

	VISITOR_SERVICE: {
		SEARCH_CUSTOMER  : 'customers/search',
		REGISTER_CUSTOMER: 'visitors/create',
		UPDATE_VISITOR   : 'visitors/update',
		CREATE_FEEDBACK  : 'feedback/create',
		GET_ALL_VISITS   : 'visit/getAll',
		GET_ALL_FOLLOW_UPS: 'getCustomer/getCustomerFollowUp',
		GET_FEEDBACKS    : 'feedback/get',
		REGISTER_CUSTOMER_CALL: 'incomingCallLead/createLead',
		REGISTER_CUSTOMER_OUTGOING_CALL: 'outgoingCall/createCall',
		UPDATE_FOLLOW_UP_CALL: 'outgoingCall/updateFollowUp',
		UPDATE_BOOKING	 :	'booking/updateBooking',
		NEW_BOOKING: 'booking/newBooking'
	}, 


	COMMON_SERVICE: {
		FETCH_LEAD_SOURCES: 'visitors/getLeadSource',
		FETCH_LEAD_LOST_REASONS: 'visitors/getLostReason',
		GET_STATES:	'states/getAll',
		GET_CITIES: 'cities/getAll',
		UPLOAD_IMAGE: 'images/upload',
		GET_CALL_OPTIONS: 'call-activities/callOptions',
		GET_BOOKING_PICKLIST: 'booking/bookingPickList',
	},


	PRODUCTS_SERVICE: {
		FETCH_PRODUCTS: 'products/getAll',
		FETCH_SCHEMES: 'products/getScheme',
	},

	DEALER_SERVICE:{
		FETCH_ALL_DEALER_SALES_INFO: 'dealers/getDealerSalesPersonInfo',
		GET_DEALER_CLAIM: 'dealers/getDealerClaims',
		CREATE_DEALER_CLAIM: 'dealers/createDealerClaim',
	},

	SUB_DEALER_SERVICE:{
		GET_SUB_DEALER: 'dealers/getSubDealers',
		CREATE_SUB_DEALER: 'dealers/createSubDealers'
	},

	LEAD_ALERT_SERVICE: {
		FETCH_HOT_LEADS                     : 'visitors/hotLeads',
    	FETCH_BOOKING_CONFIRM_FINANCE_LEADS : 'visitors/bookingConfirmFinanceLead',
    	FETCH_PURCHASE_OVERDUE              : 'visitors/purchaseOverDue',
    	FETCH_OPEN_LEADS                    : 'visitors/openHOLeads',
    	FETCH_CALL_LEADS                    : 'incomingCallLead/getLead',
    	FETCH_NO_ACTION                     : 'visitors/noAction',
    	FETCH_ALL_OPEN_LEADS                : 'outgoingCall/getOpenLeadAlert',
		MARK_LEAD_LOST                      : 'visitors/lost',
		TODAY_FOLLOW_UP						: 'outgoingCall/getFollowUp',
		GET_CONFIRMED_BOOKING				: 'booking/getConfirmedBooking',
		UPDATE_MARK_WON						:  'booking/updateMarkWon'
	},
	DASHBOARD_SERVICE:{
		GET_DASHBOARD_SUMMARY					: 'dashboard/summary',
		GET_DASHBOARD_TRENDS_SOLD_PRODUCTS      : 'trends/getSoldProducts',
		GET_DASHBOARD_TRENDS_REVENUE      		: 'trends/getRevenue',

	},

	INSIGHTS_SERVICE: {
		GET_FOLLOW_UP							: 'outgoingCall/getFollowUp',
		GET_COMPLETED_FOLLOW_UP					: 'outgoingCall/getCompletedFollowUp',
	},

	SCHEME_SERVICE: {
		GET_ALL_SCHEME							: 'schemeMaster/getScheme'
	},

	CUSTOMER_SERVICE:{
		GET_ALL_CUSTOMER						:'customers/getCustmoer',

	}
}
