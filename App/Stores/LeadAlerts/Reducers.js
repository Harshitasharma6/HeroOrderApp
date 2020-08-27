import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { LeadAlertTypes } from './Actions'
import _ from 'lodash';



export const selectFollowUp = (state, { payload }) => {
    return {
        ...state,
        selectedFollowUp: payload
    }
}


export const selectActionable = (state, { payload }) => {
    return {
        ...state,
        selectedActionable: payload
    }
}






export const fetchHotLeadsSuccess = (state, {payload}) => ({
  ...state,
  hotLeads: payload,
  loaders: {
    ...state.loaders,
    fetchHotLeadsLoader: false
  }
});


export const fetchHotLeadsFailure = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchHotLeadsLoader: false
  }
});


export const fetchHotLeadsLoading = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchHotLeadsLoader: true
  }
});


export const fetchHotLeadsLoadingStop = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchHotLeadsLoader: false
  }
});





export const fetchBookingConfirmFinanceLeadsSuccess = (state, {payload}) => ({
  ...state,
  bookingConfirmFinanceLeads: payload,
  loaders: {
    ...state.loaders,
    fetchBookingConfirmFinanceLeadsLoader: false
  }
});


export const fetchBookingConfirmFinanceLeadsFailure = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchBookingConfirmFinanceLeadsLoader: false
  }
});


export const fetchBookingConfirmFinanceLeadsLoading = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchBookingConfirmFinanceLeadsLoader: true
  }
});


export const fetchBookingConfirmFinanceLeadsLoadingStop = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchBookingConfirmFinanceLeadsLoader: false
  }
});




export const fetchPurchaseOverdueSuccess = (state, {payload}) => ({
  ...state,
  purchaseOverdue: payload,
  loaders: {
    ...state.loaders,
    fetchPurchaseOverdueLoader: false
  }
});


export const fetchPurchaseOverdueFailure = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchPurchaseOverdueLoader: false
  }
});


export const fetchPurchaseOverdueLoading = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchPurchaseOverdueLoader: true
  }
});


export const fetchPurchaseOverdueLoadingStop = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchPurchaseOverdueLoader: false
  }
});




export const fetchOpenLeadsSuccess = (state, {payload}) => ({
  ...state,
  openLeads: payload,
  loaders: {
    ...state.loaders,
    fetchOpenLeadsLoader: false
  }
});


export const fetchOpenLeadsFailure = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchOpenLeadsLoader: false
  }
});


export const fetchOpenLeadsLoading = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchOpenLeadsLoader: true
  }
});


export const fetchOpenLeadsLoadingStop = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchOpenLeadsLoader: false
  }
});



export const fetchCallLeadsSuccess = (state, {payload}) => ({
  ...state,
  callLeads: payload,
  loaders: {
    ...state.loaders,
    fetchCallLeadsLoader: false
  }
});


export const fetchCallLeadsFailure = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchCallLeadsLoader: false
  }
});


export const fetchCallLeadsLoading = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchCallLeadsLoader: true
  }
});


export const fetchCallLeadsLoadingStop = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchCallLeadsLoader: false
  }
});




export const fetchNoActionSuccess = (state, {payload}) => ({
  ...state,
  noAction: payload,
  loaders: {
    ...state.loaders,
    fetchNoActionLoader: false
  }
});


export const fetchNoActionFailure = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchNoActionLoader: false
  }
});


export const fetchNoActionLoading = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchNoActionLoader: true
  }
});


export const fetchNoActionLoadingStop = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchNoActionLoader: false
  }
});

    // [LeadAlertTypes.MARK_LEAD_LOST_SUCCESS]        : markLeadLostSuccess,
    // [LeadAlertTypes.MARK_LEAD_LOST_FAILURE]        : markLeadLostFailure,
    // [LeadAlertTypes.MARK_LEAD_LOST_LOADING]        : markLeadLostLoading,
    // [LeadAlertTypes.MARK_LEAD_LOST_LOADING_STOP]   : markLeadLostLoadingStop,
    // [LeadAlertTypes.CHANGE_LEAD_LOST_FORM]         : changeLeadLostForm,
    // [LeadAlertTypes.CLEAR_LEAD_LOST_FORM]          : clearLeadLostForm

    //  leadLostForm: {},
    // leadLostFormValidation: {
    //     invalid: false,
    //     invalid_field: ''
    // },
    //markLeadLostLoader: false

