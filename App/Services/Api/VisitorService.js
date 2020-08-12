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
			return response['data'];
		}
		return null
	}).catch(error => {
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}



export const VisitorService = {
	searchCustomer,
	registerCustomer
}
