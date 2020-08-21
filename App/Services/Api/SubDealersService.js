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
		console.log(error.response)
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}

export const SubDealersService = {
	getAllSubDealers,
	
  }