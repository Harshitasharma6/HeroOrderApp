import {apiClientService} from './ApiService'
import { HelperService } from 'App/Services/Utils/HelperService';
import { Config } from 'App/Config'

const {
  	apiClient,
    isWithin,
    in200s
} = apiClientService;



function searchCustomer({token, dealer_id, contact_number}) {
	let url = Config.VISITOR_SERVICE.SEARCH_CUSTOMER;
	url += `?contact_number=${contact_number}`
	return apiClient.get(url, {
		headers: {
			token,
			dealer_id
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data'];
		}
		return null
	}).catch(error => {
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function registerCustomer(params) {
	let url = Config.VISITOR_SERVICE.REGISTER_CUSTOMER;
	return apiClient.post(url, params,{
		headers: {
			token: params.token,
			dealer_id: params.dealer_id,
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['data'][0];
		}
		return null
	}).catch(error => {
		return null
	});
}

function updateVisitor(params) {
	let url = Config.VISITOR_SERVICE.UPDATE_VISITOR;
	url += `?enquiry_id=${params.enquiry}`
	return apiClient.post(url, params,{
		headers: {
			token    : params.token,
			dealer_id: params.dealer_id,
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['data'][0];
		}
		return null
	}).catch(error => {
		return null
	});
}


function createFeedback(params) {
	let url = Config.VISITOR_SERVICE.CREATE_FEEDBACK;
	url += `?enquiry=${params.enquiry_id}`;
	return apiClient.post(url, params, {
		headers: {
			token: params.token,
			dealer_id: params.dealer_id,
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data'];
		}
		return null
	}).catch(error => {
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function getAllVisits(params) {
	let url = Config.VISITOR_SERVICE.GET_ALL_VISITS;
	url += `?enquiry_id=${params.enquiry}`
	url += `&limit=${100}`
	url += `&offset=${0}`
	return apiClient.get(url, {
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
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function getFeedbacks(params) {
	let url = Config.VISITOR_SERVICE.GET_FEEDBACKS;
	url += `?enquiry=${params.enquiry}`
	url += `&limit=${100}`
	url += `&offset=${0}`
	return apiClient.get(url, {
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
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function registerCustomerCall(params) {
	let url = Config.VISITOR_SERVICE.REGISTER_CUSTOMER_CALL;
	return apiClient.post(url, params, {
		headers: {
			token: params.token,
			dealer_id: params.dealer_id,
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data'];
		}
		return null
	}).catch(error => {
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function registerCustomerOutgoingCall(params) {
	let url = Config.VISITOR_SERVICE.REGISTER_CUSTOMER_OUTGOING_CALL;
	url += `?enquiry_id=${params.enquiry_id}`
	return apiClient.post(url, params, {
		headers: {
			token: params.token
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data'];
		}
		return null
	}).catch(error => {
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function payBooking(params) {
	// let url = Config.VISITOR_SERVICE.REGISTER_CUSTOMER_CALL;
	// return apiClient.post(url, params, {
	// 	headers: {
	// 		token: params.token,
	// 		dealer_id: params.dealer_id,
	// 	}
	// }).then((response) => {
	// 	if (in200s(response.status)) {
	// 		return response['data'];
	// 	}
	// 	return null
	// }).catch(error => {
	// 	//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
	// 	return null
	// });

	return {}
}


export const VisitorService = {
	searchCustomer,
	updateVisitor,
	registerCustomer,
	registerCustomerCall,
	registerCustomerOutgoingCall,
	createFeedback,
	getAllVisits,
	payBooking,
	getFeedbacks
}
