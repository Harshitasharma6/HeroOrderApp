import axios from 'axios'
import { Config } from '../../Config'
import { is, curryN, gte } from 'ramda'
import { HelperService } from '../../Services/Utils/HelperService';
import _ from 'lodash';

const isWithin = curryN(3, (min, max, value) => {
	const isNumber = is(Number)
	return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
});
const in200s = isWithin(200, 299)

const shreeApiGloble = axios.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
})


function fetchShree(params) {
	let url  = Config.SHREE.FETCH_ALL_SHREE;
	url = url.replace('state', params.state);
	return shreeApiGloble.get(url, {
		headers: {
			Authorization: 'Bearer ' + params.access_token,
			'Content-Type': 'application/json'
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['Data']
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('fetchShree: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function fetchShreeRetailers(params) {
	let url  = Config.SHREE.FETCH_ALL_SHREE_RETAILERS;
	url = url.replace('state', params.state);
	return shreeApiGloble.get(url, {
		headers: {
			Authorization: 'Bearer ' + params.access_token,
			'Content-Type': 'application/json'
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['records']
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('fetchShreeRetailers: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}




function updateLocation(params, access_token) {
	return shreeApiGloble.post(Config.SHREE.UPDATE_LOCATION, params, {
		headers: {
			Authorization: 'Bearer ' + access_token,
			'Content-Type': 'application/json'
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('updateLocation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function updatePotential(params, access_token) {
	return shreeApiGloble.post(Config.SHREE.UPDATE_POTENTIAL, params, {
		headers: {
			Authorization: 'Bearer ' + access_token,
			'Content-Type': 'application/json'
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('updatePotential: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function fetchOutstanding(params) {
	let url = Config.SHREE.FETCH_SHREE_DEALER_OUTSTANDING;
	url = url.replace('owner', params.dealerId);

	return shreeApiGloble.get(url, {
		headers: {
			Authorization: 'Bearer ' + params.access_token,
			'Content-Type': 'application/json'
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['records']
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('fetchOutstanding: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}

function fetchPayments(params) {
	let url = Config.SHREE.FETCH_PAYMENTS;
	url = url.replace('account', params.dealerId);
	return shreeApiGloble.get(url, {
		headers: {
			Authorization: 'Bearer ' + params.access_token,
			'Content-Type': 'application/json'
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['records']
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('fetchPayments: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function fetchPreviousVisits(params) {
	let url = Config.SHREE.FETCH_PREVIOUS_VISITS;
	url = url.replace('owner', params.userId);
	url = url.replace('counter', params.dealerId);
	return shreeApiGloble.get(url, {
		headers: {
			Authorization: 'Bearer ' + params.access_token,
			'Content-Type': 'application/json'
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['records']
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('fetchPreviousVisits: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function fetchLatestVisits(params) {
	let url = Config.SHREE.FETCH_LATEST_VISITS;
	url = url.replace('owner', params.userId);
	url = url.replace('counter', params.dealerId);
	url = url.replace('date', params.date);
	return shreeApiGloble.get(url, {
		headers: {
			Authorization: 'Bearer ' + params.access_token,
			'Content-Type': 'application/json'
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['records']
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('fetchLatestVisits: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}



function fetchAllVisits(params) {
	let url = Config.SHREE.FETCH_ALL_VISITS;
	url = url.replace('owner', params.userId);
	return shreeApiGloble.get(url, {
		headers: {
			Authorization: 'Bearer ' + params.access_token,
			'Content-Type': 'application/json'
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['records']
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('fetchAllVisits: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function fetchAllSiteVisits(params) {
	let url = Config.SHREE.FETCH_ALL_SITE_VISITS;
	url = url.replace('owner', params.userId);
	return shreeApiGloble.get(url, {
		headers: {
			Authorization: 'Bearer ' + params.access_token,
			'Content-Type': 'application/json'
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['records']
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('fetchAllSiteVisits: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function fetchAllInfluencerVisits(params) {
	let url = Config.SHREE.FETCH_ALL_INFLUENCER_VISITS;
	url = url.replace('owner', params.userId);
	url = url.replace('state', params.state);
	return shreeApiGloble.get(url, {
		headers: {
			Authorization: 'Bearer ' + params.access_token,
			'Content-Type': 'application/json'
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['records']
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('fetchAllInfluencerVisits: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}



function createShreeRetailer(params) {
    return shreeApiGloble.post(Config.NON_SHREE.CREATE_NON_SHREE, params.form,  {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.access_token,
        }

    }).then((response) => { 
        if (in200s(response.status)) {
            return response.data
        }
        return null
    }).catch(error => {
    	bugsnag.notify(new Error('createShreeRetailer: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}


function submitShreeVisitForm(params) {
	let formData = _.cloneDeep(params.form);
	formData = HelperService.removeField(formData, "brands");
    return shreeApiGloble.post(Config.SHREE.SUBMIT_SHREE_VISIT_FORM, formData,  {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.access_token,
        }

    }).then((response) => {     
        if (in200s(response.status)) {
            return response.data
        }
        return null
    }).catch(error => {
    	bugsnag.notify(new Error('submitShreeVisitForm: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}


function createShreeVisitDetail(params) {
    return shreeApiGloble.post(Config.SHREE.CREATE_SHREE_VISIT_DETAIL, params.form,  {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.access_token,
        }

    }).then((response) => {  
        if (in200s(response.status)) {
            return response.data
        }
        return null
    }).catch(error => {
    	bugsnag.notify(new Error('createShreeVisitDetail: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}



function fetchSalesInfo(params) {
	let url = Config.SHREE.SALES_INFO;
	url = url.replace('counter', params.dealerId);
	return shreeApiGloble.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.access_token,
        }
    }).then((response) => {  
        if (in200s(response.status)) {
            return response['data']['records']
        }
        return null
    }).catch(error => {
    	bugsnag.notify(new Error('fetchSalesInfo: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}


function getAllCounters(params) {
	let url = Config.SHREE.GET_ALL_COUNTERS;
	url += `State__c+=+'${params.state}'`;

    return shreeApiGloble.get(url,  {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.access_token,
        }

    }).then((response) => {      
        if (in200s(response.status)) {
            return response['data']['records']
        }
        return null
    }).catch(error => {
    	bugsnag.notify(new Error('getAllCounters: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}

function getAllDistricts(params) {
	let url = Config.SHREE.GET_ALL_DISTRICTS;
	url = url.replace('state', params.state);

    return shreeApiGloble.get(url,  {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.access_token,
        }

    }).then((response) => {      
        if (in200s(response.status)) {
            return response['data']['records']
        }
        return null
    }).catch(error => {
    	bugsnag.notify(new Error('getAllDistricts: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}





export const shreeService = {
	fetchShree,
	fetchShreeRetailers,
	updateLocation,
	updatePotential,
	fetchOutstanding,
	fetchPayments,
	fetchPreviousVisits,
	createShreeRetailer,
	submitShreeVisitForm,
	createShreeVisitDetail,
	getAllCounters,
	getAllDistricts,
	fetchAllVisits,
	fetchAllSiteVisits,
	fetchAllInfluencerVisits,
	fetchSalesInfo,
	fetchLatestVisits
}
