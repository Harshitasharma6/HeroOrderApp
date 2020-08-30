import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { ValidationService } from 'App/Services/ValidationService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import { LeadAlertTypes } from 'App/Stores/LeadAlerts/Actions';
import { call, put, select, take } from 'redux-saga/effects';
import { LeadAlertService } from 'App/Services/Api/LeadAlertService';
import LeadAlertActions from 'App/Stores/LeadAlerts/Actions';
import { offlineApiCall } from './OfflineSaga';
import {Alert} from 'react-native'
import _ from 'lodash';

export function* fetchHotLeads({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(LeadAlertActions.doNothing());
		return;
	}

	try {
		yield put(LeadAlertActions.fetchHotLeadsLoading());
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		let successData = yield call(LeadAlertService.fetchHotLeads, payload);
		if (successData) {
			yield put(LeadAlertActions.fetchHotLeadsSuccess(successData));
		} else {
			yield put(LeadAlertActions.fetchHotLeadsFailure());
		}
	} catch (error) {
		yield put(LeadAlertActions.fetchHotLeadsFailure());
	}
}


export function* fetchBookingConfirmFinanceLeads({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(LeadAlertActions.doNothing());
		return;
	}

	try {
		yield put(LeadAlertActions.fetchBookingConfirmFinanceLeadsLoading());
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		let successData = yield call(LeadAlertService.fetchBookingConfirmFinanceLeads, payload);
		if (successData) {
			yield put(LeadAlertActions.fetchBookingConfirmFinanceLeadsSuccess(successData));
		} else {
			yield put(LeadAlertActions.fetchBookingConfirmFinanceLeadsFailure());
		}
	} catch (error) {
		yield put(LeadAlertActions.fetchBookingConfirmFinanceLeadsFailure());
	}
}


export function* fetchPurchaseOverdue({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(LeadAlertActions.doNothing());
		return;
	}

	try {
		yield put(LeadAlertActions.fetchPurchaseOverdueLoading());
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		let successData = yield call(LeadAlertService.fetchPurchaseOverdue, payload);
		if (successData) {
			yield put(LeadAlertActions.fetchPurchaseOverdueSuccess(successData));
		} else {
			yield put(LeadAlertActions.fetchPurchaseOverdueFailure());
		}
	} catch (error) {
		yield put(LeadAlertActions.fetchPurchaseOverdueFailure());
	}
}


export function* fetchOpenLeads({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(LeadAlertActions.doNothing());
		return;
	}

	try {
		yield put(LeadAlertActions.fetchOpenLeadsLoading());
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		let successData = yield call(LeadAlertService.fetchOpenLeads, payload);
		if (successData) {
			yield put(LeadAlertActions.fetchOpenLeadsSuccess(successData));
		} else {
			yield put(LeadAlertActions.fetchOpenLeadsFailure());
		}
	} catch (error) {
		yield put(LeadAlertActions.fetchOpenLeadsFailure());
	}
}




export function* fetchNoAction({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(LeadAlertActions.doNothing());
		return;
	}

	try {
		yield put(LeadAlertActions.fetchNoActionLoading());
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		let successData = yield call(LeadAlertService.fetchNoAction, payload);
		if (successData) {
			successData  = _.uniqBy(successData, 'id');
			yield put(LeadAlertActions.fetchNoActionSuccess(successData));
		} else {
			yield put(LeadAlertActions.fetchNoActionFailure());
		}
	} catch (error) {
		yield put(LeadAlertActions.fetchNoActionFailure());
	}
}


export function* fetchCallLeads({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(LeadAlertActions.doNothing());
		return;
	}

	try {
		yield put(LeadAlertActions.fetchCallLeadsLoading());
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		let successData = yield call(LeadAlertService.fetchCallLeads, payload);
		if (successData) {
			yield put(LeadAlertActions.fetchCallLeadsSuccess(successData));
		} else {
			yield put(LeadAlertActions.fetchCallLeadsFailure());
		}
	} catch (error) {
		yield put(LeadAlertActions.fetchCallLeadsFailure());
	}
}

export function* fetchAllOpenLeads({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(LeadAlertActions.doNothing());
		return;
	}

	try {
		yield put(LeadAlertActions.fetchAllOpenLeadsLoading());
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		let successData = yield call(LeadAlertService.fetchAllOpenLeads, payload);
		if (successData) {
			yield put(LeadAlertActions.fetchAllOpenLeadsSuccess(successData));
		} else {
			yield put(LeadAlertActions.fetchAllOpenLeadsFailure());
		}
	} catch (error) {
		yield put(LeadAlertActions.fetchAllOpenLeadsFailure());
	}
}


function* markLeadLost(payload) {
	yield put(LeadAlertActions.markLeadLostLoading());
	try {
		const isOnline = yield select(getConnectionStatus);
		if (!isOnline) {
			yield put(LeadAlertActions.markLeadLostFailure());
			
			return;
		}
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		const successData = yield call(LeadAlertService.markLeadLost, payload);

		if (successData) { 
			yield put(LeadAlertActions.markLeadLostSuccess(payload));
			HelperService.showToast({ 
				message: 'Lead Status Updated successfully!!', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		} else {
			yield put(LeadAlertActions.markLeadLostFailure())
			HelperService.showToast({ 
				message: 'Lead Status Updation failed!!', 
				duration: 2000, 
				buttonText: 'Okay' 
			});
		}
	} catch (error) {
		yield put(LeadAlertActions.markLeadLostFailure());
		HelperService.showToast({ 
			message: 'Lead Status Updation failed!!', 
			duration: 2000, 
			buttonText: 'Okay' 
		});
	}
}


export function* watchMarkLeadLost() {
	while (true) {
		const { payload } = yield take(LeadAlertTypes.MARK_LEAD_LOST)
		try {
			const validationFailed = false;
			if (validationFailed) {
				HelperService.showToast({ 
					message: validationFailed.error_message, 
					duration: 2000, 
					buttonText: 'Okay' 
				});

				//yield put(LeadAlertActions.searchCustomerValidationFailed(validationFailed));
				continue;
			}
		} catch (err) {
			console.log(err)
		}

		yield call(markLeadLost, payload)
	}
}


export function* fetchTodayFollowUp({ payload }) {
	const isOnline = yield select(getConnectionStatus);
	if (!isOnline) {
		yield put(LeadAlertActions.doNothing());
		return;
	}
	try {
		yield put(LeadAlertActions.fetchTodayFollowUpLoading());
		let {token, dealer__c} = yield select(state => state.user)
		payload.token = token
		payload.dealer_id = dealer__c
		let successData = yield call(LeadAlertService.fetchTodayFollowUp, payload);
		if (successData) {
			yield put(LeadAlertActions.fetchTodayFollowUpSuccess(successData));
		} else {
			yield put(LeadAlertActions.fetchTodayFollowUpFailure());
		}
	} catch (error) {
		console.log('error', error)
		yield put(LeadAlertActions.fetchTodayFollowUpFailure());
	}
}

