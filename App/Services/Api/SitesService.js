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

const siteApiClient = axios.create({
	baseURL: Config.API_URL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	timeout: 10000
});


function createSiteVisit(params) {
	let formData = _.cloneDeep(params.siteVisitForm);
	formData = HelperService.removeField(formData, "brands");
	return siteApiClient.post(Config.SHREE_SITE_SERVICE.CREATE_SITE_VISIT, formData, {
		headers: {
			Authorization: 'Bearer ' + params.access_token,
			'Content-Type': 'application/json'
		}
	}).then((response) => {
		if (in200s(response.status)) {
			return (response.data && response.data.id  ? response.data : null)
		}
		return null
	}).catch(error => {
		bugsnag.notify(new Error('createSiteVisit: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function createSite(params) {
	return siteApiClient.post(Config.SHREE_SITE_SERVICE.CREATE_SITE, params.siteForm, {
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
		bugsnag.notify(new Error('createSite: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function fetchSites(params) {
	let url = Config.SHREE_SITE_SERVICE.SHREE_FETCH_SITE_SERVICE;
	//url = url.replace('owner', params.userId);
	url = url.replace('state', params.state);
	return siteApiClient.get(url, {
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
		bugsnag.notify(new Error('fetchSites: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}


function fetchSiteVisits(params) {
	let url = Config.SHREE_SITE_SERVICE.SHREE_FETCH_SITE_VISIT_SERVICE;
	url = url.replace('owner', params.userId);
	url = url.replace('state', params.state);
	url = url.replace('site', params.site);

	return siteApiClient.get(url, {
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
		bugsnag.notify(new Error('fetchSiteVisits: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}

function createCompetitorForm(params) {
	return siteApiClient.post(Config.SHREE_SITE_SERVICE.CREATE_SITE_VISIT_COMPETITOR, params.form, {
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
		bugsnag.notify(new Error('createCompetitorForm: ' + JSON.stringify(error.response.data[0])));
		return null
	});
}

export const siteService = {
	createSite,
	createSiteVisit,
	fetchSites,
	createCompetitorForm,
	fetchSiteVisits
}
