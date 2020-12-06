import {apiClientService} from './ApiService'
import { HelperService } from 'App/Services/Utils/HelperService';
import { Config } from 'App/Config'

const {
  	apiClient,
    isWithin,
    in200s
} = apiClientService;


function getAllSubDealers(params) {
	let url = Config.SUB_DEALER_SERVICE.GET_SUB_DEALER;
	url += `?dealer_id=${params.dealer_id}`
	
	return apiClient.get(url, {
		headers: {
			token: params.token,
			
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['data']['dealerClaims'];
		}
		return null
	}).catch(error => {
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}

function CreateSubDealer(params) {
	let url = Config.SUB_DEALER_SERVICE.CREATE_SUB_DEALER;
	return apiClient.post(url, params,{
		headers: {
			token: params.token,
			
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

export const SubDealersService = {
	getAllSubDealers,
	CreateSubDealer,
  }