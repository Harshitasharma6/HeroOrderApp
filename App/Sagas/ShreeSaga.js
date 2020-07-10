import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { ValidationService } from 'App/Services/ValidationService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import { ShreeTypes } from 'App/Stores/Shree/Actions';
import { call, put, select, take } from 'redux-saga/effects';
import { shreeService } from 'App/Services/Api/ShreeService';
import ShreeActions from 'App/Stores/Shree/Actions';
import CommonActions from 'App/Stores/Common/Actions';
import { nonShreeService } from 'App/Services/Api/NonShreeService';
import { offlineApiCall } from './OfflineSaga';
import { fetchLocation } from './UserSaga';
import {Alert} from 'react-native'
import _ from 'lodash';


export function* watchCreateShreeRetailerRequest() {
	while (true) {
		const { payload } = yield take(ShreeTypes.CREATE_SHREE_RETAILER);
		try {
			const validationFailed = yield call(ValidationService.validateAddShreeRetailerForm, payload.form);
			if (validationFailed) {
				HelperService.showToast({ 
					message: validationFailed.error_message, 
					duration: 2000, 
					buttonText: 'Okay' 
				});

				yield put(ShreeActions.shreeRetailerFormValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(createShreeRetailer, payload)
	}
}



export function* watchCreateShreeDealerRequest() {
	while (true) {
		const { payload } = yield take(ShreeTypes.CREATE_SHREE_DEALER);
		try {
			const validationFailed = yield call(ValidationService.validateAddShreeRetailerForm, payload.form);
			if (validationFailed) {
				HelperService.showToast({ 
					message: validationFailed.error_message, 
					duration: 2000, 
					buttonText: 'Okay' 
				});

				yield put(ShreeActions.shreeRetailerFormValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(createShreeDealer, payload)
	}
}

export function* watchSubmitShreeVisitForm() {
	while (true) {
		const { payload } = yield take(ShreeTypes.SUBMIT_SHREE_VISIT_FORM);
		try {
			const validationFailed      = yield call(ValidationService.validateShreeVisitForm, payload.form);
			const validationFailedBrand = yield call(ValidationService.validateAllBrandForms, payload.form.brands);
			if (validationFailed || validationFailedBrand) {
				HelperService.showToast({ 
					message: validationFailed ? validationFailed.error_message : validationFailedBrand.error_message, 
					duration: 2000, 
					buttonText: 'Okay' 
				});

				yield put(ShreeActions.shreeVisitFormValidationFailed(validationFailed || validationFailedBrand));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(submitShreeVisitForm, payload)
	}
}


export function* watchCreateShreeVisitDetailRequest() {
	while (true) {
		const { payload } = yield take(ShreeTypes.CREATE_SHREE_VISIT_DETAIL);
		try {
			const validationFailed = yield call(ValidationService.validateAddShreeVisitDetailForm, payload.form);
			if (validationFailed) {
				HelperService.showToast({ 
					message: validationFailed.error_message, 
					duration: 2000, 
					buttonText: 'Okay' 
				});

				yield put(ShreeActions.shreeVisitDetailFormValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(createShreeVisitDetail, payload)
	}
}


export function* createShreeRetailer(payload) {
	yield put(ShreeActions.createShreeRetailerLoading());
	try {
		let location = yield call(fetchLocation)
		if (location) {
			payload.form['Latitude'] = location.latitude;
			payload.form['Longitude'] = location.longitude;
		} else {
			yield put(ShreeActions.doNothing());
		    yield put(ShreeActions.createShreeRetailerLoadingStop());
		    return;
		}

		const startDay = yield select(state => state.startDay);
		const user = yield select(state => state.user);
		const userId = user.loginDetails.userId;
		const access_token = startDay.access_token;
		payload.form.LoginUserId = userId;
		payload.access_token = access_token;


		let offlinActionData = {
			apiCall: (shreeService.createShreeRetailer),
			resource: 'createShreeRetailer', 
			callName: 'create', 
			params: HelperService.decorateWithLocalId(payload),
			timestamp: HelperService.getCurrentTimestamp(),
			successCallback: (ShreeActions.createShreeRetailerSuccess),
			failureCallback: (ShreeActions.createShreeRetailerFailure),
			replaceServerParams: false
		};

		const successData = yield call(offlineApiCall, offlinActionData);

		if (successData) { 
			yield put(ShreeActions.createShreeRetailerSuccess(payload));
			HelperService.showToast({ message: 'Shree Retailer Added Successfully.', duration: 1000, buttonText: '' });
			yield put(ShreeActions.fetchShreeRetailers());
			
			NavigationService.goback();
		} else {
			yield put(ShreeActions.createShreeRetailerFailure())
			HelperService.showToast({ message: 'Cannot Add Shree Retailer. Try after some time', duration: 2000, buttonText: 'Okay' });

		}
	} catch (error) {
		console.log('Error', error)
		yield put(ShreeActions.createShreeRetailerFailure());
		HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
	}
}


export function* fetchShree({ payload }) {
	const isOnline = yield select(getConnectionStatus); 
	if (!isOnline) {
		
		yield put(ShreeActions.doNothing());
		return;
	}

	yield put(ShreeActions.fetchShreeLoading());
	try {
		const user = yield select(state => state.startDay);
		const userId = user.userDetailList.Id;
		const state = user.userDetailList.State;
		const access_token = user.access_token;

		let successData = yield call(shreeService.fetchShree, {state, userId, access_token});
		if (successData) {
			yield put(ShreeActions.fetchShreeSuccess(successData));
			yield put(ShreeActions.fetchShreeDealersSuccess(successData));

			let searchDealerList = [];
			let shreeData  = yield select(state => state.shree)
			let searchList  = shreeData.allCountersSearchList;
			let searchRetailerList = shreeData.allCountersSearchRetailerList;

			successData.map((obj) => {
				searchDealerList.push({
					id: obj.Id, 
					name: `${obj.Name}`
				});

				searchList.push({
					id: obj.Id, 
					name: `${obj.Name} (${obj.Party_Type__c || obj.Shop_Type__c})`
				});
			});


			searchList = _.uniqBy(searchList, 'id');

			yield put(ShreeActions.getAllCountersSuccess({
				list: searchList, 
				searchList, 
				searchDealerList, 
				searchRetailerList
			}));

		} else {
			yield put(ShreeActions.fetchShreeFailure());
		}
	} catch (error) {
		console.log('fetchShreeFailure', error)
		yield put(ShreeActions.fetchShreeFailure());
	}
}



export function* fetchShreeRetailers({ payload }) {
	const isOnline = yield select(getConnectionStatus); 
	if (!isOnline) {
		
		yield put(ShreeActions.doNothing());
		return;
	}

	yield put(ShreeActions.fetchShreeRetailersLoading());
	try {
		const user = yield select(state => state.startDay);
		const userId = user.userDetailList.Id;
		const state = user.userDetailList.State;
		const access_token = user.access_token;

		let successData = yield call(shreeService.fetchShreeRetailers, {state, userId, access_token});
		if (successData) {
			yield put(ShreeActions.fetchShreeRetailersSuccess(successData));
			let searchRetailerList = [];
			let shreeData  = yield select(state => state.shree)
			let searchList  = shreeData.allCountersSearchList;
			let searchDealerList = shreeData.allCountersSearchDealerList;

			successData.map((obj) => {
				searchRetailerList.push({
					id: obj.Id, 
					name: `${obj.Name}`
				});

				searchList.push({
					id: obj.Id, 
					name: `${obj.Name} (${obj.Party_Type__c || obj.Shop_Type__c})`
				});
			});

			searchList = _.uniqBy(searchList, 'id');


			yield put(ShreeActions.getAllCountersSuccess({
				list: searchList, 
				searchList, 
				searchDealerList, 
				searchRetailerList
			}));
		
			

		} else {
			yield put(ShreeActions.fetchShreeRetailersFailure());
		}
	} catch (error) {
		yield put(ShreeActions.fetchShreeRetailersFailure());
	}
}


export function* createShreeDealer({ payload }) {
	yield put(ShreeActions.createShreeDealerLoading());
	try {
		let location = yield call(fetchLocation)
		if (location) {
			payload.form['Latitude'] = location.latitude;
			payload.form['Longitude'] = location.longitude;
		} else {
			yield put(ShreeActions.doNothing());
		    yield put(ShreeActions.createShreeDealerLoadingStop());
		    return;
		}

		const startDay = yield select(state => state.startDay);
		const user = yield select(state => state.user);
		const userId = user.loginDetails.userId;
		const access_token = startDay.access_token;
		payload.form.LoginUserId = userId;
		payload.access_token = access_token;


		let offlinActionData = {
			apiCall: (shreeService.createShreeRetailer),
			resource: 'createShreeDealer', 
			callName: 'create', 
			params: HelperService.decorateWithLocalId(payload),
			timestamp: HelperService.getCurrentTimestamp(),
			successCallback: (ShreeActions.createShreeDealerSuccess),
			failureCallback: (ShreeActions.createShreeDealerFailure),
			replaceServerParams: false
		};

		const successData = yield call(offlineApiCall, offlinActionData);

		if (successData) { 
			yield put(ShreeActions.createShreeRetailerSuccess(payload));
			HelperService.showToast({ message: 'Shree Dealer Added Successfully.', duration: 1000, buttonText: '' });
			yield put(ShreeActions.fetchShree());
			
			NavigationService.goback();
		} else {
			yield put(ShreeActions.createShreeRetailerFailure())
			HelperService.showToast({ message: 'Cannot Add Shree Dealer. Try after some time', duration: 2000, buttonText: 'Okay' });

		}
	} catch (error) {
		yield put(ShreeActions.createShreeRetailerFailure());
		HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
	}
}


export function* updateLocation({ payload }) {
	const isOnline = yield select(getConnectionStatus); // checks whether net is connected or not.
	if (!isOnline) {
		yield put(ShreeActions.doNothing());
		return;
	}

	yield put(ShreeActions.updateLocationLoading());
	try {
		const startDay = yield select(state => state.startDay);
	    const access_token = startDay.access_token;

		let successData = yield call(shreeService.updateLocation, payload, access_token);
		if (successData) {
			yield put(ShreeActions.updateLocationSuccess(successData));
			HelperService.showToast({ 
				message: 'Location Updated !!', 
				duration: 2000, 
				buttonText: '' 
			});
			yield put(ShreeActions.fetchShree());
			yield put(CommonActions.closeModal());
		} else {
			yield put(ShreeActions.updateLocationFailure());
			HelperService.showToast({ 
				message: 'Location Updation Failed !!', 
				duration: 2000, 
				buttonText: '' 
			});
		}
	} catch (error) {
		HelperService.showToast({ 
			message: 'Location Updation Failed !!', 
			duration: 2000, 
			buttonText: '' 
		});
		yield put(ShreeActions.updateLocationFailure());
	}
}


export function* updatePotential({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(ShreeActions.doNothing());
		return;
	}

	yield put(ShreeActions.updatePotentialLoading());
	try {
		const startDay = yield select(state => state.startDay);
	    const access_token = startDay.access_token;

		let successData = yield call(shreeService.updatePotential, payload, access_token);
		if (successData) {
			yield put(ShreeActions.updatePotentialSuccess(successData));
			HelperService.showToast({ 
				message: "Potential Updated successfully !!", 
				duration: 2000, 
				buttonText: '' 
			});
		} else {
			yield put(ShreeActions.updatePotentialFailure());
		}
	} catch (error) {
		yield put(ShreeActions.updatePotentialFailure());
	}
}


export function* fetchOutstanding({ payload }) {
	const isOnline = yield select(getConnectionStatus); 
	if (!isOnline) {
		yield put(ShreeActions.doNothing());
		return;
	}

	
	try {
		yield put(ShreeActions.fetchOutstandingLoading());
		const startDay = yield select(state => state.startDay);
		const user = yield select(state => state.user);
		const userId = user.loginDetails.userId;
   	 	const access_token = startDay.access_token;
   	 	const state = startDay.userDetailList.State;

		let successData = yield call(shreeService.fetchOutstanding, {...payload, userId, access_token, state});
		if (successData) {
			yield put(ShreeActions.fetchOutstandingSuccess(successData));
		} else {
			yield put(ShreeActions.fetchOutstandingFailure());
		}
	} catch (error) {
		yield put(ShreeActions.fetchOutstandingFailure());
	}
}


export function* fetchPayments({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(ShreeActions.doNothing());
		return;
	}
	
	try {
		yield put(ShreeActions.fetchPaymentsLoading());
		const startDay = yield select(state => state.startDay);
		const user = yield select(state => state.user);
		const userId = user.loginDetails.userId;
   	 	const access_token = startDay.access_token;
   	 	payload.access_token =  access_token;
   	 	payload.userId =  userId;

		let successData = yield call(shreeService.fetchPayments, payload);
		if (successData) {
			yield put(ShreeActions.fetchPaymentsSuccess(successData));
		} else {
			yield put(ShreeActions.fetchPaymentsFailure());
		}
	} catch (error) {
		yield put(ShreeActions.fetchPaymentsFailure());
	}
}

export function* fetchPreviousVisits({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(ShreeActions.doNothing());
		return;
	}
	
	try {
		yield put(ShreeActions.fetchPreviousVisitsLoading());
		const startDay = yield select(state => state.startDay);
		const user = yield select(state => state.user);
		const userId = user.loginDetails.userId;
   	 	const access_token = startDay.access_token;
   	 	payload.access_token =  access_token;
   	 	payload.userId =  userId;

		let successData = yield call(shreeService.fetchPreviousVisits, payload);
		if (successData) {
			yield put(ShreeActions.fetchPreviousVisitsSuccess(successData));
		} else {
			yield put(ShreeActions.fetchPreviousVisitsFailure());
		}
	} catch (error) {
		yield put(ShreeActions.fetchPreviousVisitsFailure());
	}
}


export function* fetchLatestVisits({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(ShreeActions.doNothing());
		return;
	}
	
	try {
		yield put(ShreeActions.fetchLatestVisitsLoading());
		const startDay = yield select(state => state.startDay);
		const user = yield select(state => state.user);
		const userId = user.loginDetails.userId;
   	 	const access_token = startDay.access_token;
   	 	payload.access_token =  access_token;
   	 	payload.userId =  userId;
   	 	payload.date = HelperService.dateReadableFormatWithHyphen();


		let successData = yield call(shreeService.fetchLatestVisits, payload);
		if (successData) {
			yield put(ShreeActions.fetchLatestVisitsSuccess(successData));
		} else {
			yield put(ShreeActions.fetchLatestVisitsFailure());
		}
	} catch (error) {
		yield put(ShreeActions.fetchLatestVisitsFailure());
	}
}





export function* fetchAllVisits({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(ShreeActions.doNothing());
		return;
	}
	
	try {
		yield put(ShreeActions.fetchAllVisitsLoading());
		const startDay = yield select(state => state.startDay);
		const user = yield select(state => state.user);
		const userId = user.loginDetails.userId;
   	 	const access_token = startDay.access_token;

		let successData = yield call(shreeService.fetchAllVisits, {access_token, userId});
		if (successData) {
			yield put(ShreeActions.fetchAllVisitsSuccess(successData));
			yield put(ShreeActions.fetchAllVisitsLoadingStop());
		} else {
			yield put(ShreeActions.fetchAllVisitsFailure());
			yield put(ShreeActions.fetchAllVisitsLoadingStop());
		}
	} catch (error) {
		yield put(ShreeActions.fetchAllVisitsFailure());
		yield put(ShreeActions.fetchAllVisitsLoadingStop());
	}
}



export function* fetchAllSiteVisits({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(ShreeActions.doNothing());
		return;
	}
	
	try {
		yield put(ShreeActions.fetchAllSiteVisitsLoading());
		const startDay = yield select(state => state.startDay);
		const user = yield select(state => state.user);
		const userId = user.loginDetails.userId;
   	 	const access_token = startDay.access_token;

		let successData = yield call(shreeService.fetchAllSiteVisits, {access_token, userId});
		if (successData) {
			yield put(ShreeActions.fetchAllSiteVisitsSuccess(successData));
			yield put(ShreeActions.fetchAllSiteVisitsLoadingStop());
		} else {
			yield put(ShreeActions.fetchAllSiteVisitsFailure());
			yield put(ShreeActions.fetchAllSiteVisitsLoadingStop());
		}
	} catch (error) {
		yield put(ShreeActions.fetchAllSiteVisitsFailure());
		yield put(ShreeActions.fetchAllSiteVisitsLoadingStop());
	}
}


export function* fetchAllInfluencerVisits({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(ShreeActions.doNothing());
		return;
	}
	
	try {
		yield put(ShreeActions.fetchAllInfluencerVisitsLoading());
		const startDay = yield select(state => state.startDay);
		const user = yield select(state => state.user);
		const userId = user.loginDetails.userId;
   	 	const access_token = startDay.access_token;
   	 	const state = startDay.userDetailList.State;

		let successData = yield call(shreeService.fetchAllInfluencerVisits, {access_token, userId, state});
		if (successData) {
			yield put(ShreeActions.fetchAllInfluencerVisitsSuccess(successData));
			yield put(ShreeActions.fetchAllInfluencerVisitsLoadingStop());
		} else {
			yield put(ShreeActions.fetchAllInfluencerVisitsFailure());
			yield put(ShreeActions.fetchAllInfluencerVisitsLoadingStop());
		}
	} catch (error) {
		yield put(ShreeActions.fetchAllInfluencerVisitsFailure());
		yield put(ShreeActions.fetchAllInfluencerVisitsLoadingStop());
	}
}



export function* getAllCounters() {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(ShreeActions.doNothing());
		return;
	}

	try {
		yield put(ShreeActions.getAllCountersLoading());
		const startDay = yield select(state => state.startDay);
		const user = yield select(state => state.user);
		const userId = user.loginDetails.userId;
   	 	const access_token = startDay.access_token;
   	 	const state = startDay.userDetailList.State;

		let successData = yield call(shreeService.getAllCounters, {access_token, userId, state});
		if (successData) {
			let searchDealerList = [];
			let searchRetailerList = [];

			let searchList = successData.map((obj) => {
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

				return (
					{
						id: obj.Id, 
						name: `${obj.Name} (${obj.Party_Type__c})`
					}
				);
			});

			yield put(ShreeActions.getAllCountersSuccess({
				list: successData, 
				searchList, 
				searchDealerList, 
				searchRetailerList
			}));

		} else {
			yield put(ShreeActions.getAllCountersFailure());
		}
	} catch (error) {
		yield put(ShreeActions.getAllCountersFailure());
	}
}




export function* getAllDistricts() {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(ShreeActions.doNothing());
		return;
	}

	try {
		yield put(ShreeActions.getAllDistrictsLoading());
		const startDay = yield select(state => state.startDay);
		const user = yield select(state => state.user);
		const userId = user.loginDetails.userId;
   	 	const access_token = startDay.access_token;
   	 	const state = startDay.userDetailList.State;

		let successData = yield call(shreeService.getAllDistricts, {access_token, userId, state});
		if (successData) {
			let searchList = []
			successData.map((obj) => {
				if (obj.Billing_District__c) {
					searchList.push({
						id: obj.Billing_District__c, 
						name: obj.Billing_District__c
					});
				}
			});

			searchList.push({id: 'ALL', name: 'ALL'})
			
			yield put(ShreeActions.getAllDistrictsSuccess({list: searchList}));

		} else {
			yield put(ShreeActions.getAllDistrictsFailure());
		}
	} catch (error) {
		yield put(ShreeActions.getAllDistrictsFailure());
	}
}


export function* fetchSalesInfo({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(ShreeActions.doNothing());
		return;
	}

	try {
		yield put(ShreeActions.fetchSalesInfoLoading());
		const startDay = yield select(state => state.startDay);
		const user = yield select(state => state.user);
		const userId = user.loginDetails.userId;
   	 	const access_token = startDay.access_token;

		let successData = yield call(shreeService.fetchSalesInfo, {...payload, access_token, userId});
		if (successData) {
			let data = {};
			data[payload.dealerId] = successData
			yield put(ShreeActions.fetchSalesInfoSuccess(data));
		} else {
			yield put(ShreeActions.fetchSalesInfoFailure());
		}
	} catch (error) {
		console.log(error)
		yield put(ShreeActions.fetchSalesInfoFailure());
	}
}






export function* submitShreeVisitForm(payload) {
	yield put(ShreeActions.submitShreeVisitFormLoading());
	try {
		let location = yield call(fetchLocation)
		if (location) {
			payload.form['Latitude'] = location.latitude;
			payload.form['Longitude'] = location.longitude;
		} else {
			yield put(ShreeActions.doNothing());
		    yield put(ShreeActions.submitShreeVisitFormLoadingStop());
		    return;
		}

		let offlinActionData = {
			apiCall: (shreeService.submitShreeVisitForm),
			resource: 'submitShreeVisitForm', 
			callName: 'create', 
			params: HelperService.decorateWithLocalId(payload),
			timestamp: HelperService.getCurrentTimestamp(),
			successCallback: (ShreeActions.submitShreeVisitFormSuccess),
			failureCallback: (ShreeActions.submitShreeVisitFormFailure),
			replaceServerParams: false
		}
		const successData = yield call(offlineApiCall, offlinActionData);

		if (successData) {
				//payload.form.id = successData.id;
				// let shreeVisitData = {};
				// shreeVisitData[payload.form.CounterName] = payload.form;
				let brands = _.cloneDeep(payload.form.brands);
				if (brands && brands.length) {
					brands.map((obj, index) => {
						obj['Counter_Visit__c'] = successData.id;
						obj['attributes'] = {type: "Competitor__c", referenceId: "ref" + (index+1)};
						obj = HelperService.removeField(obj, "id");
					});

					let brandsPayloadData = {form: {records: brands}}
					yield call(createShreeVisitDetail, brandsPayloadData, payload.form.CounterName)
				}else {
					yield put(ShreeActions.submitShreeVisitFormSuccess());
					yield put(ShreeActions.fetchLatestVisits({dealerId: payload.form.CounterName}));
					NavigationService.navigate('ShreeCountersVisitsList');
					HelperService.showToast({ message: 'Visit Created', duration: 2000, buttonText: 'Okay' });
				}
			}else {
				yield put(ShreeActions.submitShreeVisitFormFailure())
				HelperService.showToast({ message: 'Cannot submit visit', duration: 2000, buttonText: 'Okay' });
			}
	} catch (error) {
		yield put(ShreeActions.submitShreeVisitFormFailure());
		HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
	}
}

export function* createShreeVisitDetail(payload, selectedCounter) {
	yield put(ShreeActions.createShreeVisitDetailLoading());
	try {
		const startDay = yield select(state => state.startDay);
		const access_token = startDay.access_token;
		payload.access_token = access_token;

		let offlinActionData = {
			apiCall: (shreeService.createShreeVisitDetail),
			resource: 'createShreeVisitDetail', 
			callName: 'create', 
			params: HelperService.decorateWithLocalId(payload),
			timestamp: HelperService.getCurrentTimestamp(),
			successCallback: (ShreeActions.createShreeVisitDetailSuccess),
			failureCallback: (ShreeActions.createShreeVisitDetailFailure),
			replaceServerParams: false
		};

		const successData = yield call(offlineApiCall, offlinActionData);
		if (successData) { 
			yield put(ShreeActions.createShreeVisitDetailSuccess());
			yield put(ShreeActions.submitShreeVisitFormSuccess());
			yield put(ShreeActions.fetchLatestVisits({dealerId: selectedCounter}));
			NavigationService.navigate('ShreeCountersVisitsList');
			HelperService.showToast({ message: 'Visit Created.', duration: 2000, buttonText: 'Okay' });
		} else {
			yield put(ShreeActions.createShreeVisitDetailFailure());
			yield put(ShreeActions.submitShreeVisitFormFailure())
			HelperService.showToast({ 
				message: 'Cannot Add Visit Brand Detail. Try after some time', 
				duration: 2000, 
				buttonText:'Okay' 
			});
		}
	} catch (error) {
		console.log('Error', error)
		yield put(ShreeActions.createShreeVisitDetailFailure());
		yield put(ShreeActions.submitShreeVisitFormFailure());
		HelperService.showToast({ message: error, duration: 2000, buttonText: 'Okay' });
	}
}
