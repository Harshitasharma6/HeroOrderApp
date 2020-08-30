import {apiClientService} from './ApiService'
import { HelperService } from 'App/Services/Utils/HelperService';
import { Config } from 'App/Config'

const {
    apiClient,
    isWithin,
    in200s
} = apiClientService;

// FETCH_HOT_LEADS                     : 'visitors/hotLeads',
// FETCH_BOOKING_CONFIRM_FINANCE_LEADS : 'visitors/bookingConfirmFinanceLead',
// FETCH_PURCHASE_OVERDUE              : 'visitors/purchaseOverDue',
// FETCH_OPEN_LEADS                    : 'visitors/openHOLeads',
// FETCH_NO_ACTION                     : 'visitors/noAction',

function fetchHotLeads(params) {
  let url = Config.LEAD_ALERT_SERVICE.FETCH_HOT_LEADS;
  return apiClient.get(url, {
    headers: {
      token: params.token,
      dealer_id: params.dealer_id
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data']['hot_leads'];
    }
    return null
  }).catch(error => {
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}


function fetchBookingConfirmFinanceLeads(params) {
  let url = Config.LEAD_ALERT_SERVICE.FETCH_BOOKING_CONFIRM_FINANCE_LEADS;
  return apiClient.get(url, {
    headers: {
      token: params.token,
      dealer_id: params.dealer_id
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data']['leads'];
    }
    return null
  }).catch(error => {
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}


function fetchPurchaseOverdue(params) {
  let url = Config.LEAD_ALERT_SERVICE.FETCH_PURCHASE_OVERDUE;
  return apiClient.get(url, {
    headers: {
      token: params.token,
      dealer_id: params.dealer_id
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data']['overDueDate'];
    }
    return null
  }).catch(error => {
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}

function fetchOpenLeads(params) {
  let url = Config.LEAD_ALERT_SERVICE.FETCH_OPEN_LEADS;
  return apiClient.get(url, {
    headers: {
      token: params.token,
      dealer_id: params.dealer_id
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data']['open_HO_leads'];
    }
    return null
  }).catch(error => {
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}


function fetchCallLeads(params) {
  let url = Config.LEAD_ALERT_SERVICE.FETCH_CALL_LEADS;
  return apiClient.get(url, {
    headers: {
      token: params.token,
      dealer_id: params.dealer_id
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data']['enquiry'];
    }
    return null
  }).catch(error => {
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}

function fetchNoAction(params) {
  let url = Config.LEAD_ALERT_SERVICE.FETCH_NO_ACTION;
  return apiClient.get(url, {
    headers: {
      token: params.token,
      dealer_id: params.dealer_id
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data']['leads'];
    }
    return null
  }).catch(error => {
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}

function fetchAllOpenLeads(params) {
  let url = Config.LEAD_ALERT_SERVICE.FETCH_ALL_OPEN_LEADS;
  return apiClient.get(url, {
    headers: {
      token: params.token,
      dealer_id: params.dealer_id
    }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data']['leads'];
    }
    return null
  }).catch(error => {
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}


function markLeadLost(params) {
	let url = Config.LEAD_ALERT_SERVICE.MARK_LEAD_LOST;
	url += `?enquiry_id=${params.id}`
	return apiClient.post(url, params,{
		headers: {
			token: params.token,
			dealer_id: params.dealer_id,
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['data'];
		}
		return null
	}).catch(error => {
		return null
	});
}


function fetchTodayFollowUp(params) {
	let url = Config.LEAD_ALERT_SERVICE.TODAY_FOLLOW_UP;
	url += `?dealer_id=${params.dealer_id}`
  return apiClient.get(url, {
    headers: {
      token: params.token,
      }
  }).then((response) => {
    if (in200s(response.status)) {
      return response['data']['data'];
    }
    return null
  }).catch(error => {
    //bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
    return null
  });
}


export const LeadAlertService = {
  	fetchHotLeads,
    fetchBookingConfirmFinanceLeads,
    fetchPurchaseOverdue,
    fetchOpenLeads,
    fetchNoAction,
    fetchCallLeads,
    fetchAllOpenLeads,
    markLeadLost,
    fetchTodayFollowUp
}
