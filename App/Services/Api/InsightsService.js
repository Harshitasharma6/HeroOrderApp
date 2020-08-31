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


function getDashboardTrendsSoldProducts(params) {
	let url = Config.DASHBOARD_SERVICE.GET_DASHBOARD_TRENDS_SOLD_PRODUCTS;
	url += `?dealer_id=${params.dealer_id}`
	url += `&status=Won`
	return apiClient.get(url, {
		headers: {
			token: params.token
			
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['data']['vehicle_sold_count']
		}
		return null
	}).catch(error => {
		console.log(error.response)
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return  null

	});
}


function getDashboardTrendsRevenue(params) {
	let url = Config.DASHBOARD_SERVICE.GET_DASHBOARD_TRENDS_REVENUE;
	url += `?dealer_id=${params.dealer_id}`
	url += `&status=Won`
	return apiClient.get(url, {
		headers: {
			token: params.token
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['data']['vehicle_sold_count']
		}
		return null
	}).catch(error => {
		console.log(error.response)
		return  null

	});
}


function getAllScheme(params) {
	let url = Config.SCHEME_SERVICE.GET_ALL_SCHEME;
	console.log('url', url)
	return apiClient.get(url, {
		headers: {
			token: params.token,
			
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['data']['schemes'];
		}
		return null
	}).catch(error => {
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}



function getFollowUp(params) {
	let url = Config.INSIGHTS_SERVICE.GET_FOLLOW_UP;
	url += `?dealer_id=${params.dealer_id}`
	
	return apiClient.get(url, {
		headers: {
			token: params.token,
			
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data'];
		}
		return null
	}).catch(error => {
		console.log(error.response)
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function getCompletedFollowUp(params) {
	let url = Config.INSIGHTS_SERVICE.GET_COMPLETED_FOLLOW_UP;
	url += `?dealer_id=${params.dealer_id}`
	
	return apiClient.get(url, {
		headers: {
			token: params.token,
			
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data'];
		}
		return null
	}).catch(error => {
		console.log(error.response)
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}

function getAllCustomer(params) {
	let url = Config.CUSTOMER_SERVICE.GET_ALL_CUSTOMER	;
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
		console.log(error.response)
		//bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}




export const InsightsService = {
	getDashboardSummary,
	getDashboardTrendsSoldProducts,
	getDashboardTrendsRevenue,
	getAllScheme,
	getFollowUp,
	getCompletedFollowUp,
	getAllCustomer
  }