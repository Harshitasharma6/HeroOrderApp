import {apiClientService} from './ApiService'
import { HelperService } from 'App/Services/Utils/HelperService';
import { Config } from 'App/Config'

const {
  	apiClient,
    isWithin,
    in200s
} = apiClientService;


function getDashboardSummary(params) {
	let url = Config.DASHBOARD_SERVICE.GET_DASHBOARD_SUMMARY;
	
	
	return apiClient.get(url, {
		headers: {
			token: params.token,
			dealer_id: params.dealer_id,
			
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']
		}
		return null
	}).catch(error => {
		console.log(error.response)
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}

export const InsightsService = {
	getDashboardSummary
	
  }