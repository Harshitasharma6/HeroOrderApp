import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { ValidationService } from 'App/Services/ValidationService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import { call, put, select, take } from 'redux-saga/effects';
import { nonShreeService } from 'App/Services/Api/NonShreeService';
import { shreeService } from 'App/Services/Api/ShreeService';
import NonShreeAction from 'App/Stores/NonShree/Actions';
import ShreeActions from 'App/Stores/Shree/Actions';
import { NonShreeTypes } from 'App/Stores/NonShree/Actions'
import { offlineApiCall } from './OfflineSaga';
import { Alert } from 'react-native';
import { fetchLocation } from './UserSaga';
import _ from 'lodash';


export function* watchCreateNonShreeRequest() {
	while (true) {
		const { payload } = yield take(NonShreeTypes.CREATE_NON_SHREE)
		try {
			const validationFailed = yield call(ValidationService.validateNonShreeForm, payload.form);
			if (validationFailed) {
				HelperService.showToast({ message: validationFailed.error_message, duration: 2000, buttonText: 'Okay' });
				yield put(NonShreeAction.nonShreeFormValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(createNonShree, payload)
	}
}


export function* watchSubmitNonShreeVisitForm() {
	while (true) {
		const { payload } = yield take(NonShreeTypes.SUBMIT_NON_SHREE_VISIT_FORM);
		try {
			const validationFailed = yield call(ValidationService.validateShreeVisitForm, payload.form);
			const validationFailedBrand = yield call(ValidationService.validateAllBrandForms, payload.form.brands);
			if (validationFailed || validationFailedBrand) {
				HelperService.showToast({ 
					message: validationFailed ? validationFailed.error_message : validationFailedBrand.error_message, 
					duration: 2000, 
					buttonText: 'Okay' 
				});

				yield put(NonShreeAction.nonShreeVisitFormValidationFailed(validationFailed || validationFailedBrand));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(submitNonShreeVisitForm, payload)
	}
}

export function* createNonShree(payload) {
	yield put(NonShreeAction.createNonShreeLoading());
	try {
		let location = yield call(fetchLocation);
		if (location) {
			payload.form['Latitude'] = location.latitude;
			payload.form['Longitude'] = location.longitude;
		} else {
			yield put(NonShreeAction.doNothing());
		    yield put(NonShreeAction.createNonShreeLoadingStop());
		    return;
		}

		const startDay = yield select(state => state.startDay);
		const user = yield select(state => state.user);
		const userId = user.loginDetails.userId;
		const access_token = startDay.access_token;
		payload.form.LoginUserId = userId;
		payload.access_token = access_token;


		let offlinActionData = {
			apiCall: (nonShreeService.createNonShree),
			resource: 'createNonShree', 
			callName: 'create', 
			params: HelperService.decorateWithLocalId(payload),
			timestamp: HelperService.getCurrentTimestamp(),
			successCallback: (NonShreeAction.createNonShreeSuccess),
			failureCallback: (NonShreeAction.createNonShreeFailure),
			replaceServerParams: false
		};

		const successData = yield call(offlineApiCall, offlinActionData);

		if (successData) { 
			yield put(NonShreeAction.createNonShreeSuccess(payload));
			yield put(NonShreeAction.fetchNonShree());
			HelperService.showToast({ message: 'Non Shree Counter Created Successfully.', duration: 1000, buttonText: '' });
			NavigationService.goback();
		} else {
			yield put(NonShreeAction.createNonShreeFailure())
			HelperService.showToast({ message: 'Cannot Create Non Shree Counter. Try after some time', duration: 2000, buttonText: 'Okay' });

		}
	} catch (error) {
		yield put(NonShreeAction.createNonShreeFailure());
		HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
	}
}


export function* fetchNonShree({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(NonShreeAction.doNothing());
		return;
	}
	yield put(NonShreeAction.fetchNonShreeLoading());
	try {
		const user = yield select(state => state.startDay);
		const userId = user.userDetailList.Id;
		const state = user.userDetailList.State;
		const access_token = user.access_token;
		let successData = yield call(nonShreeService.fetchNonShree, {userId, state, access_token});
		if (successData) {
			yield put(NonShreeAction.fetchNonShreeSuccess(successData));
			let shreeData  = yield select(state => state.shree)
			let searchList  = shreeData.allCountersSearchList;
			let searchDealerList = shreeData.allCountersSearchDealerList;
			let searchRetailerList = shreeData.allCountersSearchRetailerList;

			successData.map((obj) => {
				if (obj.Party_Type__c == 'Dealer' || obj.Shop_Type__c == 'Dealer') {
					searchDealerList.push({
						id: obj.Id, 
						name: `${obj.Name}`
					});
				}else if (obj.Party_Type__c == 'Retailer' || obj.Shop_Type__c == 'Retailer') {
					searchRetailerList.push({
						id: obj.Id, 
						name: `${obj.Name}`
					});
				}

				searchList.push({
					id: obj.Id, 
					name: `${obj.Name} (${obj.Party_Type__c || obj.Shop_Type__c})`
				});
			});


			searchList = _.uniqBy(searchList, 'id');
			searchDealerList = _.uniqBy(searchDealerList, 'id');
			searchRetailerList = _.uniqBy(searchRetailerList, 'id');


			yield put(ShreeActions.getAllCountersSuccess({
				list: searchList, 
				searchList, 
				searchDealerList, 
				searchRetailerList
			}));

		} else {
			yield put(NonShreeAction.fetchNonShreeFailure());
		}
	} catch (error) {
		console.log('Error', error)
		yield put(NonShreeAction.fetchNonShreeFailure());
	}
}


export function* createCompetitor({ payload }) {
	const isOnline = yield select(getConnectionStatus); 
	if (!isOnline) {
		yield put(NonShreeAction.doNothing());
		return;
	}
	yield put(NonShreeAction.createCompetitorLoading());
	try {
		let successData = yield call(nonShreeService.createCompetitor, payload);
		if (successData) {
			yield put(NonShreeAction.createCompetitorSuccess(successData));
			HelperService.showToast({ message: 'Competitor Added Successfully!', duration: 1000, buttonText: '' });
		} else {
			yield put(NonShreeAction.createCompetitorFailure());
		}
	} catch (error) {
		yield put(NonShreeAction.createCompetitorFailure());
	}
}


export function* submitNonShreeVisitForm(payload) {
	yield put(NonShreeAction.submitNonShreeVisitFormLoading());
	try {
		let location = yield call(fetchLocation);
		if (location) {
			payload.form['Latitude'] = location.latitude;
			payload.form['Longitude'] = location.longitude;
		} else {
			yield put(NonShreeAction.doNothing());
		    yield put(NonShreeAction.submitNonShreeVisitFormLoadingStop());
		    return;
		}
		
		let offlinActionData = {
			apiCall: (nonShreeService.submitNonShreeVisitForm),
			resource: 'submitShreeVisitForm', 
			callName: 'create', 
			params: HelperService.decorateWithLocalId(payload),
			timestamp: HelperService.getCurrentTimestamp(),
			successCallback: (NonShreeAction.submitNonShreeVisitFormSuccess),
			failureCallback: (NonShreeAction.submitNonShreeVisitFormFailure),
			replaceServerParams: false
		}
		const successData = yield call(offlineApiCall, offlinActionData);

		if (successData) {
				let brands = _.cloneDeep(payload.form.brands);
				if (brands && brands.length) {
					brands.map((obj, index) => {
						obj['Counter_Visit__c'] = successData.id;
						obj['attributes'] = {type: "Competitor__c", referenceId: "ref" + (index+1)};
						obj = HelperService.removeField(obj, "id");
					});

					let brandsPayloadData = {form: {records: brands}}
					yield call(createNonShreeVisitDetail, brandsPayloadData)
				}else {
					yield put(NonShreeAction.submitNonShreeVisitFormSuccess(shreeVisitData));
					HelperService.showToast({ message: 'Visit Created', duration: 2000, buttonText: 'Okay' });
					yield put(NonShreeAction.submitNonShreeVisitFormSuccess({dealerId: payload.form.CounterName}));
					NavigationService.navigate('NonShreeVisitList')
				}
			}else {
				yield put(NonShreeAction.submitNonShreeVisitFormFailure())
				HelperService.showToast({ message: 'Cannot create visit', duration: 2000, buttonText: 'Okay' });
			}
	} catch (error) {
		yield put(NonShreeAction.submitNonShreeVisitFormFailure());
		HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
	}
}

export function* createNonShreeVisitDetail(payload, selectedCounter) {
	try {
		const startDay = yield select(state => state.startDay);
		const access_token = startDay.access_token;
		payload.access_token = access_token;

		let offlinActionData = {
			apiCall: (nonShreeService.createNonShreeVisitDetail),
			resource: 'createNonShreeVisitDetail', 
			callName: 'create', 
			params: HelperService.decorateWithLocalId(payload),
			timestamp: HelperService.getCurrentTimestamp(),
			successCallback: (NonShreeAction.createNonShreeVisitDetailSuccess),
			failureCallback: (NonShreeAction.createNonShreeVisitDetailFailure),
			replaceServerParams: false
		};

		const successData = yield call(offlineApiCall, offlinActionData);
		if (successData) { 
			yield put(NonShreeAction.submitNonShreeVisitFormSuccess());
			HelperService.showToast({ message: 'Visit Created.', duration: 2000, buttonText: 'Okay' });
			NavigationService.navigate('NonShreeVisitList')
			yield put(NonShreeAction.submitNonShreeVisitFormSuccess({dealerId: selectedCounter}));
		} else {
			HelperService.showToast({ 
				message: 'Cannot Add Visit Brand Detail. Try after some time', 
				duration: 2000, 
				buttonText:'Okay' 
			});
		}
	} catch (error) {
		yield put(NonShreeAction.submitNonShreeVisitFormFailure());
		HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
	}
}


export function* fetchNonShreePreviousVisits({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(NonShreeAction.doNothing());
		return;
	}
	
	try {
		yield put(NonShreeAction.fetchNonShreePreviousVisitsLoading());
		const startDay = yield select(state => state.startDay);
		const user = yield select(state => state.user);
		const userId = user.loginDetails.userId;
   	 	const access_token = startDay.access_token;
   	 	payload.access_token = access_token;
   	 	payload.userId = userId;

		let successData = yield call(shreeService.fetchPreviousVisits, payload);
		if (successData) {
			yield put(NonShreeAction.fetchNonShreePreviousVisitsSuccess(successData));
		} else {
			yield put(NonShreeAction.fetchNonShreePreviousVisitsFailure());
		}
	} catch (error) {
		yield put(NonShreeAction.fetchNonShreePreviousVisitsFailure());
	}
}
