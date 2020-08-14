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
	const {
		token,
		dealer_id
	} = params;


	params = {
		"first_name": "Saurabh",
		"last_name": "Verma",
		"contact_number": "9818508785", 
		"age":  "28",
		"gender": "Male",
		"product_interested": "a029D000002ZFPtQAO",
		"mode_of_purchase": "Cash",
		"exchange_required":"No",
		"source_of_enquiry": "Event",
		"existing_two_wheeler": "Yes",
		"purpose_of_buying" : "Nothing",
		"usage": "Nothing",
		"expected_close_date__c": "2020-08-19",
		"sales_person": "a0O9D000001hLV9UAM", // sfid returned in login response  (* mandatory)
		"email_id__c": "abc@gmail.com",
		"occupation__c" : "Business",
		"test_drive_offered__c": "Yes",
	//"customer_sfid": "0039D000007KJE2QAO"   // pass this if searched user is from contact table
}

	return apiClient.post(url, params,{
		headers: {
			token,
			dealer_id,
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

function updateVisitor(params) {
	let url = Config.VISITOR_SERVICE.UPDATE_VISITOR;
	url += `?enquiry__c=${params.enquiry}`
	return apiClient.post(url, params,{
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


function createFeedback(params) {
	let url = Config.VISITOR_SERVICE.CREATE_FEEDBACK;
	url += `?enquiry=${params.enquiry}`
	const {
		token,
		dealer_id
	} = params;

	params = {
		"vehicle_number": "DL1CV6565",
		"ride_comfort": "3",
		"responsiveness_of_vehicle": "3",
		"dealers_sales_person_sfid": "a0O9D000001hLV9UAM",
		"ease_of_handling": "4",
		"overall_experience": "4",
		"date_of_test_drive": "2020-08-16"
	}

	return apiClient.post(url, params, {
		headers: {
			token,
			dealer_id,
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
	url += `?enquiry__c=${params.enquiry}`
	url += `&limit=${100}`
	url += `&offset=${1}`
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
	url += `&offset=${1}`
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


export const VisitorService = {
	searchCustomer,
	updateVisitor,
	registerCustomer,
	createFeedback,
	getAllVisits,
	getFeedbacks
}
