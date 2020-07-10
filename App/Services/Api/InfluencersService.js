import axios from 'axios'
import { Config } from '../../Config/index'
import { is, curryN, gte } from 'ramda'
import { HelperService } from 'App/Services/Utils/HelperService';
import _ from 'lodash';

const isWithin = curryN(3, (min, max, value) => {
	const isNumber = is(Number)
	return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
});
const in200s = isWithin(200, 299)

const influencersApiClient = axios.create({
	baseURL: Config.API_URL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	timeout: 10000
});


function fetchInfluencers(params) {
	let url = Config.SHREE_INFLUENCER_SERVICE.FETCH_INFLUENCERS;
	url  += `State__c+=+'${params.state}'`;
	return influencersApiClient.get(url, {
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
		bugsnag.notify(new Error('fetchInfluencers: ' + JSON.stringify(error.response.data[0])));
		return null
	});	
}

function createInfluencer(params) {
	return influencersApiClient.post(Config.SHREE_INFLUENCER_SERVICE.CREATE_SHREE_INFLUENCER_SERVICE, params.form, {
		headers: {
			Authorization: 'Bearer ' + params.access_token,
			'Content-Type': 'application/json'
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response.data
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('createInfluencer: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}

function createInfluencerVisitForm(params) {
	return influencersApiClient.post(Config.SHREE_INFLUENCER_SERVICE.CREATE_INFLUENCER_VISIT_FORM, params.form, {
		headers: {
			Authorization: 'Bearer ' + params.access_token,
			'Content-Type': 'application/json'
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return response.data.id
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('createInfluencerVisitForm: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}

function fetchInfluencersVisits(params) {
	let url  = Config.SHREE_INFLUENCER_SERVICE.FETCH_ALL_INFLUENCER_VISITS;
	url = url.replace('userId', params.userId);
	url = url.replace('influencer', params.influencerId);
	url = url.replace('state', params.state);
	return influencersApiClient.get(url, {
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
		bugsnag.notify(new Error('fetchInfluencersVisits: ' + JSON.stringify(error.response.data[0])));
		return null
	});	

}


export const influencersService = {
	fetchInfluencers,
	createInfluencer,
	createInfluencerVisitForm,
	fetchInfluencersVisits
}