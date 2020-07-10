import axios from 'axios'
import { Config } from '../../Config'
import { is, curryN, gte } from 'ramda'
import { HelperService } from '../Utils/HelperService';
import { AsyncStorage } from 'react-native';
import _ from 'lodash';

const isWithin = curryN(3, (min, max, value) => {
    const isNumber = is(Number)
    return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)



const userApiGloble = axios.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
})


function fetchUser() {
    if (Math.random() > 0.5) {
        return new Promise(function (resolve, reject) {
            resolve(null)
        })
    }

    let number = Math.floor(Math.random() / 0.1) + 1

    return userApiGloble.get(number.toString()).then((response) => {
        if (in200s(response.status)) {
            return response.data
        }
        return null
    })
}


function getAppVersion(params) { 
    let url = Config.START_DAY_SERVICE.GET_APP_VERSION;
    return userApiGloble.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.access_token,
        }
    }).then((response) => {
        if (in200s(response.status)) {
            return response.data.records[0]
        }
        return null
    }).catch(error => {
        bugsnag.notify(new Error('getAppVersion: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}




function fetchGlobleToken(params) { 
    let url = Config.START_DAY_SERVICE.FETCH_GLOBLE_TOKEN_SERVICE_TEST;
    url = url.replace('userId', params.username);
    url = url.replace('passwordId', params.password);
    return userApiGloble.post(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if (in200s(response.status)) {
            return response.data
        }
        return null
    }).catch(error => {
        bugsnag.notify(new Error('fetchGlobleToken: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}

function onLeaveAction(params) {
    let formData = _.cloneDeep(params);
    formData = HelperService.removeField(formData, "access_token");
    return userApiGloble.post(Config.START_DAY_SERVICE.ON_LEAVE_SERVICE, formData,  {
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
        bugsnag.notify(new Error('onLeaveAction: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}

function checkInAction(params) {
    let formData = _.cloneDeep(params);
    formData = HelperService.removeField(formData, "access_token");
    return userApiGloble.post(Config.START_DAY_SERVICE.CHECK_IN_SERVICE, formData,  {
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
        bugsnag.notify(new Error('checkInAction: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}


function inOfficeAction(params) {
    let formData = _.cloneDeep(params);
    formData = HelperService.removeField(formData, "access_token");
    return userApiGloble.post(Config.START_DAY_SERVICE.IN_OFFICE_SERVICE, formData,  {
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
        bugsnag.notify(new Error('inOfficeAction: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}


function fetchAllShreeDealersAction(param) {
    return userApiGloble.get(Config.START_DAY_SERVICE.FETCH_ALL_DEALER_SERVICE, {
		headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + param.access_token,
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['records']
		}
		// return null
	}).catch(error => {
        bugsnag.notify(new Error('fetchAllShreeDealersAction: ' + JSON.stringify(error.response.data[0])));
		return null
	});

    
}

function fetchAllNonShreeDealersAction(param) {
    return userApiGloble.get(Config.START_DAY_SERVICE.FETCH_ALL_NON_SHREE_DETAIL_SERVICE, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + param.access_token,
        }
    }).then((response) => {
        if (in200s(response.status)) {
            return response['data']['records']
        }
        return null
    }).catch(error => {
        bugsnag.notify(new Error('fetchAllNonShreeDealersAction: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}

function fetchGlobleUserAllDetail(params) {
    let url = Config.START_DAY_SERVICE.GLOBLE_USER_DETAIL_SERVICE
    url += `'${params.userId}'`;
    return userApiGloble.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.access_token,
        }
    }).then((response) => {
        if (in200s(response.status)) {
            return response['data']['records'][0]
        }
        return null
    }).catch(error => {
        bugsnag.notify(new Error('fetchGlobleUserAllDetail: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}


function fetchAgentDetails(params) {
    let url = Config.START_DAY_SERVICE.FETCH_AGENT_DETAILS;
    url = url.replace('date', params.date);
    url = url.replace('owner', params.userId);
    return userApiGloble.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.access_token,
        }
    }).then((response) => {
        if (in200s(response.status)) {
            return response['data']['records'][0]
        }
        return null
    }).catch(error => {
        bugsnag.notify(new Error('fetchAgentDetails: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}

function checkOutAction(params) {
    let formData = _.cloneDeep(params);
    formData = HelperService.removeField(formData, "access_token");

    return userApiGloble.post(Config.START_DAY_SERVICE.CHECK_OUT_SERVICE, formData,  {
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
        bugsnag.notify(new Error('checkOutAction: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}


function fetchUserId(params) {
    let url = `${params.url}`
    return userApiGloble.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.access_token,
        }
    }).then((response) => {
        if (in200s(response.status)) {
            return response['data']
        }
        return null
    }).catch(error => {
        bugsnag.notify(new Error('fetchUserId: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}




export const startDayService = {
    fetchUser,
    getAppVersion,
    fetchGlobleToken,
    onLeaveAction,
    checkInAction,
    inOfficeAction,
    fetchAllShreeDealersAction,
    fetchAllNonShreeDealersAction,
    fetchGlobleUserAllDetail,
    fetchAgentDetails,
    checkOutAction,
    fetchUserId
}