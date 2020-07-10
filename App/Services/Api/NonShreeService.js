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


const nonShreeApiGloble = axios.create({
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
})

function fetchNonShree(params) {
    let url = Config.NON_SHREE.FETCH_ALL_NON_SHREE;
    url = url.replace('state', params.state);
    //url = url.replace('owner', params.userId);
	return nonShreeApiGloble.get(url, {
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
        bugsnag.notify(new Error('fetchNonShree: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}



function createNonShree(params) {
    return nonShreeApiGloble.post(Config.NON_SHREE.CREATE_NON_SHREE, params.form,  {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.access_token,
        }
    }).then((response) => {
        if (in200s(response.status)) {
            return response.data.id
        }
        return null
    }).catch(error => {
        bugsnag.notify(new Error('createNonShree: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}

function createCompetitor(params) {
    let formData = _.cloneDeep(params);
    formData = HelperService.removeField(formData, "access_token");
    return nonShreeApiGloble.post(Config.NON_SHREE.CREATE_COMPITITOR, formData,  {
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
        bugsnag.notify(new Error('createCompetitor: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}


function submitNonShreeVisitForm(params) {
    let formData = _.cloneDeep(params.form);
    formData = HelperService.removeField(formData, "brands");
    return nonShreeApiGloble.post(Config.SHREE.SUBMIT_SHREE_VISIT_FORM, formData,  {
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
        bugsnag.notify(new Error('submitNonShreeVisitForm: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}


function createNonShreeVisitDetail(params) {
    return nonShreeApiGloble.post(Config.SHREE.CREATE_SHREE_VISIT_DETAIL, params.form,  {
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
        bugsnag.notify(new Error('createNonShreeVisitDetail: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}


export const nonShreeService = {
	fetchNonShree,
	createNonShree,
	createCompetitor,
    submitNonShreeVisitForm,
    createNonShreeVisitDetail
}
