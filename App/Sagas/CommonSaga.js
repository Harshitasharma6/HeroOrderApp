import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { ValidationService } from 'App/Services/ValidationService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import { VisitorTypes } from 'App/Stores/Visitor/Actions';
import { call, put, select, take } from 'redux-saga/effects';
import { CommonService } from 'App/Services/Api/CommonService';
import CommonActions from 'App/Stores/Common/Actions';
import VisitorActions from 'App/Stores/Visitor/Actions';
import DealersActions from 'App/Stores/Dealers/Actions';
import { offlineApiCall } from './OfflineSaga';
import {Alert} from 'react-native'
import _ from 'lodash';


export function* fetchLeadSources({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(CommonActions.doNothing());
		return;
	}

	try {
		yield put(CommonActions.fetchLeadSourcesLoading());
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		
		let successData = yield call(CommonService.fetchLeadSources, payload);
		if (successData) {
			yield put(CommonActions.fetchLeadSourcesSuccess(HelperService.convertArrayToSearchableListFormat(successData)));
		} else {
			yield put(CommonActions.fetchLeadSourcesFailure());
		}
	} catch (error) {
		yield put(CommonActions.fetchLeadSourcesFailure());
	}
}


export function* fetchLeadLostReasons({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(CommonActions.doNothing());
		return;
	}

	try {
		yield put(CommonActions.fetchLeadLostReasonsLoading());
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		let successData = yield call(CommonService.fetchLeadLostReasons, payload);
		if (successData) {
			yield put(CommonActions.fetchLeadLostReasonsSuccess(HelperService.convertArrayToSearchableListFormat(successData)));
		} else {
			yield put(CommonActions.fetchLeadLostReasonsFailure());
		}
	} catch (error) {
		yield put(CommonActions.fetchLeadLostReasonsFailure());
	}
}




export function* getAllStates({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(CommonActions.doNothing());
		return;
	}

	try {
		yield put(CommonActions.getAllStatesLoading());
		let {token} = yield select(state => state.user)
		payload.token = token
		
		let successData = yield call(CommonService.getAllStates, payload);
		if (successData) {
			yield put(CommonActions.makeStatesSearchableList(HelperService.convertToSearchableListFormat({
				list: successData,
				id_key: 'sfid',
				label_key: 'name'
			})));
		} else {
			yield put(CommonActions.getAllStatesFailure());
		}
	} catch (error) {
		yield put(CommonActions.getAllStatesFailure());
	}
}

export function* getAllCities({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(CommonActions.doNothing());
		return;
	}

	try {
		yield put(CommonActions.getAllCitiesLoading());
		let {token} = yield select(state => state.user)
		payload.token = token
		
		let successData = yield call(CommonService.getAllCities, payload);
		if (successData) {
			yield put(CommonActions.makeCitiesSearchableList(HelperService.convertToSearchableListFormat({
				list: successData,
				id_key: 'sfid',
				label_key: 'name'
			})));
		} else {
			yield put(CommonActions.getAllCitiesFailure());
		}
	} catch (error) {
		yield put(CommonActions.getAllCitiesFailure());
	}
}

export function* getCallOptions({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(CommonActions.doNothing());
		return;
	}

	try {
		yield put(CommonActions.getCallOptionsLoading());
		let {token} = yield select(state => state.user)
		payload.token = token
		
		let successData = yield call(CommonService.getCallOptions, payload);
		if (successData) {
			yield put(CommonActions.makePurposeOfCallSearchableList(HelperService.convertArrayToSearchableListFormat(successData.purpose_of_call)));
			yield put(CommonActions.makeOutPurposeOfCallSearchableList(HelperService.convertArrayToSearchableListFormat(successData.outcome_purpose_of_call)));
			yield put(CommonActions.makeReasonNotConnectSearchableList(HelperService.convertArrayToSearchableListFormat(successData.reasons_for_not_Connected)));
		} else {
			yield put(CommonActions.getCallOptionsFailure());
		}
	} catch (error) {
		yield put(CommonActions.getCallOptionsFailure());
	}
}

export function* getBookingPicklist({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(CommonActions.doNothing());
		return;
	}

	try {
		yield put(CommonActions.getBookingPicklistLoading());
		let {token} = yield select(state => state.user)
		payload.token = token
		
		let successData = yield call(CommonService.getBookingPicklist, payload);
		if (successData) {
			yield put(CommonActions.makeFinancierNameSearchableList(HelperService.convertArrayToSearchableListFormat(successData.financier_name)));
			yield put(CommonActions.makeModelColorSearchableList(HelperService.convertArrayToSearchableListFormat(successData.model_color)));
			yield put(CommonActions.makePaymentModeSearchableList(HelperService.convertArrayToSearchableListFormat(successData.payment_mode)));
		} else {
			yield put(CommonActions.getBookingPicklistFailure());
		}
	} catch (error) {
		yield put(CommonActions.getBookingPicklistFailure());
	}
}


export function* uploadImage({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(CommonActions.doNothing());
		return;
	}

	try {
		yield put(CommonActions.setUploadImageField(payload.params.edited_field));
		yield put(CommonActions.uploadImageLoading());
		let {token} = yield select(state => state.user)
		payload.token = token
		let url = yield call(CommonService.uploadImage, payload);
		let new_value = '';
		if (url) {
			yield put(CommonActions.uploadImageSuccess(url));
			new_value = url;
		} else {
			new_value = '';
			yield put(CommonActions.uploadImageFailure());
			HelperService.showToast({ message: 'Upload Failed! Please Upload again.', duration: 2000, buttonText: 'Okay' });
		}
		
		if (payload.multiple) {
			payload.previous_value = payload.previous_value || [];
			payload.previous_value.push(new_value);
			new_value = payload.previous_value;
		}


		if(payload.edit){
			yield put(DealersActions.changeDealerClaimForm({...payload.params, edited_value: new_value}));
		}else{
			yield put(VisitorActions.changeUpdateBookingForm({...payload.params, edited_value: new_value}));
		}

	} catch (error) {
		console.log('error', error)
		yield put(CommonActions.uploadImageFailure());
		HelperService.showToast({ message: 'Upload Failed! Please Upload again.', duration: 2000, buttonText: 'Okay' });
	}
}




