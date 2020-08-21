import {apiClientService} from './ApiService'
import { HelperService } from 'App/Services/Utils/HelperService';
import { Config } from 'App/Config'

const {
  	apiClient,
    isWithin,
    in200s
} = apiClientService;


function getAllDealers(params) {
	let url = Config.DEALER_SERVICE.FETCH_ALL_DEALER_SALES_INFO;
	
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
		console.log(error.response)
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}

export const DealersService = {
	getAllDealers,
	
  }