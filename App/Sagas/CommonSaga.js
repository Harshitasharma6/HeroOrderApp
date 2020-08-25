import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { ValidationService } from 'App/Services/ValidationService';
import { getConnectionStatus } from 'App/Stores/Common/Selectors';
import { VisitorTypes } from 'App/Stores/Visitor/Actions';
import { call, put, select, take } from 'redux-saga/effects';
import { CommonService } from 'App/Services/Api/CommonService';
import CommonActions from 'App/Stores/Common/Actions';
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