export const markLeadLostSuccess = (state, {payload}) => ({
  ...state,
  leadLostForm: INITIAL_STATE.leadLostForm,
  loaders: {
    ...state.loaders,
    markLeadLostLoader: false
  }
});


export const markLeadLostFailure = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    markLeadLostLoader: false
  }
});


export const markLeadLostLoading = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    markLeadLostLoader: true
  }
});


export const markLeadLostLoadingStop = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    markLeadLostLoader: false
  }
});


export const changeLeadLostForm = (state, { payload }) => {
      const {
        edited_field,
        edited_value
    } = payload;

    let changed_entity = {};
    changed_entity[edited_field] = edited_value;
    return {
      ...state,
      leadLostForm : {
          ...state.leadLostForm,
          ...changed_entity
      },
      leadLostFormValidation: INITIAL_STATE.leadLostFormValidation
    }
};

export const clearLeadLostForm = (state) => ({
    ...state,
    leadLostForm: INITIAL_STATE.leadLostForm
})



 // allOpenLeads: [],
 //    loaders: {
 //      fetchHotLeadsLoader: false,
 //      fetchBookingConfirmFinanceLeadsLoader: false,
 //      fetchPurchaseOverdueLoader: false,
 //      fetchOpenLeadsLoader: false,
 //        fetchCallsLeadsLoader: false,
 //        fetchAllOpenLeadsLoader: false,
 //      fetchNoActionLoader: false,
 //      markLeadLostLoader: false
 //    },


 // fetchAllOpenLeadsSuccess: ['payload'],
 //  fetchAllOpenLeadsFailure: null,
 //  fetchAllOpenLeadsLoading: null,
 //  fetchAllOpenLeadsLoadingStop: null,


 export const fetchAllOpenLeadsSuccess = (state, {payload}) => ({
  ...state,
  allOpenLeads: payload,
  loaders: {
    ...state.loaders,
    fetchAllOpenLeadsLoader: false
  }
});


export const fetchAllOpenLeadsFailure = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchAllOpenLeadsLoader: false
  }
});


export const fetchAllOpenLeadsLoading = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchAllOpenLeadsLoader: true
  }
});


export const fetchAllOpenLeadsLoadingStop = (state, {payload}) => ({
  ...state,
  loaders: {
    ...state.loaders,
    fetchAllOpenLeadsLoader: false
  }
});







