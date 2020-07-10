import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'
import { HelperService } from 'App/Services/Utils/HelperService';
import _ from 'lodash';
import { Buffer } from 'buffer';

const isWithin = curryN(3, (min, max, value) => {
	const isNumber = is(Number)
	return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
});

const in200s = isWithin(200, 299)

const dashboardApiClient = axios.create({
	baseURL: Config.API_URL,
	timeout: 30000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	}
});

const DashApiGlobal = axios.create({
    timeout: 10000
})


function feedBackAction(params) {
    let formData = _.cloneDeep(params);
	formData = HelperService.removeField(formData, "access_token");
	formData = HelperService.removeField(formData, "local_id");
	formData = HelperService.removeField(formData, "attachment");
    return DashApiGlobal.post(Config.DASHBOARD.FEEDBACK_SERVICE, formData,  {
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
    	bugsnag.notify(new Error('feedBackAction: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}

function fetchOutStandingAction(params) {
	let url = Config.DASHBOARD.OUTSTANDING_SERVICE;
	let queryParams = '';
	if (params.district == 'ALL' || !params.district) {
		queryParams += `PrimaryFunctions__c+=+'${params.state}'`;
	}else {
		queryParams += `PrimaryFunctions__c+=+'${params.state}'+AND+Dealer_District__c+=+'${params.district}'`;
	}

	url = url.replace('queryParams', queryParams);
	return DashApiGlobal.get(url, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + params.access_token
			
		}
	}).then((response) => {		
		if (in200s(response.status)) {
			return response['data']['records'];
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('fetchOutStandingAction: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function fetchCommunications(params) {
	let url = Config.DASHBOARD.FETCH_COMMUNICATIONS;
	url += `(State__c+=+null+AND+User__c+=+'${params.userId}')+OR+(State__c+=+'${params.state}'+AND+User__c+=+null)+OR+(State__c+=+'${params.state}'+AND+User__c+=+'${params.userId}')`;
	return DashApiGlobal.get(url, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + params.access_token
			
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['records'];
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('fetchCommunications: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}

function fetchCommunicationsAttachments(params) {
	let url = Config.DASHBOARD.FETCH_COMMUNICATIONS_ATTACHMENTS;
	url += `'${params.communicationId}'`;
	return DashApiGlobal.get(url, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + params.access_token
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['records'];
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('fetchCommunicationsAttachments: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function fetchCommunicationsAttachmentsDetails(params) {
	let url = Config.DASHBOARD.FETCH_COMMUNICATIONS_ATTACHMENTS_DETAILS;
	url = url.replace('attachmentId', params.attachmentId);
	if (params.extension == 'jpg' || params.extension == 'png' ) {
		return DashApiGlobal.get(url, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + params.access_token
			},
			responseType: 'arraybuffer'
		}).then((response) => {
			if (in200s(response.status)) {
				let buffer = Buffer.from(response.data, 'binary').toString('base64');
				return buffer
			}
			return null
		}).catch(error => {
			bugsnag.notify(new Error('fetchCommunicationsAttachmentsDetails: ' + JSON.stringify(error.response.data[0])));
			return null
		});
	}else if (params.extension == 'docx' || params.extension == 'doc') {
		return DashApiGlobal.get(url, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + params.access_token
			},
			responseType: 'blob'
		}).then((response) => {
			if (in200s(response.status)) {
				return response['data']
			}
			return null
		}).catch(error => {
			bugsnag.notify(new Error('fetchCommunicationsAttachmentsDetails: ' + JSON.stringify(error.response.data[0])));
			return null
		});
	}else {
		return DashApiGlobal.get(url, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + params.access_token
			}
		}).then((response) => {
			if (in200s(response.status)) {
				return response['data']
			}
			return null
		}).catch(error => {
			bugsnag.notify(new Error('fetchCommunicationsAttachmentsDetails: ' + JSON.stringify(error.response.data[0])));
			return null
		});
	}
}



function fetchFinalObservation(params) {
	let url = Config.DASHBOARD.FETCH_FINAL_OBSERVATION;
	url = url.replace('user', params.userId);
	url = url.replace('owner', params.userId);
	url = url.replace('date', params.date);

	return DashApiGlobal.get(url, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + params.access_token
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['records'];
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('fetchFinalObservation: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}



function submitFinalObservationForm(params) {
	let url = Config.DASHBOARD.SUBMIT_FINAL_OBSERVATION;
	return DashApiGlobal.post(url, {records: params.form}, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + params.access_token
			
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['results'];
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('submitFinalObservationForm: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}

function sendAttachment(params) {
	let url = Config.DASHBOARD.SEND_ATTACHMENT;
	return DashApiGlobal.post(url, params.form, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + params.access_token
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response['data']['success'];
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('sendAttachment: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}




export const dashboardService = {
	feedBackAction,
	fetchOutStandingAction,
	fetchCommunications,
	fetchCommunicationsAttachments,
	fetchCommunicationsAttachmentsDetails,
	submitFinalObservationForm, 
	fetchFinalObservation,
	sendAttachment
}
