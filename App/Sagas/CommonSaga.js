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
		payload.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDE5RDAwMDAwOXlYRUdRQTIiLCJpYXQiOjE1OTM0OTgxMjN9.2LA4v7rrhNWbUT18ZKk-h2OYlZ9eFqlH2IojHgO0MdI';
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
		payload.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDE5RDAwMDAwOXlYRUdRQTIiLCJpYXQiOjE1OTM0OTgxMjN9.2LA4v7rrhNWbUT18ZKk-h2OYlZ9eFqlH2IojHgO0MdI';
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