export const reducer = createReducer(INITIAL_STATE, {
   	[LeadAlertTypes.SELECT_ACTIONABLE]: selectActionable,
	[LeadAlertTypes.SELECT_FOLLOW_UP] : selectFollowUp,

    //fetchHotLeads: ['payload'],
    [LeadAlertTypes.FETCH_HOT_LEADS_SUCCESS]      : fetchHotLeadsSuccess,
    [LeadAlertTypes.FETCH_HOT_LEADS_FAILURE]      : fetchHotLeadsFailure,
    [LeadAlertTypes.FETCH_HOT_LEADS_LOADING]      : fetchHotLeadsLoading,
    [LeadAlertTypes.FETCH_HOT_LEADS_LOADING_STOP] : fetchHotLeadsLoadingStop,


    //fetchBookingConfirmFinanceLeads: ['payload'],
    [LeadAlertTypes.FETCH_BOOKING_CONFIRM_FINANCE_LEADS_SUCCESS]      : fetchBookingConfirmFinanceLeadsSuccess,
    [LeadAlertTypes.FETCH_BOOKING_CONFIRM_FINANCE_LEADS_FAILURE]      : fetchBookingConfirmFinanceLeadsFailure,
    [LeadAlertTypes.FETCH_BOOKING_CONFIRM_FINANCE_LEADS_LOADING]      : fetchBookingConfirmFinanceLeadsLoading,
    [LeadAlertTypes.FETCH_BOOKING_CONFIRM_FINANCE_LEADS_LOADING_STOP] : fetchBookingConfirmFinanceLeadsLoadingStop,


    //fetchPurchaseOverdue,
    [LeadAlertTypes.FETCH_PURCHASE_OVERDUE_SUCCESS]         : fetchPurchaseOverdueSuccess,
    [LeadAlertTypes.FETCH_PURCHASE_OVERDUE_FAILURE]         : fetchPurchaseOverdueFailure,
    [LeadAlertTypes.FETCH_PURCHASE_OVERDUE_LOADING]         : fetchPurchaseOverdueLoading,
    [LeadAlertTypes.FETCH_PURCHASE_OVERDUE_LOADING_STOP]    : fetchPurchaseOverdueLoadingStop,


    //fetchOpenLeadsFinanceLeads,
    [LeadAlertTypes.FETCH_OPEN_LEADS_SUCCESS]         : fetchOpenLeadsSuccess,
    [LeadAlertTypes.FETCH_OPEN_LEADS_FAILURE]         : fetchOpenLeadsFailure,
    [LeadAlertTypes.FETCH_OPEN_LEADS_LOADING]         : fetchOpenLeadsLoading,
    [LeadAlertTypes.FETCH_OPEN_LEADS_LOADING_STOP]    : fetchOpenLeadsLoadingStop,


    [LeadAlertTypes.FETCH_CALL_LEADS_SUCCESS]         : fetchCallLeadsSuccess,
    [LeadAlertTypes.FETCH_CALL_LEADS_FAILURE]         : fetchCallLeadsFailure,
    [LeadAlertTypes.FETCH_CALL_LEADS_LOADING]         : fetchCallLeadsLoading,
    [LeadAlertTypes.FETCH_CALL_LEADS_LOADING_STOP]    : fetchCallLeadsLoadingStop,



    [LeadAlertTypes.FETCH_ALL_OPEN_LEADS_SUCCESS]         : fetchAllOpenLeadsSuccess,
    [LeadAlertTypes.FETCH_ALL_OPEN_LEADS_FAILURE]         : fetchAllOpenLeadsFailure,
    [LeadAlertTypes.FETCH_ALL_OPEN_LEADS_LOADING]         : fetchAllOpenLeadsLoading,
    [LeadAlertTypes.FETCH_ALL_OPEN_LEADS_LOADING_STOP]    : fetchAllOpenLeadsLoadingStop,



    //fetchNoAction,
    [LeadAlertTypes.FETCH_NO_ACTION_SUCCESS]         : fetchNoActionSuccess,
    [LeadAlertTypes.FETCH_NO_ACTION_FAILURE]         : fetchNoActionFailure,
    [LeadAlertTypes.FETCH_NO_ACTION_LOADING]         : fetchNoActionLoading,
    [LeadAlertTypes.FETCH_NO_ACTION_LOADING_STOP]    : fetchNoActionLoadingStop,




    [LeadAlertTypes.MARK_LEAD_LOST_SUCCESS]        : markLeadLostSuccess,
    [LeadAlertTypes.MARK_LEAD_LOST_FAILURE]        : markLeadLostFailure,
    [LeadAlertTypes.MARK_LEAD_LOST_LOADING]        : markLeadLostLoading,
    [LeadAlertTypes.MARK_LEAD_LOST_LOADING_STOP]   : markLeadLostLoadingStop,
    [LeadAlertTypes.CHANGE_LEAD_LOST_FORM]         : changeLeadLostForm,
    [LeadAlertTypes.CLEAR_LEAD_LOST_FORM]          : clearLeadLostForm

});
