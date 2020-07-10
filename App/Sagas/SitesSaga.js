import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { ValidationService } from 'App/Services/ValidationService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import { SitesTypes } from 'App/Stores/Sites/Actions';
import { call, put, select, take } from 'redux-saga/effects';
import { siteService } from 'App/Services/Api/SitesService';
import SiteActions from 'App/Stores/Sites/Actions';
import { offlineApiCall } from './OfflineSaga';
import {Alert} from 'react-native'
import { fetchLocation } from './UserSaga';
import _ from 'lodash';


export function* watchCreateSiteVisitFormRequest() {
	while (true) {
		const { payload } = yield take(SitesTypes.CREATE_SITE_VISIT)

		try {
			const validationFailed = yield call(ValidationService.validateSiteVisitForm, payload.siteVisitForm);
			const validationFailedBrand = yield call(ValidationService.validateAllBrandForms, payload.siteVisitForm.brands);
			if (validationFailed || validationFailedBrand) {
				HelperService.showToast({ message: validationFailed ? validationFailed.error_message : validationFailedBrand.error_message, duration: 2000, buttonText: 'Okay' });
				yield put(SiteActions.siteVisitFormValidationFailed(validationFailed || validationFailedBrand));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(createSiteVisit, payload)
	}
}


export function* watchCreateSiteFormRequest() {
	while (true) {
		const { payload } = yield take(SitesTypes.CREATE_SITE)

		try {
			const validationFailed = yield call(ValidationService.validateSiteForm, payload.siteForm);
			if (validationFailed) {
				HelperService.showToast({ message: validationFailed.error_message, duration: 2000, buttonText: 'Okay' });
				yield put(SiteActions.siteFormValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(createSite, payload)
	}
}



export function* createSite(payload) {
	yield put(SiteActions.createSiteLoading());
	try {
		let location = yield call(fetchLocation)
		if (location) {
			payload.siteForm['Latitude'] = location.latitude;
			payload.siteForm['Longitude'] = location.longitude;
		} else {
			yield put(SiteActions.doNothing());
		    yield put(SiteActions.createSiteLoadingStop());
		    return;
		}
		let offlinActionData = {
			apiCall: (siteService.createSite),
			resource: 'createSite', 
			callName: 'create',
			params: HelperService.decorateWithLocalId(payload),
			timestamp: HelperService.getCurrentTimestamp(),
			successCallback: (SiteActions.createSiteSuccess),
			failureCallback: (SiteActions.createSiteFailure),
			replaceServerParams: false
		};

		const successData = yield call(offlineApiCall, offlinActionData);

		if (successData) { 
			yield put(SiteActions.createSiteSuccess(payload));
			HelperService.showToast({ message: 'Site Created Successfully.', duration: 1000, buttonText: '' });
			yield put(SiteActions.fetchSites());
			NavigationService.navigate('SiteListScreen')
		} else {
			yield put(SiteActions.createSiteFailure())
			HelperService.showToast({ message: 'Error!! Cannot Create Site.Verify fields and try again.', duration: 2000, buttonText: 'Okay' });
		}
	} catch (error) {
		yield put(SiteActions.createSiteFailure());
		HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
	}
}



export function* createSiteVisit(payload) {
	yield put(SiteActions.createSiteVisitLoading());
	try {
		let location = yield call(fetchLocation)
		if (location) {
			payload.siteVisitForm['Latitude'] = location.latitude;
			payload.siteVisitForm['Longitude'] = location.longitude;
		} else {
			yield put(SiteActions.doNothing());
		    yield put(SiteActions.createSiteVisitLoadingStop());
		    return;
		}
		
		let offlinActionData = {
			apiCall: (siteService.createSiteVisit),
			resource: 'createSiteVisit', 
			callName: 'create', 
			params: HelperService.decorateWithLocalId(payload),
			timestamp: HelperService.getCurrentTimestamp(),
			successCallback: (SiteActions.createSiteVisitSuccess),
			failureCallback: (SiteActions.createSiteVisitFailure),
			replaceServerParams: false
		};

		const successData = yield call(offlineApiCall, offlinActionData);
		if (successData) {
			let brands = _.cloneDeep(payload.siteVisitForm.brands);
			if (brands && brands.length) {
				brands.map((obj, index) => {
					obj['Site_Visit_Name__c'] = successData.id;
					obj['attributes'] = {type: "Competitor__c", referenceId: "ref" + (index+1)};
					obj = HelperService.removeField(obj, "id");
				});

				let brandsPayloadData = {form: {records: brands}}
				yield call(createCompetitorForm, brandsPayloadData, payload.siteVisitForm.Site) 
			}else {
				yield put(SiteActions.createSiteVisitSuccess(payload));
				HelperService.showToast({ 
					message: 'Site Visit created Successfully.', 
					duration: 1000, 
					buttonText: 'Okay'
				});
				yield put(SiteActions.fetchSiteVisits({site: payload.siteVisitForm.Site}))
				NavigationService.navigate('SiteVisitForm');
				
			}
		} else {
			yield put(SiteActions.createSiteVisitFailure())
			HelperService.showToast({ 
				message: 'Cannot Create Site Visit. Try after some time', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		}
	} catch (error) {
		yield put(SiteActions.createSiteVisitFailure());
		HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
	}
}


export function* watchCreateCompetitorFormRequest() {
	while (true) {
		const { payload } = yield take(SitesTypes.CREATE_COMPETITOR_FORM)

		try {
			const validationFailed = yield call(ValidationService.validateSiteCompetitorForm, payload.siteCompetitorForm);
			if (validationFailed) {
				HelperService.showToast({ message: validationFailed.error_message, duration: 2000, buttonText: 'Okay' });
				yield put(SiteActions.createCompetitorFormValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(createCompetitorForm, payload)
	}
}

export function* createCompetitorForm(payload, selectedSite) {
	yield put(SiteActions.createCompetitorFormLoading());
	const startDay = yield select(state => state.startDay);
	const access_token = startDay.access_token;
	payload.access_token = access_token;
	try {
		let offlinActionData = {
			apiCall: (siteService.createCompetitorForm),
			resource: 'createCompetitorForm', 
			callName: 'create',
			params: HelperService.decorateWithLocalId(payload),
			timestamp: HelperService.getCurrentTimestamp(),
			successCallback: (SiteActions.createCompetitorFormSuccess),
			failureCallback: (SiteActions.createCompetitorFormFailure),
			replaceServerParams: false
		};

		const successData = yield call(offlineApiCall, offlinActionData);

		if (successData) { 
			yield put(SiteActions.createCompetitorFormSuccess(payload));
			yield put(SiteActions.createSiteVisitSuccess());
			HelperService.showToast({ 
				message: 'Site Visit created Successfully.', 
				duration: 2000, 
				buttonText: '' 
			});
			yield put(SiteActions.fetchSiteVisits({site: selectedSite}))
			NavigationService.navigate('SiteVisitForm');
		} else {
			yield put(SiteActions.createCompetitorFormFailure())
			HelperService.showToast({ 
				message: 'Error while adding brand details.', 
				duration: 1000, 
				buttonText: '' 
			});
		}
	} catch (error) {
		yield put(SiteActions.createCompetitorFormFailure());
		yield put(SiteActions.createSiteVisitFailure());
		
		HelperService.showToast({ 
			message: 'Error while adding brand details.', 
			duration: 1000, 
			buttonText: '' 
		});
	}
}


export function* fetchSites({ payload }) {
	const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
	if (!isOnline) {
		yield put(SiteActions.doNothing());
		return;
	}
	yield put(SiteActions.fetchSitesLoading());
	try {
		const user = yield select(state => state.startDay);
		const userId = user.userDetailList.Id;
		const state = user.userDetailList.State;
		const access_token = user.access_token;
		
		let successData = yield call(siteService.fetchSites, {access_token, userId, state});
		if (successData) {
			yield put(SiteActions.fetchSitesSuccess(successData));
		} else {
			yield put(SiteActions.fetchSitesFailure());
		}
	} catch (error) {
		console.log('Error', error)
		yield put(SiteActions.fetchSitesFailure());
	}
}


export function* fetchSiteVisits({ payload }) {
	const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
	if (!isOnline) {
		yield put(SiteActions.doNothing());
		return;
	}
	yield put(SiteActions.fetchSiteVisitsLoading());
	try {
		const user = yield select(state => state.startDay);
		const userId = user.userDetailList.Id;
		const state = user.userDetailList.State;
		const access_token = user.access_token;
		const site = payload.site;
		
		let successData = yield call(siteService.fetchSiteVisits, {access_token, userId, state, site});
		if (successData) {
			yield put(SiteActions.fetchSiteVisitsSuccess(successData));
		} else {
			yield put(SiteActions.fetchSiteVisitsFailure());
		}
	} catch (error) {
		console.log('Error', error)
		yield put(SiteActions.fetchSiteVisitsFailure());
	}
}






