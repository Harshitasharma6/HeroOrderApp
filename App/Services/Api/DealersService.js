import {apiClientService} from './ApiService'
import { HelperService } from 'App/Services/Utils/HelperService';
import { Config } from 'App/Config'
import _ from 'lodash';

const {
  	apiClient,
    isWithin,
    in200s
} = apiClientService;


function getAllDealers(params) {
	let url = Config.DEALER_SERVICE.FETCH_ALL_DEALER_SALES_INFO;
	url += `?dealer_id=${params.dealer_id}`
	
	return apiClient.get(url, {
		headers: {
			token: params.token,
			
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['data']['dealer'];
		}
		return null
	}).catch(error => {
		
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function getDealerClaims(params) {
	let url = Config.DEALER_SERVICE.GET_DEALER_CLAIM;
	url += `?dealer_id=${params.dealer_id}`
	url += `&date=${params.date}`
	
	return apiClient.get(url, {
		headers: {
			token: params.token,
			
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response.data;
		}
		return null
	}).catch(error => {
	
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}

function CreateDealerClaim(params) {
	let url = Config.DEALER_SERVICE.CREATE_DEALER_CLAIM;
	url += `?dealer_id=${params.dealer_id}`
	url += `&sfid=${params.sfid}`
	let formData = _.cloneDeep(params);
	formData = HelperService.removeField(formData, 'token');
	formData = HelperService.removeField(formData, 'dealer_id');
	formData = HelperService.removeField(formData, 'sfid');
	return apiClient.post(url, formData,{
		headers: {
			token: params.token,
			
		}
	}).then((response) => {
		if (in200s(response.status)) {
			console.log(response)
			return response['data']['data'];
		}
		return null
	}).catch(error => {
		console.log(error.response)
		return null
	});
}



export const DealersService = {
	getAllDealers,
	getDealerClaims,
	CreateDealerClaim,
	
  }